# Bella Nissa Science — Comprehensive Project Handoff

> **Purpose:** This is the authoritative handoff for continuing work on the Bella Nissa Science website after prior work across multiple sessions. It is written for another assistant, particularly Claude. Treat the current GitHub `main` revision, not old screenshots or outdated task wording, as the operational source of truth.

## 1. Current release at a glance

The project is a premium clinical-luxury marketing website for **Bella Nissa Science**, presenting a serum and companion absorption/massage device as one coordinated cosmetic ritual. The current canonical product name is **Rejuvenating Bioactive Precision Serum**. The site is intentionally non-commerce: there are **no prices, offers, checkout, email capture, subscriptions, reviews, ratings, testimonial data, or invented policy content**.

| Item | Current value |
| --- | --- |
| GitHub repository | <https://github.com/jrazamd-cloud/bella-nissa-science> |
| Working branch | `main` |
| Current substantive commit | `8ea79ab5a63c6650284210d5997a93e9ad48a0a5` — `Cycle 11: refine trust, naming, and FAQ` |
| Current WebDev checkpoint | `manus-webdev://8ea79ab5` |
| Project directory | `/home/ubuntu/bella-nissa-science` |
| Current development URL | `https://3000-iq2nne2zduvky1ptn1ozy-28b6c959.us3.manus.computer` |
| Stack | React 19, TypeScript, Vite 7, Tailwind CSS 4, Wouter, Express 4, Vitest |
| Main validations | `pnpm test`, `pnpm check`, `pnpm build` — all passing at Cycle 11 |
| Test coverage | 12 `site-contract` regression tests |
| Current unresolved product work | Only the quota-gated 14–18 second replacement ritual video and its coordinated poster swap |

The working tree was clean at the Cycle 11 commit except for a subsequently added documentation-task line in `todo.md` while preparing this handoff. The site implementation itself is committed and pushed through `8ea79ab5`.

## 2. Non-negotiable current instructions

The most important operational rule is that **the ritual-video replacement remains deferred**. The owner has expressly directed: **do not attempt video generation and do not poll the quota**. The last observed free-plan generator result was **1/1 generations used**, with no reset window exposed and no safe read-only quota endpoint. Resume only when the owner returns with an explicit available quota window.

| Area | Required rule |
| --- | --- |
| Video/media generation | Do not invoke any image or video generation until explicit new authorization. No quota polling. |
| Video fallback | Keep the current fallback MP4/WebM and its matching legacy poster together until the full replacement is ready. |
| Product name | **Rejuvenating Bioactive Precision Serum** is canonical. Do not reintroduce “Bioactive Renewal Serum.” |
| Ingredient wording | Preserve the phrase **“skin’s natural renewal”** in the sh-Oligopeptide-1 ingredient context; it is not a product name. |
| Claims | Cosmetic appearance language only. Avoid repair, stimulate, inhibit, prevent, photoaging, heal, treat, cure, or disease claims, except where exact owner-supplied disclaimers necessarily contain words such as “treat,” “cure,” and “prevent.” |
| Commerce/legal | Do not create offers, prices, ratings, review data, shipping terms, refunds, returns, warranty terms, privacy language, terms text, or accessibility-policy prose. Policy pages remain one-line placeholders pending owner copy. |
| Owner decisions | Do not act on the data-export/deletion notification the owner dismissed. Do not make a subscription/hosting-plan change. |
| Publishing | Do not publish/deploy. When the owner wants a live deployment, they must use the WebDev UI Publish control after a checkpoint. |

## 3. Product, design, and content direction

The visual direction matured from clinical white/silver into a **Clinical Atelier** system: frosted white packaging, pale-pink product grounds, polished black-marble plinths, restrained calibration emerald, translucent ruby-red serum, and **warm polished gold** hardware. Gold is the final authority in every conflict: no silver, chrome, cool-grey metallic hardware, brassy finish, or yellow-green metal should return to product art.

The brand lockup is **Bella Nissa** with **Science** centered beneath it, supported by a scientific BNS monogram. Packaging direction is Newsreader for “Bella Nissa” and IBM Plex Mono uppercase / 0.14em tracking for “Science,” the product name, and volume. The approved packaging line is:

> Bella Nissa  
> Science  
> BNS monogram  
> Rejuvenating Bioactive Precision Serum  
> 30mL (1.01 fl.oz)

