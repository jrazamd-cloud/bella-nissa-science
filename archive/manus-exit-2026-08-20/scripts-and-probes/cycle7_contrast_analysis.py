from collections import Counter
from pathlib import Path
from statistics import median
from PIL import Image


def luminance(rgb):
    def channel(value):
        value /= 255
        return value / 12.92 if value <= 0.04045 else ((value + 0.055) / 1.055) ** 2.4
    r, g, b = (channel(value) for value in rgb)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def contrast(foreground, background):
    left, right = sorted((luminance(foreground), luminance(background)), reverse=True)
    return (left + 0.05) / (right + 0.05)


def hex_color(rgb):
    return '#' + ''.join(f'{value:02X}' for value in rgb)


def median_color(pixels):
    return tuple(round(median([pixel[index] for pixel in pixels])) for index in range(3))


def crop_pixels(path, box):
    image = Image.open(path).convert('RGB')
    return list(image.crop(box).getdata())


def gold_candidates(path, box):
    pixels = crop_pixels(path, box)
    candidates = [
        pixel for pixel in pixels
        if 110 <= pixel[0] <= 235 and 75 <= pixel[1] <= 195 and 20 <= pixel[2] <= 135
        and pixel[0] > pixel[1] + 8 and pixel[1] > pixel[2] + 20
    ]
    counts = Counter(candidates)
    return counts.most_common(8)


def pick_darkest(pixels):
    return min(pixels, key=luminance)


render = Path('/home/ubuntu/cycle7-render-1440.png')
serum = Path('/home/ubuntu/webdev-static-assets/bns-cycle7-serum-final.jpg')
device = Path('/home/ubuntu/webdev-static-assets/bns-cycle7-device-final.jpg')

# Rendered local-backings: source values are solid except anti-aliased glyph edges.
overlays = {
    'hero badge on pale pink': ((73, 86, 83), (251, 239, 238)),
    'hero formula/method rail on translucent pale panel': ((56, 82, 71), (244, 248, 245)),
    'serum and device image indices on opaque local pale backing': ((23, 33, 31), (251, 251, 248)),
    'ingredient-map caption on opaque dark local backing': ((246, 247, 243), (5, 16, 12)),
    'ritual chip on opaque dark scrim': ((246, 247, 243), (5, 16, 12)),
}

print('RENDERED MONO OVERLAYS')
for name, (foreground, background) in overlays.items():
    print(f'{name}: fg={hex_color(foreground)} bg={hex_color(background)} ratio={contrast(foreground, background):.2f}:1')

print('\nGOLD LETTERING CANDIDATE PALETTES')
for name, path, box in [
    ('serum label', serum, (500, 700, 1120, 1600)),
    ('device wordmark/control', device, (450, 760, 1180, 1550)),
]:
    palette = gold_candidates(path, box)
    print(name)
    for sample, count in palette:
        print(f'  {hex_color(sample)} count={count}')

print('\nSELECTED GOLD CONTRAST SAMPLES')
serum_crop = crop_pixels(serum, (500, 900, 1120, 1600))
serum_gold_candidates = [
    pixel for pixel in serum_crop
    if 110 <= pixel[0] <= 245 and 75 <= pixel[1] <= 205 and 20 <= pixel[2] <= 145
    and pixel[0] > pixel[1] + 8 and pixel[1] > pixel[2] + 20
]
serum_gold = max(serum_gold_candidates, key=luminance)
serum_ruby_substrate = median_color([
    pixel for pixel in serum_crop
    if 85 <= pixel[0] <= 165 and pixel[1] <= 82 and pixel[2] <= 105
    and pixel[0] >= pixel[1] + 45 and pixel[0] >= pixel[2] + 20
])

device_crop = crop_pixels(device, (450, 760, 1180, 1550))
device_gold = gold_candidates(device, (450, 760, 1180, 1550))[0][0]
device_frosted_substrate = median_color([
    pixel for pixel in device_crop
    if pixel[0] >= 225 and pixel[1] >= 225 and pixel[2] >= 220
])

samples = {
    'serum gold lettering on ruby-red formula': (serum_gold, serum_ruby_substrate),
    'device warm-gold wordmark/control on frosted-white body': (device_gold, device_frosted_substrate),
}
for name, (foreground, background) in samples.items():
    print(f'{name}: fg={hex_color(foreground)} bg={hex_color(background)} ratio={contrast(foreground, background):.2f}:1')
