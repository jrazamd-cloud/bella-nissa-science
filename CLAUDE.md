# CLAUDE.md — Bella Nissa Science

This file is the operating manual for any Claude session (Claude Code, Cowork, Claude Design, or claude.ai) working on this repository. Read it fully before editing anything. The owner is a physician with limited technical background: report to him in plain language, lead with outcomes, and never assume he can run commands — anything he must do personally needs click-by-click instructions.

## What this is

A single-brand cosmetic marketing site for **Bella Nissa Science** — one product system: the **Rejuvenating Bioactive Precision Serum** (30 mL, ruby-red, gold cap) and its compact companion device. React 19 + TypeScript + Vite 7 + Tailwind 4 on the client, a thin Express server for per-route metadata and hardening. **Not yet deployed anywhere** — bellanissascience.com still serves a registrar placeholder. GitHub `main` is the single source of truth; the Manus platform that originally built this is gone (account deleted August 2026) and no tooling, path, or workflow may reference it.

## Commands

pnpm install · `pnpm test` (contract suite — the merge gate) · `pnpm check` (tsc) · `pnpm build` · `PORT=4174 NODE_ENV=production node dist/index.js` to serve the real build. CI (docs/ci-workflow-pending.yml — move this file to .github/workflows/ci.yml from any environment whose GitHub credential has workflow permission; the current push token lacks it) runs test + check + build and fails if built HTML exceeds 10 KB — that guard exists because editor tooling once injected 367 KB into every page.

## The verification ritual (non-negotiable, learned the hard way)

1. Run test, check, build after every change. All three must be clean before claiming success.
2. **Green tests are not a working page.** Serve the production build and look at it in a real browser at 1440 px and 390 px before reporting done. A frozen "video" once shipped while every test passed.
3. Curl `/`, `/formula`, and one policy route on the served build whenever `server/index.ts` or `client/index.html` changes — the server rewrites raw HTML by exact string literals, and every literal it replaces must exist verbatim in `client/index.html` (a contract test enforces this drift rule).
4. When a contract test blocks you, **update the expectation to the new intended truth — never delete the protection.**
5. Zoom-read every label in every generated product image before approving it (a generator once wrote "PRECISIONS SERUM"). Judge media by the full-size file, never by a chat thumbnail.
6. Preserve every generated candidate to `media-masters/<cycle>/` with a README (prompt, settings, honest assessment) and commit it **before** the approve/reject decision. Rejects cost nothing to keep.

## Architecture map

`client/src/pages/Home.tsx` — the entire landing page, including the `ASSETS` registry and `RESPONSIVE_IMAGES` record (per-image srcsets). `client/src/pages/FormulaDetail.tsx` — the ingredient dossier page (lazy-loaded). `client/index.html` — canonical/OG/Twitter tags, Organization + Product + FAQPage JSON-LD, LCP preload. `server/index.ts` — static serving with immutable caching for hashed assets, per-route canonical/metadata rewriting for `/formula` and the five policy routes, trailing-slash 301s, real 404 + noindex for unknown paths, compression and security headers. `client/src/index.css` — design tokens and all styling, including CSS-pinned ingredient-map hotspot coordinates (two breakpoint sets) that are coupled to the exact ingredient-map figure geometry. `client/src/site-contract.test.ts` — the contract suite; it pins claims language, asset wiring, server rewrite literals, the dependency allowlist, accessibility names, and contrast tokens.

## Brand and compliance laws (binding; violating these is failure)

Product name exactly **"Rejuvenating Bioactive Precision Serum"** — never variants. Appearance-only cosmetic claims ("supports the appearance of…", "visibly…"); never repair/stimulate/inhibit/prevent/heal/treat/cure — except inside the two disclaimers, which must remain verbatim: *"Bella Nissa Science products are cosmetics. They are not intended to diagnose, treat, cure, or prevent any disease."* and *"References describe published research on individual ingredients. They are not claims about this finished product."* **No commerce facts, invented or otherwise**: no prices, offers, reviews, ratings, testimonials, shipping/return/warranty claims, clinical-testing claims, or availability promises — the owner has supplied none. Six owner-approved FAQ questions only; visible answers must match the FAQPage JSON-LD exactly. **Gold wins every conflict**: warm polished gold hardware, never silver/chrome/cool-grey/brassy. Pale desaturated pink grounds; polished black marble only beneath products; staging always light and airy — never dark. **Device is palm-scale** (~3–4 fingers wide, clearly smaller than the bottle is tall) in every image. No people, hands, or faces in site imagery (a human-ritual video remains an owner-approved future exception once real footage exists). Video: muted, loop, playsInline, `preload="metadata"`, poster, keyboard-reachable pause, no autoplay under reduced-motion, MP4 under 2 MB, 8–16 s. Assets live only in local `/media/` and `/fonts/`, named `name_HASH.ext` where HASH is the first 8 hex chars of the file's own sha256. The hero is the LCP element — never opacity-zero/fade-in animate it. Do not rebuild the removed device-teardown/anatomy feature. **Never deploy, publish, or point DNS without the owner's explicit go.**

## Current state and the road to launch

Done and verified: Lighthouse mobile 94/100/100/100, CLS 0, WCAG AA contrast, 22/22 contracts, clean dependency surface (10 runtime deps), hardened server. Open items, in priority order: **(1) Deploy** — follow `docs/LAUNCH_RUNBOOK.md`; this is the single most valuable next step and needs the owner's go plus his GoDaddy DNS access. **(2) Policy pages** — five placeholders await the owner's real legal text; do not invent any. **(3) Ritual imagery** — `media-masters/cycle14-ritual-human/` holds the best human-ritual still (bright staging, correct device); real human footage remains the top creative want, briefed from `archive/manus-exit-2026-08-20/owner-uploads/pasted_file_vAvLdQ_image.png` (use its gesture, never its dark lighting). **(4) Owner decision pending** on `media-masters/cycle14-device-scale/` (device measured 34.9% of bottle height vs the 55–60% brief — possibly too small) and on whether the cycle14 flat-lay becomes a site asset. **(5) Structured data** — add `offers`/ratings only when real commerce facts exist and the owner authorizes.

## History

`archive/manus-exit-2026-08-20/` holds the complete pre-takeover history: the original platform handoff, the owner's nine uploaded reference images (`owner-uploads/` — the only files he personally supplied), recovered briefs, and superseded assets. `media-masters/` holds every generation candidate with its evidence. The full session-by-session build story lives in the owner's Google Drive folder "Bella Nissa Science — Session Recovery 2026-08-20".
