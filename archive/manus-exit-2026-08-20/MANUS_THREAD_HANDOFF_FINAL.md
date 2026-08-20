# Bella Nissa Science — Final Manus Thread Handoff

> **Archive purpose.** This document is the self-contained continuation record for the Bella Nissa Science project. It preserves the substantive history of the complete Manus thread through commit `3bd5ff8e9ed99610e8230319ab0db6a228865c39` on 2026-08-20, including owner instructions, design decisions, generation attempts and failures, active versus rejected media, validation, Git history, and pending work. It is deliberately written so a successor does not need access to the original chat to operate safely.

## 1. Authoritative current state

| Item | Final archived state |
|---|---|
| Repository | `https://github.com/jrazamd-cloud/bella-nissa-science` |
| Branch | `main` |
| Release revision before this documentation commit | `3bd5ff8e9ed99610e8230319ab0db6a228865c39` — deterministic Cycle 13 ritual-motion replacement |
| Project path | `/home/ubuntu/bella-nissa-science` |
| Stack | React 19, TypeScript, Vite 7, Tailwind CSS 4, Wouter, Express 4, Vitest |
| Canonical host | `https://bellanissascience.com` — apex only, no `www` change requested |
| Current contract suite | 17 `site-contract` tests at the time of the final ritual-motion validation |
| Active primary product | **Rejuvenating Bioactive Precision Serum** — `30 ML (1.01 FL OZ)` |
| Current business scope | Informational clinical-luxury cosmetic marketing site. No commerce, pricing, offers, checkout, subscriptions, email capture, reviews, ratings, or testimonials. |
| Publish/deploy status | Never publish or deploy automatically. No publishing was authorized in this thread. |

The page is a light **Clinical Atelier** product experience. Its active hero now uses the approved Cycle 13 palm-scale paired product system. Its active ritual section now uses a deterministic three-beat motion sequence rather than the earlier 16-second two-still slideshow. The standalone-device and ingredient-map Cycle 13 review candidates are **not integrated**.

## 2. Permanent owner constraints

| Area | Non-negotiable rule |
|---|---|
| Product name | Always use **Rejuvenating Bioactive Precision Serum**. Do not reintroduce “Bioactive Renewal Serum.” The ingredient-context phrase “skin’s natural renewal” remains valid and must not be globally replaced. |
| Claims | Cosmetic appearance language only. Do not claim repair, stimulation, inhibition, prevention, photoaging prevention, healing, treatment, cure, clinical delivery, or disease outcomes. The only permitted occurrences of restricted medical words are in owner-approved disclaimers. |
| Product art | Pale desaturated pink ground; polished black marble under products only; translucent ruby-red serum; warm polished gold cap, label, controls, monogram, seams, and trim. **Gold wins** over every older silver/chrome instruction. No brassy/yellow-green metal, no cool grey hardware. |
| Device scale | Permanently a compact palm-sized instrument, approximately three to four fingers wide. It must never read as comparable to bottle height, dominate a cheek, or approach face size. |
| Live active device art | The hero is corrected and active. The standalone-device and ingredient-map source art still use their older active Cycle 9 derivatives; unapproved review candidates must not be integrated. |
| Video and media | No generative image/video call unless the owner explicitly authorizes a specific attempt. Respect exact allowed attempt count. Never retry after a refusal/error unless the owner specifically permits the stated fallback. |
| Policy/legal copy | Five policy routes are scaffolds only; leave the visible single sentence “This policy is being prepared.” Do not invent legal, privacy, shipping, return, warranty, accessibility, or commerce terms. |
| FAQ facts | Only the six owner-approved questions and answers are permitted. Do not invent delivery timing, refunds, pricing, battery/charge data, waterproofing, vegan/cruelty-free/fragrance claims, testing data, manufacture location, or timelines. |
| Data-export modal | Owner dismissed it; no export action or inferred action was authorized. |
| Hosting | No plan upgrade. No publication/deployment. If publishing is later desired, owner uses the WebDev UI after a new checkpoint. |
| Rejected candidates | The Cycle 13 standalone-device and ingredient-map review candidates are archived only. Do not treat them as approved source media. The ingredient-map candidate visibly says **“PRECISIONS SERUM”** and breaks diagram/hotspot geometry; it must never be used. |

The two approved disclaimer strings are exact and must be preserved:

> Bella Nissa Science products are cosmetics. They are not intended to diagnose, treat, cure, or prevent any disease.

> References describe published research on individual ingredients. They are not claims about this finished product.

## 3. Design system and current user-facing structure

The website started from an older beauty concept and was fully repositioned as Bella Nissa Science: a serum and a companion absorption/massage device presented as a coordinated cosmetic ritual. The design evolved from white/silver/emerald to the current warm gold/ruby/pale-pink/black-marble system. Typography is self-hosted **Newsreader** (display), **Inter** (body/UI), **Inter Tight** (smaller headings), and **IBM Plex Mono** (labels, kickers, numerals). No Manrope or DM Mono remains.

| Route | Current behavior |
|---|---|
| `/` | Home: semantic hero, founder bar, system cards, ritual video, formula/ingredient education, protocol/use sequence, FAQ, footer. |
| `/formula` | Formula Detail dossier with its own client and raw server metadata and Cycle 9 serum responsive sources. |
| `/contact` | Contact h1, one-line placeholder, home link. |
| `/privacy` | Privacy Policy h1, one-line placeholder, home link. |
| `/terms` | Terms of Service h1, one-line placeholder, home link. |
| `/shipping-returns` | Shipping and Returns h1, one-line placeholder, home link. |
| `/accessibility` | Accessibility Statement h1, one-line placeholder, home link. |
| Unknown path | Server returns HTTP 404, serves fallback HTML with `<meta name="robots" content="noindex" />`; this prevents the prior soft-404 response. |

The header is sticky, 72px maximum height, `z-index: 50`, with a scrolled hairline/shadow state. All in-page targets reserve an 88px effective clearance. The founder bar is a non-sticky paragraph immediately after the hero and must retain the exact text: **“Vetted by our founder — a physician with 30 years of experience.”**

## 4. Early build and major historical decisions

### Initial brand and content direction

The owner first requested a website for the renamed brand **Bella Nissa Science**, a serum and companion device, using a scientific BNS lockup, medical/scientific typography, frosted packaging, emerald accents, and initially silver hardware. The owner later directed the final art direction: ruby-red serum, pale-pink backgrounds, black-marble product supports, and warm polished gold hardware. The packaging lockup is Bella Nissa / Science / BNS / Rejuvenating Bioactive Precision Serum / 30mL (1.01 fl.oz).