The website’s product spec rail now uses **RUBY-RED FORMULA · POLISHED GOLD · CALIBRATION EMERALD**. The product card uses **30 ML (1.01 FL OZ)**. Do not “correct” this display casing unless the owner asks; it was deliberately updated to mirror the approved label specification.

| Design token | Current intent |
| --- | --- |
| Display font | Self-hosted Newsreader, generally light weights and optical sizing |
| Body/UI font | Self-hosted Inter; Inter Tight for smaller headings |
| Mono labels/kickers | Self-hosted IBM Plex Mono, 400, uppercase, 10–11px, 0.14em tracking, tabular/slashed-zero numerals |
| Brand colors | Calibration emerald `#006F58`; ink `#17211F`; light paper fields; pale pink media fields; warm polished gold in imagery |
| Hero treatment | Light/pale product system with normal compositing; **do not restore `mix-blend-mode: multiply`** to the hero image |
| Product surfaces | Pale pink as the surrounding field; polished black marble only under products/plinths |
| Accessibility focus | Emerald focus ring, normally 2px with 3px offset; compact target overlays are at least 24px without layout shift |

## 4. Where the project began and how it evolved

The original brief reoriented an earlier skincare concept into **Bella Nissa Science** with two linked products: a serum and companion massage/absorption device. Early versions used frosted white, silver hardware, emerald accents, and a medical/scientific visual language. The owner later resolved all metal-direction conflicts in favor of warm polished gold, ruby-red serum, pale-pink fields, and black marble.

| Period / theme | What happened | Current relevance |
| --- | --- | --- |
| Initial brand and site build | Built a public-facing serum/device website, scientific BNS lockup, product imagery, core sections, and a Formula Detail page. | Foundation remains, though the exact visual system evolved substantially. |
| Education and formula expansion | Added cosmetic-safe education, ingredient-layer visual with hotspots, six formula cards, reference list, a use sequence, and a detailed Formula Detail dossier. | Still active. Claims and citations are carefully bounded. |
| Motion and device explorations | Several device animation/exploded-view attempts were made using photo slices, imagery, and an inline SVG. | The entire device-teardown/anatomy feature was later removed at owner request. Do not reintroduce it. |
| Hero and navigation refinements | Fixed empty cards, default-indigo link regressions, huge dead-space gaps, hero scroll/pinning experiments, and hero compositing conflicts. | Current direction is a stable light hero with pale-pink product imagery and no multiply blend. |
| Typography/accessibility/payload work | Replaced Manrope/DM Mono, self-hosted fonts, improved loading, focus/skip navigation, target sizes, caching, responsive media, and metadata. | These are guarded by `site-contract.test.ts`; avoid regressions. |
| Citation cycles | Moved from nine sources to eight and then seven approved formula references; restored the specified JDD EGF citation and Karger ectoin link. | Current seven-reference mapping is authoritative. |
| Cycle 7 non-video media system | Generated and integrated gold/ruby/pink/marble still media; the intended longer video was quota-blocked. | The completed still system is current; only the video is deferred. |
| Cycles 8–11 | Fixed poster/video mismatch, responsive images, video accessibility, metadata/crawlability, sticky navigation, trust bar, canonical name, policy scaffold, and FAQ. | This is the current release state. |

## 5. Major historical removals and decisions

Some prior functionality is intentionally absent. A successor should not mistake these as omissions to “fix.”

| Removed or rejected item | Reason / final decision |
| --- | --- |
| Device anatomy / teardown section | Owner explicitly dropped it. The `DeviceAnatomySvg`, six-part legend, scroll progress, labels, caption, section ID, and related CSS were removed. The preceding content now flows directly to **RITUAL / IN MOTION**. |
| Dark hero / multiply blend behavior | Multiple media queries and light/dark hero rules caused black/invisible product stages. The chosen direction is one light product treatment with normal compositing. |
| Default blue/indigo links | Audited and corrected with surface-aware brand link classes and visible focus. Avoid introducing Tailwind/shadcn primary-token color leakage. |
| Commercial features | Explicitly out of scope: no commerce, pricing, email capture, offers, cart, checkout, or verified-review fabrication. |
| Legal policy copy | Explicitly not authorized. Five route scaffolds exist only so footer links are not dead. |
| Broad claims | Prohibited due cosmetic compliance. Do not state that the product repairs skin, stimulates collagen, inhibits melanin, prevents photoaging, treats conditions, or delivers therapeutic effects. |

