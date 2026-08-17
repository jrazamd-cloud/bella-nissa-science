/**
 * Clinical Atelier design system: luminous white fields, silver hardware, and calibration-emerald accents.
 * The layout treats Bella Nissa Science as a connected serum-and-device protocol rather than a conventional beauty catalogue.
 */
import { useState } from "react";
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
};

const protocol = [
  {
    id: "01",
    eyebrow: "Formula / 01",
    title: "Prepare the surface.",
    body: "Apply the Bioactive Renewal Serum as the first measured step in the system.",
    note: "BIOACTIVE RENEWAL SERUM",
  },
  {
    id: "02",
    eyebrow: "Method / 02",
    title: "Follow with the device.",
    body: "Use the absorption and massage device as the companion ritual that follows application.",
    note: "ABSORPTION + MASSAGE DEVICE",
  },
];

function Wordmark({ inverse = false }: { inverse?: boolean }) {
  return (
    <div className={`wordmark ${inverse ? "wordmark--inverse" : ""}`} aria-label="Bella Nissa Science">
      <span>Bella Nissa</span>
      <small>SCIENCE</small>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const activeProtocol = protocol[activeStep];

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Bella Nissa Science home">
          <img src={ASSETS.logo} alt="BNS scientific emblem" />
          <Wordmark />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#system">The system</a>
          <a href="#formula">The formula</a>
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
          <a href="#formula" onClick={() => setMenuOpen(false)}>The formula</a>
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
                    <strong>{index === 0 ? "Formula" : "Method"}</strong>
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
