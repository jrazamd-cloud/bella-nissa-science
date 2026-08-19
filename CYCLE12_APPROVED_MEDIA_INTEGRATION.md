# Cycle 12 — Approved Stills Ritual Integration

## Owner approval and active source set

The owner approved the zero-generation stills-based ritual sequence for production integration. The active sources are the existing, durably stored Cycle 12 review assets: `/manus-storage/bns-cycle12-stills-ritual-review_9dd7299d.mp4` and `/manus-storage/bns-cycle12-stills-ritual-review_f0682928.webm`.

The active poster is `/manus-storage/bns-cycle12-stills-ritual-review-poster_ea33111f.jpg`. It was exported directly from decoded frame zero of the active MP4 at 720 × 1280; it is not the retired legacy poster or the Cycle 7 ritual poster.

## Initial validation record

The active MP4 is 16.000 seconds, H.264, 720 × 1280, 24fps, and 969,118 bytes. The active WebM is VP9, 720 × 1280, and 247,695 bytes. The JPEG poster is 720 × 1280 and 76,070 bytes. A decoded first-frame comparison recorded SSIM 0.996658 after JPEG encoding; the small difference reflects JPEG compression, while the source frame and poster composition are otherwise matched.

Frame inspection confirms the temporal order: the opening frame presents the ruby-red serum with warm polished-gold hardware on black marble and pale pink, while the late frame presents the companion device. The approved sequence is therefore serum first, device second.

For the ritual identifier, the brightest source pixel sampled across all 384 playing MP4 frames inside an intentionally over-captured native chip region was `#FFFFFF` at frame 200. Compositing the live 82%-opaque `rgba(5, 16, 12, 0.82)` chip scrim over that worst-case pixel yields `#323B38`; the `#F6F7F3` chip text has a conservative contrast ratio of **10.73:1**. This excludes the page’s additional darkening overlays, so it is a lower bound and exceeds 4.5:1.

The refreshed 1440px preview completed without a visible page-layout regression. The 1024px, 768px, 680px, and 390px full-page responsive previews also completed without a visible layout regression or image-source error. Full playback, contrast, and source-contract validation remains part of this release pass.

## Report-only device-scale finding

The live product-system master and standalone-device master both frame the companion device as a wide disc. In the paired composition, its width is approximately comparable to the displayed 30mL bottle’s full height, and the standalone product frame provides no external hand or face reference to counter that implication. The current composition therefore does not convincingly communicate the permanent palm-scale rule. No image was changed while making this finding.

The live ingredient-map places the device at a large scale beside a stylised skin cross-section rather than a human hand or face, so it carries no credible real-world scale cue and visually reads oversized. The live share image repeats the paired system composition: its device is again approximately the bottle’s full height in width, so it also conflicts with the intended palm-scale reading. No image was changed while making these findings.
