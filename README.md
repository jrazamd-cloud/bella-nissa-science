# Bella Nissa Science

Bella Nissa Science is a clinical-luxury skincare experience presenting a serum and companion absorption-and-massage device as one considered cosmetic ritual. The site includes the responsive landing page, Formula Detail dossier, ingredient education, interactive use sequence, skin-layer tooltips, and device assembly storytelling.

## Requirements

Use Node.js 22 or newer and pnpm 10 or newer. The project uses React, Vite, TypeScript, Tailwind CSS, Express, and the Manus WebDev runtime.

## Setup

```bash
pnpm install
```

The application uses environment variables supplied by the Manus WebDev environment for runtime services. Do not commit local secrets. For local development, configure the required variables through the project environment rather than adding them to source control.

## Run locally

Start the development server with:

```bash
pnpm dev
```

The development server will print its local URL. Open that URL in a browser to review the site. The main experience is available at `/`; the evidence-aware formula dossier is available at `/formula`.

## Validate and build

```bash
pnpm check
pnpm build
```

The repository currently carries the project’s existing scripts. If a test script is added later, run it with `pnpm test`.

## Project structure

| Path | Purpose |
| --- | --- |
| `client/src/pages/Home.tsx` | Main Bella Nissa Science landing page and interactive product narrative |
| `client/src/pages/FormulaDetail.tsx` | Formula evidence context and substantiation roadmap |
| `client/src/index.css` | Clinical Atelier visual system, responsive layout, and interactions |
| `client/src/App.tsx` | Client-side route registration |
| `client/index.html` | Browser document shell and analytics entry point |
| `server/` | Manus WebDev server, authentication, storage, and runtime plumbing |
| `drizzle/` | Database schema and migrations |
| `shared/` | Shared application constants and types |
| `assets/` | Source visual assets used in the design process |

## Content and claims note

Formula education is written as cosmetic context. Product-specific performance claims should be added only after the relevant finished-formula testing, product directions, and substantiation documentation have been approved.

## Publishing

This repository is prepared for GitHub-based source control. Deployment should use the configured Manus WebDev project workflow so managed storage URLs and runtime configuration remain intact.
