import { aboutText, personalInfo } from '../data/profile'
import './About.css'

function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div>
          <span className="section-eyebrow">About</span>
          <h2 className="section-title">A bit about me</h2>
        </div>

        <div className="about-body">
          {aboutText.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <p className="about-location">📍 {personalInfo.location}</p>
        </div>
      </div>
    </section>
  )
}

export default About
