import { useEffect, useState } from "react";
import { profile, skills, experience, education, projects } from "./data";
import "./App.css";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function useActiveSection() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return active;
}

function Nav() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="nav-brand" href="#top">
          RG
        </a>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav-links ${open ? "open" : ""}`}>
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={active === s.id ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <p className="eyebrow">Hi, I'm</p>
      <h1>{profile.name}</h1>
      <p className="hero-title">{profile.title} at Nordstrom</p>
      <p className="hero-tagline">{profile.tagline}</p>
      <div className="hero-actions">
        <a className="btn btn-primary" href="#projects">
          View Projects
        </a>
        <a className="btn btn-ghost" href="#contact">
          Get in Touch
        </a>
      </div>
      <div className="hero-links">
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={`mailto:${profile.email}`}>Email</a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About</h2>
      <div className="about-grid">
        <p className="about-summary">{profile.summary}</p>
        <div className="about-side">
          <div className="about-card">
            <h3>Education</h3>
            <p className="about-card-main">{education.degree}</p>
            <p className="about-card-sub">
              {education.school} · {education.honors}
            </p>
          </div>
          <div className="about-card">
            <h3>Skills</h3>
            <ul className="skill-list">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      <ol className="timeline">
        {experience.map((job) => (
          <li key={`${job.org}-${job.role}`} className="timeline-item">
            <div className="timeline-marker" />
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{job.role}</h3>
                <span className="timeline-period">{job.period}</span>
              </div>
              <p className="timeline-org">
                {job.org} · {job.location}
              </p>
              <ul className="timeline-bullets">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="project-grid">
        {projects.map((p) => (
          <a
            key={p.name}
            className="project-card"
            href={p.url}
            target="_blank"
            rel="noreferrer"
          >
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <div className="project-tags">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">Get in Touch</h2>
      <p className="contact-copy">
        I'm always open to interesting conversations — reach out by email or
        find me on GitHub and LinkedIn.
      </p>
      <div className="contact-actions">
        <a className="btn btn-primary" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </div>
      <div className="hero-links">
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>{profile.name}. Built with React + Vite, deployed on GitHub Pages.</p>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
