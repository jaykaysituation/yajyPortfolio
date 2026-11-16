const skills = ["IT foundations", "Shopify operations", "Customer support"];

function SystemsIllustration() {
  return (
    <div className="systems-art" aria-label="Abstract systems interface" role="img">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orbit orbit-three" />
      <div className="system-card">
        <div className="system-card__top">
          <span className="system-card__dot" />
          <span className="system-card__dot" />
          <span className="system-card__dot" />
          <span className="system-card__label">SYSTEMS / 01</span>
        </div>
        <div className="system-card__body">
          <span className="system-card__eyebrow">PEOPLE × TECHNOLOGY</span>
          <span className="system-card__title">Make it work.</span>
          <div className="system-card__rule" />
          <span className="system-card__caption">Thoughtful support, clear systems.</span>
        </div>
      </div>
      <span className="art-index">LAGUNA<br />PHILIPPINES</span>
      <span className="art-cross" aria-hidden="true">+</span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="portfolio-shell">
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Juliane Mariano home">JM<span>.</span></a>
        <nav className="navigation" aria-label="Main navigation">
          <a href="#home">HOME</a>
          <a href="/about">ABOUT</a>
          <a href="mailto:julianekm02@gmail.com">CONTACT <span aria-hidden="true">↗</span></a>
        </nav>
        <span className="topbar-note">PORTFOLIO / 2026</span>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="nameplate">
          <p className="overline">JULIANE KARL A. MARIANO <span>— PERSONAL PORTFOLIO</span></p>
          <h1 id="hero-title">Juliane Mariano</h1>
        </div>

        <div className="hero-main" id="focus">
          <div className="hero-copy">
            <p className="hero-kicker"><span className="status-dot" /> INFORMATION TECHNOLOGY · OPERATIONS</p>
            <p className="hero-statement">
              I bring people and technology together through thoughtful support and dependable systems.
            </p>
            <div className="skill-list" aria-label="Areas of experience">
              {skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
            </div>
            <a className="hero-link" href="mailto:julianekm02@gmail.com">
              GET IN TOUCH <span aria-hidden="true">↗</span>
            </a>
          </div>
          <SystemsIllustration />
          <span className="hero-side-note">TECHNICAL CURIOSITY<br />HUMAN-CENTERED WORK</span>
          <span className="hero-counter">01 / 04</span>
        </div>
      </section>

      <footer className="hero-footer">
        <span>BASED IN SAN ANTONIO, LOS BAÑOS, LAGUNA</span>
        <span>INFORMATION TECHNOLOGY · E-COMMERCE · SUPPORT</span>
        <a href="mailto:julianekm02@gmail.com">LET&apos;S CONNECT <span aria-hidden="true">↗</span></a>
      </footer>
    </main>
  );
}