## 6. Current user-facing structure

The Home route (`client/src/pages/Home.tsx`) is the primary experience. It contains the light hero, the post-hero founder trust bar, system/product story, ritual media, formula/ingredient material, method/protocol sections, closing section, approved FAQ, and footer. The Formula Detail route is a separate evidence-context dossier.

| Route | Current purpose | Important implementation details |
| --- | --- | --- |
| `/` | Main Bella Nissa Science site | Home, system, product panels, ritual media, formula-in-context cards/hotspots, protocol, use sequence, FAQ, footer. |
| `/formula` | Formula Detail dossier | Uses Cycle 9 red/gold serum derivatives; has its own client metadata and server-rendered raw title/canonical/OG/Twitter metadata before hydration. |
| `/contact` | Placeholder scaffold | `Contact` h1, exactly one sentence “This policy is being prepared.” and a home link. |
| `/privacy` | Placeholder scaffold | `Privacy Policy` h1, same approved one-line placeholder and home link. |
| `/terms` | Placeholder scaffold | `Terms of Service` h1, same approved one-line placeholder and home link. |
| `/shipping-returns` | Placeholder scaffold | `Shipping and Returns` h1, same approved one-line placeholder and home link. |
| `/accessibility` | Placeholder scaffold | `Accessibility Statement` h1, same approved one-line placeholder and home link. |

### Home-page interaction and navigation state

The site header is sticky at `top: 0`, `z-index: 50`, and a maximum height of 72px. It has a paper/blur ground so text does not overlap imagery. A hairline/shadow appears only after scrolling. All ID-based in-page anchor targets have `scroll-margin-top: calc(var(--sticky-header-height) + 16px)`, giving an 88px effective clearance for the 72px header. Cycle 10 exercised every in-page anchor and confirmed the target heading remained visible.

The founder bar is **not sticky**. It was originally above the header in Cycle 10 but was deliberately moved in Cycle 11 to immediately **after the hero and before the first system section**. Its exact sentence must remain unchanged:

> Vetted by our founder — a physician with 30 years of experience.

It is a semantic paragraph, centered in the existing mono kicker treatment. It was measured at 8.15:1 contrast in the owner’s independent audit. It is one line at desktop/tablet and can wrap to two lines at 390px without overflow.

## 7. Current product name, metadata, and structured data

Cycle 11 settled the product-name conflict. **Rejuvenating Bioactive Precision Serum** now appears in product-only copy, protocol/usage steps, application-map copy, Home metadata, social metadata, Product JSON-LD, and Formula Detail metadata. A source-level audit after Cycle 11 found no remaining old product-name literal in application source. It deliberately retained the ingredient phrase “skin’s natural renewal.”

| Location | Cycle 11 status |
| --- | --- |
| Visible Home product copy | Canonical name in use |
| Product card label | Canonical name in use |
| Home meta description, OG, Twitter | Canonical name in use |
| Product JSON-LD | Product `name` is canonical; no offers, price, or aggregate rating |
| Formula Detail title/description | Canonical name in use |
| Formula raw server renderer | Canonical Formula Detail title/description in use |
| Ingredient copy | “skin’s natural renewal” intentionally unchanged |

`client/index.html` contains Organization JSON-LD, Product JSON-LD, and now **FAQPage JSON-LD**. `FAQPage` data is in the static document head rather than injected only by React, so crawlers can see it without hydration. This has an important maintenance implication: if any FAQ text changes, update **both** the visible `faqEntries` source in `Home.tsx` and the static FAQ JSON-LD in `client/index.html` so exact text parity is not lost.

Google’s FAQ rich-result eligibility is restricted and the owner does **not** expect rich results from the markup. The FAQPage schema exists for correctness and other consumers; do not promise search rich results.

## 8. Approved FAQ — exact scope and compliance

The FAQ is a section on the Home page, not a separate route; do not add it to `sitemap.xml`. It uses native `<details>` / `<summary>` rather than a custom accordion. Each summary has a styled native marker, is keyboard operable, has a 24px-plus hit area (the first summary measured 79.34px at 390px), and uses the emerald `:focus-visible` ring. Reduced-motion behavior does not animate disclosure open/close.

