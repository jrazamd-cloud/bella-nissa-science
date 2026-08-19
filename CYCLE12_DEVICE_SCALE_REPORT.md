# Cycle 12 — Companion Device Scale Report

## Scope and finding

This is a **report-only** review of currently live imagery. No source image, responsive derivative, poster, video, metadata value, or CSS rule was changed while preparing it.

The permanent creative rule is that the companion device must read as a small palm-sized instrument: approximately the width of a few fingers, comfortable for one hand to close around, and never comparable to a cheek or face. **I agree with the owner’s assessment:** the current disc-like object reads substantially larger than that target. The strongest paired compositions make its width roughly comparable with the displayed 30mL bottle’s overall height, rather than communicating a compact palm-scale tool.

## Live visual inventory

| Live visual | Current render locations | Scale judgement | Basis for judgement | Recommended action |
| --- | --- | --- | --- | --- |
| Cycle 7 product-system master and responsive derivatives | Home hero/LCP image | **Oversized** | The broad white disc is framed beside the 30mL bottle and reads approximately bottle-height in width. It does not establish the intended few-finger-width scale. | Regenerate the paired system master with an explicitly palm-scale device; rebuild its responsive derivatives. |
| Cycle 7 standalone-device master and responsive derivatives | Hero decorative device layer and Method product card | **Oversized / scale-unresolved in an unfavourable direction** | The full-frame product-only composition lacks a hand, face, or bottle reference. Filling the frame makes the disc read as a large tabletop object, not a compact instrument. | Regenerate the standalone product master using an unambiguous small, palm-scale proportion; rebuild its responsive derivatives. |
| Cycle 7 ingredient-map master and responsive derivatives | Formula-in-context figure | **Oversized** | The device is depicted at a large scale beside the stylised skin surface and is not anchored to a credible human or product scale reference. | Perform a targeted image edit or regeneration that preserves the educational diagram while reducing the device to the permanent palm-scale proportion. |
| Cycle 7 1200×630 share image | Open Graph, Twitter, and Product JSON-LD image | **Oversized** | It repeats the system-pair composition and carries the same bottle-height-width implication. | Rebuild deterministically from the corrected product-system master when the new paired master is approved; no separate generative share render is necessary if the crop remains acceptable. |

The Formula Detail route contains no companion-device image. The active Cycle 12 poster is the serum-first video frame, so it also contains no device and is not affected. The active 16-second ritual sequence is video rather than a static image; its device beat fills much of the portrait frame without a scale reference. It consequently continues the oversized impression, but it is outside the static-image inventory and remains unchanged in this report-only pass.

## Minimum remediation scope

The least duplicative route is three controlled visual requests: one corrected paired system master, one corrected standalone-device master, and one corrected ingredient-map master. All responsive JPEG/WebP variants can then be re-encoded deterministically from those approved masters. The share image can be derived from the corrected paired master if its crop remains suitable. If the corrected standalone master replaces the device still used by the ritual video, the portrait stills sequence can be rebuilt deterministically with no video-generation request; that video change would require a fresh owner review before integration.

| Priority | Work item | Generative request count | Deterministic follow-on work |
| --- | --- | ---: | --- |
| 1 | Correct paired system master with the 30mL bottle retained as scale reference | 1 | Rebuild hero derivatives; derive and review social share crop. |
| 2 | Correct standalone-device master with an unambiguous compact palm-scale silhouette | 1 | Rebuild device derivatives; optionally rebuild the device half of the ritual video for separate owner approval. |
| 3 | Correct device proportion within the ingredient-map master | 1 | Rebuild ingredient-map derivatives and re-check hotspot geometry. |

## Credits and allowance boundary

No image-generation call was made, so no credit or allowance was consumed. The current project controls do not expose a reliable, pre-generation price or daily image allowance for this account. Accordingly, this report gives the accountable planning measure—**three distinct generative image requests at minimum**—but does not assert an exact credit charge or daily-allowance deduction. Any platform-specific credit or allowance figure should be confirmed through the account’s usage/support channel before authorising the work.
