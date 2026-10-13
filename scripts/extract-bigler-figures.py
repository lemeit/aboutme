"""Recorta figuras completas de páginas PDF, incluidas sus etiquetas vectoriales.

Uso: python scripts/extract-bigler-figures.py RUTA_PDF
Requiere pdftoppm (Poppler) en PATH. Las coordenadas se registran en puntos PDF,
medidos desde la esquina superior izquierda, para la edición octubre 2025.
"""

import argparse
import hashlib
import json
from pathlib import Path
import shutil
import subprocess

ROOT = Path(__file__).resolve().parents[1]
FIGURES = [{
    "name": "cap03_velocidad_distancia-desplazamiento_pp184",
    "pdf_page": 184,
    "printed_page": 184,
    "box_pt": [428, 73, 526, 173],
    "caption": "Distancia recorrida y desplazamiento: ejemplo 12, 5 y 13.",
}, {
    "name": "cap03_velocidad_signos-y-regreso_pp185",
    "pdf_page": 185,
    "printed_page": 185,
    "box_pt": [227, 184, 459, 345],
    "caption": "Sentido positivo, movimiento en ambos sentidos y regreso al punto inicial.",
}]

# Regiones adicionales, documentadas y revisadas por capítulo.
EXTRA_REGIONS = ROOT / "scripts/bigler-figure-regions.json"
if EXTRA_REGIONS.exists():
    FIGURES.extend(json.loads(EXTRA_REGIONS.read_text(encoding="utf-8")))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("pdf", type=Path)
    parser.add_argument("--dpi", type=int, default=300)
    args = parser.parse_args()
    if not args.pdf.is_file():
        parser.error("No se encuentra el PDF de origen.")
    if not 72 <= args.dpi <= 600:
        parser.error("La resolución debe estar entre 72 y 600 dpi.")
    renderer = shutil.which("pdftoppm")
    if not renderer:
        parser.error("Instalar Poppler o agregar pdftoppm a PATH.")
    destination = ROOT / "static/images/diagramas"
    destination.mkdir(parents=True, exist_ok=True)
    manifest = {
        "source_url": "https://www.mrbigler.com/Physics-1/Notes-Physics-1.pdf",
        "edition": "October 2025",
        "source_sha256": hashlib.sha256(args.pdf.read_bytes()).hexdigest(),
        "license": "CC BY-NC-SA 4.0",
        "dpi": args.dpi,
        "figures": [],
    }
    reader = None
    for figure in FIGURES:
        x0, y0, x1, y1 = figure["box_pt"]
        scale = args.dpi / 72
        crop = [round(x0 * scale), round(y0 * scale),
                round((x1 - x0) * scale), round((y1 - y0) * scale)]
        prefix = destination / figure["name"]
        if figure.get("embedded_image"):
            # Una figura bitmap ya completa evita incluir texto que el PDF coloca
            # sobre el borde de su caja. Preservar su resolución original.
            from pypdf import PdfReader
            from PIL import Image
            if reader is None:
                reader = PdfReader(args.pdf)
            page_images = reader.pages[figure["pdf_page"] - 1].images
            image_key = figure["embedded_image"]
            matches = [key for key in page_images.keys()
                       if (key[-1] if isinstance(key, (list, tuple)) else key) == image_key]
            if len(matches) != 1:
                raise ValueError(f"Imagen no identificada de forma única: {figure['name']}")
            source_image = page_images[matches[0]].image
            source_image = source_image.convert("RGBA")
            canvas = Image.new("RGBA", source_image.size, "white")
            canvas.alpha_composite(source_image)
            canvas.convert("RGB").save(prefix.with_suffix(".png"))
        else:
            subprocess.run([
                renderer, "-f", str(figure["pdf_page"]), "-l", str(figure["pdf_page"]),
                "-r", str(args.dpi), "-x", str(crop[0]), "-y", str(crop[1]),
                "-W", str(crop[2]), "-H", str(crop[3]), "-singlefile", "-png",
                str(args.pdf.resolve()), str(prefix),
            ], check=True)
        manifest["figures"].append({**figure, "file": prefix.with_suffix(".png").relative_to(ROOT).as_posix()})
        print(prefix.with_suffix(".png").relative_to(ROOT))
    (destination / "bigler-figures.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
