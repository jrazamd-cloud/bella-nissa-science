from __future__ import annotations

import json
import shutil
import subprocess
from pathlib import Path

import numpy as np
from PIL import Image

VIDEO = Path("/home/ubuntu/webdev-static-assets/bns-cycle12-stills-ritual-review.mp4")
FRAME_DIR = Path("/home/ubuntu/cycle12-chip-frames")

# Conservative source-pixel approximation of the visible chip footprint under
# object-fit: cover at the validated desktop and mobile containers. The range
# over-captures the chip area so a brighter adjoining pixel cannot be missed.
CHIP_REGION = (0, 270, 225, 345)  # x0, x1, y0, y1 in native 720×1280 pixels
TEXT_RGB = np.array([246, 247, 243], dtype=float)
SCRIM_RGB = np.array([5, 16, 12], dtype=float)
SCRIM_ALPHA = 0.82


def srgb_to_linear(rgb: np.ndarray) -> np.ndarray:
    rgb = rgb / 255.0
    return np.where(rgb <= 0.04045, rgb / 12.92, ((rgb + 0.055) / 1.055) ** 2.4)


def relative_luminance(rgb: np.ndarray) -> float:
    linear = srgb_to_linear(rgb)
    return float(0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2])


def contrast_ratio(foreground: np.ndarray, background: np.ndarray) -> float:
    light, dark = sorted((relative_luminance(foreground), relative_luminance(background)), reverse=True)
    return (light + 0.05) / (dark + 0.05)


def main() -> None:
    if FRAME_DIR.exists():
        shutil.rmtree(FRAME_DIR)
    FRAME_DIR.mkdir(parents=True)
    subprocess.run(
        ["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", str(VIDEO), "-vsync", "0", str(FRAME_DIR / "frame-%03d.png")],
        check=True,
    )

    brightest = None
    for frame_path in sorted(FRAME_DIR.glob("frame-*.png")):
        pixels = np.asarray(Image.open(frame_path).convert("RGB"), dtype=float)
        x0, x1, y0, y1 = CHIP_REGION
        crop = pixels[y0:y1, x0:x1]
        # Evaluate luma before the chip scrim. Tracking the brightest sampled
        # pixel across all playing frames produces a conservative result.
        luma = 0.2126 * crop[:, :, 0] + 0.7152 * crop[:, :, 1] + 0.0722 * crop[:, :, 2]
        index = np.unravel_index(int(np.argmax(luma)), luma.shape)
        rgb = crop[index]
        if brightest is None or luma[index] > brightest[0]:
            brightest = (float(luma[index]), frame_path.name, rgb)

    assert brightest is not None
    raw_luma, frame_name, raw_rgb = brightest
    # The chip’s 82%-opaque dark ground is the dominant live treatment. This
    # calculation intentionally omits the already-darkening page overlays,
    # yielding a lower-bound contrast ratio.
    composited_background = SCRIM_ALPHA * SCRIM_RGB + (1 - SCRIM_ALPHA) * raw_rgb
    result = {
        "video": VIDEO.name,
        "sample_region_native_pixels": CHIP_REGION,
        "brightest_frame": frame_name,
        "raw_video_pixel_rgb": [round(value) for value in raw_rgb.tolist()],
        "raw_video_pixel_hex": "#{:02X}{:02X}{:02X}".format(*[round(value) for value in raw_rgb]),
        "chip_text_hex": "#F6F7F3",
        "chip_scrim": "rgba(5, 16, 12, 0.82)",
        "conservative_composited_chip_background_hex": "#{:02X}{:02X}{:02X}".format(*[round(value) for value in composited_background]),
        "conservative_contrast_ratio": round(contrast_ratio(TEXT_RGB, composited_background), 2),
        "note": "Lower bound: excludes the page's additional darkening overlays and samples the brightest source pixel across all actual playing frames in an over-captured native chip region.",
    }
    print(json.dumps(result, indent=2))


if __name__ == "__main__":
    main()
