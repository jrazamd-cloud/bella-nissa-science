from pathlib import Path
from PIL import Image

source = Path('/home/ubuntu/webdev-static-assets/bns-cycle7-share-final.jpg')
destination = Path('/home/ubuntu/webdev-static-assets/bns-cycle7-share-1200x630.jpg')

with Image.open(source) as image:
    rgb = image.convert('RGB')
    target_ratio = 1200 / 630
    target_height = round(rgb.width / target_ratio)
    top = (rgb.height - target_height) // 2
    cropped = rgb.crop((0, top, rgb.width, top + target_height))
    exported = cropped.resize((1200, 630), Image.Resampling.LANCZOS)
    exported.save(destination, format='JPEG', quality=66, optimize=True, progressive=True)

print(destination)
