from pathlib import Path
from PIL import Image

OUTPUT = Path('/home/ubuntu/webdev-static-assets/cycle9-responsive')
OUTPUT.mkdir(parents=True, exist_ok=True)

SOURCES = {
    'hero': Path('/home/ubuntu/webdev-static-assets/bns-cycle7-master-product-system-final.jpg'),
    'serum': Path('/home/ubuntu/webdev-static-assets/bns-cycle7-serum-final.jpg'),
    'device': Path('/home/ubuntu/webdev-static-assets/bns-cycle7-device-final.jpg'),
    'ingredient-map': Path('/home/ubuntu/webdev-static-assets/bns-cycle7-ingredient-map-final.jpg'),
}
WIDTHS = (480, 768, 1024, 1440, 1920)

for name, source_path in SOURCES.items():
    with Image.open(source_path) as source:
        image = source.convert('RGB')
        for width in WIDTHS:
            height = round(image.height * width / image.width)
            resized = image.resize((width, height), Image.Resampling.LANCZOS)
            stem = OUTPUT / f'bns-cycle9-{name}-{width}'
            resized.save(f'{stem}.webp', format='WEBP', quality=80, method=6)
            resized.save(f'{stem}.jpg', format='JPEG', quality=82, optimize=True, progressive=True)
            print(f'{name} {width}w {width}x{height}')
