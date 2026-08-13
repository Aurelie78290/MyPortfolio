import { Link, useParams } from "react-router-dom";
import { SiGithub } from "react-icons/si";
import {
  ecoleProjects,
  personnelsProjects,
  hackathonsProjects,
} from "../data/projects.js";
import "./ProjectDetailPage.css";

function renderWithBold(text) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index}>{part.slice(2, -2)}</strong>
    ) : (
      part
    )
  );
}

function ProjectDetailPage() {
  const { id } = useParams();
  const project = [
    ...ecoleProjects,
    ...personnelsProjects,
    ...hackathonsProjects,
  ].find((item) => item.id === id);

  if (!project) {
    return (
      <section className="project-detail">
        <p>Projet introuvable.</p>
        <Link to="/projets" className="project-detail__back">
          ← Retour aux projets
        </Link>
      </section>
    );
  }

  const {
    title,
    description,
    longDescription,
    tools,
    url,
    githubUrl,
    hosting,
    videoSrc,
    features,
  } = project;
  const descriptionParagraphs = (longDescription || description).split("\n\n");

  return (
    <section className="project-detail">
      <Link to="/projets" className="project-detail__back">
        ← Retour aux projets
      </Link>

      <div className="project-detail__content">
        <div className="project-detail__media">
          {videoSrc ? (
            <video
              className="project-detail__video"
              src={videoSrc}
              muted
              loop
              playsInline
              controls
            />
          ) : (
            <div className="project-detail__placeholder">Vidéo à venir</div>
          )}
        </div>

        <div className="project-detail__info">
          <h1 className="project-detail__title">{title}</h1>

          {url ? (
            <a
              href={`https://${url.replace(/^https?:\/\//, "")}`}
              target="_blank"
              rel="noreferrer"
              className="project-detail__url"
            >
              {url}
            </a>
          ) : (
            githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="project-detail__url project-detail__url--github"
              >
                <SiGithub /> Voir sur GitHub
              </a>
            )
          )}

          {hosting && hosting.length > 0 && (
            <p className="project-detail__hosting">
              Hébergé sur {hosting.join(" & ")}
            </p>
          )}

          <ul className="project-detail__tools">
            {tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="project-detail__description">
        {descriptionParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {features && features.length > 0 && (
        <div className="project-detail__features">
          <h2 className="project-detail__features-title">Fonctionnalités</h2>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{renderWithBold(feature)}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default ProjectDetailPage;
