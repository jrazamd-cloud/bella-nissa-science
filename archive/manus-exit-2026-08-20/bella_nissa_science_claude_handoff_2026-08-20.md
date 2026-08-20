# Bella Nissa Science — Complete Claude-Ready Project Handoff

> **Prepared:** 20 August 2026 (EDT)
>
> **Purpose:** This is a comprehensive continuation brief for a new Claude or other assistant. It consolidates the project from the original brand-site build through the current portable, apex-domain state. Treat the **current working source tree and GitHub `main`**, not old screenshots, early task text, or historical umbrella items in `todo.md`, as the operational source of truth.
>
> **Operating rule:** Do not publish, deploy, generate media, modify policy copy, add commerce, or alter approved claims unless the owner explicitly authorizes the specific work.

---

## 1. Executive state summary

**Bella Nissa Science** is a premium clinical-luxury skincare marketing site for a paired cosmetic ritual: the **Rejuvenating Bioactive Precision Serum** and a companion absorption/massage device. The presentation is deliberately non-commerce and claims-disciplined. The site has an active light Clinical Atelier experience, responsive locally vendored media, accessible video behavior, a Formula Detail evidence dossier, seven approved research links, a native FAQ, policy-page scaffolds, raw server metadata for crawler-sensitive routes, and an apex-domain metadata setup.

The current site is healthy. The last comprehensive code validation passed **14 Vitest contracts**, TypeScript type-check, and a Vite/Express production build. The repository is now portable: local `client/public/media` holds **52** media assets and `client/public/fonts` holds **4** WOFF2 files. Production build output includes the same **56** local assets, and active source contains no `/manus-storage/` or `manus.space` runtime dependency.

The owner’s major current creative concern is **device scale**. Existing static device imagery makes the companion device look like a broad disc approximately as wide as the displayed 30 mL bottle is tall. The permanent design rule is that the device must read as a small palm-sized instrument—roughly three or four fingers wide—not face-sized or cheek-dominant. One owner-authorized, reference-guided attempt to correct the paired product-system master was made on 20 August; it failed before producing an image because the generator could not upload the single reference file. **Do not retry without a new owner instruction.**

---

## 2. Repository, branch, runtime, and release identity

| Item | Current state |
|---|---|
| GitHub repository | <https://github.com/jrazamd-cloud/bella-nissa-science> |
| Intended GitHub branch | `main` |
| Latest GitHub `main` commit | `371cddcd55acc3daf9304772c7373d09eaf548b1` — `chore: switch canonical metadata to apex domain` |
| Current local/WebDev `HEAD` | `142ae0e1316b52c40ff97e448fa25f44f50fe622` — checkpoint-synchronized equivalent of the apex-domain change |
| Tree relationship | `371cddcd` and `142ae0e1` have identical tracked content; they differ only in checkpoint/remote bookkeeping history. |
| Latest WebDev checkpoint | `manus-webdev://142ae0e1` |
| Project path | `/home/ubuntu/bella-nissa-science` |
| Preview URL | `https://3000-iq2nne2zduvky1ptn1ozy-28b6c959.us3.manus.computer` |
| Stack | React 19, TypeScript 5.9, Vite 7, Tailwind CSS 4, Wouter, Express 4, Vitest |
| Primary tests | `client/src/site-contract.test.ts` — **14** contracts currently pass |
| Current uncommitted project file | `todo.md` has an added handoff-tracking line only; it is not a site or media change. |

### Branch and checkpoint caveat

The project uses two remotes in practice. `github` is the user’s GitHub remote and should receive substantive, owner-authorized work. `origin` is the WebDev-backed project remote and can create a checkpoint-synchronization commit. Before handing off a future code change, confirm both refs and ensure they have identical source trees. Do **not** use `git reset --hard`; recover via a known WebDev checkpoint if needed.

---

## 3. Non-negotiable owner constraints

The following rules have accumulated across sessions and remain controlling unless the owner expressly revises them.

