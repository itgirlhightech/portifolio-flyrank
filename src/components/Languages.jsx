import { languages } from '../data/profile'
import './Languages.css'

function Languages() {
  return (
    <section id="languages" className="section">
      <div className="container">
        <span className="section-eyebrow">Languages</span>
        <h2 className="section-title">Languages</h2>

        <div className="languages-list">
          {languages.map((language) => (
            <div key={language.name} className="language-row">
              <div className="language-labels">
                <span className="language-name">{language.name}</span>
                <span className="language-level">{language.level}</span>
              </div>
              <div className="language-bar">
                <div
                  className="language-bar-fill"
                  style={{ width: `${language.fill * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Languages
