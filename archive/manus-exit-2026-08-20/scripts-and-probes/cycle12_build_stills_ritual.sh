#!/usr/bin/env bash
set -euo pipefail

ROOT="/home/ubuntu/webdev-static-assets"
SERUM_SOURCE="$ROOT/bns-cycle7-serum-final.jpg"
DEVICE_SOURCE="$ROOT/bns-cycle7-device-final.jpg"
WORK="/home/ubuntu/cycle12-stills-ritual-work"
OUT_MP4="$ROOT/bns-cycle12-stills-ritual-review.mp4"
OUT_WEBM="$ROOT/bns-cycle12-stills-ritual-review.webm"

mkdir -p "$WORK"
rm -f "$WORK/serum.mp4" "$WORK/device.mp4" "$OUT_MP4" "$OUT_WEBM"

# Each source is 8.3 seconds. A 0.6-second dissolve beginning at 7.7 seconds
# produces an exact 16.0-second review sequence: serum first, device second.
ffmpeg -hide_banner -loglevel error -y \
  -loop 1 -framerate 24 -t 8.3 -i "$SERUM_SOURCE" \
  -vf "scale=960:1280:force_original_aspect_ratio=increase,crop=720:1280:120:0,zoompan=z='min(zoom+0.00018,1.04)':d=1:s=720x1280:fps=24,format=yuv420p" \
  -an -c:v libx264 -preset slow -crf 18 -movflags +faststart "$WORK/serum.mp4"

ffmpeg -hide_banner -loglevel error -y \
  -loop 1 -framerate 24 -t 8.3 -i "$DEVICE_SOURCE" \
  -vf "scale=960:1280:force_original_aspect_ratio=increase,crop=720:1280:120:0,zoompan=z='min(zoom+0.00016,1.035)':d=1:s=720x1280:fps=24,format=yuv420p" \
  -an -c:v libx264 -preset slow -crf 18 -movflags +faststart "$WORK/device.mp4"

ffmpeg -hide_banner -loglevel error -y \
  -i "$WORK/serum.mp4" -i "$WORK/device.mp4" \
  -filter_complex "[0:v][1:v]xfade=transition=fade:duration=0.6:offset=7.7,format=yuv420p[v]" \
  -map "[v]" -r 24 -an -c:v libx264 -preset slow -b:v 850k -maxrate 900k -bufsize 1800k -movflags +faststart "$OUT_MP4"

ffmpeg -hide_banner -loglevel error -y \
  -i "$WORK/serum.mp4" -i "$WORK/device.mp4" \
  -filter_complex "[0:v][1:v]xfade=transition=fade:duration=0.6:offset=7.7,format=yuv420p[v]" \
  -map "[v]" -r 24 -an -c:v libvpx-vp9 -b:v 800k -crf 36 -row-mt 1 "$OUT_WEBM"

MP4_SIZE=$(stat -c '%s' "$OUT_MP4")
if (( MP4_SIZE >= 2000000 )); then
  echo "Review MP4 exceeds 2 MB: ${MP4_SIZE} bytes" >&2
  exit 1
fi

printf 'MP4=%s\nWEBM=%s\n' "$OUT_MP4" "$OUT_WEBM"
ffprobe -v error -select_streams v:0 -show_entries stream=codec_name,width,height,avg_frame_rate,duration -show_entries format=size,duration -of default=noprint_wrappers=1 "$OUT_MP4"
ffprobe -v error -select_streams v:0 -show_entries stream=codec_name,width,height,avg_frame_rate,duration -show_entries format=size,duration -of default=noprint_wrappers=1 "$OUT_WEBM"
