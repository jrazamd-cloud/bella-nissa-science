import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const home = readFileSync(resolve(here, "pages/Home.tsx"), "utf8");
const formula = readFileSync(resolve(here, "pages/FormulaDetail.tsx"), "utf8");
const styles = readFileSync(resolve(here, "index.css"), "utf8");
const documentHead = readFileSync(resolve(here, "../index.html"), "utf8");
const app = readFileSync(resolve(here, "App.tsx"), "utf8");
const server = readFileSync(resolve(here, "../../server/index.ts"), "utf8");
const robots = readFileSync(resolve(here, "../public/robots.txt"), "utf8");
const sitemap = readFileSync(resolve(here, "../public/sitemap.xml"), "utf8");
const vite = readFileSync(resolve(here, "../../vite.config.ts"), "utf8");
const packageJson = JSON.parse(readFileSync(resolve(here, "../../package.json"), "utf8")) as {
  dependencies: Record<string, string>;
  pnpm?: { patchedDependencies?: Record<string, string> };
};

describe("Bella Nissa Science experience contract", () => {
  it("keeps the hero headline as staged semantic text", () => {
    expect(home).toContain('className="hero-line"');
    expect(home).toContain('id="hero-title"');
    expect(home).toContain('href="#system"');
  });

  it("removes the retired device teardown completely", () => {
    expect(home).not.toContain("DeviceAnatomySvg");
    expect(home).not.toContain("assembly-scroller");
    expect(home).not.toContain("DEVICE ANATOMY");
    expect(home).not.toContain("PENDING PRODUCTION CAD");
  });

  it("defines deliberate focus, visited, and reduced-motion behavior", () => {
    expect(styles).toContain("a:visited");
    expect(styles).toContain("a:focus-visible");
    expect(styles).toContain("prefers-reduced-motion: reduce");
  });

  it("uses the requested self-hosted scientific typography without legacy font families", () => {
    expect(styles).toContain('font-family: "Newsreader"');
    expect(styles).toContain('font-family: "IBM Plex Mono"');
    expect(styles).toContain("font-display: swap");
    expect(styles).not.toMatch(/Manr(?:ope)/);
    expect(styles).not.toMatch(/DM\s+Mono/);
  });

  it("keeps hero glyphs intact and provides a contrast-safe ritual identifier", () => {
    expect(styles).not.toContain("clip-path: inset(0 0 0 0)");
    expect(styles).not.toContain("mask-image: linear-gradient");
    expect(styles).toContain(".motion-education__visual-mark");
    expect(styles).toContain("background: rgba(5, 16, 12, 0.82)");
  });

  it("keeps one light hero treatment and the requested precision corrections", () => {
    expect(styles).toContain(".hero--pinned { position: relative; height: 285vh; min-height: 0; align-items: start; background: var(--paper); }");
    expect(styles).toContain(".hero-image { width: 100%; height: 100%; min-height: 560px; object-fit: cover; object-position: center; }");
    expect(styles).not.toContain(".hero-image { width: 100%; height: 100%; min-height: 560px; object-fit: cover; object-position: center; mix-blend-mode: multiply; }");
    expect(styles).not.toContain("background: #101b18");
    expect(styles).toContain("outline-offset: 3px");
    expect(styles).toContain(".motion-education__care-note p { max-width: 62ch");
    expect(styles).toContain(".ingredient-science__note p { max-width: 62ch");
    expect(styles).toContain(".protocol-guidance p { max-width: 62ch");
    expect(home).toContain("Two components.<br /><em>One coordinated ritual.</em>");
    expect(home).toContain('<span>07</span><i className="ingredient-tooltip"><b>07 / Companion device</b>');
    expect(home).toContain("hotspotInteractionProps");
    expect(styles).toContain('.ingredient-hotspot[data-tooltip-open="true"] .ingredient-tooltip');
    expect(styles).toContain(".ingredient-hotspot--device { top: 16%; right: 12%; }");
  });

  it("renders six formula cards and a contiguous seven-source reference list", () => {
    expect(home).toContain("const formulaEntries");
    expect(home).toContain("Topical glutathione");
    expect(home).toContain("const formulaReferences");
    expect(home).toContain("References describe published research on individual ingredients.");
    expect(home).toContain('rel="noopener noreferrer"');
    expect((home.match(/ingredient-hotspot ingredient-hotspot--/g) ?? []).length).toBe(7);
    expect(home).toContain("https://pubmed.ncbi.nlm.nih.gov/22527430/");
    expect(home).toContain("Journal of Drugs in Dermatology");
    expect(home).toContain("2012 May;11(5):613-20. PMID: 22527430.");
    expect(home).not.toContain("37452558");
    expect(home).not.toContain("23417317");
    expect(home).toContain('citationSentences: [');
    expect(home).toContain('more radiant-looking complexion.", refs: [1]');
    expect(home).toContain('Argireline / SNAP-8), and palmitoyl tripeptide-5 complete the peptide complex, supporting the appearance of elasticity, resilience, and smoother-looking expression lines.", refs: []');
    expect(home).not.toContain("Peptides: Emerging Candidates for the Prevention and Treatment of Skin Aging");
    const referenceIds = Array.from(home.matchAll(/\{ id: (\d+), title:/g), (match) => Number(match[1]));
    const markers = Array.from(home.matchAll(/refs: \[([\d, ]+)\]/g), (match) => (match[1].match(/\d+/g) ?? []).map(Number)).flat();
    expect(referenceIds).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(markers).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it("uses responsive, prioritized LCP media and compact in-page emblem delivery", () => {
    expect(home).toContain('type="image/webp"');
    expect(home).toContain('loading="eager" fetchPriority="high"');
    expect(home).toContain('decoding="async"');
    expect(home).toContain('bns-emblem_58bd568a.svg');
    expect(home).not.toContain('bns-emblem-transparent');
    expect(documentHead).toContain('rel="preload" as="image"');
    expect(documentHead).toContain('fetchpriority="high"');
    expect(documentHead).toContain('newsreader-latin-basic_93828df0.woff2');
    expect(documentHead).toContain('inter-latin_9b37a295.woff2');
  });

  it("preloads mono, preserves zoom and declares share-safe metadata", () => {
    expect(documentHead).toContain('ibm-plex-mono-latin_3a647e54.woff2');
    expect(styles).toContain('font-family: "IBM Plex Mono Fallback"');
    expect(documentHead).not.toContain('maximum-scale=1');
    expect(documentHead).toContain('property="og:title"');
    expect(documentHead).toContain('name="twitter:card"');
    expect(documentHead).toContain('"@type":"Organization"');
    expect(documentHead).toContain('"@type":"Product"');
  });

  it("keeps apex metadata and server template literals synchronized with the document head", () => {
    const apexHost = "https://bellanissascience.com";
    [documentHead, formula, server, sitemap, robots].forEach((source) => {
      expect(source).not.toContain("manus.space");
    });
    expect(documentHead).toContain(`<link rel="canonical" href="${apexHost}/" />`);
    expect(sitemap).toContain(`<loc>${apexHost}/</loc>`);
    expect(sitemap).toContain(`<loc>${apexHost}/formula</loc>`);
    expect(robots).toContain(`Sitemap: ${apexHost}/sitemap.xml`);
    const templateLiterals = Array.from(server.matchAll(/\.replace(?:All)?\(\s*(["'])(.*?)\1/g), (match) => match[2]);
    expect(templateLiterals.length).toBeGreaterThan(0);
    templateLiterals.forEach((literal) => expect(documentHead).toContain(literal));
  });

  it("vendors all production assets locally and leaves no Manus storage or debug dependency", () => {
    const portabilitySources = [home, formula, styles, documentHead, server].join("\n");
    const assetNames = Array.from(new Set(Array.from(portabilitySources.matchAll(/\/(?:media|fonts)\/([A-Za-z0-9._-]+)/g), (match) => match[1])));
    expect(portabilitySources).not.toContain("/manus-storage/");
    expect(assetNames).toHaveLength(56);
    assetNames.forEach((assetName) => {
      const directory = assetName.endsWith(".woff2") ? "fonts" : "media";
      expect(existsSync(resolve(here, "../public", directory, assetName))).toBe(true);
    });
    expect(vite).not.toContain("vitePluginStorageProxy");
    expect(vite).not.toContain("vitePluginManusDebugCollector");
    expect(vite).not.toContain("BUILT_IN_FORGE_API_URL");
    expect(existsSync(resolve(here, "../public/__manus__/debug-collector.js"))).toBe(false);
  });

  it("keeps skip navigation, accessible protocol wiring, the Karger citation, and coordinated ritual review sources", () => {
    expect(home).toContain('className="skip-link"');
    expect(formula).toContain('className="skip-link"');
    expect(home).toContain('aria-controls={`use-step-panel-${step.id}`}');
    expect(home).toContain('aria-current={activeStep === index ? "step" : undefined}');
    expect(home).toContain('preload="metadata"');
    expect(home).toContain('bns-cycle13-ritual-motion_1bd80b38.mp4');
    expect(home).toContain('bns-cycle13-ritual-motion_df4a3898.webm');
    expect(home).toContain('bns-cycle13-ritual-motion-poster_995f5a51.jpg');
    expect(home).toContain('karger.com/spp/article/17/5/232/295389');
  });

  it("keeps Cycle 6 production splitting, cache policy, and minimum target-size safeguards", () => {
    expect(home).toContain('from "lucide-react/dist/esm/icons/arrow-down-right"');
    expect(home).not.toContain('from "lucide-react"');
    expect(app).toContain('const FormulaDetail = lazy(() => import("./pages/FormulaDetail"))');
    expect(app).toContain("<Suspense fallback={null}>");
    expect(app).not.toContain("components/ui/sonner");
    expect(app).not.toContain("components/ui/tooltip");
    expect(server).toContain('"public, max-age=31536000, immutable"');
    expect(server).toContain('res.setHeader("Cache-Control", "no-cache")');
    expect(styles).toContain('.ingredient-hotspot { position: absolute; z-index: 3; display: grid; width: 24px; height: 24px;');
    expect(styles).toContain('.ingredient-hotspot { width: 24px; height: 24px; margin: -2.5px; }');
    expect(styles).toContain('.desktop-nav a::after, .brand::after, .header-action::after, .text-link::after, .product-link::after, .formula-link::after, .ingredient-references a::after');
  });

  it("keeps Cycle 9 product, responsive-media, accessibility, and route metadata safeguards", () => {
    expect(home).toContain('bns-cycle13-hero-480_d40c59ec.webp 480w');
    expect(home).toContain('bns-cycle9-serum-1920_ecadc3bc.webp 1920w');
    expect(home).toContain('bns-cycle9-device-1920_adfeb55d.webp 1920w');
    expect(home).toContain('bns-cycle9-ingredient-map-1920_e6acc01e.webp 1920w');
    expect(home).toContain('className="ritual-video-toggle"');
    expect(home).toContain('autoPlay={!reduceMotion}');
    expect(home).toContain('aria-label="A slow product sequence moves in on the ruby-red serum with its warm polished gold cap on polished black marble against a pale pink ground, travels across to the compact companion device, then settles on the two together."');
    expect(home).not.toMatch(/aria-label="[^"]*\b(applies|applying|massag|onto the skin|her face|cheek)\b/i);
    expect(home).toContain('RUBY-RED FORMULA');
    expect(home).toContain('POLISHED GOLD');
    expect(home).not.toContain('SATIN SILVER');
    expect(home).not.toContain('silver hardware');
    expect(styles).toContain('.ingredient-hotspot:focus-visible { color: white; outline: 2px solid var(--emerald); outline-offset: 3px; transform: scale(1.12); }');
    expect(formula).toContain('bns-cycle9-serum-480_8f77fbe8.webp 480w');
    expect(formula).not.toContain('bns-serum-laboratory');
    expect(formula).toContain('target="_blank" rel="noopener noreferrer"');
    expect(formula).toContain('References describe published research on individual ingredients. They are not claims about this finished product.');
    expect(formula).toContain('const formulaMetadata');
    expect(formula).toContain('formulaMetadata.url');
    expect(documentHead).toContain('imagesrcset=');
    expect(server).toContain('if (req.path === "/" && knownRoutes.has(req.path))');
    expect(server).toContain('renderFormulaDocument(template)');
    expect(server).toContain(".replaceAll('content=\"Rejuvenating Bioactive Precision Serum | Bella Nissa Science\"'");
    expect(robots).toContain('Sitemap: https://bellanissascience.com/sitemap.xml');
    expect(home).toContain('Vetted by our founder — a physician with 30 years of experience.');
    expect(home).toContain('site-header--scrolled');
    expect(app).toContain('path={"/contact"}');
    expect(app).toContain('path={"/privacy"}');
    expect(app).toContain('path={"/terms"}');
    expect(app).toContain('path={"/shipping-returns"}');
    expect(app).toContain('path={"/accessibility"}');
    expect(styles).toContain('--sticky-header-height: 72px');
    expect(styles).toContain('[id] { scroll-margin-top: calc(var(--sticky-header-height) + 16px); }');
    expect(styles).toContain('color-scheme: light');
    expect(documentHead).toContain('<meta name="color-scheme" content="light" />');
    expect(home).toContain('Rejuvenating Bioactive Precision Serum');
    expect(home).not.toContain(["Bioactive", "Renewal Serum"].join(" "));
    expect(home).toContain('30 ML (1.01 FL OZ)');
    expect(home).toContain("skin’s natural renewal");
    expect(documentHead).toContain('"@type":"FAQPage"');
    expect(home).toContain('<details className="faq-item"');
    expect(home).toContain('<summary><span>{String(index + 1).padStart(2, "0")}</span>{entry.question}</summary>');
    expect(styles).toContain('.faq-item summary:focus-visible { outline: 2px solid #00a97f; outline-offset: 3px; }');
    expect(server).toContain('const policyTitles: Record<string, string>');
    expect(server).toContain('renderPolicyDocument(template, policyTitle, req.path)');
    [
      "How do I use the serum and the device together?",
      "Do I need the device, or can I use the serum on its own?",
      "Is this a cosmetic or a medical product?",
      "Are the studies you cite about this finished product?",
      "Which ingredients are in the formula, and why these together?",
      "Where can I read more about the formulation?",
    ].forEach((question) => expect(home).toContain(question));
    expect(home).toContain("Bella Nissa Science products are cosmetics. They are not intended to diagnose, treat, cure, or prevent any disease.");
    expect(home).toContain("References describe published research on individual ingredients. They are not claims about this finished product.");
    const faqSource = home.slice(home.indexOf("const faqEntries"), home.indexOf("function CitationMarkers"));
    const faqWithoutRequiredDisclaimers = faqSource
      .replace("Bella Nissa Science products are cosmetics. They are not intended to diagnose, treat, cure, or prevent any disease.", "")
      .replace("References describe published research on individual ingredients. They are not claims about this finished product.", "");
    expect(faqWithoutRequiredDisclaimers).not.toMatch(/\b(repair|stimulate|inhibit|prevent|photoaging|heal|treat|cure)\b/i);
    expect(sitemap).toContain('https://bellanissascience.com/formula');
  });

  it("renders self-referencing metadata for every policy document", () => {
    expect(server).toContain('function renderPolicyDocument(template: string, title: string, routePath: string)');
    expect(server).toContain('const routeUrl = `https://bellanissascience.com${routePath}`;');
    expect(server).toContain(".replace('href=\"https://bellanissascience.com/\"', `href=\"${routeUrl}\"`)");
    expect(server).toContain(".replaceAll('content=\"https://bellanissascience.com/\"', `content=\"${routeUrl}\"`)");
    expect(server).toContain('renderPolicyDocument(template, policyTitle, req.path)');
  });

  it("serves a noindex real 404 for unknown routes", () => {
    expect(server).toContain('const knownRoutes = new Set(["/", "/formula", "/404", ...Object.keys(policyTitles)]);');
    expect(server).toContain('knownRoutes.has(req.path)');
    expect(server).toContain('res.status(404)');
    expect(server).toContain('<meta name="robots" content="noindex" />');
    expect(app).toContain('<Route component={NotFound} />');
  });

  it("never ships an unconfigured analytics script tag", () => {
    const viteConfig = readFileSync(resolve(here, "../../vite.config.ts"), "utf8");
    expect(viteConfig).toContain("bns-strip-unconfigured-analytics");
    expect(viteConfig).toContain("VITE_ANALYTICS_ENDPOINT");
    expect(documentHead).toContain('src="%VITE_ANALYTICS_ENDPOINT%/umami"');
  });

  it("removes editor tooling and obsolete patch configuration from production files", () => {
    expect(vite.toLowerCase()).not.toContain("manus");
    expect(vite).not.toContain("jsxLocPlugin");
    expect(vite).not.toContain("vitePluginManusRuntime");
    expect(JSON.stringify(packageJson).toLowerCase()).not.toContain("manus");
    expect(JSON.stringify(packageJson)).not.toContain("jsx-loc");
    expect(packageJson.pnpm?.patchedDependencies).toBeUndefined();
    expect(existsSync(resolve(here, "../../patches"))).toBe(false);
  });

  it("keeps the direct production dependency set intentionally minimal", () => {
    expect(Object.keys(packageJson.dependencies).sort()).toEqual([
      "@radix-ui/react-slot",
      "class-variance-authority",
      "clsx",
      "compression",
      "express",
      "lucide-react",
      "react",
      "react-dom",
      "tailwind-merge",
      "wouter",
    ]);
  });

  it("hardens Express responses, normalizes trailing slashes, and preserves the public 404 route", () => {
    expect(server).toContain('app.disable("x-powered-by");');
    expect(server).toContain("app.use(compression());");
    expect(server).toContain('res.setHeader("X-Content-Type-Options", "nosniff");');
    expect(server).toContain('res.setHeader("X-Frame-Options", "SAMEORIGIN");');
    expect(server).toContain('res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");');
    expect(server).toContain('res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");');
    expect(server).toContain('res.redirect(301, req.path.replace(/\\/+$/, "") + query);');
    expect(server).toContain('else if (req.path === "/404")');
  });

  it("keeps concise accessible labels for the brand link, ritual toggle, and numbered ingredient hotspots", () => {
    expect(home).toContain('aria-label="01 / epidermal growth factor and peptide benefit details"');
    expect(home).toContain('aria-label="07 / companion device application details"');
    expect(home).not.toContain("Play ritual video");
    expect(home).not.toContain("Bella Nissa Science home");
  });

  it("uses the approved softer slate and care-note colors", () => {
    expect(styles).toContain("--soft-slate: #6a7372");
    expect(styles).not.toContain("#808988");
    expect(styles).not.toContain("#61716c");
  });
});

export {};