| Area | Current rule |
|---|---|
| Canonical product name | Always use **Rejuvenating Bioactive Precision Serum** for product-name occurrences. Never revive “Bioactive Renewal Serum.” Do not blindly replace the ordinary ingredient phrase “skin’s natural renewal.” |
| Commercial scope | No price, offer, checkout, cart, subscription, email capture, availability, shipping claim, warranty, returns terms, ratings, reviews, testimonial copy, or invented customer data. |
| Legal/policy pages | Keep five minimal placeholders until the owner supplies actual approved text. Do not invent privacy, terms, shipping, returns, accessibility, or contact policy prose. |
| Cosmetic claims | Use appearance language only: “supports the appearance of,” “helps improve the look of,” “visibly,” etc. Do not claim repair, stimulation, inhibition, prevention, photoaging prevention, healing, treatment, curing, or disease effects. Exact owner-approved disclaimers are the only allowed exception for words such as “treat,” “cure,” or “prevent.” |
| Product art | **Gold wins every conflict.** Use warm polished gold; never silver, chrome, cool-grey metal, brassy yellow metal, or yellow-green metal. |
| Product surfaces | Pale, desaturated pink ground; polished black marble only below products/plinths. Keep the environment bright and airy. No dark bathroom staging. |
| Device scale | Device must be a compact palm-scale instrument, about three/four fingers wide, never near face or cheek scale, never comparable to bottle height. |
| Video behavior | Preserve `muted`, `loop`, `playsInline`, `preload="metadata"`, visible keyboard-reachable play/pause control, and reduced-motion no-autoplay behavior. |
| Publishing | **Do not publish.** The owner must use the WebDev Publish UI only after an appropriate checkpoint and separate approval. |
| Data-export modal | Owner dismissed a data-export/deletion notice. Take no action; it is owner-owned. |
| Asset paths | Maintain local `/media/...` and `/fonts/...` paths. Do not reintroduce `/manus-storage/` or the Manus storage proxy. |
| Animation performance | Do not add hero or ritual fade-in behavior that begins at opacity zero. The hero is preloaded with high fetch priority and must not have LCP delayed. Do not undo existing loading discipline without explicit direction. |

---

## 4. Design system and brand direction

The visual system evolved from a white/silver clinical look to a **Clinical Atelier** direction. It is premium and scientific without becoming dark, generic spa, or overtly medical.

| Element | Approved direction |
|---|---|
| Brand lockup | `Bella Nissa` on the first line, with `Science` centered below; scientific BNS monogram. |
| Display typography | Self-hosted **Newsreader**, light editorial weights, sentence case, subtle negative tracking and optical sizing. |
| Body/UI typography | Self-hosted **Inter**; **Inter Tight** for smaller headings. |
| Mono labels/kickers | Self-hosted **IBM Plex Mono**, 400, uppercase, typically 10–11px, 0.14em tracking, tabular/slashed-zero numerals. |
| Core color cues | Calibration emerald `#006F58`; ink `#17211F`; paper/light fields; pale-pink product fields; ruby-red serum; warm polished gold hardware; black marble supports. |
| Hero | Light, semantic text beside the paired-system visual. No `mix-blend-mode: multiply`; normal compositing is intentional. |
| Product label direction | `Bella Nissa` (Newsreader), `Science` centered, BNS monogram, then `Rejuvenating Bioactive Precision Serum` and `30mL (1.01 fl.oz)` in mono treatment. |
| Spec rail copy | `RUBY-RED FORMULA · POLISHED GOLD · CALIBRATION EMERALD`; product display volume `30 ML (1.01 FL OZ)`. |

The site uses a light-only color scheme via `<meta name="color-scheme" content="light">` and root CSS `color-scheme: light`, protecting the intended canvas and form-control defaults when a visitor’s operating system prefers dark mode.

---

## 5. Full historical evolution

### 5.1 Initial concept to Bella Nissa Science

The project began as a broader skincare-device request, then was decisively rebranded to **Bella Nissa Science** around a serum plus companion absorption/massage device. Initial product visual directions specified frosted white packaging, BNS identity, clinical/scientific typography, emerald accents, and eventually the paired product ritual as the central experience.

Early work established a public marketing layout, product system, educational content, visual brand language, an evidence-oriented Formula Detail page, and a skin-layer explanation. The owner later tightened this into a two-product cosmetic ritual rather than a multi-device collection. References to third-party device technologies or unverified internal mechanisms were removed or rewritten.