The owner supplied educational skin-aging copy. It was edited into cosmetic-safe serum/device guidance, then expanded into Formula Detail, an interactive use sequence, ingredient hotspots, six ingredient cards, seven references, and a claims-safe FAQ. Unsupported clinical or therapeutic framing was progressively removed.

### Device anatomy and early motion were intentionally removed

Several iterations explored a device exploded view: photo slicing, actual-photo construction, an inline vector device anatomy illustration, an assembly/reassembly scroll sequence, observable labels, and an “illustrative internal concept” caption. The owner ultimately directed that the entire teardown/anatomy feature be deleted. Do not recreate it without a new request.

Early ritual imagery featured a woman using the device. It was later found visually weak and inconsistent. Subsequent media direction moved toward product-led still systems. The current live ritual is explicitly product-only: no hands, face, skin application, or person are described in its aria label.

### Hero, link, typography, and performance refinements

The project went through multiple defects and targeted fixes. They matter because a future edit can accidentally regress them:

1. Removed an empty closing card and fixed mobile overlap.
2. Removed default indigo/Tailwind primary leakage; links are surface-aware with visible emerald focus states.
3. Removed hero-to-section dead space and retired the device anatomy section.
4. Reconciled the dark-versus-light hero conflict. The final hero is light, pale pink, semantic text, normal compositing, **no `mix-blend-mode: multiply`**, and not opacity-zero animated because it is the LCP asset.
5. Replaced Manrope/DM Mono with the current self-hosted font system. Hero descenders, masked glyph edges, and kicker dots were repaired.
6. Added skip navigation, 24px interactive target safety, protocol `aria-controls`, `aria-current`, visible pause/play, reduced-motion no-autoplay, pinch zoom, and light color scheme declaration.
7. Right-sized raster assets, responsive `srcset` delivery, image dimensions, hero preload/fetch priority, font preloads/fallback metrics, JS chunk reductions, and cache policy.

## 5. Formula, citations, FAQ, metadata, and structured data

The formula area is educational context about individual ingredients—not proof of the finished product. It contains six cards and a seven-reference list:

| Card | Ingredient group | Current reference mapping |
|---|---|---|
| 01 | Epidermal growth factor (sh-Oligopeptide-1) and peptides | JDD 2012 EGF study, reference 1. The Argireline sentence deliberately has no superscript. |
| 02 | NAD+ | *Antioxidants (Basel)*, reference 2. |
| 03 | Niacinamide and adenosine | *International Journal of Molecular Sciences* and *Ageing Research Reviews*, references 3 and 4. |
| 04 | Ectoin | Karger / *Skin Pharmacology and Physiology*, reference 5. Keep Karger, not a PubMed replacement. |
| 05 | Hyaluronic acid / sodium hyaluronate | *Dermatology and Therapy*, reference 6. |
| 06 | Topical glutathione | *Antioxidants*, reference 7. |

The FAQ has exactly six native `details/summary` questions. It is duplicated as static FAQPage JSON-LD in `client/index.html`; any FAQ text change must update both visible Home data and static JSON-LD.

### Structured-data review outcome

The current Home head includes Organization JSON-LD, Product JSON-LD, FAQPage JSON-LD, canonical, Open Graph, and Twitter metadata. Formula Detail has correct raw and client metadata, but no independent Product JSON-LD. The Product markup intentionally omits unverified offers, price, aggregate rating, and review data. Consequently, it should not be represented as eligible for Google Product rich results without verified data. The review record is archived as `archive/manus-exit-2026-08-20/bns-jsonld-review.md`.

### Canonical host, policy canonical fix, and 404 fix

The canonical host is the registered apex **`https://bellanissascience.com`**. The old `manus.space` host was removed from production source paths. A contract test guards that `server/index.ts` rewrite literals remain synchronized with `client/index.html` so Formula metadata cannot silently inherit home tags.

Commit `d1a1ad85` corrected two server defects:

1. `renderPolicyDocument(template, title, routePath)` now computes `routeUrl` and rewrites both canonical and `og:url`, so every policy route self-references.
2. `knownRoutes` distinguishes known client routes from unknown URLs. Unknown paths receive a status 404 plus a noindex meta, replacing the old catch-all HTTP 200 soft 404.

Production curl validation at that commit confirmed `/` and `/formula` remained unchanged; each policy route returned status 200 with its own title/canonical/OG URL; `/unknown-route` returned status 404 and noindex.

## 6. Media chronology and exact current active state

### Cycle 7 through Cycle 11 still system

Cycle 7 generated the cohesive ruby/gold/pink/marble still system. Cycle 9 deterministically generated local JPEG/WebP responsive derivatives. Cycle 9 also fixed Formula Detail source mismatch, real `srcset`s, video pause/play, focus-visible hotspots, alt text, metadata, robots, sitemap, and the source/reference discipline.

The project is now portable: commit `1d426e2` copied previously Manus-hosted images, video, fonts, favicons, and metadata assets under `client/public/media` and `client/public/fonts`; it removed the Manus storage proxy and debug collector. Commit `220bb78e` removed one unused 4.31 MB PNG to satisfy project checkpoint size policy. The portable set contains 56 local media/font assets before subsequent Cycle 13 additions.

### Active visual source table as of `3bd5ff8e`

| Use | Active file / status |
|---|---|
| Hero master | `client/public/media/bns-cycle13-master-product-system-palmscale_b5e76dad.jpg` — approved Cycle 13 palm-scale paired system, 1920×1080. |
| Hero derivatives | `bns-cycle13-hero-{480,768,1024,1440,1920}_*.jpg` and matching WebP family. |
| Active share image | `bns-cycle13-share-1200x630_6652c931.jpg`. |
| Standalone serum | Existing Cycle 9 responsive derivative family from Cycle 7 serum master. |
| Standalone device | Existing Cycle 9 responsive derivative family from Cycle 7 device master. It remains active; its Cycle 13 candidate is unapproved. |
| Ingredient map | Existing Cycle 9 responsive derivative family from Cycle 7 map master. It remains active; its Cycle 13 candidate is unapproved. |
| Active ritual MP4 | `client/public/media/bns-cycle13-ritual-motion_1bd80b38.mp4` — H.264, 720×1280, 30fps, 12.600s, 915,431 bytes. |
| Active ritual WebM | `client/public/media/bns-cycle13-ritual-motion_df4a3898.webm` — VP9, 720×1280, 30fps, 12.600s, 354,069 bytes. |
| Active ritual poster | `client/public/media/bns-cycle13-ritual-motion-poster_995f5a51.jpg` — exact first frame, 720×1280, 65,093 bytes. |
| Superseded ritual files | Retained. Do not delete Cycle 7/Cycle 9/Cycle 12 ritual files. |