| # | Approved question | Approved answer basis |
| --- | --- | --- |
| 1 | How do I use the serum and the device together? | Serum first on freshly cleansed skin, then the device in gentle, deliberate passes over the serum layer. |
| 2 | Do I need the device, or can I use the serum on its own? | The two have distinct roles; serum begins the ritual and the device follows it. |
| 3 | Is this a cosmetic or a medical product? | Exact footer cosmetic disclaimer. |
| 4 | Are the studies you cite about this finished product? | Exact ingredient-reference disclaimer. |
| 5 | Which ingredients are in the formula, and why these together? | Names the six existing groups in their existing order and links to the ingredient section; does not restate benefits or add rationale. |
| 6 | Where can I read more about the formulation? | Uses a per-surface Formula Detail link. |

The two exact disclaimer sentences are intentionally retained even though they include terms otherwise avoided in cosmetic claims:

> Bella Nissa Science products are cosmetics. They are not intended to diagnose, treat, cure, or prevent any disease.

> References describe published research on individual ingredients. They are not claims about this finished product.

Do not add common commerce/product FAQ questions without owner-supplied facts. Specifically forbidden absent owner approval: price, subscription, shipping/delivery timelines, returns/refunds, warranty, shelf life/PAO, battery/charging, waterproof rating, fragrance-free/cruelty-free/vegan status, country of manufacture, patch testing, clinical participant data, or timelines for results.

## 9. Formula and evidence implementation

Formula-in-context is intentionally **ingredient-context education**, not evidence of the finished product. The Home page has six formula cards, a hotspot skin-layer map, seven contiguous external references, and the required disclaimer. Formula Detail gives a separate evidence ledger and testing-context explanation; it explicitly says ingredient research does not substitute for completed finished-formula performance data.

| Card | Ingredient group | Reference mapping |
| --- | --- | --- |
| 01 | Epidermal growth factor (sh-Oligopeptide-1) and peptides | 1 — JDD 2012 EGF study |
| 02 | NAD+ | 2 — *Antioxidants (Basel)* |
| 03 | Niacinamide (vitamin B3) and adenosine | 3 — *International Journal of Molecular Sciences*; 4 — *Ageing Research Reviews* |
| 04 | Ectoin | 5 — Karger / *Skin Pharmacology and Physiology* |
| 05 | Hyaluronic acid (sodium hyaluronate) | 6 — *Dermatology and Therapy* |
| 06 | Topical glutathione | 7 — *Antioxidants* |

The prior peptides-review reference was intentionally removed in Cycle 6. The acetyl octapeptide-3 (Argireline/SNAP-8) sentence has **no in-text citation**. Do not accidentally restore an orphan marker or re-expand the list to eight/nine without an owner request.

All current study links use `target="_blank" rel="noopener noreferrer"` and per-surface link classes. Journal names remain italic. Reference 5 must remain the owner-specified **Karger** URL, not a PubMed substitute.

## 10. Media system: active stills versus active video

Cycle 7 successfully delivered the non-video media system. It uses pale pink, ruby-red serum, warm polished gold, and black marble. The still assets were generated and reviewed; responsive WebP/JPEG derivatives were deterministically created in Cycle 9 from the existing masters without generative credits.

| Use | Current source / status |
| --- | --- |
| Hero master | `/manus-storage/bns-cycle7-master-product-system-final_9fe40db9.jpg` (served through Cycle 9 responsive sources) |
| Standalone serum master | `/manus-storage/bns-cycle7-serum-final_2280009d.jpg` (served through Cycle 9 responsive sources) |
| Standalone device master | `/manus-storage/bns-cycle7-device-final_0e062148.jpg` (served through Cycle 9 responsive sources) |
| Ingredient map master | `/manus-storage/bns-cycle7-ingredient-map-final_1bd416de.jpg` (served through Cycle 9 responsive sources) |
| Social share asset | `/manus-storage/bns-cycle7-share-1200x630_56e14440.jpg`, 1200×630, 35,555 bytes |
| Formula Detail serum | Cycle 9 480/768/1024/1440/1920 JPEG + WebP derivative set built from the Cycle 7 serum master |
| Future new-video poster | `/manus-storage/bns-cycle7-ritual-poster-final_bb2cc59e.jpg` — **stored but intentionally not active** |
| Current active fallback poster | `/manus-storage/bns-ritual-two-step-poster_c33fb4c4.jpg` |
| Current active fallback MP4 | `/manus-storage/bns-ritual-two-step_de344aae.mp4` |
| Current active fallback WebM | `/manus-storage/bns-ritual-two-step_74502cd2.webm` |

