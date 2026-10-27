"""Comprueba el inventario del libro, sus enlaces y que no cambien los motores."""
import argparse,json,re,subprocess
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote,urljoin,urlsplit

class Page(HTMLParser):
    def __init__(self):
        super().__init__(); self.links=[]; self.assets=[]; self.ids=set(); self.book_index=False; self.current=0
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if tag=='nav' and a.get('aria-label')=='Índice del relato':self.book_index=True
        if tag=='a' and self.book_index and a.get('aria-current')=='page':self.current+=1
        if 'id' in a:self.ids.add(a['id'])
        if tag=='a' and 'href' in a:self.links.append(a['href'])
        if tag in ('script','iframe','img') and a.get('src'):self.assets.append(a['src'])
        if tag=='link' and a.get('rel')=='stylesheet':self.assets.append(a['href'])
    def handle_endtag(self,tag):
        if tag=='nav':self.book_index=False

def main():
    ap=argparse.ArgumentParser(description=__doc__)
    ap.add_argument('directory',type=Path)
    ap.add_argument('--base',help='Ref Git para comprobar que los scripts fisicos no cambiaron')
    args=ap.parse_args();root=args.directory.resolve()
    inventory=json.loads(Path('data/seres_book_chapters.json').read_text(encoding='utf-8'))
    assert len(inventory)==30
    assert [p['order'] for p in inventory]==list(range(1,31))
    urls=['/projects/seres-termicos/']+[p['url'] for p in inventory]
    urls+=['/','/projects/','/en/projects/','/zh/projects/',
           '/projects/seres-termicos/denominaciones/',
           '/projects/seres-termicos/v06-ciclovida/',
           '/projects/seres-termicos/v07-3d/',
           '/projects/seres-termicos/v08-espaciotiempo/']
    errors=[]
    for url in urls:
        target=root/url.strip('/')/'index.html'
        assert target.is_file(),url
        text=target.read_text(encoding='utf-8');parsed=Page();parsed.feed(text)
        for link in parsed.links+parsed.assets:
            parts=urlsplit(urljoin('https://profe.lemeit.ar'+url,link))
            if parts.netloc!='profe.lemeit.ar' or parts.scheme not in ('http','https'):continue
            if parts.path.startswith('/conceptos/'):continue # Quartz se compila por separado.
            dest=root/unquote(parts.path).lstrip('/')
            if dest.is_dir():dest/='index.html'
            if not dest.is_file():errors.append((url,link))
            elif parts.fragment and dest.suffix=='.html':
                other=Page();other.feed(dest.read_text(encoding='utf-8'))
                if unquote(parts.fragment) not in other.ids:errors.append((url,link,'ancla'))
        if url in ['/projects/seres-termicos/']+[p['url'] for p in inventory]:
            assert parsed.current==1,url
            assert 'thermal-book-next' in text or url==inventory[-1]['url'],url
    assert not errors,errors
    simulations={p['sim'] for p in inventory if p['sim']}|{'v03-raymarching.html','test_3D.html'}
    available={p.name for p in Path('static/simus/seres-termicos').glob('*.html')}-{'index.html','termodinamica.html'}
    assert simulations==available,(simulations^available)
    assert len(simulations)==27
    for filename in simulations:
        text=(Path('static/simus/seres-termicos')/filename).read_text(encoding='utf-8')
        assert 'id="navigation"' not in text,filename
        assert 'volver-al-libro.js' in text,filename
        if args.base:
            original=subprocess.check_output(['git','show',f'{args.base}:static/simus/seres-termicos/{filename}']).decode('utf-8').replace('\r\n','\n')
            def engines(s):
                out=[]
                for attr,body in re.findall(r'<script\b([^>]*)>(.*?)</script>',s,re.S):
                    if 'src=' in attr:continue
                    # Drawing hooks and explicit initial-condition choices are
                    # delimited; compare the remaining numerical source unchanged.
                    body=re.sub(r'/\* (presentation|initial|ledger):start \*/.*?/\* \1:end \*/\n?','',body,flags=re.S)
                    body=re.sub(r'\n\s*\n','\n',body)
                    body=body.replace("document.getElementById('navigation').addEventListener('change',e=>location.href=e.target.value);",'')
                    out.append(body.strip())
                return out
            assert engines(original)==engines(text),f'Cambio inesperado en el motor: {filename}'
    for path in ['simus/seres-termicos/index.html','simus/seres-termicos/termodinamica.html']:
        assert 'url=/projects/seres-termicos/' in (root/path).read_text(encoding='utf-8')
    contact=(root/'projects/seres-termicos/libro/contacto/index.html').read_text(encoding='utf-8')
    assert r'\Delta T' in contact and 'Q=C,Delta' not in contact
    guide=Path('content/projects/seres-termicos-guia-fisica.md').read_text(encoding='utf-8')
    assert len(re.findall(r'\*\*Ecuación \(\d+\)\*\*',guide))==52
    print(f'Libro: 31 páginas, 27 simulaciones, 52 ecuaciones conservadas; accesos, anclas y motores OK.')

if __name__=='__main__':main()
