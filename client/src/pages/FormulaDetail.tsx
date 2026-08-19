/**
 * Clinical Atelier formula dossier: sourced ingredient context, clear substantiation boundaries, refined specimen panels, and BNS authority marks.
 */
import ArrowLeft from "lucide-react/dist/esm/icons/arrow-left";
import ArrowUpRight from "lucide-react/dist/esm/icons/arrow-up-right";
import ChevronRight from "lucide-react/dist/esm/icons/chevron-right";
import { useEffect } from "react";

const ASSETS = {
  logo: "/media/bns-emblem_58bd568a.svg",
  serum: "/media/bns-cycle9-serum-1440_d013724f.jpg",
};

const serumSources = {
  webp: "/media/bns-cycle9-serum-480_8f77fbe8.webp 480w, /media/bns-cycle9-serum-768_5a1d8911.webp 768w, /media/bns-cycle9-serum-1024_ce163f2e.webp 1024w, /media/bns-cycle9-serum-1440_ca989e75.webp 1440w, /media/bns-cycle9-serum-1920_ecadc3bc.webp 1920w",
  fallback: "/media/bns-cycle9-serum-480_eef061f4.jpg 480w, /media/bns-cycle9-serum-768_d1911094.jpg 768w, /media/bns-cycle9-serum-1024_ce1a8fa0.jpg 1024w, /media/bns-cycle9-serum-1440_d013724f.jpg 1440w, /media/bns-cycle9-serum-1920_ba61fb83.jpg 1920w",
};

const formulaMetadata = {
  title: "Rejuvenating Bioactive Precision Serum | Formula Detail | Bella Nissa Science",
  description: "An evidence-context dossier for Rejuvenating Bioactive Precision Serum, describing individual ingredients and a cosmetic ritual that supports the appearance of smooth, hydrated, radiant-looking skin.",
  url: "https://bella-nissa-science.manus.space/formula",
  image: "https://bella-nissa-science.manus.space/media/bns-cycle9-serum-1440_d013724f.jpg",
  imageAlt: "Bella Nissa Science serum with a translucent ruby-red formula and warm polished gold hardware.",
};

const evidenceRows = [
  {
    group: "NAD+ + niacinamide",
    focus: "Vitamin B3 and coenzyme context",
    copy: "Niacinamide has a substantial topical cosmetic literature base for skin-barrier and tone-focused contexts. NAD+ is presented here as part of the formula’s vitality-minded active story.",
    source: "Niacinamide review",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8389214/",
  },
  {
    group: "Hyaluronic acid",
    focus: "Surface hydration context",
    copy: "Hyaluronic acid is widely used in topical formulations for its humectant properties. Molecular weight and finished-formula design affect topical behaviour.",
    source: "Topical HA review",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10078143/",
  },
  {
    group: "sh-Oligopeptide-1 + peptides (EGF)",
    focus: "Formula complexity and delivery context",
    copy: "Peptide and growth-factor literature is varied. Ingredient-level research does not substitute for finished-formula performance data, so this system keeps its peptide story cosmetic and appearance-focused.",
    source: "EGF systematic review",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8423211/",
  },
  {
    group: "Ectoin + glutathione + adenosine",
    focus: "Comfort and antioxidant-focused context",
    copy: "These actives complete the formula’s hydration, comfort, and antioxidant-focused positioning. Claims should be assessed in the final formula at its disclosed concentrations.",
    source: "Ingredient evidence context",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2921764/",
  },
];