The fallback video is an older 8-second two-step clip. It does **not** show the final ruby-red/gold media system reliably enough for an honest ruby-red/gold video description. Its accurate active ARIA wording was reverted in Cycle 9 to describe the footage actually shipping. The future Cycle 7 poster depicts ruby-red serum and gold hardware, but it must remain unused until the matching new video can be swapped at the same moment.

### Measured active fallback compatibility

| Metric | Measured result |
| --- | --- |
| Poster | 720×1280 JPEG, 42,058 bytes |
| Active MP4 | 720×1280 H.264, 24 fps, 8.0 seconds |
| Poster/video match | Exact 9:16 aspect match |
| CLS during poster probe | 0 |
| Poster total load + decode | 64.7 ms |
| Response-end to decode | 2.9 ms |
| Video box stability | 627×1,114.656 CSS px retained during probe |

The RITUAL / IN MOTION section now includes a visible keyboard-reachable play/pause control. It measured 106.36×30px, uses a dark scrim with light text at 17.97:1, and works in browser testing. Under `prefers-reduced-motion: reduce`, autoplay is disabled, the video is paused, and the poster remains visible.

## 11. Deferred ritual-video specification — use only when explicitly authorized

The future replacement is fully specified in `CYCLE9_RITUAL_VIDEO_EXECUTION_BRIEF.md`. Do not reinterpret it; use that file as the execution source once the owner says a sufficient quota window is open.

| Requirement | Locked value |
| --- | --- |
| Resolution/orientation | 720×1280 portrait |
| Duration | 14–18 seconds, target 16 seconds |
| Order | Two unhurried beats: serum first, device second |
| Serum | Thin, translucent, slightly fluid ruby-red drops; gold-capped dropper; forehead, both cheeks, jawline, and neck |
| Gestures | Elegant, deliberate fingertip placement; no wiping, smearing, dragging, or skin pulling |
| Device beat | Only after full serum absorption; dewy/glistening but no red tint/streak/residue; jawline, cheekbone, under-eye, and upward neck strokes |
| Metal/surfaces | Warm polished gold hardware; pale-pink ground; polished black marble with subtle veining |
| Deliverables | H.264 MP4 below 2MB plus WebM sibling; muted, loop, `playsInline`, `preload="metadata"` |
| Poster integration | Swap the matching Cycle 7 ruby-red/gold poster in the **same commit** as the new MP4/WebM sources |
| Required post-generation validation | Verify temporal order and coverage; measure duration and byte sizes; sample the RITUAL chip over the brightest actual playing frame at ≥4.5:1; then update ARIA description honestly |

The exact prompt, exact negative prompt, and seven acceptance checks are already committed. Important negative constraints include: no opaque white serum, cream, gel, pearl texture, silver/chrome/cool-grey hardware, silver dropper, absent neck, device-only footage, serum after device, residue in device beat, fast cuts, speed ramps, generic device geometry, watermark, price, or treatment framing.

## 12. Accessibility, performance, and crawlability status

The project has received multiple focused passes. These safeguards are not decorative; preserve them when changing layouts or components.

| Area | Current implementation |
| --- | --- |
| Skip navigation | The skip link is the first focusable element and targets the main landmark. |
| Focus | Custom emerald `:focus-visible` treatment, generally 2px with 3px offset; ingredient hotspots specifically restored after a specificity regression. |
| Hit targets | Ingredient hotspots are at least 24×24px; compact text links use transparent pseudo-element target overlays to meet target-size requirements without layout shift. |
| Video control | Visible play/pause control, accessible name, dark contrast-safe scrim, reduced-motion no-autoplay. |
| Protocol | Panels have `aria-controls`; steps expose active state via `aria-current`. |
| FAQ | Native details/summary, keyboard behavior, styled native marker, focus ring, no reduced-motion animation. |
| Zoom | Viewport no longer blocks pinch zoom (`maximum-scale=1` removed). |
| Color scheme | `<meta name="color-scheme" content="light">` plus root CSS `color-scheme: light` protect the light-only design when OS preference is dark. |
| Header | Sticky 72px bar with post-scroll divider/shadow; in-page target offsets clear header. |
| Responsiveness | Repeatedly validated at 1440, 1024, 768, 680, and/or 390 depending on cycle. Cycle 11 confirmed 1440/1024/390 plus FAQ open/closed at 390. |
| Images | Home hero/product/map families have true WebP/JPEG `srcset` and `sizes`, dimension hints, async decoding, eager/high-priority hero, lazy below-fold loading. |
| Fonts | Self-hosted Newsreader, Inter, Inter Tight, IBM Plex Mono. Newsreader, Inter, and IBM Plex Mono are preloaded; fallback metrics reduce shift. |
| Caching | Hashed assets get `public, max-age=31536000, immutable`; HTML is `no-cache`. |
| Robots/sitemap | `client/public/robots.txt` and `client/public/sitemap.xml` list `/` and `/formula`; FAQ is not a route and must not be added. |

