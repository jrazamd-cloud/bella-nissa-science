# Bella Nissa Science

Marketing site for the Bella Nissa Science skincare system — the Rejuvenating Bioactive Precision Serum and its companion device. React 19, TypeScript, Vite 7, Tailwind 4, and a thin Express server for per-route metadata, caching, and hardening.

**If you are an AI agent or a new developer: read [`CLAUDE.md`](./CLAUDE.md) first.** It is the operating manual — brand and compliance laws, the verification ritual, and the roadmap to launch. Deployment steps live in [`docs/LAUNCH_RUNBOOK.md`](./docs/LAUNCH_RUNBOOK.md).

## Quick start

```
pnpm install
pnpm test     # contract suite — the merge gate (22 tests)
pnpm check    # typecheck
pnpm build    # client + server into dist/
PORT=4174 NODE_ENV=production node dist/index.js
```

The site is not yet deployed. GitHub `main` is the single source of truth. Quality bar at last verification: Lighthouse mobile 94 (performance) / 100 (accessibility) / 100 (best practices) / 100 (SEO), CLS 0, built HTML ~6 KB.

Private project — all rights reserved. Do not reuse brand assets, copy, or imagery.