The active ritual aria label is exact:

> A slow product sequence moves in on the ruby-red serum with its warm polished gold cap on polished black marble against a pale pink ground, travels across to the compact companion device, then settles on the two together.

The source contract rejects aria wording that suggests applying, application, massage, skin contact, a face, or cheek. The visible keyboard-reachable play/pause control, muted/loop/playsInline behavior, `preload="metadata"`, and reduced-motion no-autoplay must stay intact.

## 7. Complete media-generation record and known prompt availability

This table records every generation-related attempt known from this thread and the preserved output or exact failure. Earlier cycles happened before a full raw-prompt transcript was preserved; for those, the owner request and commit purpose are the surviving record. Do not invent a missing exact prompt. The later Cycle 12 and Cycle 13 prompts are preserved below or in the committed lock/README files.

| Era / attempt | Prompt record and outcome | Status |
|---|---|---|
| Initial brand assets | The owner requested BNS scientific/medical lockups, frosted white bottle/device art, then revised silver to gold/ruby/pale-pink/marble direction. Early generated images and the initial human ritual were incorporated during early checkpoint commits. The exact tool payloads from the first chat exchanges were not persisted as files. | Historical; superseded by later art direction. |
| Device exploded/assembly graphics | Several generated or composited approaches failed to show real internal components convincingly. The owner removed the entire section. | Permanently removed. |
| 4K ritual replacement attempts | The requested 4K rendering was not completed. Historical checkpoint `3ed2d6a9` records the daily video-generation limit blocked the attempt; its exact service string was not retained in a source file. | No active 4K output. |
| Cycle 7 still-media consolidated pass | Gold/ruby/pale-pink/marble still media was generated and integrated in `ee07f5e6`. The parallel long video remained quota-blocked. | Current still system evolved from this pass. |
| Cycle 12 serum beat video | The exact prompt is preserved in `CYCLE12_RITUAL_CONTINUITY_LOCK.md`, sections “CONTINUITY LOCK” and “Beat 1 — serum application.” It was an 8-second 720×1280 H.264 serum application request with pale pink, black marble, gold hardware, ruby drops, no residue, no fast cuts, no text/audio. Output: `/manus-storage/bns-cycle12-serum-beat_61e0a461.mp4`, 720×1280, 24fps, 8.000s, 2,095,656 bytes. | Retired reference-only; never integrate. Internal continuity failed: dark robe/device-at-jaw in early frames, later wardrobe/staging drift, residual red forehead mark, and pale/clear bottle appearance. |
| Cycle 12 device beat video | Exact intended prompt is the “Beat 2 — device application” block in `CYCLE12_RITUAL_CONTINUITY_LOCK.md`. | Not rendered. Exact refusal: `You've reached today's free plan limit for video generation (1/1) - please upgrade or wait for your quota to reset.` |
| Cycle 12 zero-generation review | No generation. Existing Cycle 7 serum/device masters were made into a 16s stills review MP4/WebM. Owner later approved it, and it was integrated in `2042afab`; it was later superseded by Cycle 13 deterministic motion. | Superseded but retained. |
| First Cycle 13 paired-system attempt | A file-upload/reference path was attempted before a generated image existed. | Exact error: `generator:Upload failed, sandbox returned an error: Failed to upload any of the 1 files`. No image from that failed call. |
| Cycle 13 paired-system successful review | The owner-authorized edit prompt required the current paired master composition, pale pink, black marble, ruby serum, warm gold, no people, and a compact three-to-four-finger device visibly shorter than bottle height. The local project reference route succeeded. Raw output: `media-masters/cycle13-review/bns-palm-scale-product-system-review.png`, 2560×1440. | **Approved** and deterministically integrated in `e23563ef`. |
| Cycle 13 standalone-device review | The owner-authorized local-reference prompt required a 1440×1920 portrait, generous pale-pink negative space, black marble only under the device, compact palm-scale device, and the same white/gold Cycle 13 design. Raw generated output: `media-masters/cycle13-review-device/bns-palm-scale-device-review.png`, 1632×2176. | **Unapproved.** Archived in `21b524a5`; not integrated. |
| Cycle 13 ingredient-map review | The owner-authorized local-reference prompt required 1920×1080 while preserving stylized skin-layer bands, all callout/label/hotspot geometry, and changing only device scale. Raw generated output: `media-masters/cycle13-review-ingredient-map/bns-palm-scale-ingredient-map-review.png`, 2560×1440. | **Rejected.** Diagram geometry/callouts changed and bottle label reads **PRECISIONS SERUM**. Archived in `16149726`; never integrate. |
| Cycle 13 ritual motion | No generation. Pillow/ffmpeg transformation of existing repository stills created three beats, cross-dissolves, WebM, and first-frame poster. | **Active** in `3bd5ff8e`. |

### Exact preserved Cycle 12 prompt payloads

The following values are verbatim from the committed continuity lock. They are the most complete raw generation prompt record in the repository.

```text
CONTINUITY LOCK — Use the same blonde adult woman in both clips: fair-neutral luminous skin tone, shoulder-length soft honey-blonde hair parted slightly off-centre, wearing the same ivory silk camisole with a minimal thin gold chain. Use the same calm, refined pale-pink bathroom/vanity setting throughout: a soft desaturated pale-pink ground, a shiny polished black-marble counter with very subtle white-grey veining, the same frosted Bella Nissa Science serum bottle and rounded companion device with restrained warm polished-gold cap, collar, BNS monogram, lettering, trim, ring, and controls. Keep the same warm diffused key light from camera-left/front at 45 degrees, soft amber fill from camera-right, gentle low-contrast shadows, no ring-light arc. Use the same intimate chest-up three-quarter portrait framing with face and neck fully visible, camera about one metre away, 85mm portrait-lens feel, shallow but stable depth of field, locked eye-level camera, no zoom. Use the same calm clinical-luxury colour grade: creamy highlights, pale blush pinks, deep neutral black marble, restrained warm gold, natural dewy skin, no cool cast. Beat two must look like the next still moment in the same continuous take, with unchanged wardrobe, subject, setting, camera, lighting direction, light intensity, lens feel, framing, and grade.
```

