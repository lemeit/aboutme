# Guardá esto como upscale.py en C:\GitHub\aboutme y ejecutalo con: python upscale.py
from PIL import Image

img = Image.open("static/images/logos/inj.png")
# Upscale a 512x512 con LANCZOS (mejor calidad para logos)
img_big = img.resize((512, 512), Image.LANCZOS)
img_big.save("static/images/logos/inj.png")
print(f"Listo: {img_big.size}")