### 5.2 Education, formula, and compliance work

The site added:

1. A Formula Detail route describing ingredient context and finished-formula substantiation boundaries.
2. Formula-in-context cards for six ingredient groups, a skin-layer hotspot figure, and a compact usage sequence.
3. Seven approved research references, secure outbound links, and the disclaimer that research on individual ingredients is not a claim about the finished product.
4. A native `<details>/<summary>` FAQ, using only the six owner-authorized questions and answers.

The formula content underwent careful reference cleanup. Early lists held nine, then eight, then the approved current **seven** sources. The currently uncited Argireline/SNAP-8 sentence must remain uncited. The Karger ectoin reference must remain at the owner-supplied Karger URL rather than a PubMed substitute.

### 5.3 Device teardown and hero experiments—intentionally removed/reconciled

There were several design attempts around an exploded device anatomy: photo slicing, a vector illustration, scroll-driven separation/reassembly, observable labels, and internal component concepts. The owner explicitly removed the entire device-teardown/anatomy feature. Do not reintroduce `DeviceAnatomySvg`, its labels, an anatomy nav target, the old scroll listener, or its CSS.

The hero was also refined through dark pinned-scroll variants and scroll choreography. Conflicting dark/light rules and `mix-blend-mode: multiply` once caused invisible product imagery. The final intended treatment is a light hero with visible product imagery, semantic text, stable LCP behavior, and no hero opacity-zero entrance effect.

### 5.4 Typography, accessibility, metadata, payload, and interaction cycles

Several focused cycles fixed quality and implementation issues:

* **Typography:** Manrope and DM Mono were completely removed. Newsreader, Inter, Inter Tight, and IBM Plex Mono are now local WOFF2 assets with preload and fallback metric work.
* **Accessibility:** Skip links; emerald focus rings; 24px hotspots; transparent hit-area overlays for compact links; pinch zoom restored; protocol ARIA wiring; FAQ native keyboard operation; reduced-motion behavior.
* **Hero/links:** Default browser/Shadcn indigo leakage was addressed with per-surface link classes and direct responsive validation.
* **Performance:** LCP hero uses eager/high priority and matching image preload; below-fold images are lazy; decoding is async; responsive `srcset`/`sizes` are active; Formula Detail is lazy loaded while Home remains eager; cache policy is immutable for static assets and no-cache for HTML.
* **Crawlability:** Canonical, Open Graph, Twitter, Organization, Product, FAQPage data, robots, sitemap, raw Formula Detail metadata, and raw policy titles were added.

### 5.5 Cycle 7 still media system and later media reconciliation

Cycle 7 generated the gold/ruby/pale-pink/black-marble still system. The non-video visual system is active and includes the hero/system image, serum visual, standalone device visual, ingredient map, ritual poster, and share image. Cycle 8 corrected an important poster/video mismatch by restoring the legacy poster while the old fallback ritual video was still active.

Cycle 9 then rebuilt responsive still derivatives from approved masters rather than generating new media, added video pause control, improved alt text, repaired hotspot focus, added route metadata, restored crawler files, and protected source behavior through `site-contract.test.ts`.

### 5.6 Cycle 10 and Cycle 11 content/navigation completion

Cycle 10 added the founder statement, sticky 72px header with anchor clearances, footer policy scaffold, and enforced light color scheme. Cycle 11 moved the founder statement below the hero, standardized the canonical product name, improved policy placeholders, and added the six-question FAQ with matching FAQPage JSON-LD.

The exact founder statement is:

> Vetted by our founder — a physician with 30 years of experience.

It is a paragraph, not a heading, and remains immediately after the hero, before the system section. It is not sticky.

### 5.7 Cycle 12: ritual continuity, zero-generation sequence, and device-scale audit

An owner-authorized two-beat generative ritual-video attempt was tried. The serum beat rendered, but the device beat encountered the available daily generation limit. The owner then retired that serum beat from production, declaring it reference-only, and introduced three permanent requirements:

1. Ritual duration relaxed to **8–16 seconds**; the MP4-under-2MB cap remains.
2. Device must always read as palm-scale.
3. Ritual staging must be light, pale pink, and airy; no dark bathroom.