```text
Serum beat only, first in the ritual. Start and end with the woman calmly facing three-quarter camera at the vanity, face and neck fully visible and still. In one unhurried, elegant movement, she opens a warm-polished-gold-capped dropper and places several thin, translucent ruby-red, slightly fluid serum drops on her forehead, both cheeks, jawline, and neck. The frosted bottle may sit visibly on the black-marble counter. Use delicate fingertip placement only. Her gestures must be precise, controlled, and expensive, with no wiping, smearing, dragging, or skin pulling. Leave a still, naturally dewy face-and-neck frame in the final second so a clean cut or a 0.5-second soft cross-dissolve can lead into the next beat. No on-image text or audio.

Avoid opaque white serum, cream, gel, pearl-texture product, silver, chrome, cool-grey metal, brassy or yellow-green metal, a silver dropper cap, white or clear serum, residue, red-stained skin, wiping, smearing, dragging, skin pulling, rushed gestures, fast cuts, speed ramps, camera shake, zoom transition, absent neck, generic device geometry, unreadable packaging, extra brands, text overlays, price, watermarks, sound, low-resolution artifacts, flicker, ring-light glare, and medical-treatment framing.
```

```text
Device beat only, second in the ritual. Begin from the same still chest-up, three-quarter portrait moment at the vanity, with face and neck fully visible. The ruby-red serum is fully absorbed before this beat begins: skin is luminous, dewy, and gently glistening with no red tint, streak, residue, or wet coating. With the warm-polished-gold-trim companion device, make slow, deliberate passes along the jawline, cheekbone, under-eye area, and neck in upward strokes. Maintain an elegant calm expression and light, controlled contact. Finish on a still relaxed portrait for a seamless loop. No on-image text or audio.

Avoid opaque white serum, cream, gel, pearl-texture product, silver, chrome, cool-grey metal, brassy or yellow-green metal, a silver dropper cap, white or clear serum, residue during the device beat, red-stained skin, wiping, smearing, dragging, skin pulling, rushed gestures, fast cuts, speed ramps, camera shake, zoom transition, absent neck, device-only footage, serum-after-device order, generic device geometry, unreadable packaging, extra brands, text overlays, price, watermarks, sound, low-resolution artifacts, flicker, ring-light glare, and medical-treatment framing.
```

The exact full Cycle 13 local-reference prompt texts are preserved by the chronological owner instructions in the current project conversation and their archived raw/candidate READMEs. Their key non-negotiable values are fully recorded in the table above: local project reference input, exactly one generated image, no upload-path fallback unless local reference failed before generation, specific output geometry, no people/hands/faces, pale pink/gold/ruby/marble system, and device-only scale correction. The successful and rejected outcomes are archived under `media-masters/`.

## 8. Cycle 12 and Cycle 13 detailed chronology

### Cycle 12: continuity, storage, and first approved stills review

1. The owner authorized one complete video attempt using two coordinated 8s renders plus deterministic joining, with a continuity lock. The serum beat generated; the second device render was refused at the 1/1 daily free-plan limit. No retry occurred.
2. The serum beat was preserved with three extracted review frames. The owner rejected it for production because it lacked internal continuity and was too dark. It remains reference-only.
3. The owner amended the art direction: 8–16 seconds (rather than 14–18), permanent palm-scale device, light/airy clinical atelier, pale pink ground, black marble only under products, and no dark bathroom staging.
4. A zero-generation 16s still review sequence was built from approved Cycle 7 masters, shown, owner-approved, and integrated in `2042afab` with a JPEG first-frame poster. It had 10.73:1 conservative ritual-chip contrast and passed responsive/test/type/build checks.
5. The original 0.6s dissolve could not be visually verified by an earlier analyzer, but later active work replaced the sequence entirely with the Cycle 13 motion sequence.

### Portability, domain, archive, and final project safety work

1. The initial portable-site audit revealed 57 `/manus-storage` references that would fail outside Manus. Commit `1d426e2` copied assets/fonts into `client/public`, replaced storage URLs, removed a Manus-only proxy/debug collector, and added source contracts.
2. The archive checkpoint was initially blocked by an unused 4.31 MB ritual-mineral PNG. Owner chose removal. Commit `220bb78e` removed the dead `ritualMineralStill` entry and PNG, reducing the portable set to 56 relevant assets.
3. Commit `371cddcd` changed canonical metadata to `https://bellanissascience.com` and added a literal rewrite-drift guard.
4. Commit `a9246551` archived 461 sandbox-only artifacts (386,115,089 bytes) under `archive/manus-exit-2026-08-20`, including Cycle 12 media/review materials, handoffs, scripts, early assets, and validation frames.
5. The project was additionally audited on a fresh clone and production server multiple times. At the final Cycle 13 ritual validation, all active media was locally vendored and the build had no unresolved-storage warnings.

### Cycle 13: palm scale, analytics, crawlability, and motion

| Commit | Cycle 13 action and outcome |
|---|---|
| `c91a1269` | Preserved unapproved paired palm-scale review raw/candidate comparison. |
| `e23563ef` | Approved paired palm-scale master integrated. Derived 1920×1080 master, five JPEG/WebP hero widths, and 1200×630 share crop from raw 2560×1440 candidate. Hero now reads device as smaller than bottle height. |
| `21b524a5` | Preserved unapproved standalone-device candidate and comparison. Do not use. |
| `b172958e` | Added `bns-strip-unconfigured-analytics` Vite HTML transform. It removes Umami script only when endpoint/website ID are unset or placeholders. Test checked both unconfigured removal and configured substitution. |
| `16149726` | Preserved rejected ingredient-map candidate and comparison. Do not use; it changes hotspot-sensitive diagram geometry and spells “PRECISIONS SERUM.” |
| `d1a1ad85` | Fixed policy canonical/OG self-reference and unknown-route noindex 404. |
| `3bd5ff8e` | Replaced two-still ritual slideshow with active deterministic three-beat motion sequence. |

## 9. Current accessibility, performance, and validation guardrails

