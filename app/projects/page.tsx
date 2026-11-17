export default function ProjectsPage() {
  return (
    <main className="portfolio-shell projects-page">
      <header className="topbar">
        <a className="wordmark" href="/" aria-label="Juliane Mariano home">JM<span>.</span></a>
        <nav className="navigation" aria-label="Main navigation">
          <a href="/">HOME</a>
          <a href="/about">BACKGROUND</a>
          <a href="#projects" aria-current="page">PROJECTS</a>
          <a href="/contact">CONTACT <span aria-hidden="true">↗</span></a>
        </nav>
        <span className="topbar-note">PROJECTS / 03</span>
      </header>

      <section className="projects-banner motion-enter" id="projects" aria-labelledby="projects-title">
        <p className="overline">SELECTED WORK <span>— PROJECTS / 03</span></p>
        <h1 id="projects-title">Projects</h1>
        <p>A collection of things I&apos;ve built, explored, and learned from.</p>
        <span className="projects-banner-index" aria-hidden="true">03</span>
      </section>

      <section className="projects-empty motion-enter motion-delay-one" aria-label="Project portfolio">
        <span>01 / WORK IN PROGRESS</span>
        <p>Project details are being prepared. Check back soon.</p>
      </section>

      <footer className="hero-footer motion-enter motion-delay-two">
        <span>BASED IN SAN ANTONIO, LOS BAÑOS, LAGUNA</span>
        <span>INFORMATION TECHNOLOGY · E-COMMERCE · SUPPORT</span>
        <a href="/contact">LET&apos;S CONNECT <span aria-hidden="true">↗</span></a>
      </footer>
    </main>
  );
}
