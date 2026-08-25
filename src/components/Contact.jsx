import { personalInfo } from '../data/profile'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-card">
          <h2 className="section-title">Let's connect.</h2>
          <p className="contact-text">
            I'm always open to learning opportunities, collaborations, and conversations about
            data and technology.
          </p>

          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${personalInfo.email}`}>
              Email
            </a>
            <a
              className="btn btn-outline"
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
              CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