| Concern | Current safeguard |
|---|---|
| Hero/LCP | Semantic text, light active hero, preloaded high-priority local hero asset; do not start at opacity zero or add hero fade-in. |
| Image loading | Hero and header logos eager; below-fold images lazy; async decoding; true WebP/JPEG srcsets and intrinsic dimensions. |
| Fonts | Four local font faces; Newsreader, Inter, and IBM Plex Mono preloads; fallback metrics prevent major shift. |
| Video | `muted`, `loop`, `playsInline`, `preload="metadata"`, visible keyboard play/pause, poster, and `autoPlay={!reduceMotion}`. |
| Motion reduction | Ritual does not autoplay under `prefers-reduced-motion: reduce`; avoid nonessential disclosure animation. |
| Focus and targets | Emerald focus rings; links/buttons/hotspots meet target-size guards. |
| Analytics | Keep source tag in `client/index.html`; Vite strip plugin prevents literal unresolved placeholders from shipping when variables are absent. |
| Canonical | Home, Formula, and policies have raw server validation. The test protects server/client literal drift. |
| Cache | Hash-named media/fonts/JS/CSS immutable; HTML no-cache. |

The standard validation commands are:

```bash
cd /home/ubuntu/bella-nissa-science
pnpm test
pnpm check
pnpm build
git diff --check
```

For server metadata work, run the built production server (`NODE_ENV=production node dist/index.js`) and curl raw HTML for `/`, `/formula`, every policy route, and an unknown route. For visual changes, test 1440px, 1024px, 768px, 680px, and 390px unless the owner specifies otherwise.

## 10. Current pending work and decisions

The task tracker includes old umbrella entries that are no longer technically pending. Treat this section, not an unchecked historical line alone, as the correct operating plan.

| Priority | Pending item | Exact safe next action |
|---|---|---|
| 1 | Owner review of standalone-device candidate | The raw/candidate is archived at `media-masters/cycle13-review-device/`. It is **unapproved** and not active. If approved, owner must explicitly authorize deterministic derivatives/integration. If rejected, retain archive only. |
| 2 | Ingredient-map device-scale correction | Current Cycle 13 candidate is rejected because it changed diagram/hotspot geometry and contains “PRECISIONS SERUM.” A future attempt must protect geometry, ideally through deterministic local composition instead of regenerating the diagram. No action without owner authorization. |
| 3 | Legal/policy copy | Await owner-supplied approved text. Do not invent any. |
| 4 | Structured-data enhancement | No change currently required. Add Product rich-result fields only if verified commerce/review data becomes available and owner authorizes them; never invent offers, price, ratings, or reviews. Formula Detail Product JSON-LD is optional future work, not an authorized change. |
| 5 | Final checkpoint / publication | No current publish authorization. The user has repeatedly prohibited automatic publish/deploy. A later owner can request a new checkpoint and use the UI. |

There is no current quota-based generative-video task. The former Cycle 12 human ritual generation brief is historical; the active ritual motion now needs no quota and contains no people. Never query or assume a current quota; any future generation needs a new explicit owner request.

## 11. Key files and archive locations

| File/location | Purpose |
|---|---|
| `client/src/pages/Home.tsx` | Asset registry, hero, ritual markup/playback, product copy, FAQ. |
| `client/src/index.css` | Design tokens, responsive layouts, focus styles, ritual treatments. |
| `client/index.html` | Home metadata, canonical/OG/Twitter, Organization/Product/FAQ JSON-LD, font and LCP preloads, analytics source tag. |
| `client/src/pages/FormulaDetail.tsx` | Formula page, own metadata, serum derivatives, studies. |
| `server/index.ts` | Cache policy, Formula raw metadata, policy raw metadata, known route and real 404 behavior. |
| `client/src/site-contract.test.ts` | 17 guarded source contracts. Update intentional behavior instead of deleting coverage. |
| `CYCLE9_RITUAL_VIDEO_EXECUTION_BRIEF.md` | Historical long-form human ritual generation brief; only use under new explicit owner authorization. |
| `CYCLE12_RITUAL_CONTINUITY_LOCK.md` | Exact serum/device prompt record, refusal, reference-only output, and amended art rules. |
| `CYCLE12_APPROVED_MEDIA_INTEGRATION.md` | Cycle 12 stills review integration evidence, now historically superseded. |
| `CYCLE12_DEVICE_SCALE_REPORT.md` | Original scale findings and remediation order. |
| `archive/manus-exit-2026-08-20/README.md` | Inventory of the original sandbox-exit archive. |
| `archive/manus-exit-2026-08-20/bella_nissa_science_claude_handoff_2026-08-20.md` | Earlier Claude-ready handoff. |
| `media-masters/cycle13-review/` | Approved raw paired palm-scale master and review comparison. |
| `media-masters/cycle13-review-device/` | Unapproved standalone-device raw/candidate and comparison. |
| `media-masters/cycle13-review-ingredient-map/` | Rejected ingredient-map raw/candidate and comparison. |

## 12. Full GitHub commit timeline through `3bd5ff8e`

The following is the full machine-collected Git history available on `github/main` before this final handoff commit. Repeated checkpoint/record commits are deliberately retained; they document recovery and validation state.