Instead of consuming more credits, a **zero-generation** 16-second portrait stills sequence was built from existing Cycle 7 masters. The owner reviewed and approved it. It replaced the legacy fallback source together with an exact first-frame poster.

### 5.8 Recent integration, portability, and apex-domain work

The approved Cycle 12 ritual sequence was integrated, then tested across 1440/1024/768/680/390px. Subsequently the owner discovered that a fresh GitHub clone built without any images, media, or fonts because the site relied on runtime `/manus-storage/` paths. The project was therefore converted to a portable local-asset build.

Finally, the canonical host was changed from the old Manus domain to the apex **`https://bellanissascience.com`**. A regression test now prevents a silent server HTML rewrite mismatch: every literal passed to `.replace()` or `.replaceAll()` in `server/index.ts` must be present in `client/index.html`.

---

## 6. Current routes and user-facing structure

| Route | Purpose | Notes |
|---|---|---|
| `/` | Main marketing experience | Hero, post-hero founder statement, product/system sections, ritual media, ingredient context, method/protocol, FAQ, footer. |
| `/formula` | Formula Detail dossier | Ingredient-evidence context, substantiation boundaries, separate raw and client metadata, serum image. |
| `/contact` | Placeholder | `Contact` h1, one sentence that policy is being prepared, home link. |
| `/privacy` | Placeholder | `Privacy Policy` h1, same approved minimal sentence, home link. |
| `/terms` | Placeholder | `Terms of Service` h1, same approved minimal sentence, home link. |
| `/shipping-returns` | Placeholder | `Shipping and Returns` h1, same approved minimal sentence, home link. |
| `/accessibility` | Placeholder | `Accessibility Statement` h1, same approved minimal sentence, home link. |

### Header and anchor behavior

The header is sticky at `top: 0`, with `z-index: 50`, a 72px height, paper/blur background, and a hairline/shadow only after scrolling. Every ID target uses `scroll-margin-top: calc(var(--sticky-header-height) + 16px)`, producing 88px clearance. Do not remove this; it protects links to system, method, protocol, and ingredient reference targets.

---

## 7. Formula, references, and approved FAQ

### 7.1 Current ingredient groups and approved reference mapping

| Card | Ingredient group | Approved reference mapping |
|---|---|---|
| 01 | Epidermal growth factor (sh-Oligopeptide-1) and peptides | 1 — JDD 2012 EGF study |
| 02 | NAD+ | 2 — *Antioxidants (Basel)* |
| 03 | Niacinamide (vitamin B3) and adenosine | 3 — *International Journal of Molecular Sciences*; 4 — *Ageing Research Reviews* |
| 04 | Ectoin | 5 — Karger / *Skin Pharmacology and Physiology* |
| 05 | Hyaluronic acid (sodium hyaluronate) | 6 — *Dermatology and Therapy* |
| 06 | Topical glutathione | 7 — *Antioxidants* |

The Formula Detail language repeatedly distinguishes ingredient research from finished-product proof. Keep this discipline. All current citation links use `target="_blank" rel="noopener noreferrer"`.

### 7.2 Exact disclaimers

These strings are deliberate and must remain exact unless the owner changes them:

> Bella Nissa Science products are cosmetics. They are not intended to diagnose, treat, cure, or prevent any disease.

> References describe published research on individual ingredients. They are not claims about this finished product.

### 7.3 Approved FAQ

The Home FAQ contains exactly six owner-authorized questions:

1. How do I use the serum and the device together?
2. Do I need the device, or can I use the serum on its own?
3. Is this a cosmetic or a medical product?
4. Are the studies you cite about this finished product?
5. Which ingredients are in the formula, and why these together?
6. Where can I read more about the formulation?

Visible FAQ answers and static FAQPage JSON-LD must stay textually aligned. Do not add unverified common questions about price, delivery, warranty, battery, charging, waterproofing, fragrance, vegan/cruelty-free status, origin, patch tests, clinical participants, shelf life, or timing of results.

---

## 8. Current media system and exact active ritual behavior

### 8.1 Portable asset layout

All active visual and font files are now included under local public paths:

```text
client/public/media/   52 image/video assets
client/public/fonts/    4 local WOFF2 font files
```

