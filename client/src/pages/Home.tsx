/**
 * Clinical Atelier design system: luminous white fields, silver hardware, and calibration-emerald accents.
 * The layout treats Bella Nissa Science as a connected serum-and-device protocol rather than a conventional beauty catalogue.
 */
import { useEffect, useRef, useState } from "react";
import ArrowDownRight from "lucide-react/dist/esm/icons/arrow-down-right";
import ArrowUpRight from "lucide-react/dist/esm/icons/arrow-up-right";
import ChevronRight from "lucide-react/dist/esm/icons/chevron-right";
import Menu from "lucide-react/dist/esm/icons/menu";
import Minus from "lucide-react/dist/esm/icons/minus";
import Plus from "lucide-react/dist/esm/icons/plus";
import X from "lucide-react/dist/esm/icons/x";

const ASSETS = {
  logo: "/manus-storage/bns-emblem_58bd568a.svg",
  hero: "/manus-storage/bns-hero-system-1368_9c59f914.jpg",
  serum: "/manus-storage/bns-serum-laboratory-768_3ee41f64.jpg",
  device: "/manus-storage/bns-device-precision-768_8b639173.jpg",
  ritualMotion: "/manus-storage/bns-ritual-two-step_de344aae.mp4",
  ritualWebm: "/manus-storage/bns-ritual-two-step_74502cd2.webm",
  ritualPoster: "/manus-storage/bns-ritual-two-step-poster_c33fb4c4.jpg",
  ritualMineralStill: "/manus-storage/bns-blonde-device-ritual-mineral-keyframe_7a913bcc.png",
  ingredientMap: "/manus-storage/bns-skin-layer-ingredient-map-1368_bb80f4fd.jpg",
};

const RESPONSIVE_IMAGES = {
  hero: { webp: "/manus-storage/bns-hero-system-768_b3408d56.webp 768w, /manus-storage/bns-hero-system-1368_2f9a82e9.webp 1368w, /manus-storage/bns-hero-system-2048_fd717296.webp 2048w", fallback: "/manus-storage/bns-hero-system-768_b7d3219d.jpg 768w, /manus-storage/bns-hero-system-1368_9c59f914.jpg 1368w, /manus-storage/bns-hero-system-2048_361bf880.jpg 2048w", src: "/manus-storage/bns-hero-system-1368_9c59f914.jpg", sizes: "(max-width: 600px) 100vw, 54vw", width: 2048, height: 1152 },
  serum: { webp: "/manus-storage/bns-serum-laboratory-480_47c0a106.webp 480w, /manus-storage/bns-serum-laboratory-768_4432b9ef.webp 768w, /manus-storage/bns-serum-laboratory-1024_b0f36db7.webp 1024w", fallback: "/manus-storage/bns-serum-laboratory-480_85369883.jpg 480w, /manus-storage/bns-serum-laboratory-768_3ee41f64.jpg 768w, /manus-storage/bns-serum-laboratory-1024_0db91ad3.jpg 1024w", src: "/manus-storage/bns-serum-laboratory-768_3ee41f64.jpg", sizes: "(max-width: 680px) 100vw, 50vw", width: 1024, height: 1365 },
  device: { webp: "/manus-storage/bns-device-precision-480_085284d2.webp 480w, /manus-storage/bns-device-precision-768_04de352e.webp 768w, /manus-storage/bns-device-precision-1024_13ead5f0.webp 1024w", fallback: "/manus-storage/bns-device-precision-480_73181fbb.jpg 480w, /manus-storage/bns-device-precision-768_8b639173.jpg 768w, /manus-storage/bns-device-precision-1024_5b10b393.jpg 1024w", src: "/manus-storage/bns-device-precision-768_8b639173.jpg", sizes: "(max-width: 680px) 100vw, 50vw", width: 1024, height: 1365 },
  ingredientMap: { webp: "/manus-storage/bns-skin-layer-ingredient-map-768_b91dfb49.webp 768w, /manus-storage/bns-skin-layer-ingredient-map-1368_e9572ec6.webp 1368w, /manus-storage/bns-skin-layer-ingredient-map-2048_529d3f96.webp 2048w", fallback: "/manus-storage/bns-skin-layer-ingredient-map-768_217a8e07.jpg 768w, /manus-storage/bns-skin-layer-ingredient-map-1368_bb80f4fd.jpg 1368w, /manus-storage/bns-skin-layer-ingredient-map-2048_b488bcf7.jpg 2048w", src: "/manus-storage/bns-skin-layer-ingredient-map-1368_bb80f4fd.jpg", sizes: "(max-width: 680px) 100vw, 86vw", width: 2048, height: 1152 },
};

