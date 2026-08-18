# Cycle 4 Follow-up: Ritual Media Revision After Video Quota Reset

Continue work in the existing **Bella Nissa Science** project at `/home/ubuntu/bella-nissa-science`. The completed non-video Cycle 4 hero and interface corrections are already checkpointed and pushed. **Do not change the light hero, layout, typography, spacing, copy, focus offsets, note widths, hotspot geometry, or other non-video work in this follow-up.**

## Objective

Replace the current `bns-ritual-two-step` media with an unhurried, premium portrait ritual that communicates the serum step before the companion-device step. The final loop should feel like a single calm 14–18 second ritual, not a fast product demonstration.

| Requirement | Exact acceptance criteria |
|---|---|
| Format | 720×1280 portrait; muted; loop; `playsInline`; H.264 MP4 plus WebM sibling; poster frame; `preload="metadata"`; retain existing RITUAL / IN MOTION chip scrim and reduced-motion behavior. |
| Duration and pacing | Roughly 14–18 seconds total. Use two clean, slow beats without fast cuts, speed ramps, or hurried gestures. If generation is limited to short clips, generate two matching slow clips and join them cleanly. |
| Serum beat | Preserve the same adult blonde model, dark robe, circular-mirror bathroom, warm surround lighting, counter greenery, and clinical-luxury grade. Show a silver-capped dropper placing thin, translucent ruby-red, low-viscosity liquid drops—not cream, gel, white product, or a thick pearl—on the forehead, both cheeks, jawline, and neck. One subtle short run is acceptable. Application uses intentional fingertips and light, controlled placement: no wiping, smearing, dragging, skin pulling, or sloppy hand movement. |
| Absorption | Before the device beat starts, the red liquid must be fully absorbed. The skin must be luminous, dewy, and softly glistening, with **no red tint, streaks, pooling, or visible residue**. |
| Device beat | In the same setting and with the same model, show slow deliberate device passes along the jawline, cheekbone, and under-eye area, then slow upward neck strokes. Face and neck must be visible in the beat. |
| Size | MP4 must be **below 2MB** with no audio. Encode the WebM sibling at a sensible compact size while retaining a clean portrait result. |

## Existing References and Integration Points

Use `/home/ubuntu/webdev-static-assets/bns-ritual-two-step-poster.jpg` as the visual-continuity reference. The existing source paths are declared near the top of `client/src/pages/Home.tsx`; replace only the ritual MP4, WebM, and poster URLs after the new files are uploaded to web storage. Preserve the `<video>` behavior and its surrounding markup.

The prior serum-consistency audit found these confirmed conflicts with the red-serum direction:

1. `bns-hero-system` presents an opaque frosted-white serum bottle.
2. `bns-serum-laboratory` presents an opaque frosted-white serum bottle.
3. `bns-share-1200x630` repeats the frosted-white serum bottle.
4. `client/index.html` Open Graph image alt text currently says “Frosted white serum.”

The ingredient-map has no bottle but depicts a near-colourless “SERUM FILM,” so treat it as a potential rather than confirmed conflict. Update the still visuals and applicable alternative text to a visually consistent red-serum direction after confirming the new video. Preserve the actual device silhouette, BNS identity, current image dimensions, responsive source structure, loading discipline, share-image budget, and all cosmetic-safe copy. Do not alter page layout.

## Required Validation

Before delivery, validate all of the following.

1. Inspect the final video in temporal order and verify serum first, device second, the stated coverage, deliberate application, and clean absorption before the device beat.
2. Record MP4 and WebM byte sizes and duration. The MP4 must be below 2MB and total duration must be 14–18 seconds.
3. Sample actual rendered pixels from the final visible RITUAL / IN MOTION chip over the brightest frame of the **new playing video**, then calculate and report a contrast ratio of at least 4.5:1. Do not rely only on CSS values or the poster frame.
4. Run `pnpm test`, `pnpm check`, and `pnpm build`; restart the preview; validate the page at 1440px, 1024px, 768px, 680px, and 390px.
5. Confirm the rebuilt social share image remains 1200×630 and under 120KB, and confirm all revised serum-related `alt` strings describe the actual visual honestly.
6. Commit the substantive update, push it to `jrazamd-cloud/bella-nissa-science` on `main`, save a project checkpoint, and report the substantive SHA, contrast ratio, final media byte sizes, and duration.

## Deferred-Work Boundary

The only outstanding Cycle 4 items are the ritual-media production, any required serum-visual consistency updates, and the media-specific validation above. The non-video Cycle 4 commit is already complete and should remain intact.