```text
7eece8440b03e5c2fa9443da5bbc5bbb2919914f | 2026-08-17 | Initial project bootstrap
6b6bca0450c712ecd00e982478c7ef726a9adb5e | 2026-08-17 | Checkpoint: Completed the responsive Bella Nissa Science landing page with Clinical Atelier styling, generated product visuals, brushed-silver and emerald BNS branding, interactive protocol steps, and responsive desktop/mobile layouts.
06d00910acd46b30487f3097c58a0176a3323def | 2026-08-17 | Checkpoint: Added a customer-facing four-step serum-and-device ritual, care note, and material-rich system logic section while removing competitor references and unsupported treatment claims.
d9a596b92004b79ef3eab6086104cf9c111fc5f3 | 2026-08-17 | Checkpoint: Added a generated in-motion blonde-subject device ritual, integrated it into an editorial product-education section, and adapted the supplied aging-concern copy into clinically cautious serum-and-device routine guidance.
3ab798dbd70cd390052f4008f4438d752ee00862 | 2026-08-17 | Checkpoint: Added a lifelike serum-and-device skin-layer visual, cosmetic-safe ingredient callouts, an active-ingredient bullet module, and strengthened BNS authority marks across the responsive page.
b9ab768b446c6762a7acd6b2d3cee255f5a68f16 | 2026-08-17 | Checkpoint: Added an evidence-aware Formula Detail page, an interactive four-step serum-and-device use accordion, responsive skin-layer ingredient tooltips, and refined the human ritual image into the Clinical Atelier visual language.
a50e571b2236e6571e946e51e039af42a8f4c191 | 2026-08-17 | Checkpoint: Confirmed the restored b9ab768b Home page is healthy before applying the motion-asset-only change.
7e658b3c37a339340f219cf0dda0ef5382944e9b | 2026-08-17 | Checkpoint: Restored the previous working blonde ritual motion clip, verified the Home page visually, and documented that a true 4K replacement is pending the free plan’s daily video-generation quota reset.
017e84894fa5986baf56428a4151427495ad6686 | 2026-08-17 | Checkpoint: Finalized the motion restoration: the previous moving blonde ritual video is active again, the page was visually verified, and the higher-resolution generation limitation was documented without overstating a 4K attempt.
6d6544dfd0c4e0b2acef7155fa3e753e91cd73b1 | 2026-08-17 | Checkpoint: Added a strategically placed CSS-animated exploded view of the device with reassembly motion, observable component callouts, responsive component legend, and refreshed Clinical Atelier material treatments.
6a61abc7fa41ddae47552b8f7ac51a3bae2d444a | 2026-08-17 | Checkpoint: Replaced the abstract device anatomy illustration with the actual Bella Nissa device form, showing an assembled-to-exploded transition and reassembly while retaining carefully scoped component callouts.
8d0994e09211669561d2cc6daee1d3d0c0cb0a9c | 2026-08-17 | Checkpoint: Removed the prior external-only anatomy graphic and added an illustrative, scroll-driven actual-device assembly sequence with assembled, opening, and exploded internal states plus production-CAD boundary labeling.
31797f6f254cd9cefe4ed7ce77230803ad66cfdf | 2026-08-17 | Checkpoint: Repaired the failed internal image sequence by retaining the reliable assembled device frame and using a deterministic CSS internal-component assembly, so the scroll reveal no longer depends on missing generated frames.
3ed2d6a9b8e9e2a078afb77332588aae8cfeacd4 | 2026-08-17 | Checkpoint: Enhanced the existing working ritual video in-page with optimized contrast, richer saturation, warm tonal surround lighting, an emerald plant accent fallback, and a tighter responsive crop. The requested 4K replacement was attempted but blocked by the daily video-generation limit.
c17764154c44975dd1d77142070780a89dff5617 | 2026-08-17 | Initial commit: Bella Nissa Science site build
55459a9eac3574e35c642797502bad66d2f00f7b | 2026-08-17 | Checkpoint
2176e51ca1eacd4355f6312493b77e705c9ba29b | 2026-08-17 | Checkpoint: Stable Bella Nissa Science refinement checkpoint after moving media responsibility to durable storage URLs: fixed closing layout and link tokens, implemented the dark pinned hero with semantic staged text and fallbacks, added continuous actual-photo device separation/reseating with observable callouts, added contract tests, and validated test/typecheck/build plus desktop/tablet/mobile previews.
c0dcac038238494ca9f0f9ae980c36f4c25b5682 | 2026-08-17 | Initial project bootstrap
b2d9f7f43a6c8c212e300f3bdae2a75ec0d55455 | 2026-08-17 | Checkpoint: Completed the responsive Bella Nissa Science landing page with Clinical Atelier styling, generated product visuals, brushed-silver and emerald BNS branding, interactive protocol steps, and responsive desktop/mobile layouts.
3e167a8754a04fe461c781a3c4f059afce08ba3d | 2026-08-17 | Checkpoint: Added a customer-facing four-step serum-and-device ritual, care note, and material-rich system logic section while removing competitor references and unsupported treatment claims.
131d9168cf4baa2c10416465077e86dee6d7c86b | 2026-08-17 | Checkpoint: Added a generated in-motion blonde-subject device ritual, integrated it into an editorial product-education section, and adapted the supplied aging-concern copy into clinically cautious serum-and-device routine guidance.
e131411d6a3c2cf9c90c0ba8788191ef2c1bc42d | 2026-08-17 | Checkpoint: Added a lifelike serum-and-device skin-layer visual, cosmetic-safe ingredient callouts, an active-ingredient bullet module, and strengthened BNS authority marks across the responsive page.
f8c889bcb1cf41f117abc376a6dd042ed5911afe | 2026-08-17 | Checkpoint: Added an evidence-aware Formula Detail page, an interactive four-step serum-and-device use accordion, responsive skin-layer ingredient tooltips, and refined the human ritual image into the Clinical Atelier visual language.
2ac22b190ae28f30a5a6202ab08c46346efacd7a | 2026-08-17 | Checkpoint: Restored the previous working blonde ritual motion clip, verified the Home page visually, and documented that a true 4K replacement is pending the free plan’s daily video-generation quota reset.
056e5909632c53e01f37121155ce210ac9ee3318 | 2026-08-17 | Checkpoint: Finalized the motion restoration: the previous moving blonde ritual video is active again, the page was visually verified, and the higher-resolution generation limitation was documented without overstating a 4K attempt.
f2a1bf087d5e2c07314194460904efccbe46651f | 2026-08-17 | Checkpoint: Added a strategically placed CSS-animated exploded view of the device with reassembly motion, observable component legend, and refreshed Clinical Atelier material treatments.
ba99230ba57c1b16aeda5e443f468cb37894085d | 2026-08-17 | Checkpoint: Replaced the abstract device anatomy illustration with the actual Bella Nissa device form, showing an assembled-to-exploded transition and reassembly while retaining carefully scoped component callouts.
ec0bb46dbe4cdf5715addc5d238672219e552a6a | 2026-08-17 | Checkpoint: Removed the prior external-only anatomy graphic and added an illustrative, scroll-driven actual-device assembly sequence with assembled, opening, and exploded internal states plus production-CAD boundary labeling.
ff89c04f33a3dd02d99fd507ef423040c024dca5 | 2026-08-17 | Checkpoint: Repaired the failed internal image sequence by retaining the reliable assembled device frame and using a deterministic CSS internal-component assembly, so the scroll reveal no longer depends on missing generated frames.
03be0300acf6e292df7831c7cceb69c7d4368e7e | 2026-08-17 | Checkpoint: Enhanced the existing working ritual video in-page with optimized contrast, richer saturation, warm tonal surround lighting, an emerald plant accent fallback, and a tighter responsive crop. The requested 4K replacement was attempted but blocked by the daily video-generation limit.
df5c85ab507a5a49ce3d117b573f36c1db530f15 | 2026-08-17 | Checkpoint
40f0a4e1baa0a43d681f3556da9bda8a2eda568c | 2026-08-17 | Checkpoint: Stable Bella Nissa Science refinement checkpoint after moving media responsibility to durable storage URLs: fixed closing layout and link tokens, implemented the dark pinned hero with semantic staged text and fallbacks, added continuous actual-photo device separation/reseating with observable callouts, added contract tests, and validated test/typecheck/build plus desktop/tablet/mobile previews.
754c6840390e3a4184ea3394418baae86b28d43a | 2026-08-17 | Replace device slices with vector anatomy sequence
7635dabeacee31c625a1f8aa072618fa47b36f0c | 2026-08-17 | Record completed vector anatomy validation
533dd3337826258bd7b9557ed70cbdab76e05b89 | 2026-08-17 | Harden link colors and refine device profile
acc6ebcbe357c619307caf66d4e47cb591062c09 | 2026-08-17 | Record targeted fix validation
ba75a77a41650a2d228e06e083c5cb6254f04255 | 2026-08-17 | Remove device teardown and verify link contrast
198c207da97701eecfc838ba249d73e4fa383a9d | 2026-08-17 | Record teardown removal validation
df4a68089a909f1b418de43f839c276d4fdeefb7 | 2026-08-17 | Scope link colors by surface context
20ef0b9ca3780311b908981b846d1615a798458a | 2026-08-17 | Record pixel-verified link contrast
bbf412c30c149d3d3f7c6ff28a83dd5ac5a95836 | 2026-08-18 | Refine scientific typography and Formula evidence context
302719f1d7b86113af7a4ba46dfd4a263fbf9d2d | 2026-08-18 | Record typography refinement validation
2ea24618a92f01216ac3919ce4eacb320f5deee2 | 2026-08-18 | Record typography refinement validation
4e43b14272524f1285881403086b85b0fa193d53 | 2026-08-18 | Optimize image and font delivery payloads
e8d0282decbb0069f8232156c63a0f6ed1d6f425 | 2026-08-18 | Record payload optimization validation
6198b2a64c7ee618a7b088e0f63db788a8d188ca | 2026-08-18 | Optimize image and font delivery payloads
dd2ed641efe7a231d0bb2a2aeeaa38d213df5b63 | 2026-08-18 | Record payload optimization validation
088d24034f31f87c259da50d2a940bdaee506d32 | 2026-08-18 | Complete payload optimization checklist
ea927a3808e9e77b03aa7b4090ab1ddb3c1e29b9 | 2026-08-18 | Complete payload optimization checklist
8c66bcdc51456dee626e2aaf0e6f113b7f9b621f | 2026-08-18 | Implement Cycle 3 accessibility and media delivery
bbbf5bf524802111efe21fec79141f14fd61e469 | 2026-08-18 | Record Cycle 3 validation completion
be98667a8a48818bd5527041f08478304cc464dc | 2026-08-18 | Record Cycle 3 validation completion
1f6aa2c19f70e8fbdd7d3495cac0cdf10d13dd13 | 2026-08-18 | Reconcile light hero and Cycle 4 interface fixes
f74eb318d1a25d832568e92a0818bf9ac6e0e59b | 2026-08-18 | Record non-video Cycle 4 validation
0d2a0d549f921cf276a7106ec5e3ed67dbec16b0 | 2026-08-18 | Record non-video Cycle 4 validation
c6755578728255e63452f68df999de7b19e1a373 | 2026-08-18 | Document deferred ritual media brief
2bdd567e8160453d68f095b1a76c0d1126892f43 | 2026-08-18 | Document deferred ritual media brief
3a87b30000830b510957c9bf8f9e824acf12ed81 | 2026-08-18 | Update formula evidence citations
634e387c0845e13d5de91cdc77a49b3676dc9467 | 2026-08-18 | Checkpoint
29b4f302f6cada1ae2080b92ce584411aac9e34c | 2026-08-18 | Place formula citations with source sentences
49e8312ab70bb171da3926548e14c65d16f7a385 | 2026-08-18 | Record Cycle 5 citation completion
789cdc1fe2664b955938d692808a5184e7114801 | 2026-08-18 | Record Cycle 5 citation completion
caeb3bd1990992d707734fcd6f600776a0f94a22 | 2026-08-18 | Optimize production payload and interaction targets
1a3e476fcdfa61022d52d5ededabb81329c36f59 | 2026-08-18 | Harden ingredient hotspot interactions
02567ea6d780dc9b228e6f9434532855cfef3c42 | 2026-08-18 | Record Cycle 6 validation completion
a1a34e24c86e509ab836ad8dec46778c1cc3073e | 2026-08-18 | Record Cycle 6 validation completion
ee07f5e65ea6577df5c5d59025991796fa1c316f | 2026-08-18 | Cycle 7: integrate gold and ruby-red media system
94264bc1ba40648a1d8a95237b9e4a55c2d131fb | 2026-08-18 | Merge GitHub main into Cycle 7 release
43439deba120695f6abc83c930fa2e5b023e4b3e | 2026-08-19 | Cycle 8: restore matching ritual poster
5fc29e2c5ed105752190dfefca530ab0c37c3174 | 2026-08-19 | Cycle 9: align media, accessibility, and metadata
072b24cdd000d3b28c4ce0c198a1fda91667398b | 2026-08-19 | Cycle 10: add trust, navigation, and footer scaffold
8ea79ab5a63c6650284210d5997a93e9ad48a0a5 | 2026-08-19 | Cycle 11: refine trust, naming, and FAQ
2cbaf1b9ee79831fbcd0d9f38ba2bdf0c08d3769 | 2026-08-19 | docs: add comprehensive Claude project handoff
722b1cd1adf341980d77769fec811e82701185bf | 2026-08-19 | Checkpoint: Cycle 12 preservation and handoff checkpoint
19cb46dc0ccfdae96aae6a612572a0e0c3aec7f9 | 2026-08-19 | Checkpoint: Cycle 12 review-only documentation checkpoint
2042afabe22d10af194310afc5d732bc6f48e618 | 2026-08-19 | feat: integrate approved Cycle 12 ritual sequence
1d426e2c07eb625ecf035db54a08e599cc0027ee | 2026-08-19 | fix: vendor portable site media and fonts
220bb78e160ee0c89270571e769e3471044b4bad | 2026-08-19 | chore: remove unused ritual mineral asset
371cddcd55acc3daf9304772c7373d09eaf548b1 | 2026-08-19 | chore: switch canonical metadata to apex domain
a92465510a6044ed80d22acceda04060417e848b | 2026-08-20 | chore: archive Manus-sandbox-only artifacts before trial expiry
c91a1269f68b43edae123ac8f76f8432c5448808 | 2026-08-20 | chore: preserve cycle13 palm-scale review candidates (unapproved)
e23563ef9122d61c9372c62c395d73ecd0f5b8a3 | 2026-08-20 | feat: integrate approved cycle13 palm-scale product-system master
21b524a5b985594fea95c01ccb6d1da40179ab53 | 2026-08-20 | chore: preserve cycle13 standalone-device review candidate (unapproved)
b172958e407b137ce4b4e83f9a8a82ace7421b07 | 2026-08-20 | fix: stop shipping an unconfigured analytics script tag
1614972618a2f281bf17f7015259292223dbbc86 | 2026-08-20 | chore: preserve cycle13 ingredient-map review candidate (unapproved)
d1a1ad85e8f190106dd26b66662ae97f892d21e5 | 2026-08-20 | fix: self-referencing canonicals on policy routes and a real 404 for unknown paths
3bd5ff8e9ed99610e8230319ab0db6a228865c39 | 2026-08-20 | feat: replace the static ritual slideshow with an actual motion sequence
```