type ResponsiveImageName = keyof typeof RESPONSIVE_IMAGES;

function ResponsiveImage({ name, alt, className, loading = "lazy", fetchPriority }: { name: ResponsiveImageName; alt: string; className?: string; loading?: "lazy" | "eager"; fetchPriority?: "high" | "low" | "auto" }) {
  const image = RESPONSIVE_IMAGES[name];
  return <picture className="responsive-picture"><source type="image/webp" srcSet={image.webp} sizes={image.sizes} /><img className={className} src={image.src} srcSet={image.fallback} sizes={image.sizes} alt={alt} width={image.width} height={image.height} loading={loading} decoding="async" fetchPriority={fetchPriority} /></picture>;
}

const protocol = [
  {
    id: "01",
    eyebrow: "Preparation / 01",
    title: "Begin with a clean canvas.",
    body: "Start your ritual after cleansing, so the serum is applied to fresh, makeup-free skin.",
    note: "PREPARE / CLEANSE",
  },
  {
    id: "02",
    eyebrow: "Formula / 02",
    title: "Apply the serum first.",
    body: "Dispense the Bioactive Renewal Serum and smooth it over the face as the formula-led opening to the system.",
    note: "BIOACTIVE RENEWAL SERUM",
  },
  {
    id: "03",
    eyebrow: "Method / 03",
    title: "Follow with the device.",
    body: "Continue with the absorption and massage device according to its product instructions, keeping the ritual measured and intentional.",
    note: "ABSORPTION + MASSAGE DEVICE",
  },
  {
    id: "04",
    eyebrow: "Complete / 04",
    title: "Return to your routine.",
    body: "When the two-step ritual is complete, continue with the rest of your regular skincare routine as desired.",
    note: "A CONSIDERED DAILY RITUAL",
  },
];

const usageSteps = [
  { id: "01", title: "Cleanse, then prepare", body: "Begin with clean, dry skin. Keep the application simple and use the serum and device only as directed in their final product instructions.", note: "START WITH FRESHLY CLEANSED SKIN" },
  { id: "02", title: "Apply the serum", body: "Dispense the Bioactive Renewal Serum and spread it in a light, even layer across the areas you want to include in your ritual.", note: "FORMULA / THE FIRST STEP" },
  { id: "03", title: "Follow with the device", body: "After application, use the companion device in gentle, deliberate passes over the serum layer. Do not treat this as a deep-delivery or therapeutic step.", note: "METHOD / GUIDED SURFACE APPLICATION" },
  { id: "04", title: "Complete your routine", body: "Allow the ritual to settle, then continue with the remainder of your usual skincare routine as desired. Pause use if discomfort occurs.", note: "RETURN TO YOUR ROUTINE" },
];

type CitationSentence = { copy: string; refs: number[] };
type FormulaEntry = { id: string; name: string; copy?: string; refs?: number[]; citationSentences?: CitationSentence[] };

