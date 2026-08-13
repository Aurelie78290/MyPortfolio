import ProjectCard from './ProjectCard.jsx'
import './ProjectsSection.css'

const CLIP_COLORS = ['#c9a06a', '#5e548e', '#d99cbd']

function ProjectsSection({ title, projects, variant, clothesline, decoration }) {
  return (
    <section className="projects-section">
      {decoration && (
        <span
          className="projects-section__decoration"
          style={{
            WebkitMaskImage: `url(${decoration})`,
            maskImage: `url(${decoration})`,
          }}
          aria-hidden="true"
        />
      )}
      <h2 className="projects-section__title">{title}</h2>
      {projects.length > 0 ? (
        <div
          className={`projects-section__grid${
            clothesline ? " projects-section__grid--clothesline" : ""
          }`}
        >
          {clothesline && (
            <svg
              className="projects-section__string"
              viewBox="0 0 100 40"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0,8 Q50,36 100,8"
                fill="none"
                stroke="#4a4a4a"
                strokeWidth="2"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          )}
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant={variant}
              clothesline={clothesline}
              clipColor={CLIP_COLORS[index % CLIP_COLORS.length]}
            />
          ))}
        </div>
      ) : (
        <p className="projects-section__empty">À venir.</p>
      )}
    </section>
  )
}

export default ProjectsSection