## 13. Successor checklist

1. Start from `github/main`, not a stale WebDev version or screenshot.
2. Read `Home.tsx`, `server/index.ts`, `site-contract.test.ts`, this handoff, and relevant media README before editing anything.
3. Preserve claims, product name, gold/ruby/pink/marble art system, palm-scale rule, and no-commerce/legal boundaries.
4. Do not integrate either unapproved Cycle 13 candidate. The standalone candidate awaits owner decision; the ingredient-map candidate is explicitly rejected.
5. For a source change, run `pnpm test`, `pnpm check`, `pnpm build`, and raw production metadata checks when server/meta logic changes.
6. Do not publish/deploy automatically. Do not generate unless a new owner message precisely authorizes it.
7. Keep local portable media paths. Do not restore `/manus-storage`, storage proxy code, or Manus debug collector.

## 14. Final sandbox and storage preservation audit

Immediately after the initial handoff commit was pushed, the project was audited against `github/main` by SHA-256. At the time of that audit, `HEAD` and `github/main` were both `26128d15e2ea4cfef2f86fa3053a5fc96608bef6`, and `git status --short` was empty. The final documentation amendment that contains this audit must be treated as the newer final GitHub revision.

The audit indexed 640 distinct hashes across the tracked project, excluding dependencies and build output. It examined 174 project-named candidate files outside the repository under `/home/ubuntu`; 136 were byte-identical to a Git-tracked/archived file. The remaining 38 files are listed below. They are not active-site dependencies, but they are sandbox-only derived utilities, diagnostics, experiments, or legacy payload variants and should be preserved separately if the owner considers them useful.

