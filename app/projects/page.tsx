import { ArrowUpRightIcon } from "../arrow-up-right-icon";

export default function ProjectsPage() {
  return (
    <main className="portfolio-shell projects-page">
      <header className="topbar">
        <a className="wordmark" href="/" aria-label="Juliane Mariano home">JM<span>.</span></a>
        <nav className="navigation" aria-label="Main navigation">
          <a href="/">HOME</a>
          <a href="/about">BACKGROUND</a>
          <a href="#projects" aria-current="page">PROJECTS</a>
          <a href="/contact">CONTACT <span><ArrowUpRightIcon /></span></a>
        </nav>
        <span className="topbar-note">PROJECTS / 03</span>
      </header>

      <section className="projects-banner motion-enter" id="projects" aria-labelledby="projects-title">
        <p className="overline">SELECTED WORK <span>— PROJECTS / 03</span></p>
        <h1 id="projects-title">Projects</h1>
        <p>A collection of things I&apos;ve built, explored, and learned from.</p>
        <span className="projects-banner-index" aria-hidden="true">03</span>
      </section>

      <section className="projects-list" aria-label="Upcoming projects">
        {[1, 2, 3].map((number) => {
          const projectNumber = String(number).padStart(2, "0");

          return (
            <article
              className="project-slot motion-enter"
              key={projectNumber}
            >
              <div className="project-photo-placeholder" role="img" aria-label={`Photo placeholder for project ${number}`}>
                <span>PHOTO / {projectNumber}</span>
              </div>
              <div className="project-description">
                <span>PROJECT / {projectNumber}</span>
                <h2>Coming soon</h2>
                <p>Project description will be added here.</p>
              </div>
            </article>
          );
        })}
      </section>

      <footer className="hero-footer motion-enter motion-delay-two">
        <span>BASED IN LOS BAÑOS, LAGUNA</span>
        <span>INFORMATION TECHNOLOGY · E-COMMERCE · SUPPORT</span>
        <a href="/contact">LET&apos;S CONNECT <span><ArrowUpRightIcon /></span></a>
      </footer>
    </main>
  );
}
