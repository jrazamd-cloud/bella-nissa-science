# Cycle 14 marketing still library — unapproved

> **Status:** Archive-only raw marketing material for future design work. No file in this directory is referenced by the live site, and no site source, active media registry, publication, deployment, or checkpoint was changed.

## Shared generation settings

All six shots used the same local visual source of truth: `/home/ubuntu/bella-nissa-science/client/public/media/bns-cycle13-master-product-system-palmscale_b5e76dad.jpg`. The image-generation model was `default` at `high` quality. The generator returned 1920-pixel square images for the square requests rather than the requested 2048-pixel geometry; this is preserved and reported without deterministic resizing or re-encoding.

## 01 — Ruby serum droplet

| Field | Value |
|---|---|
| Raw file | `01-ruby-serum-droplet.png` |
| Intrinsic geometry | 1920 × 1920 pixels (requested 2048 × 2048) |
| Byte size | 3,502,792 bytes |
| Outcome | Generated successfully |

### Exact prompt

```text
Create a photorealistic square macro marketing still for a premium clinical-luxury skincare brand. Use the supplied local paired-product reference only as the source of truth for its translucent ruby-red serum color, warm polished-gold palette, pale desaturated pink environment, polished black marble material, soft diffused daylight, and light airy Clinical Atelier grade. Subject: one single glossy translucent ruby-red serum droplet resting naturally on polished black marble, with accurate shallow depth of field, a soft pale-pink seamless background falling out of focus, and subtle warm daylight reflections. Composition: macro close-up, elegant negative space, no bottle or device needed. Text/content: no text and no logos anywhere. Constraints: square 2048x2048 concept, photorealistic liquid viscosity and light transmission, marble only beneath the droplet. Avoid people, hands, faces, dark staging, silver, chrome, cool-grey or brassy/yellow-green metal, labels, typography, extra droplets, plastic-looking liquid, or an opaque red gel.
```

**Assessment:** Succeeds as a single ruby-red, glossy droplet on veined black marble with a bright pale-pink background and controlled shallow depth of field; no labels or text are present, as required.

## 02 — Ruby serum smear

| Field | Value |
|---|---|
| Raw file | `02-ruby-serum-smear.png` |
| Intrinsic geometry | 1920 × 1920 pixels (requested 2048 × 2048) |
| Byte size | 3,958,639 bytes |
| Outcome | Generated successfully |

### Exact prompt

```text
Create a photorealistic square overhead marketing still for a premium clinical-luxury skincare brand. Use the supplied local paired-product reference only as the source of truth for its translucent ruby-red serum color, pale desaturated pink ground, soft diffused daylight, and light airy Clinical Atelier grade. Subject: one controlled, soft smear of translucent ruby-red low-viscosity serum across a pale desaturated pink seamless surface, with realistic tapered edges, delicate gloss, visible light transmission, and a thin fluid viscosity rather than dense opaque gel. Composition: direct overhead view with generous negative space and refined editorial simplicity; no marble is needed because no product is standing. Text/content: no text and no logos anywhere. Constraints: square 2048x2048 concept. Avoid people, hands, faces, bottle or device silhouettes, dark staging, silver, chrome, cool-grey or brassy/yellow-green metal, multiple smears, streaky paint, or opaque cream.
```

**Assessment:** Succeeds as a single pale-pink overhead serum texture with a glossy ruby pool tapering into a thinner translucent smear; no labels or text are present, and no obvious artifact is visible.

## 03 — Overhead paired flat-lay

| Field | Value |
|---|---|
| Raw file | `03-overhead-paired-flatlay.png` |
| Intrinsic geometry | 2560 × 1440 pixels (requested 2560 × 1440) |
| Byte size | 4,846,814 bytes |
| Outcome | Generated successfully |

### Exact prompt

```text
Create a photorealistic 16:9 overhead flat-lay marketing still for a premium clinical-luxury skincare brand. Use the supplied local paired-product reference as the exact source of truth for the ruby-red translucent glass serum bottle, warm polished-gold cap and collar, the compact matte-white companion device with warm gold seam and gold power symbol, pale desaturated pink ground, polished black marble, soft diffused daylight, and light airy Clinical Atelier grade. Composition: fully show the bottle and compact device side by side, aligned with a clear palm-scale device reading, on a slim polished black marble slab placed over a pale desaturated pink seamless ground; generous negative space around the products, precise overhead camera, both objects entirely in frame. Text/content: the only typography or logos may be on the product packaging itself; wherever the bottle label is legible it must show Bella Nissa with Science beneath, BNS, and exactly REJUVENATING BIOACTIVE PRECISION SERUM. Constraints: 2560x1440 landscape concept, no other text or logos. Avoid people, hands, faces, extra products, dark staging, silver, chrome, cool-grey hardware, brassy/yellow-green metal, oversize device proportions, or garbled bottle wording.
```

**Assessment:** Succeeds as a clean overhead two-product flat-lay with generous pink negative space, a small device, warm gold hardware, and black marble beneath the objects; the bottle lockup and `REJUVENATING BIOACTIVE PRECISION SERUM` line appear legible and not visibly garbled.

