import { ContactForm } from "./contact-form";
import { ArrowUpRightIcon } from "../arrow-up-right-icon";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" className="icon-fill" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 9v10M5 5v.1M10 19v-6a4 4 0 0 1 8 0v6M10 10v9" />
      <circle cx="5" cy="5" r="1.3" className="icon-fill" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <main className="portfolio-shell contact-page">
      <header className="topbar">
        <a className="wordmark" href="/" aria-label="Juliane Mariano home">JM<span>.</span></a>
        <nav className="navigation" aria-label="Main navigation">
          <a href="/">HOME</a>
          <a href="/about">BACKGROUND</a>
          <a href="/projects">PROJECTS</a>
          <a href="#contact" aria-current="page">CONTACT <span><ArrowUpRightIcon /></span></a>
        </nav>
        <span className="topbar-note">CONTACT / 04</span>
      </header>

      <section className="contact-content" id="contact">
        <div className="contact-heading motion-enter">
          <p className="overline">HAVE AN IDEA? <span>— GET IN TOUCH</span></p>
          <h1>Let&apos;s talk.</h1>
          <p>Have a question or opportunity in mind? Send a note.</p>
        </div>

        <div className="contact-layout motion-enter motion-delay-one">
          <ContactForm />
          <aside className="contact-aside">
            <p className="contact-aside-label">DIRECT EMAIL</p>
            <a className="contact-email" href="mailto:julianekm02@gmail.com">julianekm02@gmail.com <span><ArrowUpRightIcon /></span></a>

            <p className="contact-aside-label social-heading">SOCIAL</p>
            <div className="social-list" aria-label="Social profiles">
              <a className="social-item" href="https://www.instagram.com/yeikei_2/" target="_blank" rel="noreferrer noopener" aria-label="Visit Juliane on Instagram">
                <span className="social-icon"><InstagramIcon /></span>
                <span>Instagram</span>
                <span className="social-pending"><ArrowUpRightIcon /></span>
              </a>
              <a className="social-item" href="https://www.linkedin.com/in/juliane-mariano-0b16a43a4/" target="_blank" rel="noreferrer noopener" aria-label="Visit Juliane on LinkedIn">
                <span className="social-icon"><LinkedInIcon /></span>
                <span>LinkedIn</span>
                <span className="social-pending"><ArrowUpRightIcon /></span>
              </a>
            </div>
          </aside>
        </div>
      </section>

      <footer className="hero-footer motion-enter motion-delay-two">
        <span>BASED IN LOS BAÑOS, LAGUNA</span>
        <span>INFORMATION TECHNOLOGY · E-COMMERCE · SUPPORT</span>
        <a href="/about">ABOUT <span><ArrowUpRightIcon /></span></a>
      </footer>
    </main>
  );
}
