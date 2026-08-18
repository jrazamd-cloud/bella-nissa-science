/**
 * Clinical Atelier formula dossier: sourced ingredient context, clear substantiation boundaries, frosted specimen panels, and BNS authority marks.
 */
import ArrowLeft from "lucide-react/dist/esm/icons/arrow-left";
import ArrowUpRight from "lucide-react/dist/esm/icons/arrow-up-right";
import ChevronRight from "lucide-react/dist/esm/icons/chevron-right";

const ASSETS = {
  logo: "/manus-storage/bns-emblem_58bd568a.svg",
  serum: "/manus-storage/bns-serum-laboratory-768_3ee41f64.jpg",
};

const serumSources = {
  webp: "/manus-storage/bns-serum-laboratory-480_47c0a106.webp 480w, /manus-storage/bns-serum-laboratory-768_4432b9ef.webp 768w, /manus-storage/bns-serum-laboratory-1024_b0f36db7.webp 1024w",
  fallback: "/manus-storage/bns-serum-laboratory-480_85369883.jpg 480w, /manus-storage/bns-serum-laboratory-768_3ee41f64.jpg 768w, /manus-storage/bns-serum-laboratory-1024_0db91ad3.jpg 1024w",
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
  return (
    <div className="formula-page">
      <a className="skip-link" href="#formula-main-content">Skip to main content</a>
      <header className="formula-header">
        <a className="formula-brand site-link brand-link brand-link--on-light" href="/" aria-label="Return to Bella Nissa Science home">
          <img src={ASSETS.logo} alt="BNS scientific emblem" width="100" height="100" loading="eager" decoding="async" />
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
            <picture className="responsive-picture"><source type="image/webp" srcSet={serumSources.webp} sizes="(max-width: 680px) 100vw, 50vw" /><img src={ASSETS.serum} srcSet={serumSources.fallback} sizes="(max-width: 680px) 100vw, 50vw" alt="Bella Nissa Science Bioactive Renewal Serum" width="1024" height="1365" loading="lazy" decoding="async" /></picture>
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
                <div className="evidence-row__copy"><p>{row.copy}</p><a className="site-link brand-link brand-link--on-light" href={row.href} target="_blank" rel="noreferrer">{row.source} <ArrowUpRight size={13} /></a></div>
              </article>
            ))}
          </div>
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
          <div className="testing-note"><img src={ASSETS.logo} alt="BNS molecular badge" width="100" height="100" loading="lazy" decoding="async" /><p><b>FORMULA STANDARD</b> Any public Bella Nissa Science performance claim should be supported by a finished-product protocol that matches the claim, the use directions, and the product as sold.</p></div>
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
