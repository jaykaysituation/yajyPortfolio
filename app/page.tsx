import Image from "next/image";
import { ArrowUpRightIcon } from "./arrow-up-right-icon";

const skills = ["IT foundations", "Shopify operations", "Customer support"];

function PortraitIllustration() {
  return (
    <div className="portrait-art">
      <Image
        className="portrait-image"
        src="/juliane-portrait.png"
        alt="Portrait of Juliane Mariano"
        width={600}
        height={600}
        priority
      />
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
          <a href="/about">BACKGROUND</a>
          <a href="/projects">PROJECTS</a>
          <a href="/contact">CONTACT <span><ArrowUpRightIcon /></span></a>
        </nav>
        <span className="topbar-note">PORTFOLIO / 2026</span>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="nameplate home-text-motion">
          <h1 className="home-text-item" id="hero-title">Juliane Mariano</h1>
        </div>

        <div className="hero-main" id="focus">
          <PortraitIllustration />
          <div className="portrait-side-rail">
            <span className="art-index">LAGUNA · PHILIPPINES</span>
            <a className="portrait-next-link" href="/about" aria-label="Go to the Background page">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                <path d="M4 12h16M13 5l7 7-7 7" />
              </svg>
            </a>
            <span className="hero-side-note">TECHNICAL CURIOSITY<br />HUMAN-CENTERED WORK</span>
          </div>
          <span className="hero-counter">01 / 04</span>
        </div>
      </section>

      <section className="hero-details" aria-label="Introduction and areas of experience">
        <div className="hero-details-intro">
          <p className="hero-kicker home-text-item"><span className="status-dot" /> INFORMATION TECHNOLOGY · OPERATIONS</p>
          <p className="hero-statement home-text-item">
            I bring people and technology together through thoughtful support and dependable systems.
          </p>
        </div>
        <div className="hero-details-actions">
          <div className="skill-list" aria-label="Areas of experience">
            {skills.map((skill) => <span className="skill-tag home-text-item" key={skill}>{skill}</span>)}
          </div>
          <a className="hero-link home-text-item" href="mailto:julianekm02@gmail.com">
            GET IN TOUCH <span><ArrowUpRightIcon /></span>
          </a>
        </div>
      </section>

      <footer className="hero-footer home-text-motion">
        <span className="home-text-item">BASED IN LOS BAÑOS, LAGUNA</span>
        <span className="home-text-item">INFORMATION TECHNOLOGY · E-COMMERCE · SUPPORT</span>
        <a className="home-text-item" href="mailto:julianekm02@gmail.com">LET&apos;S CONNECT <span><ArrowUpRightIcon /></span></a>
      </footer>
    </main>
  );
}
