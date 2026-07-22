import './ProjectCard.css'

function ProjectCard({ project, variant }) {
  const { title, description, videoSrc, tools } = project

  return (
    <article className={`project-card project-card--${variant}`}>
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
      </div>
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__description">{description}</p>
      <ul className="project-card__tools">
        {tools.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>
    </article>
  )
}

export default ProjectCard
