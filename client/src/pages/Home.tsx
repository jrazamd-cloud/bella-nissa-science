/**
 * Clinical Atelier design system: luminous white fields, silver hardware, and calibration-emerald accents.
 * The layout treats Bella Nissa Science as a connected serum-and-device protocol rather than a conventional beauty catalogue.
 */
import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronRight,
  Menu,
  Minus,
  Plus,
  X,
} from "lucide-react";

const ASSETS = {
  logo: "/manus-storage/bns-emblem-transparent_78c3dda7.png",
  hero: "/manus-storage/bns-hero-system_78a7dae4.jpg",
  serum: "/manus-storage/bns-serum-laboratory_969683fc.jpg",
  device: "/manus-storage/bns-device-precision_66879012.jpg",
  deviceInternalAssembled: "/manus-storage/bns-device-internal-assembled_622a9b8a.jpg",
  ritualMotion: "/manus-storage/bns-blonde-device-ritual-motion_68f91816.mp4",
  ritualMineralStill: "/manus-storage/bns-blonde-device-ritual-mineral-keyframe_7a913bcc.png",
  ingredientMap: "/manus-storage/bns-skin-layer-ingredient-map_07772248.jpg",
};

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
  const [assemblyStage, setAssemblyStage] = useState(0);
  const assemblyRef = useRef<HTMLElement | null>(null);

  const activeProtocol = protocol[activeStep];

  useEffect(() => {
    const updateAssemblyStage = () => {
      const section = assemblyRef.current;
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const travel = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, (window.scrollY - sectionTop) / travel));
      setAssemblyStage(progress < 0.32 ? 0 : progress < 0.7 ? 1 : 2);
    };
    updateAssemblyStage();
    window.addEventListener("scroll", updateAssemblyStage, { passive: true });
    window.addEventListener("resize", updateAssemblyStage);
    return () => {
      window.removeEventListener("scroll", updateAssemblyStage);
      window.removeEventListener("resize", updateAssemblyStage);
    };
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Bella Nissa Science home">
          <img src={ASSETS.logo} alt="BNS scientific emblem" />
          <Wordmark />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#system">The system</a>
          <a href="/formula">Formula detail</a>
          <a href="#method">The method</a>
        </nav>

        <a className="header-action" href="#protocol">
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
          <a href="#system" onClick={() => setMenuOpen(false)}>The system</a>
          <a href="/formula" onClick={() => setMenuOpen(false)}>Formula detail</a>
          <a href="#method" onClick={() => setMenuOpen(false)}>The method</a>
          <a href="#protocol" onClick={() => setMenuOpen(false)}>View protocol</a>
        </nav>
      )}

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="section-kicker">
              <span className="kicker-dot" />
              Clinical skincare, calibrated
            </div>
            <h1 id="hero-title">
              A serum designed<br />
              <em>to meet its method.</em>
            </h1>
            <p className="hero-description">
              Bella Nissa Science connects a precision formula with a purposeful absorption ritual—one quiet, considered system.
            </p>
            <div className="hero-actions">
              <a className="button button--emerald" href="#system">
                Explore the system <ArrowDownRight size={17} />
              </a>
              <a className="text-link" href="#protocol">
                See the two-step protocol <ChevronRight size={17} />
              </a>
            </div>
          </div>

          <div className="hero-stage" aria-label="Bella Nissa Science serum and device">
            <img className="hero-image" src={ASSETS.hero} alt="Bella Nissa Science serum and absorption device" />
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
          <div className="proof-badge"><img src={ASSETS.logo} alt="" /></div>
        </section>

        <section className="system-section" id="system" aria-labelledby="system-title">
          <div className="system-intro">
            <div className="section-kicker">01 / The system</div>
            <h2 id="system-title">Not a collection.<br /><em>A coordinated ritual.</em></h2>
          </div>
          <div className="system-statement">
            <p>Two components, each with a distinct role. The serum begins the ritual; the device is made to follow it.</p>
            <a className="text-link" href="#protocol">Understand the protocol <ArrowDownRight size={17} /></a>
          </div>
        </section>

        <section className="product-columns" aria-label="The Bella Nissa Science products">
          <article className="product-feature product-feature--serum" id="formula">
            <div className="product-feature__meta">
              <span>01 / Formula</span>
              <span>30 mL</span>
            </div>
            <div className="product-feature__image-wrap">
              <img src={ASSETS.serum} alt="Bioactive Renewal Serum in frosted white packaging" />
              <span className="image-index">BNS / 01</span>
            </div>
            <div className="product-feature__content">
              <p className="product-label">Bioactive Renewal Serum</p>
              <h3>Start with the formula.</h3>
              <p>Frosted glass, measured presentation, and a formula-first point of entry for the Bella Nissa Science system.</p>
              <a className="product-link" href="#protocol">Explore serum <ArrowUpRight size={17} /></a>
            </div>
          </article>

          <article className="product-feature product-feature--device" id="method">
            <div className="product-feature__meta">
              <span>02 / Method</span>
              <span>Companion device</span>
            </div>
            <div className="product-feature__image-wrap">
              <img src={ASSETS.device} alt="Bella Nissa Science absorption and massage device" />
              <span className="image-index">BNS / 02</span>
            </div>
            <div className="product-feature__content">
              <p className="product-label">Absorption + Massage Device</p>
              <h3>Continue with purpose.</h3>
              <p>A compact companion designed to make the application ritual feel purposeful, tactile, and complete.</p>
              <a className="product-link" href="#protocol">Explore device <ArrowUpRight size={17} /></a>
            </div>
          </article>
        </section>

        <section ref={assemblyRef} className={`assembly-scroller assembly-scroller--stage-${assemblyStage}`} aria-labelledby="assembly-title">
          <div className="assembly-sticky">
            <div className="assembly-copy">
              <div className="section-kicker">03 / Internal assembly</div>
              <p className="assembly-copy__index">DEVICE / 02</p>
              <h2 id="assembly-title">The system,<br /><em>held within.</em></h2>
              <p>The companion device opens from a complete object to an internal assembly, then returns to its finished form as you scroll back through the sequence.</p>
              <div className="assembly-copy__seal"><img src={ASSETS.logo} alt="BNS molecular badge" /><span>BNS / INTERNAL<br />ASSEMBLY CONCEPT</span></div>
              <div className="assembly-progress" aria-label="Assembly sequence progress"><span className={assemblyStage >= 0 ? "is-active" : ""}>01 / ASSEMBLED</span><span className={assemblyStage >= 1 ? "is-active" : ""}>02 / OPEN</span><span className={assemblyStage >= 2 ? "is-active" : ""}>03 / EXPLODED</span></div>
            </div>
            <div className="assembly-render" aria-label="Illustrative internal exploded assembly of the Bella Nissa Science device">
              <img className="assembly-frame assembly-frame--assembled" src={ASSETS.deviceInternalAssembled} alt="Bella Nissa device in its assembled form" />
              <div className="internal-assembly" aria-hidden="true">
                <div className="internal-part internal-part--cap"><span /></div>
                <div className="internal-part internal-part--ring"><span /></div>
                <div className="internal-part internal-part--faceplate"><span className="internal-power" /></div>
                <div className="internal-part internal-part--module"><span /><i /><i /></div>
                <div className="internal-part internal-part--board"><span /><i /><i /><i /></div>
                <div className="internal-part internal-part--cell"><span>POWER</span></div>
                <div className="internal-part internal-part--flex"><span /></div>
                <div className="internal-part internal-part--chassis"><img src={ASSETS.logo} alt="" /></div>
                <div className="internal-part internal-part--base"><span /></div>
              </div>
              <div className="assembly-callout assembly-callout--cap"><i /><span>CURVED<br />TREATMENT CAP</span></div>
              <div className="assembly-callout assembly-callout--ring"><i /><span>CONDUCTIVE<br />CONTACT RING</span></div>
              <div className="assembly-callout assembly-callout--board"><i /><span>CONTROL +<br />INTERFACE BOARD</span></div>
              <div className="assembly-callout assembly-callout--cell"><i /><span>RECHARGEABLE<br />POWER CELL</span></div>
              <div className="assembly-callout assembly-callout--flex"><i /><span>CONTACT<br />FLEX LAYER</span></div>
              <div className="assembly-callout assembly-callout--base"><i /><span>LOWER<br />SUPPORT BASE</span></div>
              <div className="assembly-render__note"><img src={ASSETS.logo} alt="" /><span>ILLUSTRATIVE INTERNAL CONCEPT<br />PENDING PRODUCTION CAD</span></div>
            </div>
          </div>
        </section>

        <section className="motion-education" id="ritual" aria-labelledby="ritual-title">
          <div className="motion-education__visual">
            <video
              className="ritual-video"
              src={ASSETS.ritualMotion}
              autoPlay
              muted
              loop
              playsInline
              aria-label="A blonde woman using the Bella Nissa Science absorption and massage device as part of her skincare ritual"
            />
            <div className="motion-education__visual-mark" aria-hidden="true">
              <img src={ASSETS.logo} alt="" />
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
              <div className="ingredient-science__seal"><img src={ASSETS.logo} alt="BNS molecular badge" /><span>FORMULATION<br />AUTHORITY</span></div>
              <p>The serum sits at the surface of the ritual. The companion device follows with a directed application pass over the serum layer—an intentional finish, not a claim of deep or clinical delivery.</p>
            </div>
          </div>

          <figure className="ingredient-figure">
            <img src={ASSETS.ingredientMap} alt="Bella Nissa Science skin-layer illustration with active serum ingredient groupings and the device shown in guided surface application" />
            <button className="ingredient-hotspot ingredient-hotspot--peptides" type="button" aria-label="Peptide complex and EGF benefit details"><span>01</span><i className="ingredient-tooltip"><b>Peptide complex (EGF)</b> Cosmetic-facing formula support for the appearance of smoothness and skin conditioning.</i></button>
            <button className="ingredient-hotspot ingredient-hotspot--nad" type="button" aria-label="NAD plus and niacinamide benefit details"><span>02</span><i className="ingredient-tooltip"><b>NAD+ + niacinamide</b> Vitality-minded formulation context with barrier- and tone-focused cosmetic support.</i></button>
            <button className="ingredient-hotspot ingredient-hotspot--moisture" type="button" aria-label="Hyaluronic acid ectoin and glutathione benefit details"><span>03</span><i className="ingredient-tooltip"><b>Hydration + antioxidant context</b> A surface-focused pairing for a hydrated feel and environmental comfort story.</i></button>
            <button className="ingredient-hotspot ingredient-hotspot--device" type="button" aria-label="Companion device application details"><span>04</span><i className="ingredient-tooltip"><b>Companion device</b> Follows serum as a guided surface-application pass; it is not presented as a clinical-delivery tool.</i></button>
            <figcaption><span>FORMULA / SURFACE-LEVEL STORY</span><span>DEVICE / GUIDED APPLICATION PASS</span></figcaption>
          </figure>

          <div className="ingredient-science__body">
            <div className="ingredient-science__intro">
              <div className="section-kicker">The active system</div>
              <h3>Four formulation stories.<br />One considered sequence.</h3>
              <p>Each active group has been placed within the surface and upper-skin context appropriate to a cosmetic formula. Product performance depends on the full formulation and individual skin response.</p>
            </div>
            <ul className="ingredient-list">
              <li>
                <span className="ingredient-list__dot">01</span>
                <div><strong>sh-Oligopeptide-1 + peptide complex (EGF)</strong><p>A formula-focused peptide group, including copper tripeptide-1, acetyl octapeptide-3, and palmitoyl tripeptide-5, positioned around the appearance of smoothness and skin conditioning.</p></div>
              </li>
              <li>
                <span className="ingredient-list__dot">02</span>
                <div><strong>NAD+ + niacinamide</strong><p>A coenzyme-and-vitamin B3 story for vitality-minded care, with niacinamide commonly used in cosmetic formulas that support a balanced-looking tone and skin barrier.</p></div>
              </li>
              <li>
                <span className="ingredient-list__dot">03</span>
                <div><strong>Adenosine + ectoin</strong><p>A comfort-focused pairing used to support a smooth-looking surface and help the formula feel protective in the context of everyday environmental exposure.</p></div>
              </li>
              <li>
                <span className="ingredient-list__dot">04</span>
                <div><strong>Hyaluronic acid + glutathione</strong><p>A moisture-and-antioxidant-focused pairing: sodium hyaluronate supports a hydrated feel, while glutathione completes the formula’s antioxidant-focused profile.</p></div>
              </li>
            </ul>
          </div>

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
            <a href="/formula" className="formula-link">Read the formula dossier <ArrowUpRight size={16} /></a>
          </div>
          <div className="use-accordion__steps">
            {usageSteps.map((step, index) => {
              const isOpen = openUsageStep === index;
              return <article className={`use-step ${isOpen ? "use-step--open" : ""}`} key={step.id}>
                <button type="button" onClick={() => setOpenUsageStep(isOpen ? null : index)} aria-expanded={isOpen}>
                  <span>{step.id}</span><strong>{step.title}</strong><i>{isOpen ? "−" : "+"}</i>
                </button>
                <div className="use-step__content" aria-hidden={!isOpen}><div><p>{step.body}</p><small>{step.note}</small></div></div>
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
              <img src={ASSETS.logo} alt="BNS emblem" />
            </div>

            <div className="protocol-workspace">
              <div className="protocol-tabs" aria-label="Protocol steps">
                {protocol.map((item, index) => (
                  <button
                    className={`protocol-tab ${activeStep === index ? "protocol-tab--active" : ""}`}
                    key={item.id}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    aria-pressed={activeStep === index}
                  >
                    <span>{item.id}</span>
                    <strong>{["Prepare", "Formula", "Method", "Complete"][index]}</strong>
                    {activeStep === index ? <Minus size={18} /> : <Plus size={18} />}
                  </button>
                ))}
              </div>
              <div className="protocol-reading" key={activeProtocol.id}>
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
              <div className="silver-specimen silver-specimen--device"><img src={ASSETS.logo} alt="" /><i /><i /><i /></div>
              <h3>The companion step</h3>
              <p>The absorption and massage device follows the serum, turning application into a deliberate, tactile part of the ritual.</p>
              <span className="system-role-card__tag">SERUM → DEVICE</span>
            </article>
          </div>
        </section>

        <section className="closing-section" aria-labelledby="closing-title">
          <div className="closing-copy">
            <div className="section-kicker">A clinical ritual, made considered</div>
            <h2 id="closing-title">The science<br /><em>is in the pairing.</em></h2>
            <div className="closing-detail" aria-label="Bella Nissa Science protocol specification">
              <span className="molecular-waypoint"><i /><i /><i /></span>
              <p><b>PROTOCOL / 02</b> Formula followed by method, arranged as one measured ritual.</p>
            </div>
          </div>
          <div className="closing-stamp">
            <img src={ASSETS.logo} alt="BNS scientific emblem" />
            <p>BELLA NISSA<br />SCIENCE</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand brand--footer" href="#top">
          <img src={ASSETS.logo} alt="BNS scientific emblem" />
          <Wordmark inverse />
        </a>
        <p>Clinical skincare, calibrated.</p>
        <p className="footer-meta">© 2026 Bella Nissa Science</p>
      </footer>
    </div>
  );
}