The Hero remains semantic text for SEO/screen readers; it is not canvas/baked text. The Formula Detail and non-home routes are lazy-loaded, while Home stays eager for hero paint.

## 13. Server and metadata implementation caveats

`server/index.ts` is intentionally small. It serves static files, applies cache headers, and intercepts routes for raw HTML title/metadata support before React hydrates.

| Component | Duplicate source to keep synchronized |
| --- | --- |
| Formula Detail client metadata | `client/src/pages/FormulaDetail.tsx` |
| Formula Detail raw metadata | `server/index.ts` `formulaMetadata` and `renderFormulaDocument()` |
| Policy client titles | `PolicyPlaceholder.tsx` via `useEffect` |
| Policy raw document titles | `server/index.ts` `policyTitles` and `renderPolicyDocument()` |
| FAQ visible answers | `Home.tsx` `faqEntries` / rendered details |
| FAQ crawler JSON-LD | Static script in `client/index.html` |
| Home social metadata/Product JSON-LD | `client/index.html` |

If any product naming, formula wording, FAQ answer, canonical host, or social card changes, update all appropriate duplicates and extend `client/src/site-contract.test.ts`. Use a production raw-document check (`NODE_ENV=production node dist/index.js` followed by `curl`) for `/formula` and policy routes; do not assume client-side metadata is sufficient for crawlers.

## 14. Significant release history and checkpoints

The current history has several substantive milestones. Some earlier Git history includes merge/checkpoint bookkeeping commits; use the releases below to orient without rolling anything back blindly.

| Commit / checkpoint | Cycle | What it represents |
| --- | --- | --- |
| `02567ea6` / `a1a34e24` | Cycle 6 baseline | Citation, payload, cache, target-size, route-splitting work completed. |
| `ee07f5e6` | Cycle 7 | Gold/ruby/pale-pink/marble still-media integration. |
| `94264bc1` | Cycle 7 checkpoint | Non-video media-system release checkpoint. |
| `43439deb` | Cycle 8 | Restored legacy poster so the active poster matches the active fallback video. |
| `5fc29e2c` | Cycle 9 | Responsive media, video accessibility, alt/metadata/crawlability, Formula Detail product consistency. |
| `072b24cd` | Cycle 10 | Founder trust bar, sticky navigation, policy scaffold, light color scheme. |
| `8ea79ab5` | Cycle 11 | Trust-bar relocation, canonical product naming, policy page titles/h1/home links, native FAQ and FAQPage JSON-LD. |

GitHub `main` and the configured `github` remote are at `8ea79ab5a63c6650284210d5997a93e9ad48a0a5`. The secondary `origin` remote is the WebDev-backed project remote; push substantive work to `github main` after validation.

## 15. Key files to read first

| File | Why it matters |
| --- | --- |
| `client/src/pages/Home.tsx` | Core route, assets, responsive image helper, hero, video behavior, product copy, citations, FAQ, footer. |
| `client/src/index.css` | Clinical Atelier tokens, layout, responsive rules, sticky header, contrast, target overlays, FAQ details styling. |
| `client/index.html` | Root metadata, canonical/OG/Twitter, Organization/Product/FAQPage JSON-LD, font/LCP preload. |
| `client/src/pages/FormulaDetail.tsx` | Dossier, formula image sources, outward links, client route metadata. |
| `server/index.ts` | Static serving/cache headers and raw `/formula` / policy-title document rendering. |
| `client/src/App.tsx` | Route declarations, lazy loading, policy placeholder routes. |
| `client/src/pages/PolicyPlaceholder.tsx` | Intentionally minimal policy route UI. |
| `client/src/site-contract.test.ts` | Regression constraints; update rather than delete when work changes guarded behavior. |
| `CYCLE9_RITUAL_VIDEO_EXECUTION_BRIEF.md` | Exact future replacement-video prompt, negative prompt, and acceptance checks. |
| `CYCLE7_MEDIA_REVIEW_NOTES.md` | Still-media review findings and measured contrast. |
| `CYCLE9_VALIDATION_NOTES.md` | Video/poster compatibility, responsive image, and accessibility metrics. |
| `CYCLE10_VALIDATION_NOTES.md` | Sticky header, anchors, light color-scheme, and policy route validation. |
| `CYCLE11_VALIDATION_NOTES.md` | FAQ open/closed verification, raw titles, source audit, and anchor clearance. |
| `CYCLE4_QUOTA_RESET_MEDIA_BRIEF.md` | Historical consolidated visual brief; gold supersedes silver wherever old text conflicts. |
| `todo.md` | Historical completed work plus deferred video tasks. Some umbrella items remain unchecked because video-dependent portions are unresolved. |

