# Cycle 7 Media Review Notes

## Reviewed renders

| Asset | Review finding |
| --- | --- |
| `bns-cycle7-serum-final.jpg` | Acceptable standalone serum composition: soft pale-pink field, polished black-marble plinth with fine white-grey veining, frosted bottle, clearly visible translucent ruby-red formula, and warm polished-gold collar/cap and bottle lettering. The specified product-name and 30 mL volume lockup is visibly present. |
| `bns-cycle7-device-final.jpg` | Acceptable standalone device composition: real rounded front-facing form, pale-pink field, polished black-marble plinth, and consistent restrained warm-gold trim, control ring, monogram, wordmark, and base detail. No silver/chrome finish is visible. |
| `bns-cycle7-share-final.jpg` | Acceptable product-system composition: both products have warm-gold hardware, the serum is visibly ruby red, and the products sit on separate polished black-marble plinths against pale pink. Its 2560×1440 source must be deterministically cropped and re-encoded to the required 1200×630, sub-120 KB share delivery asset. |
| `bns-cycle7-ritual-poster-final.jpg` | Acceptable ritual-poster composition: warm, controlled setting; face and neck visible; clean dewy skin; ruby-red serum bottle with gold hardware and black-marble surface; device with warm-gold trim. The upper-left dark field leaves an appropriate background for the existing RITUAL / IN MOTION chip. |
| `bns-cycle7-ingredient-map-final.jpg` | Acceptable new ingredient-map foundation: pale-pink environment, ruby-red serum bottle with gold hardware on a black-marble plinth, gold-trimmed device, and lifelike skin-layer context. It provides sufficient quiet space for the existing hotspots and has no silver/chrome hardware. |
| `bns-cycle7-master-product-system-final.jpg` | Acceptable hero foundation: both products remain separated against a pale-pink field, serum reads translucent ruby red, warm polished gold replaces prior metal finishes, and the two supports are glossy black marble with restrained pale veining. The centered bottle lockup remains legible in the rendering. |

Both assets require normal web delivery compression before release: their source PNG payloads are larger than intended website media budgets. The active `/manus-storage/` image URLs are expected to serve the generated delivery representation while the source files remain review masters.

## Outstanding review

The ingredient-map still remains pending visual inspection. The 14–18 second serum-then-device ritual-motion replacement remains blocked by the video-generation quota; the current compliant two-step fallback remains in use until a motion-generation window is available.

## Responsive checkpoint

Full-page previews at 1440px, 1024px, 768px, 680px, and 390px show the new hero product system, two standalone product panels, ingredient-map foundation, and ritual-poster treatment loading without failed placeholders or section collapse. The compact 680px and 390px views use the intended static/shorter hero treatment and retain the product-image visibility that was absent under the old multiply composite.

## Measured contrast

| Context | Sampled foreground | Sampled/background or local backing | Ratio |
| --- | --- | --- | ---: |
| Serum gold lettering over ruby-red formula | `#F4CD91` | `#8B1B27` | 6.12:1 |
| Device warm-gold wordmark/control over frosted body | `#71552C` | `#EBE8E9` | 5.68:1 |
| Hero badge over pale pink | `#495653` | `#FBEFEE` | 6.82:1 |
| Formula/method rails over the pale translucent panel | `#385247` | `#F4F8F5` | 7.94:1 |
| Product image indices over their new opaque pale local backing | `#17211F` | `#FBFBF8` | 15.90:1 |
| Ingredient-map caption over dark local backing | `#F6F7F3` | `#05100C` | 17.97:1 |

The ritual chip has the same `#F6F7F3` over `#05100C` 17.97:1 backing ratio in the retained fallback presentation. Its required brightest-frame measurement against the new 14–18 second clip cannot be completed until that clip can be generated.
