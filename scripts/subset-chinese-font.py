"""Regenerate the existing 400/700 Chinese font subsets from the official TTF."""
from pathlib import Path
import argparse
import hashlib
import re
from fontTools.ttLib import TTFont
from fontTools import subset
from fontTools.varLib.instancer import instantiateVariableFont

parser=argparse.ArgumentParser(description=__doc__)
parser.add_argument('source',type=Path,help='Full Noto Sans SC variable TTF, kept outside the repository')
args=parser.parse_args()
root=Path(__file__).resolve().parents[1]
destination=root/'static/fonts/noto-sans-sc'
characters=set()
for path in (root/'content').rglob('*.zh.md'):
    characters.update(ord(c) for c in path.read_text(encoding='utf-8'))
for name in ['regular','bold']:
    characters.update(TTFont(destination/f'noto-sans-sc-{name}.woff2').getBestCmap())
source=TTFont(args.source)
available=set(source.getBestCmap())
required={c for c in characters if 0x3400<=c<=0x9fff}
assert required<=available,'Source font lacks required Chinese characters'
for weight,name in [(400,'regular'),(700,'bold')]:
    font=TTFont(args.source)
    options=subset.Options()
    subsetter=subset.Subsetter(options=options)
    subsetter.populate(unicodes=characters&available)
    subsetter.subset(font)
    instantiateVariableFont(font,{'wght':weight},inplace=True)
    font.flavor='woff2'
    output=destination/f'noto-sans-sc-{name}.woff2'
    font.save(output)
    assert required<=set(TTFont(output).getBestCmap()),name
css=root/'assets/css/extended/typography.css'
text=css.read_text(encoding='utf-8')
for name in ['regular','bold']:
    filename=f'noto-sans-sc-{name}.woff2'
    version=hashlib.sha256((destination/filename).read_bytes()).hexdigest()[:12]
    text=re.sub(re.escape(filename)+r'(?:\?v=[a-f0-9]+)?',filename+'?v='+version,text)
css.write_text(text,encoding='utf-8',newline='\n')
print(f'Chinese fonts regenerated: {len(required)} CJK characters covered at weights 400 and 700.')