## 16. Validation workflow and expected commands

For any substantive source change, run the following before committing:

```bash
cd /home/ubuntu/bella-nissa-science
pnpm test
pnpm check
pnpm build
git diff --check
```

Then restart the development server and use screenshots at the requested widths. Inspect `.manus-logs/browserConsole.log` with shell commands, not a bulk file reader. For visual site changes, check 1440px, 1024px, and 390px at minimum; respect any additional breakpoint requirements in the current owner brief.

For metadata changes, inspect raw production HTML from a local production server after building. For Formula Detail and policy pages, this is essential because title/metadata behavior is intentionally handled both before and after hydration.

Use `webdev_save_checkpoint` after validated work and before any delivery or publish guidance. Do not use `git reset --hard`; use a known WebDev checkpoint if rollback is truly required. Do not publish automatically.

## 17. What remains pending — consolidated and prioritized

The task tracker has several historical umbrella entries open, but they all collapse into one real feature: **the fully specified ritual-video replacement and its coordinated validation**. The still media, responsive derivatives, poster management, accessibility control, and non-video validation have already shipped.

| Priority | Pending work | Current status / exact next action |
| --- | --- | --- |
| 1 | Ritual video replacement | **Blocked by owner instruction and quota.** Do not generate or poll. Wait for explicit quota-window authorization. Then follow `CYCLE9_RITUAL_VIDEO_EXECUTION_BRIEF.md` exactly. |
| 2 | Video/poster coordinated integration | In the same commit, update MP4/WebM source URLs, swap `ritualPoster` back to `/manus-storage/bns-cycle7-ritual-poster-final_bb2cc59e.jpg`, restore accurate ruby/gold video ARIA copy, preserve muted/loop/playsInline/preload metadata, and retain accessible playback control. |
| 3 | New-video validation | Measure MP4/WebM bytes, total duration, portrait geometry, serum-before-device order, coverage, absorption/no residue, poster match, and chip contrast on the brightest actual playing frame (≥4.5:1). Test 1440/1024/768/680/390. |
| 4 | Future owner-provided policy/legal content | Replace each one-line placeholder only when the owner supplies approved text. Do not invent it. |
| 5 | Future owner decisions | Data-export/deletion notification is owner-owned; no action was taken. |

## 18. Suggested first message / operating posture for a successor

If the owner returns before a quota window, acknowledge the new brief, keep the video unmodified, and do not poll. If the owner returns with an explicit quota window, first read `CYCLE9_RITUAL_VIDEO_EXECUTION_BRIEF.md`, reconcile it against `CYCLE4_QUOTA_RESET_MEDIA_BRIEF.md` with the rule **gold wins**, then generate only the complete deliverable—not a shorter substitute or one partial beat.

If work concerns content or legal pages, preserve the canonical product name, claims boundaries, seven-reference map, disclaimer text, and non-commerce posture. If work changes media, check the active video and active poster as a pair: the current fallback poster is correct only for the current fallback video; the future red/gold poster is correct only for the future red/gold video.

## 19. Final concise state statement

At `8ea79ab5`, Bella Nissa Science is a validated, light clinical-luxury serum/device experience with a gold/ruby/pink/marble still system, responsive images, strong accessibility guardrails, Formula Detail evidence context, secure research links, SEO/crawlability foundations, sticky navigation, post-hero founder statement, policy scaffolding, and an owner-authorized factual FAQ. The current release is healthy. The sole substantive creative gap is the intentionally deferred long-form ruby-red/gold ritual video; it must be completed only when the owner explicitly authorizes a quota window.
