export function ProjectsSection() {
  return (
    <div className="projects-page">
      <section className="projects-marquee motion-enter" id="projects" aria-labelledby="projects-title">
        <h2 className="sr-only" id="projects-title">Projects</h2>
        <div className="projects-marquee-window" aria-hidden="true">
          <div className="projects-marquee-track">
            {[0, 1].map((copy) => (
              <div className="projects-marquee-group" key={copy}>
                {Array.from({ length: 5 }, (_, index) => (
                  <span className="projects-marquee-item" key={index}>
                    <span>Projects</span>
                    <span className="projects-marquee-star">*</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-list" aria-label="Upcoming projects">
        {[1, 2, 3].map((number) => {
          const projectNumber = String(number).padStart(2, "0");

          return (
            <article className="project-slot motion-enter" key={projectNumber}>
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
    </div>
  );
}
