# Launch Runbook — bellanissascience.com

The build is apex-ready; nothing is published. The apex currently serves a GoDaddy "Launching Soon" placeholder. Launching requires the owner's explicit go, a hosting account he controls, and his GoDaddy DNS access. Nothing here may be executed without him.

## 1. Choose hosting (recommended first: Render)

| Option | Fit | Notes |
| --- | --- | --- |
| **Render (web service)** | Best default | Runs `node dist/index.js` as-is; free tier works for launch. Build command `pnpm install && pnpm build`, start command `NODE_ENV=production node dist/index.js`, health check path `/`. |
| Railway / Fly.io | Equivalent | Same commands; pick by owner preference. |
| Static pre-render → Netlify / Cloudflare Pages | Cheapest at scale | Requires a small refactor: pre-render the seven routes to per-route HTML (the server's rewrites are deterministic string operations), emit `_redirects` for trailing slashes and 404. A future Claude Code session can do this in one sitting; keep the Express path until then. |

The server binds `process.env.PORT` and already handles compression, immutable caching for hashed assets, security headers, trailing-slash 301s, per-route canonicals, and real 404s — no host-side rewrites needed beyond TLS.

## 2. Deploy and smoke-test on the host URL

Before touching DNS, verify on the host-provided URL (e.g. `*.onrender.com`): `/` 200 with its own canonical; `/formula` 200 with the serum metadata; `/privacy` 200 with its own canonical; `/formula/` → 301 `/formula`; `/nope` → 404 with `noindex`; response headers include `Content-Encoding: gzip`, `X-Content-Type-Options: nosniff`; the ritual video plays; hero renders at phone width.

## 3. Point DNS at GoDaddy (owner does this, guided)

Apex `@`: A record (or ALIAS/ANAME if offered) to the host's IP/target. `www`: CNAME to the host target. Keep apex as canonical — configure the host (or a redirect rule) to 301 `www` → apex. TLS: let the host issue certificates for both names; confirm `https://` on each. Propagation: minutes to a few hours.

## 4. Post-launch verification

Curl the production domain for the same smoke-tests as §2. Run Google's Rich Results Test on `/` (expect Organization + Product + FAQPage parsed; FAQ rich results are not expected — Google restricts them — parsing without errors is the bar). Add the property in Search Console, submit `https://bellanissascience.com/sitemap.xml`. Lighthouse the live URL; expect ≈94/100/100/100 mobile.

## 5. Optional after launch

Analytics: the head carries a placeholder-guarded Umami tag; it ships **only** when `VITE_ANALYTICS_ENDPOINT` and `VITE_ANALYTICS_WEBSITE_ID` are set at build time. Set them in the host's env and rebuild when the owner chooses an analytics endpoint. Structured data: add `offers`/ratings only when real, displayed commerce facts exist and the owner authorizes them. HSTS/CSP: add at the host/CDN layer if desired; the app intentionally leaves these to the host.
