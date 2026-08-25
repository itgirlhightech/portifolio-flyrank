import { personalInfo } from '../data/profile'
import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-grid" aria-hidden="true">
        <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
          <g stroke="#5B4B8A" strokeWidth="1" opacity="0.16">
            <line x1="60" y1="80" x2="240" y2="160" />
            <line x1="240" y1="160" x2="180" y2="320" />
            <line x1="240" y1="160" x2="440" y2="120" />
            <line x1="440" y1="120" x2="620" y2="220" />
            <line x1="180" y1="320" x2="380" y2="380" />
            <line x1="380" y1="380" x2="620" y2="220" />
            <line x1="620" y1="220" x2="740" y2="90" />
            <line x1="380" y1="380" x2="560" y2="440" />
          </g>
          <g fill="#5B4B8A">
            <circle cx="60" cy="80" r="4" opacity="0.35" />
            <circle cx="240" cy="160" r="5" opacity="0.4" />
            <circle cx="440" cy="120" r="4" opacity="0.3" />
            <circle cx="180" cy="320" r="4" opacity="0.3" />
            <circle cx="620" cy="220" r="5" opacity="0.4" />
            <circle cx="380" cy="380" r="4" opacity="0.3" />
            <circle cx="740" cy="90" r="3" opacity="0.25" />
            <circle cx="560" cy="440" r="3" opacity="0.25" />
          </g>
          <g fill="#3EC1B3">
            <circle cx="240" cy="160" r="2.5" />
            <circle cx="620" cy="220" r="2.5" />
          </g>
        </svg>
      </div>

      <div className="container hero-content">
        <span className="section-eyebrow">Data Analyst · ML · Data Engineering</span>
        <h1 className="hero-name">{personalInfo.name}</h1>
        <p className="hero-role">{personalInfo.role}</p>
        <p className="hero-tagline">{personalInfo.tagline}</p>

        <div className="hero-actions">
          <a
            className="btn btn-primary"
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="btn btn-outline"
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a className="btn btn-outline" href={personalInfo.cv} download>
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
