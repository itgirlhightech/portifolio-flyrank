import { useState } from 'react'
import { personalInfo } from '../data/profile'
import './Contact.css'

function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('sending')

    const form = event.target
    const data = new FormData(form)

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      })

      if (!response.ok) throw new Error('Request failed')

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-card">
          <h2 className="section-title">Let's connect.</h2>
          <p className="contact-text">
            I'm always open to learning opportunities, collaborations, and conversations about
            data and technology.
          </p>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="contact-form-hidden">
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="contact-form-row">
              <input
                className="contact-form-input"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
              <input
                className="contact-form-input"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <textarea
              className="contact-form-input contact-form-textarea"
              name="message"
              placeholder="Message"
              rows="4"
              required
            />

            <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>

            {status === 'success' && (
              <p className="contact-form-feedback contact-form-success">
                Thanks for reaching out! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="contact-form-feedback contact-form-error">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>

          <div className="contact-actions">
            <a className="btn btn-outline" href={`mailto:${personalInfo.email}`}>
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
