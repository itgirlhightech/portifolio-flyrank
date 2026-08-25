import { projects } from '../data/projects'
import './Projects.css'

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <span className="section-eyebrow">Featured Projects</span>
        <h2 className="section-title">Selected work</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="card project-card">
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                className="btn btn-outline project-link"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
