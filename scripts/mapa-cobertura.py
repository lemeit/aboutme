#!/usr/bin/env python3
"""Genera el mapa de cobertura del vault de /conceptos contra Serway & Vuille (9.ª ed.).

Consume el informe JSON de check-vault-conceptos.py y escribe un documento con:
  - qué unidades declara cada índice,
  - cuántos conceptos declara cada unidad,
  - cuáles existen y cuáles faltan.

Uso:
    python scripts/check-vault-conceptos.py --json informe.json
    python scripts/mapa-cobertura.py informe.json docs/mapa-cobertura-conceptos.md

No inventa contenido: solo ordena lo que el vault ya declara.
"""

from __future__ import annotations

import json
import re
import sys
from collections import defaultdict
from pathlib import Path

VAULT = Path(__file__).resolve().parent.parent / "quartz" / "content"

# Orden de lectura del sitio (igual que quartz.ts / Explorer)
ORDEN = [
    "mecanica/fundamentos",
    "mecanica/cinematica",
    "mecanica/dinamica",
    "mecanica/estatica",
    "mecanica/energia",
    "gravitacion",
    "materia",
    "termodinamica",
    "termodinamica/gases",
    "ondas",
    "ondas/ondas-electromagneticas-y-luz",
    "electricidad-y-magnetismo",
    "fisica-moderna",
]

ETIQUETA = {
    "mecanica/fundamentos": "Mecánica › Fundamentos",
    "mecanica/cinematica": "Mecánica › Cinemática",
    "mecanica/dinamica": "Mecánica › Dinámica",
    "mecanica/estatica": "Mecánica › Estática",
    "mecanica/energia": "Mecánica › Energía",
    "gravitacion": "Gravitación",
    "materia": "Materia",
    "termodinamica": "Termodinámica",
    "termodinamica/gases": "Termodinámica › Gases",
    "ondas": "Ondas",
    "ondas/ondas-electromagneticas-y-luz": "Ondas › EM y luz · Óptica",
    "electricidad-y-magnetismo": "Electricidad y magnetismo",
    "fisica-moderna": "Física moderna",
}

CAPS = re.compile(r"cap\..*$", re.IGNORECASE)
TOKEN = re.compile(r"(\d+)\s*(?:[–\-]\s*(\d+))?")


def capitulos(index_md: Path) -> str:
    """Extrae los capítulos de la línea 'Basado en Serway & Vuille, cap. …'.

    Respeta rangos escritos con guion («15–20») y listas («10, 11 y 12»).
    """
    for linea in index_md.read_text(encoding="utf-8", errors="replace").splitlines():
        if "Basado en Serway" not in linea:
            continue
        m = CAPS.search(linea)
        if not m:
            continue
        segmento = m.group(0)
        corte = segmento.lower().index("cap.") + 4
        segmento = segmento[corte:]
        tokens = []
        for trozo in TOKEN.finditer(segmento):
            ini = int(trozo.group(1))
            fin = int(trozo.group(2)) if trozo.group(2) else None
            if fin and 1 <= ini <= 30 and 1 <= fin <= 30 and fin > ini:
                tokens.append(f"{ini}–{fin}")
            elif 1 <= ini <= 30:
                tokens.append(str(ini))
        if tokens:
            return "cap. " + ", ".join(tokens)
    return "—"


def main() -> int:
    if len(sys.argv) < 2:
        print(__doc__)
        return 2
    informe = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
    salida = Path(sys.argv[2]) if len(sys.argv) > 2 else Path("mapa-cobertura-conceptos.md")

    # Enlaces agrupados por nota de origen
    por_origen: dict[str, list[dict]] = defaultdict(list)
    for e in informe["enlaces"]:
        por_origen[e["origen"]].append(e)

    filas = []
    for unidad in ORDEN:
        index_rel = f"{unidad}/index.md"
        index_md = VAULT / index_rel
        if not index_md.exists():
            continue
        enlaces = por_origen.get(index_rel, [])
        declarados = {}
        for e in enlaces:
            declarados.setdefault(e["destino"], e["existe"])
        existentes = len([e for e in enlaces if e["existe"]])
        faltantes = sorted(d for d, ok in declarados.items() if not ok)
        filas.append(
            {
                "unidad": unidad,
                "etiqueta": ETIQUETA.get(unidad, unidad),
                "caps": capitulos(index_md),
                "declarados": len(declarados),
                "existentes": existentes,
                "faltantes": faltantes,
            }
        )

    total_decl = sum(f["declarados"] for f in filas)
    total_exist = sum(f["existentes"] for f in filas)
    total_falt = sum(len(f["faltantes"]) for f in filas)

    # Localía: notas que la unidad ya tiene en disco (no solo las enlazadas)
    def notas_en_disco(unidad: str) -> int:
        d = VAULT / unidad
        if not d.is_dir():
            return 0
        return len([p for p in d.glob("*.md") if p.name != "index.md"])

    lineas = []
    lineas.append("# Mapa de cobertura — Serway & Vuille (9.ª ed.)\n")
    lineas.append(
        "Generado automáticamente por `scripts/mapa-cobertura.py` a partir del estado real del vault "
        "(`quartz/content/`). No es contenido nuevo: es el inventario de lo que cada índice declara "
        "y de lo que efectivamente existe.\n"
    )
    lineas.append("## Resumen\n")
    lineas.append("| Unidad | Capítulos | Notas en disco | Declarados | Existen | Faltan |")
    lineas.append("|---|---|---:|---:|---:|---:|")
    for f in filas:
        lineas.append(
            f"| {f['etiqueta']} | {f['caps']} | {notas_en_disco(f['unidad'])} | "
            f"{f['declarados']} | {f['existentes']} | {len(f['faltantes'])} |"
        )
    lineas.append(
        f"| **Total** |  | | **{total_decl}** | **{total_exist}** | **{total_falt}** |"
    )
    lineas.append("")
    cobertura = (total_exist / total_decl * 100) if total_decl else 0
    lineas.append(
        f"Cobertura de lo declarado: **{cobertura:.0f}%**. "
        f"Los {total_falt} conceptos sin nota son los que hoy producen los enlaces roto del grafo.\n"
    )

    lineas.append("## Conceptos que faltan, unidad por unidad\n")
    for f in filas:
        if not f["faltantes"]:
            continue
        lineas.append(f"### {f['etiqueta']} — {f['caps']} ({len(f['faltantes'])})\n")
        for d in f["faltantes"]:
            lineas.append(f"- `{d}`")
        lineas.append("")

    lineas.append("## Cómo leer esto\n")
    lineas.append(
        "Cada línea de arriba es un concepto que un índice promete y que todavía no tiene nota. "
        "Mientras no exista, el enlace desde el índice devuelve 404 y el nodo no aparece en el grafo. "
        "El orden de las unidades es el orden de lectura del sitio, no el del libro: sirve para decidir "
        "por dónde empezar a escribir.\n"
    )

    salida.write_text("\n".join(lineas), encoding="utf-8", newline="\n")
    print(f"Mapa escrito en {salida}")
    print(f"{total_decl} declarados · {total_exist} existen · {total_falt} faltan ({cobertura:.0f}% cobertura)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
