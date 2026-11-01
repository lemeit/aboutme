#!/usr/bin/env python3
"""Valida el vault de /conceptos: enlaces, frontmatter, higiene de archivos.

Uso:
    python scripts/check-vault-conceptos.py                 # resumen + detalle
    python scripts/check-vault-conceptos.py --csv nodos.csv

Código de salida: 0 si no hay enlaces rotos, 1 si hay.
"""

from __future__ import annotations

import argparse
import csv
import re
import sys
from collections import defaultdict, deque
from pathlib import Path

VAULT = Path(__file__).resolve().parent.parent / "quartz" / "content"
IGNORAR_DIRS = {"templates", "private", ".obsidian"}

# [[destino]], [[destino|alias]], [[destino#ancla]], ![[embebido]]
WIKILINK = re.compile(r"!?\[\[([^\]\|#]+)(?:#[^\]\|]*)?(?:\|[^\]]*)?\]\]")
CONTROL = re.compile(r"[\x00-\x08\x0b-\x1f\x7f]")


def notas(vault: Path) -> list[Path]:
    salida = []
    for p in sorted(vault.rglob("*.md")):
        if any(parte in IGNORAR_DIRS for parte in p.relative_to(vault).parts):
            continue
        salida.append(p)
    return salida


def frontmatter(texto: str) -> dict[str, str]:
    if not texto.startswith("---"):
        return {}
    fin = texto.find("\n---", 3)
    if fin == -1:
        return {}
    datos = {}
    for linea in texto[3:fin].splitlines():
        if ":" in linea and not linea.startswith((" ", "\t")):
            clave, _, valor = linea.partition(":")
            datos[clave.strip()] = valor.strip().strip("\"'")
    return datos


