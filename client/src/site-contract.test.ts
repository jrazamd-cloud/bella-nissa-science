import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const home = readFileSync(resolve(here, "pages/Home.tsx"), "utf8");
const formula = readFileSync(resolve(here, "pages/FormulaDetail.tsx"), "utf8");
const styles = readFileSync(resolve(here, "index.css"), "utf8");
const documentHead = readFileSync(resolve(here, "../index.html"), "utf8");

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
    expect(styles).toContain(".hero-image { width: 100%; height: 100%; min-height: 560px; object-fit: cover; object-position: center; mix-blend-mode: multiply; }");
    expect(styles).not.toContain("background: #101b18");
    expect(styles).toContain("outline-offset: 3px");
    expect(styles).toContain(".motion-education__care-note p { max-width: 62ch");
    expect(styles).toContain(".ingredient-science__note p { max-width: 62ch");
    expect(styles).toContain(".protocol-guidance p { max-width: 62ch");
    expect(home).toContain("Two components.<br /><em>One coordinated ritual.</em>");
    expect(home).toContain('<span>07</span><i className="ingredient-tooltip"><b>07 / Companion device</b>');
    expect(styles).toContain(".ingredient-hotspot--device { top: 16%; right: 12%; }");
  });

  it("renders six formula cards and a contiguous eight-source reference list", () => {
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
    const referenceIds = Array.from(home.matchAll(/\{ id: (\d+), title:/g), (match) => Number(match[1]));
    const markers = Array.from(home.matchAll(/refs: \[([\d, ]+)\]/g), (match) => (match[1].match(/\d+/g) ?? []).map(Number)).flat();
    expect(referenceIds).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(markers).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
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

  it("keeps skip navigation, accessible protocol wiring, the Karger citation, and the two-step video sources", () => {
    expect(home).toContain('className="skip-link"');
    expect(formula).toContain('className="skip-link"');
    expect(home).toContain('aria-controls={`use-step-panel-${step.id}`}');
    expect(home).toContain('aria-current={activeStep === index ? "step" : undefined}');
    expect(home).toContain('preload="metadata"');
    expect(home).toContain('bns-ritual-two-step_74502cd2.webm');
    expect(home).toContain('karger.com/spp/article/17/5/232/295389');
  });
});

export {};