The total `client/public` size is about **5.0 MB** after removal of an unused 4.31 MB ritual-mineral PNG. A portable production build outputs the corresponding 56 local media/font files. Do not reintroduce a storage-only asset reference, the removed `vitePluginStorageProxy`, `BUILT_IN_FORGE_API_URL` access for storage, or the old `client/public/__manus__/debug-collector.js` path.

### 8.2 Active ritual media

| Asset | Current local public path | Details |
|---|---|---|
| Active MP4 | `/media/bns-cycle12-stills-ritual-review_9dd7299d.mp4` | H.264, 720×1280, 24fps, 16.000s, 969,118 bytes. |
| Active WebM | `/media/bns-cycle12-stills-ritual-review_f0682928.webm` | VP9, 720×1280, 247,695 bytes. |
| Active poster | `/media/bns-cycle12-stills-ritual-review-poster_ea33111f.jpg` | JPEG exported from decoded frame zero, 720×1280, 76,070 bytes. |
| Video description | “A slow product sequence shows the ruby-red serum with a warm polished gold cap on polished black marble against a pale pink ground, then cross-dissolves to the companion device.” |

This video is a **product stills sequence**. It does not show a person, hands, skin, or application. Its ARIA wording was intentionally changed to remain honest. Do not change it back to application language.

Validation of the integrated sequence found:

* Serum frame first and device frame later; temporal order is correct.
* Poster and video share 9:16 geometry. The decoded poster comparison recorded **SSIM 0.996658**; the small delta is expected JPEG compression difference.
* Brightest sampled chip-region source pixel was `#FFFFFF`; after only the chip scrim, chip text retained a conservative **10.73:1** contrast ratio, exceeding 4.5:1.
* No visible layout or image-source regression was seen at 1440, 1024, 768, 680, and 390px.
* Video remains muted, looped, inline, metadata-preloaded, with an accessible play/pause control. Under reduced motion, it does not autoplay and the poster is shown.

### 8.3 Current static scale problem

Current static imagery does **not** meet the permanent palm-scale rule:

| Asset family | Current location | Assessment |
|---|---|---|
| Paired product-system master and derivatives | Home hero/LCP image | Device’s broad width reads approximately bottle-height; oversized. |
| Standalone device master and derivatives | Device/product sections | No external scale reference; full-frame disc reads as a large tabletop object. |
| Ingredient-map master and derivatives | Formula-in-context figure | Device is large against a stylized skin diagram; scale reads oversized. |
| Share image | OG, Twitter, Product JSON-LD | Repeats the paired master’s oversized device reading. |

The Formula Detail page has no device image. The active ritual poster is serum-first and unaffected; the current ritual device beat is a video frame without external scale reference and still feels visually too large.

### 8.4 Correct remediation order

1. **Paired product-system master** (highest priority). Retain the 30mL bottle as explicit scale reference; make device clearly smaller than the bottle’s height; then deterministically rebuild responsive derivatives and share crop only after owner approves the master.
2. **Standalone device master.** Make the object unambiguously compact/palm-scale; then rebuild responsive derivatives. Potential later ritual rebuild requires a fresh owner review.
3. **Ingredient-map master.** Targeted edit/regeneration preserving the educational diagram while reducing device proportion; then rebuild derivatives and validate hotspot geometry.

The first request was owner-authorized as **one** reference-guided attempt. Its exact service error was:

> `generator:Upload failed, sandbox returned an error: Failed to upload any of the 1 files`

No generated image was produced, and the error had no quota/reset message. The owner specifically instructed no retry after a refusal/failure. Consequently, do not retry without renewed instruction.

---

## 9. Structured data and SEO state

### 9.1 Current document head

`client/index.html` contains static, crawler-visible:

* canonical URL;
* primary meta description;
* Open Graph title, description, URL, type, site name, image, image dimensions, and image alt;
* Twitter large-image card metadata;
* Organization JSON-LD;
* Product JSON-LD;
* FAQPage JSON-LD;
* hero image LCP preload and font preloads;
* light color-scheme declaration.

All canonical and social root paths now point to **`https://bellanissascience.com`**. The canonical host was intentionally switched to the apex, not `www`.

### 9.2 Raw server metadata behavior

