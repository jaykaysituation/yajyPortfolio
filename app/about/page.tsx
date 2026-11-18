import { ArrowUpRightIcon } from "../arrow-up-right-icon";

const education = [
  {
    school: "University of the Philippines, Open University",
    program: "Associate of Science in Information Technology",
    dates: "September 2023 — Present",
  },
  {
    school: "Malayan Colleges Laguna",
    program: "Senior High School",
    dates: "June 2021 — April 2023",
  },
  {
    school: "South Hill School Inc.",
    program: "Junior High School · With Academic Honors",
    dates: "June 2016 — April 2020",
  },
];

const technicalSkills = [
  "HTML", "Java", "Python", "C", "Figma", "Shopify administration",
  "Data entry", "Customer service", "Microsoft Office Suite", "Microsoft Excel", "Microsoft Word",
];

const strengths = [
  "Adaptability", "Attention to detail", "Visual communication",
  "Teamwork and collaboration", "Problem-solving", "Eagerness to learn",
];

const portfolioStack = [
  "Next.js 16", "React", "TypeScript", "Tailwind CSS", "Custom CSS",
  "Google Fonts", "Local images", "Node.js and npm", "GitHub", "Vercel Hobby",
];

export default function AboutPage() {
  return (
    <main className="portfolio-shell about-page">
      <header className="topbar">
        <a className="wordmark" href="/" aria-label="Juliane Mariano home">JM<span>.</span></a>
        <nav className="navigation" aria-label="Main navigation">
          <a href="/">HOME</a>
          <a href="#background">BACKGROUND</a>
          <a href="/projects">PROJECTS</a>
          <a href="/contact">CONTACT <span><ArrowUpRightIcon /></span></a>
        </nav>
        <span className="topbar-note">ABOUT / 02</span>
      </header>

      <section className="about-intro motion-enter" id="background">
        <p className="overline">BACKGROUND <span>— STUDY, WORK, SKILLS</span></p>
        <h1>Technology-minded. People-focused.</h1>
        <p className="about-lede">
          Information Technology student with a background in e-commerce operations, Shopify administration,
          and customer support. Detail-oriented and adaptable, with experience learning new systems,
          troubleshooting issues, maintaining accurate records, and communicating clearly with customers and teams.
        </p>
      </section>

      <section className="about-columns" aria-label="Work and education">
        <div className="about-block motion-enter motion-delay-one">
          <div className="section-heading">
            <span>01</span>
            <h2>Work experience</h2>
          </div>
          <article className="experience-card">
            <p className="card-date">SEPTEMBER — OCTOBER 2024</p>
            <h3>Koala Customer Service Inc.</h3>
            <p className="card-role">Customer Service Representative training</p>
            <p className="card-copy">Completed training as a Customer Service Representative.</p>
          </article>
        </div>

        <div className="about-block motion-enter motion-delay-two">
          <div className="section-heading">
            <span>02</span>
            <h2>Education</h2>
          </div>
          <div className="education-list">
            {education.map((item) => (
              <article className="education-item" key={item.school}>
                <p className="card-date">{item.dates}</p>
                <h3>{item.school}</h3>
                <p className="card-role">{item.program}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="section-heading motion-enter motion-delay-one">
          <span>03</span>
          <h2>Skills & technology</h2>
        </div>
        <div className="skills-group">
          <h3>Technical skills</h3>
          <div className="about-skills">
            {technicalSkills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
          </div>
        </div>
        <div className="skills-group">
          <h3>Core strengths</h3>
          <div className="about-skills">
            {strengths.map((strength) => <span className="skill-tag" key={strength}>{strength}</span>)}
          </div>
        </div>
        <div className="skills-group">
          <h3>Portfolio tech stack</h3>
          <div className="about-skills about-skills--stack">
            {portfolioStack.map((technology) => <span className="skill-tag" key={technology}>{technology}</span>)}
          </div>
        </div>
        <p className="languages-note"><span>LANGUAGES</span> English · Filipino</p>
      </section>

      <footer className="hero-footer">
        <span>BASED IN LOS BAÑOS, LAGUNA</span>
        <span>INFORMATION TECHNOLOGY · E-COMMERCE · SUPPORT</span>
        <a href="mailto:julianekm02@gmail.com">LET&apos;S CONNECT <span><ArrowUpRightIcon /></span></a>
      </footer>
    </main>
  );
}
