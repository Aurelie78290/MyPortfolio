import { Link } from 'react-router-dom'
import './ProjectCard.css'

function ProjectCard({ project, variant }) {
  const { id, title, description, videoSrc, tools } = project

  return (
    <Link to={`/projets/${id}`} className={`project-card project-card--${variant}`}>
      <div className="project-card__frame">
        {videoSrc ? (
          <video
            className="project-card__video"
            src={videoSrc}
            muted
            loop
            playsInline
            controls
          />
        ) : (
          <div className="project-card__placeholder">Vidéo à venir</div>
        )}
        <div className="project-card__overlay">
          <span>Consulter</span>
        </div>
      </div>
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__description">{description}</p>
      <ul className="project-card__tools">
        {tools.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>
    </Link>
  )
}

export default ProjectCard
