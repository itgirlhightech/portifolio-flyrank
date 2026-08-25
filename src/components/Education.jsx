import { education } from '../data/profile'
import './Timeline.css'

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <span className="section-eyebrow">Education</span>
        <h2 className="section-title">Education</h2>

        <div className="timeline-list">
          {education.map((item) => (
            <div key={item.course} className="card timeline-item">
              <div className="timeline-header">
                <h3 className="timeline-title">{item.course}</h3>
                <span className="timeline-period">{item.period}</span>
              </div>
              <p className="timeline-company">
                {item.institution} · {item.description}
              </p>
              <div className="timeline-focus">
                {item.focus.map((area) => (
                  <span key={area} className="tag">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
