# Cycle 14 human ritual candidate — unapproved

> **Status:** Review-only candidate. This directory is not referenced by the website, and no site source, active media registry, deployment, publication, or checkpoint was changed.

## Outcome

One full human-ritual video candidate was authorized. The initial call was rejected before rendering because the supplied local reference was square rather than portrait. A deterministic center crop of the same local reference was made only to satisfy the required 9:16 reference geometry; it is retained here as `cycle14-gesture-reference-9x16-crop.png`. The one retry was rejected by the free-plan video quota, so exactly one still fallback was generated, as authorized.

The preserved raw fallback is `bns-cycle14-human-ritual-fallback.jpg` (4,805,912 bytes; intrinsic geometry **1440 × 2560**). Despite its `.jpg` filename, the generated file identifies as PNG-encoded image data; it is intentionally retained byte-for-byte and was not converted or re-encoded.

## Video attempt

| Setting | Value |
|---|---|
| Model | `gemini-omni-flash-preview` |
| Requested duration | 10 seconds |
| Requested resolution | 720p |
| Requested aspect ratio | Portrait (9:16) |
| Audio | Disabled |
| Reference supplied on first attempt | `/home/ubuntu/bella-nissa-science/archive/manus-exit-2026-08-20/owner-uploads/pasted_file_vAvLdQ_image.png` |
| Reference supplied on retry | `media-masters/cycle14-ritual-human/cycle14-gesture-reference-9x16-crop.png` |
| Result | No video was rendered. |

### Exact prompt used for both video calls

```text
Create a photorealistic, loop-friendly beauty ritual video candidate for a premium clinical-luxury skincare brand. Use the provided reference image only for gesture, intimate portrait framing, and calm mood—not for its dark lighting, black robe, mirrors, or environment. An elegant adult woman with softly styled medium-brown hair is shown from the shoulders up in a bright, light, airy pale-desaturated-pink studio environment with soft diffused daylight and a refined Clinical Atelier color grade. She has natural luminous skin and a serene, relaxed expression. She slowly glides a compact palm-sized matte-white handheld beauty device along her jawline in two or three unhurried, deliberate upward passes, with gentle precise wrist movement and no tugging. The device is unmistakably small, roughly three to four fingers wide, clearly much smaller than her face, with a smooth rounded matte-white body and restrained warm polished-gold seam and contact accents. It has no brand mark and no text. Optional, subtle background detail: a translucent ruby-red serum bottle with a warm polished-gold cap resting out of focus nearby. The composition is calm and close, with a stable camera and gentle natural movement suitable for a seamless loop. No audio. No on-screen text. Avoid dark bathroom staging, mirrors, harsh shadows, night lighting, black backgrounds, silver, chrome, cool grey hardware, oversized device proportions, dramatic beauty-ad lighting, visible red serum residue, extra hands, deformed fingers, or abrupt cuts.
```

### Exact video responses

```text
The image from references[0] is 1200x1200, which does not match the requested 9:16 video aspect ratio. Regenerate or crop references[0] to 9:16 before retrying; do not add a background or padding to the generated video afterward.
```

```text
You've reached today's free plan limit for video generation (1/1) - please upgrade or wait for your quota to reset.
```

## Authorized still fallback

| Setting | Value |
|---|---|
| Model | `default` |
| Quality | `default` |
| Requested aspect ratio | 9:16 |
| Reference | `media-masters/cycle14-ritual-human/cycle14-gesture-reference-9x16-crop.png` |
| Result | Generated successfully; raw output preserved as `bns-cycle14-human-ritual-fallback.jpg`. |

### Exact still-fallback prompt

```text
Create a photorealistic portrait still for an unintegrated premium clinical-luxury beauty ritual candidate. Use the reference only for an intimate shoulder-up camera distance, calm poised gesture, and understated mood; do not copy its dark lighting, black robe, mirrors, or bathroom setting. Subject: an elegant adult woman with softly styled medium-brown hair, natural luminous skin, and a serene expression. She delicately holds and glides a compact palm-sized matte-white handheld beauty device slowly at her jawline; the device must be visibly small, roughly three to four fingers wide and clearly much smaller than her face. The device has a smooth rounded matte-white body with restrained warm polished-gold seam and contact accents, no text and no logos. Environment: bright, light, airy pale-desaturated-pink studio with soft diffused daylight and a refined Clinical Atelier color grade. Optional subtle detail: a translucent ruby-red serum bottle with a warm polished-gold cap resting out of focus nearby. No on-screen text, no logos, no audio implications. Avoid dark bathroom staging, mirrors, harsh shadows, black backgrounds, silver, chrome, cool grey hardware, brassy metal, oversized device proportions, red residue, extra hands, malformed fingers, or dramatic beauty-ad lighting.
```

## Honest visual assessment

The fallback succeeds as a **bright, pale-pink, close ritual still**. The device reads as matte white with restrained warm-polished-gold top and seam details; no cool silver, chrome, or grey hardware is apparent. Its width is visibly much less than the woman’s face and approximately a few fingers wide, so it meets the requested palm-scale reading. The ruby-red serum bottle and a gold cap appear softly out of focus at right, consistent with the optional staging detail.

There are no obvious malformed fingers, duplicate hands, on-screen text, logos, dark bathroom elements, or harsh lighting. The device’s top contact geometry is somewhat abstract rather than an exact production-product match, and the single still cannot validate the requested slow jawline movement or loop continuity. It is therefore an **unapproved creative candidate only**, not a substitute for the requested video and not suitable for integration without owner review.
