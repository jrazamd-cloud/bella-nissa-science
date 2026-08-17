import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const home = readFileSync(resolve(here, "pages/Home.tsx"), "utf8");
const styles = readFileSync(resolve(here, "index.css"), "utf8");

describe("Bella Nissa Science experience contract", () => {
  it("keeps the hero headline as staged semantic text", () => {
    expect(home).toContain('className="hero-line"');
    expect(home).toContain('id="hero-title"');
    expect(home).toContain('href="#system"');
  });

  it("uses a six-part observable vector anatomy and a customer-facing caption", () => {
    expect(home).toContain("function DeviceAnatomySvg");
    expect(home).toContain('id="treatment-head"');
    expect(home).toContain('id="upper-housing-shell"');
    expect(home).toContain('id="lower-housing-shell"');
    expect(home).toContain('id="internal-core"');
    expect(home).toContain('id="power-cell"');
    expect(home).toContain('id="base-cap"');
    expect(home).toContain("OBSERVABLE PARTS, SHOWN APART");
    expect(home).not.toContain("PENDING PRODUCTION CAD");
  });

  it("defines deliberate focus, visited, and reduced-motion behavior", () => {
    expect(styles).toContain("a:visited");
    expect(styles).toContain("a:focus-visible");
    expect(styles).toContain("prefers-reduced-motion: reduce");
  });
});

export {};
