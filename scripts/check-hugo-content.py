"""Comprueba que el HTML de las notas no conserve shortcodes sin resolver.

Uso: python scripts/check-hugo-content.py RUTA_DEL_BUILD_HUGO
No reemplaza la inspección visual ni la ejecución de KaTeX en navegador.
"""
import argparse
from html.parser import HTMLParser
from pathlib import Path
import re


class NoteInspector(HTMLParser):
    def __init__(self):
        super().__init__()
        self.heading = False
        self.summary = None
        self.errors = []
        self.images = 0
        self.cell = None

    def handle_starttag(self, tag, attrs):
        if tag in ('td', 'th'):
            self.cell = ''
        if re.fullmatch(r'h[1-6]', tag):
            self.heading = True
        if tag == 'figure' and self.heading:
            self.errors.append('Figura incrustada dentro de un título.')
        if tag == 'summary':
            self.summary = ''
        if tag == 'img':
            self.images += 1

    def handle_data(self, data):
        if self.cell is not None:
            self.cell += data
        if self.summary is not None:
            self.summary += data

    def handle_endtag(self, tag):
        if tag in ('td', 'th') and self.cell is not None:
            if len(re.findall(r'(?<!\\)\$', self.cell)) % 2:
                self.errors.append('Delimitador matemático sin pareja en una celda; revisar barras verticales de LaTeX.')
            self.cell = None
        if re.fullmatch(r'h[1-6]', tag):
            self.heading = False
        if tag == 'summary':
            if self.summary is None or not self.summary.strip():
                self.errors.append('Solución desplegable sin título.')
            self.summary = None


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('build', type=Path)
    args = parser.parse_args()
    notes = args.build / 'notes/notas-fisica'
    pages = sorted(notes.rglob('index.html'))
    if not pages:
        parser.error('No hay páginas de notas en el directorio indicado.')
    failures = []
    images = 0
    for page in pages:
        html = page.read_text(encoding='utf-8')
        inspector = NoteInspector()
        inspector.feed(html)
        text = re.sub(r'<[^>]*>', '', html)
        if re.search(r'(?i)hahahugoshortcode|\{\{(?:<|%|&lt;)|(?:>|&gt;|%)\}\}', text):
            inspector.errors.append('Fragmento de shortcode o marcador interno en el HTML.')
        if inspector.errors:
            failures.append((page.relative_to(args.build), inspector.errors))
        images += inspector.images
    for page, errors in failures:
        print(f'{page}: {"; ".join(errors)}')
    print(f'{len(pages)} páginas; {images} imágenes; {len(failures)} páginas con errores estructurales.')
    raise SystemExit(1 if failures else 0)


if __name__ == '__main__':
    main()