export default function FormulaDetail() {
  useEffect(() => {
    const previousTitle = document.title;
    const updates: Array<[string, string, string]> = [
      ["meta[name='description']", "content", formulaMetadata.description],
      ["link[rel='canonical']", "href", formulaMetadata.url],
      ["meta[property='og:title']", "content", formulaMetadata.title],
      ["meta[property='og:description']", "content", formulaMetadata.description],
      ["meta[property='og:url']", "content", formulaMetadata.url],
      ["meta[property='og:image']", "content", formulaMetadata.image],
      ["meta[property='og:image:width']", "content", "1440"],
      ["meta[property='og:image:height']", "content", "1920"],
      ["meta[property='og:image:alt']", "content", formulaMetadata.imageAlt],
      ["meta[name='twitter:title']", "content", formulaMetadata.title],
      ["meta[name='twitter:description']", "content", formulaMetadata.description],
      ["meta[name='twitter:image']", "content", formulaMetadata.image],
      ["meta[name='twitter:image:alt']", "content", formulaMetadata.imageAlt],
    ];
    const resets = updates.flatMap(([selector, attribute, value]) => {
      const node = document.head.querySelector<HTMLElement>(selector);
      if (!node) return [];
      const previous = node.getAttribute(attribute);
      node.setAttribute(attribute, value);
      return [() => previous === null ? node.removeAttribute(attribute) : node.setAttribute(attribute, previous)];
    });
    document.title = formulaMetadata.title;
    return () => {
      document.title = previousTitle;
      resets.forEach((reset) => reset());
    };
  }, []);

  return (
    <div className="formula-page">
      <a className="skip-link" href="#formula-main-content">Skip to main content</a>
      <header className="formula-header">
        <a className="formula-brand site-link brand-link brand-link--on-light" href="/" aria-label="Return to Bella Nissa Science home">
          <img src={ASSETS.logo} alt="" width="100" height="100" loading="eager" decoding="async" />
          <span><b>Bella Nissa</b><small>SCIENCE / BNS</small></span>
        </a>
        <a className="formula-back site-link brand-link brand-link--on-light" href="/"><ArrowLeft size={15} /> Return to the system</a>
      </header>

      <main id="formula-main-content" tabIndex={-1}>
        <section className="formula-hero" aria-labelledby="formula-title">
          <div className="formula-hero__copy">
            <div className="section-kicker">Formula dossier / 01</div>
            <h1 id="formula-title">The formula,<br /><em>under a clearer lens.</em></h1>
            <p>Ingredient rationale, evidence context, and the finished-formula questions that matter. This is not a claim catalogue; it is a precise view of how Bella Nissa Science approaches substantiation.</p>
            <a className="formula-scroll site-link brand-link brand-link--on-light" href="#substantiation">Read the substantiation framework <ChevronRight size={16} /></a>
          </div>
          <div className="formula-hero__specimen">
            <picture className="responsive-picture"><source type="image/webp" srcSet={serumSources.webp} sizes="(max-width: 680px) 100vw, 50vw" /><img src={ASSETS.serum} srcSet={serumSources.fallback} sizes="(max-width: 680px) 100vw, 50vw" alt="Bella Nissa Science serum with a translucent ruby-red formula and warm polished gold hardware" width="1440" height="1920" loading="lazy" decoding="async" /></picture>
            <div className="formula-hero__seal"><img src={ASSETS.logo} alt="" width="100" height="100" loading="lazy" decoding="async" /><span>BNS<br />FORMULA<br />DOSSIER</span></div>
            <div className="formula-hero__measure"><span>FORMULA / 01</span><i /><span>ACTIVE CONTEXT</span></div>
          </div>
        </section>

        <section className="substantiation-section" id="substantiation" aria-labelledby="substantiation-title">
          <div className="substantiation-heading">
            <div className="section-kicker">Substantiation / 02</div>
            <h2 id="substantiation-title">Ingredient evidence<br />is not product proof.</h2>
            <p>Public studies can help explain an ingredient’s cosmetic context. They do not establish the performance of a specific finished serum without product-specific testing, disclosed concentrations, and defined study methods.</p>
          </div>

          <div className="substantiation-status">
            <div className="status-marker"><span>STATUS</span><b>01</b></div>
            <div><strong>Product-specific testing data has not been supplied for publication.</strong><p>This page separates published ingredient context from evidence that would substantiate the finished Bella Nissa Science formula. No clinical result, performance number, or device-assisted delivery claim is presented here without supporting product data.</p></div>
          </div>

          <div className="evidence-ledger">
            <div className="evidence-ledger__head"><span>ACTIVE GROUP</span><span>COSMETIC CONTEXT</span><span>PUBLIC LITERATURE</span></div>
            {evidenceRows.map((row, index) => (
              <article className="evidence-row" key={row.group}>
                <span className="evidence-row__number">0{index + 1}</span>
                <div><h3>{row.group}</h3><p>{row.focus}</p></div>
                <div className="evidence-row__copy"><p>{row.copy}</p><a className="site-link brand-link brand-link--on-light" href={row.href} target="_blank" rel="noopener noreferrer">{row.source} <ArrowUpRight size={13} /></a></div>
              </article>
            ))}
          </div>
          <p className="formula-reference-disclaimer">References describe published research on individual ingredients. They are not claims about this finished product.</p>
        </section>

        <section className="testing-section" aria-labelledby="testing-title">
          <div className="testing-section__head">
            <div className="section-kicker">Testing roadmap / 03</div>
            <h2 id="testing-title">What finished-formula<br />substantiation looks like.</h2>
          </div>
          <div className="testing-grid">
            <article><span>01 / Safety</span><h3>Compatibility and tolerability</h3><p>Patch testing, supervised use testing, and product stability assessment are practical steps for demonstrating the formula is appropriate for its intended cosmetic use.</p></article>
            <article><span>02 / Instrumental</span><h3>Measurable surface outcomes</h3><p>Where claims are proposed, suitable methods may include hydration or barrier-focused instrumental assessments with a defined protocol and qualified review.</p></article>
            <article><span>03 / Consumer</span><h3>Defined user experience</h3><p>Consumer perception work can assess how the finished serum feels and wears when used as directed, while maintaining a clear separation from medical or structural claims.</p></article>
          </div>
          <div className="testing-note"><img src={ASSETS.logo} alt="" width="100" height="100" loading="lazy" decoding="async" /><p><b>FORMULA STANDARD</b> Any public Bella Nissa Science performance claim should be supported by a finished-product protocol that matches the claim, the use directions, and the product as sold.</p></div>
        </section>

        <section className="formula-close">
          <div><span className="molecular-waypoint"><i /><i /><i /></span><p>Formula first. Method follows.</p></div>
          <h2>Explore the system<br />as a measured ritual.</h2>
          <a href="/" className="formula-return site-link brand-link brand-link--on-light">Back to the serum + device <ArrowUpRight size={17} /></a>
        </section>
      </main>
    </div>
  );
}
