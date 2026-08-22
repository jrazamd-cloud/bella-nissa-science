# Cycle 14 device-scale candidate — unapproved

> **Status:** Review-only candidate. This directory is not referenced by the website, and no site source, active media registry, deployment, publication, or checkpoint was changed.

## Raw output and settings

| Field | Value |
|---|---|
| Raw file | `bns-cycle14-device-scale-candidate.png` |
| Intrinsic geometry | 2560 × 1440 pixels |
| Byte size | 3,798,003 bytes |
| SHA-256 | `744c0c22dca9e28f9ce03a4a6063fa35e4e3c31daf1aa27f681a15944cb3a071` |
| Model | `default` |
| Quality | `high` |
| Requested aspect ratio | 16:9 |
| Reference used by local file path | `/home/ubuntu/bella-nissa-science/client/public/media/bns-cycle13-master-product-system-palmscale_b5e76dad.jpg` |
| Result | Generated successfully as one image; no derivative or integration was created. |

## Exact prompt

```text
Create one photorealistic 2560x1440 landscape standalone-device card candidate for a premium clinical-luxury skincare brand. Use the provided local reference image as the exact source of truth for product designs, bottle silhouette, small matte-white companion device silhouette, gold power symbol placement, bottle/device palette, polished black marble, pale desaturated pink ground, and soft daylight lighting. Composition: a seamless pale desaturated pink studio background with soft diffused daylight, generous uncluttered breathing room, and polished black marble display surfaces only beneath the products. Fully show both products. At left and slightly behind, place the full-height 30 mL translucent ruby-red glass dropper serum bottle standing upright, with a warm polished-gold collar and cap. At right and in front, place the compact matte-white companion beauty device resting on the marble. The device must be clearly and visibly smaller: measure its total visible height at 55–60 percent of the bottle’s total visible height, never comparable to the bottle and never oversized. The device must have a small rounded white body, restrained warm polished-gold seam/contact accents, and a single warm-gold power symbol; absolutely no silver, chrome, cool grey, or brassy/yellow-green metal. Bottle packaging: render the brand lockup 'Bella Nissa' with 'Science' directly beneath it, a BNS monogram, and the exact product label text 'REJUVENATING BIOACTIVE PRECISION SERUM' clearly and correctly. Do not put any other text or logos anywhere in the frame. No people, hands, faces, mirrors, bathroom context, dark staging, or extra products. Match the reference’s light, airy Clinical Atelier composition and produce refined, physically credible materials with gentle shadows.
```

## Measured scale review

The product heights were measured manually from the full-resolution raster using the visible top and bottom bounds, including the bottle dropper and the device body/base contact.

| Item | Visible vertical bounds | Measured height |
|---|---:|---:|
| Bottle | y=78 to y=680 | 602 px |
| Device | y=494 to y=704 | 210 px |
| Device-to-bottle height | `210 ÷ 602 × 100` | **34.88%** |

The device is materially smaller than the requested ceiling of 55–60% and therefore conveys palm scale strongly. It is, however, smaller than the requested 55–60% target range if that range was intended as an exact design target rather than a maximum. This must be decided by the owner before any integration.

## Honest visual assessment

The candidate matches the **bright, pale-desaturated-pink Clinical Atelier** direction, with generous breathing room, polished black marble supports, ruby-red glass, and warm polished-gold hardware. The bottle and device are both fully in frame. The device is matte white, compact, and has a warm-gold power symbol and seam; no silver, chrome, or cool-grey hardware is visible.

The bottle lockup visibly reads **Bella Nissa / Science** and **BNS**. At the displayed full-resolution review size, the product line reads `REJUVENATING BIOACTIVE PRECISION SERUM` without an apparent spelling error; this is a visual reading of generated raster lettering rather than production artwork. The optional volume line is also present, but is not relied on as final packaging copy.

No people, hands, extra products, text outside the packaging, dark setting, or obvious anatomy artifacts appear. The device body and marble supports are clean, but the device’s separation onto its own round marble plinth feels slightly more staged than a single standalone-device card may require. The decisive concern is scale: at 34.88% of bottle height it is unambiguously small, but may be **too small** relative to the 55–60% requested composition target. This is an **unapproved review candidate only** and must not be integrated without owner approval.
