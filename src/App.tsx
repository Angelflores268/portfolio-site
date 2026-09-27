import './App.css'

function App() {
  return (
    <>
      <nav>
        <h2>Angel Flores</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#next">Currently Building</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home">
          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-label">Computer Science Student</p>

              <h1>Hi, I'm Angel Flores</h1>

              <p className="hero-description">
                I'm interested in software engineering, data, cloud, and DevOps.
                I enjoy building practical applications and learning new
                technologies through hands on projects.
              </p>

              <div className="hero-links">
                <a href="#projects">View My Projects</a>

                <a
                  href="https://github.com/Angelflores268"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/angel-flores-584388241/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="hero-image">
              <img
                src="/images/profile.jpg"
                alt="Angel Flores"
                className="profile-photo"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about">
          <h2>About Me</h2>

          <p>
            I'm a Computer Science student at the University of Dayton with
            experience working on software engineering, data analytics, and
            web security projects. I enjoy learning how different technologies
            work together and using them to solve real problems.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2>Projects</h2>

          <p className="section-intro">
            A few projects I've worked on across software engineering,
            web security, and data analytics.
          </p>

          <div className="project-grid">
            {/* RuntimeGuardJS */}
            <article>
              <div className="project-header">
                <h3>RuntimeGuardJS</h3>
                <span className="project-type">Research</span>
              </div>

              <p>
                A runtime monitoring system for observing and controlling
                potentially risky third party JavaScript behavior while
                preserving normal website functionality.
              </p>

              <p className="tech-stack">
                React • TypeScript • JavaScript • Web Security
              </p>

              <div className="project-links">
                <a
                  href="https://github.com/Angelflores268/runtimeguardjs-research"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </article>

            {/* Retail Analytics */}
            <article>
              <div className="project-header">
                <h3>Retail Sales Analytics</h3>
                <span className="project-type">Data</span>
              </div>

              <p>
                An end to end analytics project that cleans retail sales data
                with Python, loads it into MySQL, analyzes it using SQL, and
                presents business insights through an interactive Streamlit
                dashboard.
              </p>

              <p className="tech-stack">
                Python • Pandas • MySQL • SQL • Streamlit
              </p>

              <div className="project-links">
                <a
                  href="https://github.com/Angelflores268/retail-sales-analytics"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href="https://angel-retail-sales-analytics.streamlit.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>

            {/* BravenX */}
            <article>
              <div className="project-header">
                <h3>BravenX Aviation Career Platform</h3>
                <span className="project-type">Team Project</span>
              </div>

              <p>
                A team built web application presenting aviation career
                pathways based on research into United Airlines' United
                Pathways program. I contributed to the technical build and
                integration of the site.
              </p>

              <p className="tech-stack">
                HTML • CSS • JavaScript
              </p>

              <div className="project-links">
                <a
                  href="https://18floresa.github.io/pilot-outreach-webapp/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* Currently Building Section */}
        <section id="next">
          <h2>Currently Building</h2>

          <p className="section-intro">
            A project inspired by my own experience navigating technical recruiting,
            online assessments, and a little bit of Marvel.
          </p>

          <div className="next-grid">
            <div className="next-card">
              <span className="next-status">Planned</span>

              <h3>Marvel Recruiting Power Rankings</h3>

              <div className="next-image">
                <img
                  src="/images/tiktok-oa.png"
                  alt="TikTok recruiting result that helped inspire the Marvel Recruiting Power Rankings project"
                />
              </div>

              <p>
                The idea started after I went through a difficult TikTok software
                engineering online assessment. Around the same time, after I finished watching
                Spider Man Brand New Day in the movie theater it got me thinking about how I could represent
                recruiting difficulty and progress using Marvel style power rankings.
              </p>

              <p>
                <p>
              The application will take inputs such as company, role, recruiting stage,
              assessment difficulty, and performance to generate a recruiting power score.
              The score will then map the experience to a Marvel inspired ranking such as
              Neighborhood, Street, X Men, Avengers, or Thanos. Higher tiers represent
              increasingly difficult and selective recruiting experiences.
              </p>
              </p>

              <p>
                My goal is to turn recruiting experiences into something interactive,
                visual, and easier to understand while building a larger React
                application with more complex logic.
              </p>

              <p className="next-stack">
                React • TypeScript • JavaScript • Data Logic
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2>Skills</h2>

          <div className="skills-grid">
            <div className="skill-group">
              <h3>Languages</h3>
              <p>Python • JavaScript • TypeScript • SQL • HTML • CSS</p>
            </div>

            <div className="skill-group">
              <h3>Frameworks & Libraries</h3>
              <p>React • Pandas • Streamlit</p>
            </div>

            <div className="skill-group">
              <h3>Tools & Platforms</h3>
              <p>Git • GitHub • MySQL • Linux • Vite</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2>Contact</h2>

          <p>
            Feel free to connect with me through GitHub or LinkedIn.
          </p>

          <div className="contact-links">
            <a
              href="https://github.com/Angelflores268"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <span>|</span>

            <a
              href="https://www.linkedin.com/in/angel-flores-584388241/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </>
  )
}

export default App