| Category | Remaining sandbox-only location | State |
|---|---|---|
| Cycle 13 ritual build tooling | `/home/ubuntu/build_cycle13_ritual_stills.py` (1,060 bytes); `/home/ubuntu/build_cycle13_ritual_motion.sh` (1,874 bytes) | Deterministic build helpers used to make the current ritual. Final MP4/WebM/poster are tracked; intermediate work remains outside Git. |
| Cycle 13 ritual intermediates | `/home/ubuntu/cycle13-ritual-work/` (3.8 MB): `b1_serum.png`, `b3_system.png`, `beat1.mp4`, `beat2.mp4`, `beat3.mp4`, plus final output duplicates | Non-active reproducible intermediates. Final output duplicates are byte-identical to tracked `client/public/media` files. |
| Ritual contrast/probe utilities | `/home/ubuntu/capture_ritual_chip.mjs`, `capture_ritual_pixel_frames.mjs`, `ritual_chip_contrast.mjs`, `ritual_chip_contrast_probe.mjs`, `sample_ritual_chip_contrast.py`, `ritual_chip_probe.log`, `ritual_upload_urls.txt` | Historical diagnostic tooling/logs, not active-site dependencies. |
| One validation screenshot | `/home/ubuntu/screenshots/cycle11-faq-open-390.png` (80,544 bytes) | Historical visual proof, not an active asset. |
| Historical video analysis notes | `/home/ubuntu/video_bns-cycle12-stills-ritual-review_analysis_20260819_203832.md`; `/home/ubuntu/video_bns-ritual-two-step_analysis_20260818_040106.md`; `/home/ubuntu/video_bns-ritual-two-step_analysis_20260819_203946.md` | Historical analysis records, not active-site dependencies. |
| Legacy payload experiment variants | `/home/ubuntu/webdev-static-assets/payload-optimized/` contains 24 unmatched optimized icon/device/hero/serum/map variants, each approximately 5.5 KB–241 KB | Superseded payload experiments; active portable asset family is tracked in `client/public`. |
| Duplicate and extracted work directories | `/home/ubuntu/bella-nissa-github-push/` (51 MB duplicate project clone), `/home/ubuntu/cycle12-chip-frames/` (236 MB extracted video frames), `/home/ubuntu/cycle12-stills-ritual-work/` (376 KB), `/home/ubuntu/bns-portability-clean-check/`, `/home/ubuntu/cycle3-probe/`, `/home/ubuntu/ritual_chip_frames/` | Duplicate clone, archived/reproducible extraction, or analysis workspaces. They are not required by the active site. |

`/manus-storage` was **not mounted** in the final sandbox, so no live filesystem enumeration was technically possible there. Durable historical `/manus-storage` paths are recorded in `CYCLE12_RITUAL_CONTINUITY_LOCK.md` and their relevant files were previously copied into the exit archive or portable project media. No unpushed active project file was found inside the Git worktree after the documentation commit.

This audit intentionally does not delete any sandbox artifact. It records every discovered remaining project-related external location so the owner can decide whether to archive the derived diagnostics and legacy experiments separately before sandbox expiry.
