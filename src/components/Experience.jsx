import { experience } from '../data/profile'
import './Timeline.css'

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <span className="section-eyebrow">Experience</span>
        <h2 className="section-title">Experience</h2>

        <div className="timeline-list">
          {experience.map((item) => (
            <div key={item.company} className="card timeline-item">
              <div className="timeline-header">
                <h3 className="timeline-title">{item.role}</h3>
                <span className="timeline-period">{item.period}</span>
              </div>
              <p className="timeline-company">{item.company}</p>
              <p className="timeline-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
