import ProjectCard from './ProjectCard.jsx'
import './ProjectsSection.css'

function ProjectsSection({ title, projects, variant }) {
  return (
    <section className="projects-section">
      <h2 className="projects-section__title">{title}</h2>
      <div className="projects-section__grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} variant={variant} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
