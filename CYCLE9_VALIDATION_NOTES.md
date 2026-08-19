# Cycle 9 Validation Notes

## Fallback poster compatibility

| Check | Measured result |
| --- | --- |
| Active poster | `/manus-storage/bns-ritual-two-step-poster_c33fb4c4.jpg` |
| Poster geometry | 720 × 1280 JPEG, 42,058 bytes |
| Active MP4 geometry | 720 × 1280 H.264 at 24 fps; 8.0 seconds |
| Aspect match | Exact 9:16 match between poster and video |
| CLS during poster probe | 0 |
| Poster load + decode | 64.7 ms total; 2.9 ms from response end to decoded image |

The measured video box retained its 627 × 1,114.656 px dimensions during the poster probe. Its vertical position changed only because the probe scrolled the ritual section into view.

## Browser accessibility and responsive-media checks

The visible ritual play/pause control measured 106.36 × 30 px, uses a dark scrim with light text, and exposes an accessible play/pause name. Its default text/background pair is `#F6F7F3` over `#05100C`, a 17.97:1 ratio. The control paused and resumed the muted video in the browser probe. With `prefers-reduced-motion: reduce`, `video.autoplay` was false, the video was paused, and the matching poster remained visible.

The focused ingredient hotspot computed to a solid 2 px emerald outline with 3 px offset. Each Home responsive image emitted five WebP/JPEG width candidates. At DPR 2, the browser selected WebP candidates for in-view hero, serum, and device media at desktop and mobile widths; lazy below-fold images emitted the same real `srcset` attributes and defer their current source until scrolled into view.

Formula Detail runtime metadata resolves to its own title, description, canonical, Open Graph, and Twitter tags. Its four study links each expose `target="_blank" rel="noopener noreferrer"`, and the required reference disclaimer is present.

The raw production `/formula` HTML was separately fetched before hydration. It contains `Formula Detail | Bella Nissa Science` as the document title; the `/formula` canonical and Open Graph URL; matching Formula Detail Open Graph and Twitter title/description values; and the Cycle 9 ruby-red/gold serum image in both social-image fields.

## Responsive visual verification

Full-page Home previews at 1440px, 1024px, and 390px retained intact product media, responsive visual hierarchy, and the new ruby-red/polished-gold specification rail. Formula Detail was additionally reviewed at 1440px and 390px: the Cycle 7 ruby-red/gold serum is consistent with Home, the disclaimer follows the evidence rows, and the full evidence, testing, and return sections remain readable without overlap or truncation.
