"""Reject incomplete Hugo-only uploads before publishing the combined portal."""
import argparse
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit


class Assets(HTMLParser):
    def __init__(self):
        super().__init__()
        self.urls = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'script' and attrs.get('src'):
            self.urls.append(attrs['src'])
        if tag == 'link' and attrs.get('rel') == 'stylesheet' and attrs.get('href'):
            self.urls.append(attrs['href'])


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('directory', type=Path, help='Combined Hugo and Quartz output')
    root = parser.parse_args().directory.resolve()
    errors = []
    for relative in ['index.html', 'about/index.html', 'en/about/index.html',
                     'notes/index.html', 'conceptos/index.html',
                     'cv/luciano-lamaita-resumen-es.pdf', 'cv/luciano-lamaita-resumen-en.pdf']:
        path = root / relative
        if not path.is_file():
            errors.append(f'Missing {relative}')
            continue
        if path.suffix == '.pdf':
            if not path.read_bytes().startswith(b'%PDF-'):
                errors.append(f'Invalid PDF: {relative}')
            continue
        assets = Assets()
        assets.feed(path.read_text(encoding='utf-8'))
        for url in assets.urls:
            parts = urlsplit(url)
            if parts.netloc and parts.netloc != 'profe.lemeit.ar':
                continue
            if parts.scheme and parts.scheme not in ('http', 'https'):
                continue
            target = root / unquote(parts.path.lstrip('/')) if parts.path.startswith('/') else path.parent / unquote(parts.path)
            if not target.is_file():
                errors.append(f'Missing asset in {relative}: {url}')
    if errors:
        raise SystemExit('\n'.join(errors))
    print('Combined portal verified: Hugo ES/EN, notes, Quartz, page assets and both CV PDFs.')


if __name__ == '__main__':
    main()
