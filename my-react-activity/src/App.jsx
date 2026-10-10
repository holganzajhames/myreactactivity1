
import React, { useState } from "react";
import "./App.css";

const skills = [
  { name: "HTML", description: "Web structure and content" },
  { name: "CSS", description: "Styling and responsive layouts" },
  { name: "JavaScript", description: "Interactive web features" },
  { name: "React", description: "Component-based interfaces" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <header className="site-header">
        <nav className="navbar container">
          <a href="#home" className="logo" onClick={closeMenu}>
            JH<span>.</span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-content">
            <span className="eyebrow">HELLO, WELCOME TO MY PORTFOLIO</span>

            <h1>
              Hi, I'm <br />
              <span>Jhames Holganza.</span>
            </h1>

            <p className="hero-subtitle">
              BSIT 3 Student | Aspiring Developer
            </p>

            <p className="hero-description">
              I'm Jhames Emmanuel R. Holganza, an Information
              Technology student at Cebu Institute of Technology.
              I enjoy coding, exploring new ideas, and building
              projects that solve real-world problems.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-dark">
                View My Work <span>↗</span>
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-card">
              <div className="profile-initials">JH</div>
              <div className="profile-divider"></div>
              <p>JHAMES EMMANUEL R. HOLGANZA</p>
              <span>BS INFORMATION TECHNOLOGY</span>
            </div>
            <div className="floating-label">CREATIVE THINKING + CODE</div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container section-grid">
            <div>
              <span className="section-label">01 / ABOUT ME</span>
              <h2>A little about myself.</h2>
            </div>

            <div className="about-content">
              <p>
                I'm currently a third-year Bachelor of Science in
                Information Technology student at Cebu Institute
                of Technology.
              </p>
              <p>
                I love coding and learning how different
                technologies work. I'm interested in improving
                my programming skills and creating applications
                that are useful to people.
              </p>

              {showMore && (
                <p>
                  This portfolio is one of my projects as I
                  continue exploring web development using
                  React.js, JavaScript, HTML, and CSS.
                </p>
              )}

              <button
                className="text-button"
                onClick={() => setShowMore(!showMore)}
                aria-expanded={showMore}
              >
                {showMore ? "Show less −" : "Read more +"}
              </button>

              <div className="about-details">
                <div>
                  <span>Course</span>
                  <strong>BSIT — 3rd Year</strong>
                </div>
                <div>
                  <span>School</span>
                  <strong>Cebu Institute of Technology</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <span className="section-label">02 / MY SKILLS</span>
            <h2>Technologies I work with.</h2>
            <p className="section-description">
              Tools and languages I'm learning and using
              throughout my development journey.
            </p>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill-card" key={skill.name}>
                  <span className="skill-number">
                    0{index + 1}
                  </span>
                  <h3>{skill.name}</h3>
                  <p>{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <span className="section-label">03 / FEATURED PROJECT</span>
            <h2>Something I've worked on.</h2>
            <p className="section-description">
              A school project focused on improving campus safety.
            </p>

            <article className="project-card">
              <div className="project-preview">
                <div className="preview-window">
                  <div className="window-dots">
                    <i></i><i></i><i></i>
                  </div>
                  <div className="preview-content">
                    <div className="alert-symbol">!</div>
                    <h3>ALERTO</h3>
                    <p>Campus Emergency Notification</p>
                    <div className="preview-line"></div>
                    <div className="preview-line short"></div>
                  </div>
                </div>
              </div>

              <div className="project-info">
                <span className="project-category">
                  SCHOOL PROJECT
                </span>
                <h3>Alerto</h3>
                <p>
                  Alerto is a proposed emergency school
                  application designed to notify students
                  about potential threats and emergency
                  situations inside the campus.
                </p>
                <p>
                  The project aims to support awareness and
                  faster communication during emergencies.
                </p>
                <div className="project-tags">
                  <span>Emergency Alerts</span>
                  <span>Campus Safety</span>
                  <span>App Concept</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-content">
            <span className="section-label">04 / GET IN TOUCH</span>
            <h2>Let's connect.</h2>
            <p>
              Interested in connecting or checking out my
              projects? Feel free to reach out.
            </p>

            <div className="contact-actions">
              <a
                href="mailto:holganzajhames@gmail.com"
                className="btn btn-light"
              >
                Send an Email ↗
              </a>
              <a
                href="https://github.com/holganzajhames"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
              >
                Visit GitHub ↗
              </a>
            </div>

            <p className="contact-email">
              holganzajhames@gmail.com
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Jhames Holganza</span>
          <span>Built with React.js & Pure CSS</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