`server/index.ts` reads the built HTML template and rewrites it by exact strings for `/formula`, then changes raw title/canonical/Open Graph/Twitter values before React hydration. Policy routes receive raw titles through `renderPolicyDocument()`.

This exact-string strategy is fragile if `client/index.html` and the server literals drift. `site-contract.test.ts` now extracts every string literal supplied to `.replace()` or `.replaceAll()` in `server/index.ts` and asserts it is present in `client/index.html`. **Do not remove this regression guard.**

Raw validation most recently showed:

| Route | Title | Canonical/OG URL behavior |
|---|---|---|
| `/` | `Rejuvenating Bioactive Precision Serum | Bella Nissa Science` | `https://bellanissascience.com/` |
| `/formula` | `Rejuvenating Bioactive Precision Serum | Formula Detail | Bella Nissa Science` | `https://bellanissascience.com/formula` |
| `/privacy` | `Privacy Policy | Bella Nissa Science` | Intentionally retains root canonical/OG URL because policy raw renderer currently changes only title. |

`robots.txt` permits all agents and names the apex sitemap. `sitemap.xml` lists `/` and `/formula` only. FAQ is not a standalone route and should not be added.

### 9.3 Structured-data review completed 20 August 2026

A review against official Google Search Central Product and Organization guidance was completed. The review document is available outside the repository at:

```text
/home/ubuntu/bns-jsonld-review.md
```

Findings:

| Surface | Current markup | Interpretation |
|---|---|---|
| Homepage | Organization: `name`, apex `url`, SVG `logo`, cosmetic-safe description. Product: `name`, description, `brand.name`, absolute share image. FAQPage included. | Good baseline entity markup. Organization structure is appropriate for home page. |
| Product rich snippets | Product has no `offers`, `review`, or `aggregateRating`. | It is **not eligible for Google Product snippets** under current data. This is correct because offers/price/reviews must not be fabricated. |
| Formula route | Strong raw/client metadata but no independent Product JSON-LD. | It is not a Product JSON-LD rich-result candidate today. It is the most natural future product-schema route, but any addition needs owner-approved attributes and raw server injection. |

Future improvements only after verified facts are live and owner-approved:

1. Add Organization `@id` and reference it from Product `brand` for entity linking clarity.
2. Add raw-server Product JSON-LD to `/formula` using the canonical formula URL, actual product-specific image, and verified text.
3. Add `offers` only when verified price/currency/availability/purchase URL are visibly live on the exact page.
4. Add review or aggregate-rating fields only with genuine data; never fabricate customer reviews or ratings.
5. Verify the Organization logo is crawlable and qualifies under Google’s minimum-logo guidance.

Google does not guarantee rich-result display even for valid markup. Use Google’s Rich Results Test and Search Console URL Inspection after future deployment.

---

## 10. Accessibility and performance safeguards

| Area | Current implementation to preserve |
|---|---|
| Skip navigation | First focusable skip link, targeting the main landmark. |
| Keyboard focus | Custom emerald `:focus-visible`, generally 2px with 3px offset; hotspots have their own specificity-safe ring. |
| Target size | Ingredient hotspots at least 24×24px; compact links use transparent pseudo-element target overlays without layout shift. |
| Video | Visible accessible play/pause control; high-contrast chip scrim; reduced-motion disables autoplay. |
| Protocol | Buttons carry `aria-controls`; active step exposes `aria-current`. |
| FAQ | Native details/summary, keyboard operable, visible focus treatment, no reduced-motion animation. |
| Zoom | `maximum-scale=1` removed; pinch zoom remains usable. |
| Images | Hero eager/high priority; below-fold images lazy; all image decoding async; useful width/height and real `srcset`/`sizes`. |
| Fonts | Local Newsreader, Inter, Inter Tight, IBM Plex Mono; Newsreader, Inter, and mono preload; fallback metric compensation. |
| Caching | Hashed static media/font/JS/CSS cache immutable; HTML `no-cache`. |
| LCP | Keep hero as real text and product image; do not add opacity-zero/fade-in behavior or change loading semantics without measurement. |

---

## 11. Portability migration details

The site originally built on a clean clone with no visible assets because Vite left `/manus-storage/...` URLs unresolved at build time. The portability migration changed this.