const formulaEntries: FormulaEntry[] = [
  {
    id: "01",
    name: "Epidermal growth factor (sh-Oligopeptide-1) and peptides",
    citationSentences: [
      { copy: "sh-Oligopeptide-1 is a bioengineered signalling protein associated with skin’s natural renewal, helping improve the appearance of texture and firmness for a more radiant-looking complexion.", refs: [1] },
      { copy: "Copper tripeptide-1, acetyl octapeptide-3 (Argireline / SNAP-8), and palmitoyl tripeptide-5 complete the peptide complex, supporting the appearance of elasticity, resilience, and smoother-looking expression lines.", refs: [] },
    ],
  },
  {
    id: "02",
    name: "NAD+",
    copy: "NAD+ is a coenzyme present in living cells. In a topical formula, it is positioned as a cellular-fuel story associated with mitochondrial energy, helping skin look vital, firm, and better defended against the visible effects of environmental stress.",
    refs: [2],
  },
  {
    id: "03",
    name: "Niacinamide (vitamin B3) and adenosine",
    copy: "Niacinamide visibly brightens and helps even the look of tone and dark spots while supporting a moisture-barrier story. Adenosine helps smooth the look of the surface and soften the appearance of wrinkles for a firmer-looking finish.",
    refs: [3, 4],
  },
  {
    id: "04",
    name: "Ectoin",
    copy: "Ectoin is a natural extremolyte associated with hydration-shell support. It helps buffer the visible effects of pollution, UV-induced stress, and allergens, keeping the barrier feeling calm, resilient, and moisturised.",
    refs: [5],
  },
  {
    id: "05",
    name: "Hyaluronic acid (sodium hyaluronate)",
    copy: "Hyaluronic acid and sodium hyaluronate are humectants associated with surface hydration. In topical use, they help skin look instantly plumper, soften the look of dehydration lines, and leave the complexion looking dewy and quenched.",
    refs: [6],
  },
  {
    id: "06",
    name: "Topical glutathione",
    copy: "Topical glutathione is widely used in antioxidant-focused formulas. It helps defend against environmental aggressors while supporting the appearance of more even-looking tone and a more luminous complexion.",
    refs: [7],
  },
];

