# Cycle 9 Ritual Video Execution Brief

> **Status:** Queue only. This brief authorises no media generation during Cycle 9. Run it only when a video-generation quota window can deliver the complete two-beat sequence.

## Locked delivery parameters

| Parameter | Required value |
| --- | --- |
| Canvas | 720 × 1280, portrait |
| Total duration | 8–16 seconds; target 16 seconds |
| Structure | Two unhurried beats: serum first, then device |
| Playback | Muted, loop, `playsInline`, `preload="metadata"` |
| Deliverables | H.264 MP4 under 2 MB plus a WebM sibling; matching poster swapped in the same commit |
| Paired poster | Restore `/manus-storage/bns-cycle7-ritual-poster-final_bb2cc59e.jpg` only with the new video |

## Exact generation prompt

```text
Create a 16-second, 720 × 1280 portrait premium clinical-luxury skincare ritual in two unhurried beats with the same blonde adult woman and calm warm bathroom setting throughout.

Beat one, approximately eight seconds: serum first. Show face and neck clearly. The frosted Bella Nissa Science bottle sits on a shiny polished black marble surface with subtle white-grey veining against a very soft desaturated pale-pink ground. The footage must be bright, airy, and aligned to the light Clinical Atelier direction; no dark bathroom staging. The dropper cap, collar, BNS monogram, and all lettering are restrained warm polished gold. She uses a gold-capped dropper to place several thin, translucent ruby-red, slightly fluid serum drops on forehead, both cheeks, jawline, and neck. Every movement is precise, elegant, controlled, and unhurried. Use delicate fingertip placement only; never wipe, smear, drag, or pull skin.

Beat two, approximately eight seconds: device second. Before the device appears, the serum has fully absorbed. Skin is luminous, dewy, and gently glistening with no red tint, streak, residue, or wet coating. Show the companion device in slow, deliberate passes along the jawline, cheekbone, under-eye area, and neck in upward strokes. Keep face and neck visible. The device must read as a small palm-sized instrument, roughly the width of a few fingers and comfortably closeable in one hand; it must never dominate the cheek or approach face size. All device trim, control detail, wordmark, and metallic hardware are warm polished gold. Preserve the same bright, airy pale-pink Clinical Atelier system, with polished black marble only under products where visible; no dark bathroom staging.

No on-image text, price, watermark, extra products, audio, fast cuts, speed ramps, or camera shake.
```

## Exact negative prompt

```text
Avoid opaque white serum, cream, gel, pearl-texture product, silver, chrome, cool-grey metal, brassy or yellow-green metal, a silver dropper cap, white or clear serum, residue during the device beat, red-stained skin, wiping, smearing, dragging, skin pulling, rushed gestures, fast cuts, speed ramps, an absent neck, device-only footage, serum-after-device order, generic device geometry, an oversized device that dominates the cheek or approaches face size, unreadable packaging, extra brands, text overlays, price, watermarks, sound, low-resolution artifacts, flicker, ring-light glare behind the RITUAL / IN MOTION chip, dark bathroom staging, and medical-treatment framing.
```

## Acceptance checks before integration

1. Verify temporal order: complete serum beat before the device beat.
2. Verify thin ruby-red drops, gold-capped dropper, face-and-neck coverage, elegant fingertip placement, and no residue by the device beat.
3. Verify device coverage on jawline, cheekbone, under-eye, and upward neck strokes.
4. Verify 8–16 second total duration, 720 × 1280 portrait geometry, muted looping playback, `playsInline`, and `preload="metadata"`.
5. Encode and measure H.264 MP4 below 2 MB plus WebM sibling; set both sources in `Home.tsx` with the Cycle 7 ruby-red/gold poster in the same commit.
6. Sample real rendered pixels of the RITUAL / IN MOTION chip against the brightest new playing-video frame and confirm a ratio of at least 4.5:1.
7. Confirm the current fallback poster is replaced only with the coordinated new video source; then update the aria-label to describe the new ruby-red/gold footage.

## Owner-approved Cycle 12 amendments

1. **Duration:** the former 14–18 second range is superseded by **8–16 seconds**, with 16 seconds still preferred where the complete ritual is available.
2. **Device scale:** this is a permanent art-direction rule. The companion device must appear as a small palm-sized instrument, approximately the width of a few fingers and comfortably closeable in one hand. It must never dominate the cheek or approach the size of the face. Apply this to every future device render and device artwork.
3. **Light direction:** future ritual footage must be bright and airy, using a pale-pink Clinical Atelier ground and polished black marble only beneath products. Dark bathroom staging is prohibited.
4. **Generated Cycle 12 serum beat:** the successful 8-second render is retired from production use due its internal visual discontinuity. Keep it as reference only; do not match a device beat to it or integrate it.