| Before | After |
|---|---|
| Runtime storage paths throughout source | Local `/media/...` and `/fonts/...` public URLs |
| `vitePluginStorageProxy` tied to Manus Forge API | Removed |
| `client/public/__manus__/debug-collector.js` | Removed |
| 4 small public files; no built media/fonts | 52 media + 4 font files tracked and included in build |
| Git working source size about 760 KB | About 10.3 MB before cleanup; public media reduced to approximately 5.0 MB after unused 4.31 MB PNG removal |
| 12 site contracts | 13 after portability; 14 after canonical rewrite-drift test |

The image `bns-blonde-device-ritual-mineral-keyframe_7a913bcc.png` was a 4.31 MB file declared once as `ritualMineralStill` and unused. The owner approved deletion. The portability contract now asserts **56** local asset references, all of which must exist in the correct `client/public/media` or `client/public/fonts` directory.

---

## 12. Major files to inspect first

| File | Why it matters |
|---|---|
| `client/src/pages/Home.tsx` | Primary experience, asset registry, responsive image sources, ritual video behavior, claims, citations, FAQ, footer. |
| `client/src/index.css` | Clinical Atelier tokens, responsive layout, header, focus styling, video chip/control, FAQ, target overlays. |
| `client/index.html` | Static metadata, canonical/OG/Twitter, Organization/Product/FAQ JSON-LD, LCP/font preloads. |
| `client/src/pages/FormulaDetail.tsx` | Formula route UI, derivative sources, client-side metadata updates, evidence ledger. |
| `server/index.ts` | Cache headers and raw server metadata rewrites for Formula Detail/policy routes. |
| `client/src/site-contract.test.ts` | Regression guardrail suite. Update precise expectations rather than deleting protections. |
| `client/src/App.tsx` | Routes and lazy Formula Detail load. |
| `client/src/pages/PolicyPlaceholder.tsx` | Deliberately minimal legal/policy scaffold. |
| `CYCLE9_RITUAL_VIDEO_EXECUTION_BRIEF.md` | Historical long-form human ritual-video prompt. Review before any future human-video work, reconciling newer rules below. |
| `CYCLE12_RITUAL_CONTINUITY_LOCK.md` | Cycle 12 continuity, light staging, 8–16 second duration, palm-scale permanent rule. |
| `CYCLE12_APPROVED_MEDIA_INTEGRATION.md` | Active Cycle 12 stills-sequence integration and validation. |
| `CYCLE12_DEVICE_SCALE_REPORT.md` | Static scale audit and remediation order. |
| `CLAUDE_PROJECT_HANDOFF.md` | Earlier detailed handoff through Cycle 11; this document supersedes it for current state. |
| `todo.md` | Historical tracker. It contains stale umbrella items; do not interpret every unchecked older item as currently authorized work. |

---

## 13. Recent release and checkpoint chronology

| Commit/checkpoint | Meaning |
|---|---|
| `a1a34e24` | Cycle 6 payload/cache/interaction checkpoint. |
| `ee07f5e6` | Cycle 7 integrated gold/ruby/pink/marble still system. |
| `43439deb` | Cycle 8 restored legacy poster to match legacy fallback video. |
| `5fc29e2c` | Cycle 9 responsive images, video accessibility, metadata/crawler work, Formula Detail media consistency. |
| `072b24cd` | Cycle 10 trust bar, sticky header, policy scaffold, light color scheme. |
| `8ea79ab5` | Cycle 11 founder-bar move, canonical product naming, policy titles, FAQ/FAQPage. |
| `722b1cd1` | Cycle 12 preservation/health-audit/handoff checkpoint. |
| `19cb46dc` | Cycle 12 review-only documentation checkpoint. |
| `2042afab` | Approved zero-generation ritual MP4/WebM and first-frame poster integration. |
| `1d426e2c` | Portable local media/font migration. |
| `220bb78e` | Owner-authorized deletion of unused 4.31 MB ritual-mineral PNG. |
| `371cddcd` | GitHub main apex-domain canonical metadata migration and rewrite-drift regression guard. |
| `142ae0e1` | Current WebDev checkpoint-synchronized local commit with identical tracked source tree to `371cddcd`. |