## 04 — Gold cap macro

| Field | Value |
|---|---|
| Raw file | `04-gold-cap-macro.png` |
| Intrinsic geometry | 1920 × 1920 pixels (requested 2048 × 2048) |
| Byte size | 4,021,621 bytes |
| Outcome | Generated successfully |

### Exact prompt

```text
Create a photorealistic square macro product-detail marketing still for a premium clinical-luxury skincare brand. Use the supplied local paired-product reference as the exact source of truth for the serum bottle’s warm polished-gold dropper cap and collar, ruby-red translucent glass, pale desaturated pink ground, polished black marble only beneath a product, soft diffused daylight, and light airy Clinical Atelier grade. Subject: a tight close-up of the warm polished-gold cap and collar above the ruby-red serum bottle, with clean soft specular reflections, elegant material realism, and subtle pale-pink background bokeh; a sliver of polished black marble may be visible below the bottle. Composition: close crop emphasizing gold material, no people. Text/content: no text or logos outside the product packaging; do not add labels outside the bottle. Constraints: square 2048x2048 concept. Avoid silver, chrome, cool-grey or brassy/yellow-green metal, dark staging, hands, faces, mirrored surfaces, harsh flash, label gibberish, or unrelated objects.
```

**Assessment:** Succeeds as a close, bright, softly reflected warm-polished-gold cap and collar detail over ruby liquid; the product label is outside the crop, so no label quality can be assessed and no non-packaging text appears.

## 05 — Backlit ruby bottle

| Field | Value |
|---|---|
| Raw file | `05-backlit-ruby-bottle.png` |
| Intrinsic geometry | 1920 × 1920 pixels (requested 2048 × 2048) |
| Byte size | 3,887,581 bytes |
| Outcome | Generated successfully |

### Exact prompt

```text
Create a photorealistic square backlit bottle marketing still for a premium clinical-luxury skincare brand. Use the supplied local paired-product reference as the exact source of truth for the translucent ruby-red glass serum bottle, warm polished-gold cap and collar, pale desaturated pink ground, polished black marble used only beneath the bottle, soft diffused daylight, and light airy Clinical Atelier grade. Subject: one upright bottle, fully in frame, backlit so pale daylight transmits through the ruby liquid and creates a refined glowing red edge; keep the bottle on a slim polished black marble support against a seamless pale-pink background. Composition: elegant, centered with breathing room, no device needed. Text/content: the only typography or logos may be on product packaging itself; wherever legible, render Bella Nissa with Science beneath, BNS, and exactly REJUVENATING BIOACTIVE PRECISION SERUM. Constraints: square 2048x2048 concept. Avoid people, hands, faces, dark or dramatic staging, silver, chrome, cool-grey hardware, brassy/yellow-green metal, opaque white serum, extra text/logos, or garbled packaging wording.
```

**Assessment:** Succeeds as a bright backlit bottle composition with a clear glowing ruby liquid edge, warm-gold cap, and black marble support; the Bella Nissa / Science / BNS lockup and `REJUVENATING BIOACTIVE PRECISION SERUM` text are visibly legible without an apparent spelling error.

## 06 — Device edge detail

| Field | Value |
|---|---|
| Raw file | `06-device-edge-detail.png` |
| Intrinsic geometry | 1920 × 1920 pixels (requested 2048 × 2048) |
| Byte size | 4,016,828 bytes |
| Outcome | Generated successfully |

### Exact prompt

```text
Create a photorealistic square edge-lit device-detail marketing still for a premium clinical-luxury skincare brand. Use the supplied local paired-product reference as the exact source of truth for the compact matte-white companion device, its warm polished-gold seam and single gold power symbol, pale desaturated pink ground, polished black marble used only beneath the device, soft diffused daylight, and light airy Clinical Atelier grade. Subject: a close edge-lit detail of the compact white device resting on polished black marble, with a crisp warm-gold seam and gold power symbol clearly visible; show the device as a small palm-scale instrument through its compact rounded proportions, against softly out-of-focus pale-pink background. Composition: refined product macro with gentle highlights and generous quiet negative space, no bottle required. Text/content: no text and no logos outside the device packaging marks already present in the reference. Constraints: square 2048x2048 concept. Avoid people, hands, faces, dark staging, silver, chrome, cool-grey or brassy/yellow-green metal, oversized device proportions, extra controls, added text/logos, or harsh reflections.
```

**Assessment:** Succeeds as a light, airy matte-white device detail with a clear warm-gold seam and centered power symbol on black marble; no label text is present, no obvious artifact is visible, and the compact silhouette supports the requested palm-scale reading.

## Summary

All six requested shots generated successfully; no image-generation quota refusal occurred. The square generator outputs are **1920 × 1920 rather than the requested 2048 × 2048**, while the landscape flat-lay is the requested **2560 × 1440**. These are raw outputs retained without resizing, cropping, or integration. Product-label quality is applicable only to shots 03 and 05, and neither shows an apparent label spelling error in this review.
