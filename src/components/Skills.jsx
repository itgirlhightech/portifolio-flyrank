import { skillCategories } from '../data/profile'
import './Skills.css'

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <span className="section-eyebrow">Skills</span>
        <h2 className="section-title">Technical skills</h2>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="card skills-card">
              <h3 className="skills-card-title">{category.title}</h3>
              <div className="skills-tags">
                {category.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
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

export default Skills