---

## 14. What is genuinely pending now

Several old unchecked `todo.md` lines refer to superseded video briefs or umbrella Cycle 7 tasks. They are historical, not blanket authorization. The following is the real, current pending list.

| Priority | Pending work | Status / safe next step |
|---:|---|---|
| 1 | Corrected paired product-system master | One authorized attempt failed on reference upload, with no output. Wait for explicit owner instruction before any retry. On authorization, generate exactly one 1920×1080 master preserving all approved composition features and reducing only device scale. Show comparison before derivative rebuild, integration, commit, or checkpoint. |
| 2 | Standalone device and ingredient-map scale remediation | Not authorized yet. After paired-master approval, request/receive separate authorization. Follow the three-master remediation order in `CYCLE12_DEVICE_SCALE_REPORT.md`. |
| 3 | Deterministic derivatives/share after a corrected paired master | Do not perform until the owner approves that master. Rebuild derivatives and share crop deterministically; then test responsive output and JSON-LD/share image. |
| 4 | Long human-use ritual video | The active approved stills sequence is already live. The older 14–18s human serum/device brief remains a future optional creative work only; do not generate it unless owner explicitly asks. If it resumes, reconcile old specification with current 8–16s/light/palm-scale rules and take no quota polling or speculative attempt. |
| 5 | Structured data enhancement | Review completed only. No markup change authorized. Add richer Product/Organization data only with owner-approved verified commercial/contact/identity facts. |
| 6 | Policy pages | Await owner-supplied legal/policy text. |
| 7 | Domain deployment | Metadata uses `bellanissascience.com`, but no publish action was made. The owner must separately configure/bind DNS/domain hosting in the relevant UI and authorize publish. |

---

## 15. Validation and safe working sequence

For a normal source change:

```bash
cd /home/ubuntu/bella-nissa-science
pnpm test
pnpm check
pnpm build
git diff --check
```

For a visual change, restart the dev server and inspect the relevant page at least at 1440, 1024, and 390px; include 768/680px when media layout is involved. For metadata changes, build and start a local production server, then inspect raw HTML before hydration:

```bash
PORT=4174 NODE_ENV=production node dist/index.js
curl -fsS http://localhost:4174/
curl -fsS http://localhost:4174/formula
curl -fsS http://localhost:4174/privacy
```

For media changes, verify actual file geometry/bytes/duration, active source ordering, the exact first-frame poster relationship where applicable, and visual/contrast requirements. Do not infer video behavior from the poster alone.

Before any delivery or publish guidance, save a WebDev checkpoint. Do not publish automatically.

---

## 16. Suggested operating posture for a successor

1. Begin by reading this handoff, `Home.tsx`, `index.html`, `server/index.ts`, `site-contract.test.ts`, `CYCLE12_APPROVED_MEDIA_INTEGRATION.md`, and `CYCLE12_DEVICE_SCALE_REPORT.md`.
2. Confirm `github/main` and local WebDev checkpoint tree status before changing source.
3. Treat all cosmetic claims, name rules, device-scale rules, non-commerce scope, and no-policy-copy rules as hard constraints.
4. If the owner authorizes new image work, create only the explicitly authorized number of outputs, preserve reference composition, and stop for review before integration.
5. Keep media local and portable. Any new production media must be placed under `client/public/media` only if it fits the deployment/checkpoint limits; otherwise solve the workflow with the owner before committing it.
6. If updating crawler/head data, change the client template and server raw rewrite literals together, update contract tests, and run raw production `curl` checks.
7. When in doubt about a historic unchecked todo item, ask the owner instead of treating it as a new instruction.

---

## 17. Final concise statement

Bella Nissa Science is now a validated, portable, apex-domain-ready clinical-luxury serum/device site with local fonts/media, light Clinical Atelier design, a real 16-second product-only ritual sequence, strong accessibility and performance guardrails, product/organization/FAQ structured data, raw Formula Detail metadata, and careful cosmetic-claims boundaries. The key unresolved creative issue is device scale in existing static imagery. The initial corrected paired-master request produced no output because the generation service could not upload its reference file; the site itself remains untouched by that failed attempt. Wait for the owner before retrying or integrating any scale-correction work.