const formulaReferences = [
  { id: 1, title: "Improved texture and appearance of human facial skin after daily topical application of barley produced, synthetic, human-like epidermal growth factor (EGF) serum", journal: "Journal of Drugs in Dermatology", citation: "2012 May;11(5):613-20. PMID: 22527430.", href: "https://pubmed.ncbi.nlm.nih.gov/22527430/" },
  { id: 2, title: "Novel Approach to Skin Anti-Aging: Boosting Pharmacological Strategies", journal: "Antioxidants (Basel)", href: "https://pubmed.ncbi.nlm.nih.gov/39513906/" },
  { id: 3, title: "Mechanistic Insights into the Multiple Functions of Niacinamide", journal: "International Journal of Molecular Sciences", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11047333/" },
  { id: 4, title: "The possible role of the nucleoside adenosine in countering skin aging", journal: "Ageing Research Reviews", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9804842/" },
  { id: 5, title: "Ectoin: An Effective Natural Substance to Prevent UVA-Induced Premature Photoaging", journal: "Skin Pharmacology and Physiology", href: "https://karger.com/spp/article/17/5/232/295389/Ectoin-An-Effective-Natural-Substance-to-Prevent" },
  { id: 6, title: "Benefits of topical hyaluronic acid for skin quality and signs of skin aging", journal: "Dermatology and Therapy", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10078143/" },
  { id: 7, title: "Exploring the Safety and Efficacy of Glutathione", journal: "Antioxidants", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11862975/" },
];

function CitationMarkers({ references }: { references: number[] }) {
  return <>{references.map((reference) => <sup key={reference}><a className="brand-link brand-link--on-light" href={`#ingredient-ref-${reference}`} aria-label={`Read reference ${reference}`}>{reference}</a></sup>)}</>;
}

function Wordmark({ inverse = false }: { inverse?: boolean }) {
  return (
    <div className={`wordmark ${inverse ? "wordmark--inverse" : ""}`} aria-label="Bella Nissa Science">
      <span>Bella Nissa</span>
      <small>SCIENCE / BNS</small>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [openUsageStep, setOpenUsageStep] = useState<number | null>(0);
  const [heroProgress, setHeroProgress] = useState(0);
  const [ritualVisible, setRitualVisible] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);
  const ritualRef = useRef<HTMLElement | null>(null);

  const activeProtocol = protocol[activeStep];

  useEffect(() => {
    const updateScrollScenes = () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reducedMotion) {
        setHeroProgress(1);
        return;
      }
      const hero = heroRef.current;
      if (hero) {
        const heroTop = hero.getBoundingClientRect().top + window.scrollY;
        const heroTravel = Math.max(1, hero.offsetHeight - window.innerHeight);
        setHeroProgress(Math.min(1, Math.max(0, (window.scrollY - heroTop) / heroTravel)));
      }
    };
    updateScrollScenes();
    window.addEventListener("scroll", updateScrollScenes, { passive: true });
    window.addEventListener("resize", updateScrollScenes);
    return () => {
      window.removeEventListener("scroll", updateScrollScenes);
      window.removeEventListener("resize", updateScrollScenes);
    };
  }, []);

  useEffect(() => {
    const ritual = ritualRef.current;
    if (!ritual) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRitualVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setRitualVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.22 });
    observer.observe(ritual);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="site-header">
        <a className="brand site-link brand-link brand-link--on-light" href="#top" aria-label="Bella Nissa Science home">
          <img src={ASSETS.logo} alt="BNS scientific emblem" width="100" height="100" loading="eager" decoding="async" />
          <Wordmark />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a className="brand-link brand-link--on-light" href="#system">The system</a>
          <a className="brand-link brand-link--on-light" href="/formula">Formula detail</a>
          <a className="brand-link brand-link--on-light" href="#method">The method</a>
        </nav>

        <a className="header-action site-link brand-link brand-link--on-light" href="#protocol">
          View protocol <ArrowUpRight size={14} strokeWidth={1.7} />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={21} />}
        </button>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <a className="brand-link brand-link--on-light" href="#system" onClick={() => setMenuOpen(false)}>The system</a>
          <a className="brand-link brand-link--on-light" href="/formula" onClick={() => setMenuOpen(false)}>Formula detail</a>
          <a className="brand-link brand-link--on-light" href="#method" onClick={() => setMenuOpen(false)}>The method</a>
          <a className="brand-link brand-link--on-light" href="#protocol" onClick={() => setMenuOpen(false)}>View protocol</a>
        </nav>
      )}

      <main id="main-content" tabIndex={-1}>
        <section ref={heroRef} className="hero hero--pinned" aria-labelledby="hero-title" style={{ "--hero-progress": heroProgress } as React.CSSProperties}>
          <div className="hero-copy">
            <div className="section-kicker">
              <span className="kicker-dot" />
              Clinical skincare, calibrated
            </div>
            <h1 id="hero-title">
              <span className="hero-line">A serum</span>
              <span className="hero-line">designed to</span>
              <span className="hero-line hero-line--accent">meet its</span>
              <span className="hero-line hero-line--accent">method.</span>
            </h1>
            <p className="hero-description">
              Bella Nissa Science connects a precision formula with a purposeful absorption ritual—one quiet, considered system.
            </p>
            <div className="hero-actions">
              <a className="button button--emerald brand-link brand-link--action brand-link--on-dark" href="#system">
                Explore the system <ArrowDownRight size={17} />
              </a>
            </div>
          </div>

          <div className="hero-stage" aria-label="Bella Nissa Science serum and device">
            <ResponsiveImage name="hero" className="hero-image" alt="Bella Nissa Science serum and absorption device" loading="eager" fetchPriority="high" />
            <div className="hero-stage__visual hero-stage__visual--serum" aria-hidden="true"><ResponsiveImage name="serum" alt="" /></div>
            <div className="hero-stage__visual hero-stage__visual--device" aria-hidden="true"><ResponsiveImage name="device" alt="" /></div>
            <div className="hero-epilogue" aria-label="System specification">
              <div><b>FORMULA</b><span>01</span><i /></div>
              <div><b>METHOD</b><span>02</span><i /></div>
            </div>
            <div className="hero-stage__badge">
              <span>System / 02 components</span>
              <i />
              <span>Designed to pair</span>
            </div>
            <div className="hero-stage__scale" aria-hidden="true">
              <span>0</span><i /><i /><i /><i /><span>100</span>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Brand principles">
          <p>FORMULATION <span>+</span> METHOD</p>
          <div className="proof-rule" />
          <p>FROSTED WHITE <span>·</span> SATIN SILVER <span>·</span> CALIBRATION EMERALD</p>
          <div className="proof-badge"><img src={ASSETS.logo} alt="" width="100" height="100" loading="lazy" decoding="async" /></div>
        </section>

        <section className="system-section" id="system" aria-labelledby="system-title">
          <div className="system-intro">
            <div className="section-kicker">01 / The system</div>
            <h2 id="system-title">Two components.<br /><em>One coordinated ritual.</em></h2>
          </div>
          <div className="system-statement">
            <p>Two components, each with a distinct role. The serum begins the ritual; the device is made to follow it.</p>
            <a className="text-link brand-link brand-link--on-light" href="#protocol">Understand the protocol <ArrowDownRight size={17} /></a>
          </div>
        </section>

        <section className="product-columns" aria-label="The Bella Nissa Science products">
          <article className="product-feature product-feature--serum" id="formula">
            <div className="product-feature__meta">
              <span>01 / Formula</span>
              <span>30 mL</span>
            </div>
            <div className="product-feature__image-wrap">
              <ResponsiveImage name="serum" alt="Bioactive Renewal Serum in frosted white packaging" />
              <span className="image-index">BNS / 01</span>
            </div>
            <div className="product-feature__content">
              <p className="product-label">Bioactive Renewal Serum</p>
              <h3>Start with the formula.</h3>
              <p>Frosted glass, measured presentation, and a formula-first point of entry for the Bella Nissa Science system.</p>
              <a className="product-link brand-link brand-link--on-light" href="#protocol">Explore serum <ArrowUpRight size={17} /></a>
            </div>
          </article>

          <article className="product-feature product-feature--device" id="method">
            <div className="product-feature__meta">
              <span>02 / Method</span>
              <span>Companion device</span>
            </div>
            <div className="product-feature__image-wrap">
              <ResponsiveImage name="device" alt="Bella Nissa Science absorption and massage device" />
              <span className="image-index">BNS / 02</span>
            </div>
            <div className="product-feature__content">
              <p className="product-label">Absorption + Massage Device</p>
              <h3>Continue with purpose.</h3>
              <p>A compact companion designed to make the application ritual feel purposeful, tactile, and complete.</p>
              <a className="product-link brand-link brand-link--on-light" href="#protocol">Explore device <ArrowUpRight size={17} /></a>
            </div>
          </article>
        </section>

        <section ref={ritualRef} className="motion-education" id="ritual" aria-labelledby="ritual-title">
          <div className="motion-education__visual">
            <video
              className="ritual-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={ASSETS.ritualPoster}
              aria-label="A blonde woman using the Bella Nissa Science absorption and massage device as part of her skincare ritual"
            ><source src={ASSETS.ritualWebm} type="video/webm" /><source src={ASSETS.ritualMotion} type="video/mp4" /></video>
            <img className="ritual-plant-overlay" src="/manus-storage/bns-ritual-plant-overlay-368_134c1e48.webp" alt="" aria-hidden="true" width="368" height="368" loading="lazy" decoding="async" />
            <div className={`motion-education__visual-mark ${ritualVisible ? "is-visible" : ""}`} aria-hidden="true">
              <img src={ASSETS.logo} alt="" width="100" height="100" loading="lazy" decoding="async" />
              <span>RITUAL / IN MOTION</span>
            </div>
            <p className="motion-education__caption">METHOD / a calm, deliberate application pass after formula.</p>
          </div>

          <div className="motion-education__copy">
            <div className="section-kicker">03 / Beyond the formula</div>
            <h2 id="ritual-title">Topical care begins<br />at the surface.</h2>
            <p className="motion-education__lead">A well-made serum can be an essential step. Bella Nissa Science adds a purposeful device ritual, so application is treated as more than a final swipe of product.</p>
            <div className="motion-education__rule"><span /><span /><span /></div>
            <div className="motion-education__intro">
              <h3>Visible change deserves a considered routine.</h3>
              <p>Skin can look and feel different over time: less hydrated, less even, or simply less familiar. That does not call for an overcomplicated answer. It calls for a clear sequence you can return to—cleanse, apply the formula, then follow with the device as directed.</p>
            </div>
          </div>

          <div className="concern-grid" aria-label="Bella Nissa Science skincare education">
            <article className="concern-card">
              <div className="concern-card__number">01</div>
              <h3>Texture &amp; hydration</h3>
              <p>When skin appears less smooth or comfortable, the formula step is where the ritual begins. Apply the serum to freshly cleansed skin as directed, with attention to the areas you want to treat with care.</p>
              <span>FORMULA FIRST</span>
            </article>
            <article className="concern-card concern-card--feature">
              <div className="concern-card__number">02</div>
              <h3>The application moment</h3>
              <p>Skincare can be both practical and tactile. The companion device is designed to follow serum application, turning a few intentional passes into a calm part of your routine.</p>
              <span>SERUM → DEVICE</span>
            </article>
            <article className="concern-card">
              <div className="concern-card__number">03</div>
              <h3>Consistency &amp; care</h3>
              <p>Visible skincare goals are personal. Keep your approach simple, follow the directions for each product, and let the system fit naturally into your established daily care.</p>
              <span>RETURN TO THE RITUAL</span>
            </article>
          </div>

          <div className="motion-education__care-note">
            <span className="molecular-waypoint" aria-hidden="true"><i /><i /><i /></span>
            <p><b>Care note</b> This content describes a cosmetic skincare ritual and is not a medical assessment. If you have a persistent skin concern or uncertainty about using a facial device, consult a qualified clinician.</p>
          </div>
        </section>

        <section className="ingredient-science" id="ingredients" aria-labelledby="ingredient-science-title">
          <div className="ingredient-science__head">
            <div>
              <div className="section-kicker">04 / Formula in context</div>
              <h2 id="ingredient-science-title">An active formula,<br /><em>seen in context.</em></h2>
            </div>
            <div className="ingredient-science__annotation">
              <div className="ingredient-science__seal"><img src={ASSETS.logo} alt="BNS molecular badge" width="100" height="100" loading="lazy" decoding="async" /><span>FORMULATION<br />AUTHORITY</span></div>
              <p>The serum sits at the surface of the ritual. The companion device follows with a directed application pass over the serum layer—an intentional finish, not a claim of deep or clinical delivery.</p>
            </div>
          </div>

          <figure className="ingredient-figure">
            <ResponsiveImage name="ingredientMap" alt="Bella Nissa Science skin-layer illustration with active serum ingredient groupings and the device shown in guided surface application" />
            <button className="ingredient-hotspot ingredient-hotspot--peptides" type="button" aria-label="Epidermal growth factor and peptide benefit details"><span>01</span><i className="ingredient-tooltip"><b>01 / EGF + peptides</b> Helps improve the appearance of texture, firmness, elasticity, and smoother-looking expression lines.</i></button>
            <button className="ingredient-hotspot ingredient-hotspot--nad" type="button" aria-label="NAD plus benefit details"><span>02</span><i className="ingredient-tooltip"><b>02 / NAD+</b> Supports a vital-looking, firm-looking surface in an environmental-stress care story.</i></button>
            <button className="ingredient-hotspot ingredient-hotspot--niacinamide" type="button" aria-label="Niacinamide and adenosine benefit details"><span>03</span><i className="ingredient-tooltip"><b>03 / B3 + adenosine</b> Helps even the look of tone and supports a smoother-looking, firmer-looking finish.</i></button>
            <button className="ingredient-hotspot ingredient-hotspot--ectoin" type="button" aria-label="Ectoin benefit details"><span>04</span><i className="ingredient-tooltip"><b>04 / ectoin</b> Supports a calm, resilient, moisturised-feeling barrier in a daily stress-exposure story.</i></button>
            <button className="ingredient-hotspot ingredient-hotspot--hyaluronic" type="button" aria-label="Hyaluronic acid benefit details"><span>05</span><i className="ingredient-tooltip"><b>05 / sodium hyaluronate</b> Helps skin look plumper and more dewy while softening the look of dehydration lines.</i></button>
            <button className="ingredient-hotspot ingredient-hotspot--glutathione" type="button" aria-label="Topical glutathione benefit details"><span>06</span><i className="ingredient-tooltip"><b>06 / glutathione</b> Supports a more even-looking, luminous complexion in an antioxidant-focused formula story.</i></button>
            <button className="ingredient-hotspot ingredient-hotspot--device" type="button" aria-label="Companion device application details"><span>07</span><i className="ingredient-tooltip"><b>07 / Companion device</b> Follows serum as a guided surface-application pass; it is not presented as a clinical-delivery tool.</i></button>
            <figcaption><span>FORMULA / SURFACE-LEVEL STORY</span><span>DEVICE / GUIDED APPLICATION PASS</span></figcaption>
          </figure>

          <div className="ingredient-science__body">
            <div className="ingredient-science__intro">
              <div className="section-kicker">The active system</div>
              <h3>Six formulation stories.<br />One considered sequence.</h3>
              <p>Each active is described in the cosmetic, surface-level context appropriate to a topical formula. Product performance depends on the full formulation and individual skin response.</p>
            </div>
            <ul className="ingredient-list">
              {formulaEntries.map((entry) => (
                <li key={entry.id} className="ingredient-card">
                  <span className="ingredient-list__dot">{entry.id}</span>
                  <div>
                    <strong>{entry.name}</strong>
                    <p>{entry.citationSentences ? entry.citationSentences.map((sentence) => <span key={sentence.copy}>{sentence.copy} <CitationMarkers references={sentence.refs} /> </span>) : <>{entry.copy} <CitationMarkers references={entry.refs ?? []} /></>}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <ol className="ingredient-references" aria-label="Formula in Context references">
            {formulaReferences.map((reference) => (
              <li id={`ingredient-ref-${reference.id}`} key={reference.id}>
                <span>{reference.id}</span>
                <p><cite>{reference.title}</cite><em>{reference.journal}</em>{reference.citation ? <small>{reference.citation}</small> : null}</p>
                <a className="brand-link brand-link--on-light" href={reference.href} target="_blank" rel="noopener noreferrer">View study <ArrowUpRight size={14} /></a>
              </li>
            ))}
          </ol>
          <p className="ingredient-reference-disclaimer">References describe published research on individual ingredients. They are not claims about this finished product.</p>

          <div className="ingredient-science__note">
            <span className="molecular-waypoint" aria-hidden="true"><i /><i /><i /></span>
            <p><b>Formula note</b> Ingredient descriptions are cosmetic education only. This surface-level map does not represent clinical penetration, medical treatment, or a guarantee of individual results.</p>
          </div>
        </section>

        <section className="use-accordion" aria-labelledby="use-accordion-title">
          <div className="use-accordion__intro">
            <div className="section-kicker">05 / Use sequence</div>
            <h2 id="use-accordion-title">Formula first.<br /><em>Method follows.</em></h2>
            <p>Open each step for a clear, measured order of use. This routine describes cosmetic application only; always follow the final product directions.</p>
            <a href="/formula" className="formula-link brand-link brand-link--on-light">Read the formula dossier <ArrowUpRight size={16} /></a>
          </div>
          <div className="use-accordion__steps">
            {usageSteps.map((step, index) => {
              const isOpen = openUsageStep === index;
              return <article className={`use-step ${isOpen ? "use-step--open" : ""}`} key={step.id}>
                <button id={`use-step-control-${step.id}`} type="button" onClick={() => setOpenUsageStep(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={`use-step-panel-${step.id}`}>
                  <span>{step.id}</span><strong>{step.title}</strong><i>{isOpen ? "−" : "+"}</i>
                </button>
                <div id={`use-step-panel-${step.id}`} className="use-step__content" role="region" aria-labelledby={`use-step-control-${step.id}`} aria-hidden={!isOpen}><div><p>{step.body}</p><small>{step.note}</small></div></div>
              </article>;
            })}
          </div>
        </section>

        <section className="protocol-section" id="protocol" aria-labelledby="protocol-title">
          <div className="protocol-panel">
            <div className="protocol-panel__head">
              <div>
                <div className="section-kicker section-kicker--light">03 / Your protocol</div>
                <h2 id="protocol-title">The sequence<br />is the signal.</h2>
              </div>
              <img src={ASSETS.logo} alt="BNS emblem" width="100" height="100" loading="lazy" decoding="async" />
            </div>

            <div className="protocol-workspace">
              <div className="protocol-tabs" aria-label="Protocol steps">
                {protocol.map((item, index) => (
                  <button
                    className={`protocol-tab ${activeStep === index ? "protocol-tab--active" : ""}`}
                    key={item.id}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    id={`protocol-step-${item.id}`}
                    aria-current={activeStep === index ? "step" : undefined}
                    aria-controls="protocol-reading-panel"
                  >
                    <span>{item.id}</span>
                    <strong>{["Prepare", "Formula", "Method", "Complete"][index]}</strong>
                    {activeStep === index ? <Minus size={18} /> : <Plus size={18} />}
                  </button>
                ))}
              </div>
              <div id="protocol-reading-panel" className="protocol-reading" key={activeProtocol.id} role="region" aria-labelledby={`protocol-step-${activeProtocol.id}`} aria-live="polite">
                <p className="mono-label">{activeProtocol.eyebrow}</p>
                <h3>{activeProtocol.title}</h3>
                <p>{activeProtocol.body}</p>
                <div className="protocol-reading__note"><span /> {activeProtocol.note}</div>
              </div>
            </div>
            <div className="protocol-guidance">
              <span className="molecular-waypoint" aria-hidden="true"><i /><i /><i /></span>
              <p><b>Care note</b> Keep the routine simple, use both products only as directed, and pause use if discomfort occurs. If you have a skin concern or a question about compatibility, seek advice from a qualified clinician.</p>
            </div>
          </div>
        </section>

        <section className="application-map" aria-labelledby="application-map-title">
          <div className="application-map__head">
            <div className="section-kicker">04 / System logic</div>
            <h2 id="application-map-title">One formula.<br /><em>One follow-through.</em></h2>
          </div>
          <p className="application-map__intro">A clear order of application: the formula begins the ritual, then the device follows as its purposeful companion step.</p>
          <div className="application-map__cards">
            <article className="system-role-card">
              <div className="system-role-card__index"><span>01</span><span>FORMULA</span></div>
              <div className="silver-specimen"><span>Serum</span><i /><i /><i /><i /></div>
              <h3>The opening layer</h3>
              <p>The Bioactive Renewal Serum is the first applied component: a focused formula step placed directly after cleansing.</p>
              <span className="system-role-card__tag">CLEAN SKIN → SERUM</span>
            </article>
            <article className="system-role-card system-role-card--method">
              <div className="system-role-card__index"><span>02</span><span>METHOD</span></div>
              <div className="silver-specimen silver-specimen--device"><img src={ASSETS.logo} alt="" width="100" height="100" loading="lazy" decoding="async" /><i /><i /><i /></div>
              <h3>The companion step</h3>
              <p>The absorption and massage device follows the serum, turning application into a deliberate, tactile part of the ritual.</p>
              <span className="system-role-card__tag">SERUM → DEVICE</span>
            </article>
          </div>
        </section>

        <section className="closing-section closing-section--single-card" aria-labelledby="closing-title">
          <div className="closing-copy">
            <div className="section-kicker">A clinical ritual, made considered</div>
            <h2 id="closing-title">The science<br /><em>is in the pairing.</em></h2>
            <div className="closing-detail" aria-label="Bella Nissa Science protocol specification">
              <span className="molecular-waypoint"><i /><i /><i /></span>
              <p><b>PROTOCOL / 02</b> Formula followed by method, arranged as one measured ritual.</p>
            </div>
          </div>
          <div className="closing-stamp">
            <img src={ASSETS.logo} alt="BNS scientific emblem" width="100" height="100" loading="lazy" decoding="async" />
            <p>BELLA NISSA<br />SCIENCE</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand brand--footer site-link brand-link brand-link--footer brand-link--on-dark" href="#top">
          <img src={ASSETS.logo} alt="BNS scientific emblem" width="100" height="100" loading="lazy" decoding="async" />
          <Wordmark inverse />
        </a>
        <p>Clinical skincare, calibrated.</p>
        <p className="footer-meta">© 2026 Bella Nissa Science</p>
      </footer>
    </div>
  );
}