def sin_frontmatter(texto: str) -> str:
    if not texto.startswith("---"):
        return texto
    fin = texto.find("\n---", 3)
    return texto[fin + 4 :] if fin != -1 else texto


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--csv", type=Path, help="exportar inventario de nodos")
    ap.add_argument("--json", type=Path, help="exportar informe JSON para el mapa de cobertura")
    ap.add_argument("--vault", type=Path, default=VAULT)
    args = ap.parse_args()

    vault: Path = args.vault
    archivos = notas(vault)
    if not archivos:
        print(f"No se encontraron notas en {vault}", file=sys.stderr)
        return 2

    # Índice por nombre de archivo (resolución "shortest" de Quartz/Obsidian)
    por_stem: dict[str, list[str]] = defaultdict(list)
    rutas: dict[str, Path] = {}
    for p in archivos:
        rel = p.relative_to(vault).as_posix()
        stem = p.stem
        por_stem[stem].append(rel)
        rutas[rel] = p

    roto: list[tuple[str, int, str]] = []
    todos_enlaces: list[dict] = []
    ambiguo: list[tuple[str, str, list[str]]] = []
    entrantes: dict[str, int] = defaultdict(int)
    enlaces_validos = 0
    salientes: dict[str, list[str]] = defaultdict(list)

    for rel, p in rutas.items():
        texto = p.read_text(encoding="utf-8", errors="replace")
        for n, linea in enumerate(texto.splitlines(), 1):
            for m in WIKILINK.finditer(linea):
                destino = m.group(1).strip()
                objetivo = destino[:-3] if destino.endswith(".md") else destino
                if "/" in objetivo:
                    candidatos = [f"{objetivo}.md"] if f"{objetivo}.md" in rutas else []
                else:
                    candidatos = por_stem.get(objetivo, [])
                if not candidatos:
                    roto.append((rel, n, destino))
                    todos_enlaces.append({"origen": rel, "linea": n, "destino": destino,
                                          "existe": False, "resuelto": None})
                    continue
                if len(candidatos) > 1:
                    ambiguo.append((rel, destino, candidatos))
                resuelto = candidatos[0]
                entrantes[resuelto] += 1
                salientes[rel].append(resuelto)
                todos_enlaces.append({"origen": rel, "linea": n, "destino": destino,
                                      "existe": True, "resuelto": resuelto})
                enlaces_validos += 1

    huerfanos = [r for r in rutas if entrantes.get(r, 0) == 0]
    sin_titulo = [r for r, p in rutas.items() if not frontmatter(p.read_text(encoding="utf-8", errors="replace")).get("title")]
    con_control = []
    for rel, p in rutas.items():
        texto = p.read_text(encoding="utf-8", errors="replace")
        for n, linea in enumerate(texto.splitlines(), 1):
            if CONTROL.search(linea):
                con_control.append((rel, n))
                break

    # Alcanzables desde el índice raíz
    inicio = "index.md" if "index.md" in rutas else None
    alcanzables: set[str] = set()
    if inicio:
        cola = deque([inicio])
        visitados: set[str] = set()
        while cola:
            actual = cola.popleft()
            if actual in visitados:
                continue
            visitados.add(actual)
            alcanzables.add(actual)
            cola.extend(salientes.get(actual, []))
    inalcanzables = [r for r in rutas if inicio and r not in alcanzables and r != inicio]

    total_enlaces = enlaces_validos + len(roto)
    print("=" * 68)
    print(f"VAULT: {vault}")
    print("=" * 68)
    print(f"Notas ................ {len(rutas)}")
    print(f"Enlaces .............. {total_enlaces}")
    print(f"  válidos ............ {enlaces_validos}")
    print(f"  ROTOS .............. {len(roto)}"
          + (f"  ({len({d for _, _, d in roto})} destinos distintos)" if roto else ""))
    print(f"Enlaces ambiguos ..... {len(ambiguo)}")
    print(f"Huérfanas (0 entradas) {len(huerfanos)}")
    print(f"Sin 'title' .......... {len(sin_titulo)}")
    print(f"Caracteres control ... {len(con_control)}")
    print(f"Inalcanzables ........ {len(inalcanzables)}")
    print()

    if roto:
        print("-- ENLACES ROTOS " + "-" * 50)
        for rel, n, destino in roto:
            print(f"  {rel}:{n}  ->  [[{destino}]]")
        faltantes = sorted({d for _, _, d in roto})
        print(f"\n  Destinos faltantes ({len(faltantes)}):")
        for f in faltantes:
            print("   ", f)
        print()

    if ambiguo:
        print("-- ENLACES AMBIGUOS " + "-" * 47)
        for rel, destino, cands in ambiguo:
            print(f"  {rel}  ->  [[{destino}]]  {cands}")
        print()

    if huerfanos:
        print("-- HUÉRFANAS " + "-" * 55)
        for r in huerfanos:
            print("  ", r)
        print()

    if inalcanzables:
        print("-- INALCANZABLES DESDE index.md " + "-" * 36)
        for r in inalcanzables:
            print("  ", r)
        print()

    if args.csv:
        with args.csv.open("w", newline="", encoding="utf-8") as fh:
            w = csv.writer(fh)
            w.writerow(["nota", "entrantes", "salientes", "chars"])
            for rel, p in sorted(rutas.items()):
                cuerpo = sin_frontmatter(p.read_text(encoding="utf-8", errors="replace"))
                w.writerow([rel, entrantes.get(rel, 0), len(salientes.get(rel, [])), len(cuerpo.strip())])
        print(f"Inventario exportado a {args.csv}")

    if args.json:
        import json

        informe = {
            "resumen": {
                "notas": len(rutas),
                "enlaces": total_enlaces,
                "validos": enlaces_validos,
                "rotos": len(roto),
                "destinos_faltantes": len({d for _, _, d in roto}),
                "huerfanas": len(huerfanos),
            },
            "enlaces": todos_enlaces,
            "notas_detalle": [
                {
                    "nota": rel,
                    "entrantes": entrantes.get(rel, 0),
                    "salientes": len(salientes.get(rel, [])),
                    "chars": len(sin_frontmatter(p.read_text(encoding="utf-8", errors="replace")).strip()),
                }
                for rel, p in sorted(rutas.items())
            ],
        }
        args.json.write_text(json.dumps(informe, ensure_ascii=False, indent=2), encoding="utf-8")
        print(f"Informe JSON exportado a {args.json}")

    return 1 if roto else 0


if __name__ == "__main__":
    sys.exit(main())
