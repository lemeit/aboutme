"""Genera seguimiento interno en docs/, sin incluirlo en el contenido Hugo."""
from pathlib import Path
import tomllib

ROOT = Path(__file__).resolve().parents[1]
CONTENT = ROOT / "content/notes/notas-fisica"


def metadata(path):
    return tomllib.loads(path.read_text(encoding="utf-8").split("+++", 2)[1])


def cell(value):
    return str(value).replace("|", "\\|").replace("\n", " ")


def main():
    lines = ["# Seguimiento interno de Bigler", "",
             "Este archivo está fuera de content/ y no forma parte del sitio Hugo.", "",
             "Regenerar con `python scripts/bigler-progress.py` después de actualizar los estados de una nota.", "",
             "Los porcentajes del capítulo completo requieren inventariar todas las secciones del original. El sitio muestra un estado sencillo, sin equiparar notas existentes con cobertura del libro.", ""]
    chapters = sorted(CONTENT.glob("cap*"), key=lambda p: metadata(p / "_index.md")["weight"])
    for chapter in chapters:
        lines.extend(["## " + metadata(chapter / "_index.md")["title"], ""])
        notes = sorted((p for p in chapter.glob("*.md") if p.name != "_index.md"),
                       key=lambda p: metadata(p).get("weight", 0))
        if not notes:
            lines.extend(["Sin notas desarrolladas.", ""])
            continue
        lines.extend(["| Nota | Texto | Cotejo | Figuras | Visual Hugo |",
                      "|---|---|---|---|---|"])
        for note in notes:
            params = metadata(note)
            title = f'[{cell(params["title"])}](../{note.relative_to(ROOT).as_posix()})'
            values = [title, cell(params.get("traduccion_estado", "Por revisar")),
                      cell(params.get("cotejo_estado", "Pendiente")),
                      cell(params.get("figuras_estado", "Por revisar")),
                      cell(params.get("visual_estado", "Pendiente"))]
            lines.append("| " + " | ".join(values) + " |")
        lines.append("")
    destination = ROOT / "docs/bigler-avance.md"
    destination.write_text("\n".join(lines), encoding="utf-8", newline="\n")
    print(destination)


if __name__ == "__main__":
    main()
