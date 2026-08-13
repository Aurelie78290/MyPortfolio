import { Link, useParams } from "react-router-dom";
import { SiGithub } from "react-icons/si";
import {
  ecoleProjects,
  personnelsProjects,
  hackathonsProjects,
} from "../data/projects.js";
import { TOOL_ICONS } from "../data/toolIcons.js";
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
    screenshots,
  } = project;
  const descriptionParagraphs = (longDescription || description).split("\n\n");
  const iconTools = tools.filter((tool) => TOOL_ICONS[tool]);
  const textTools = tools.filter((tool) => !TOOL_ICONS[tool]);
  const orderedTools = [...iconTools, ...textTools];

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
            {orderedTools.map((tool) => {
              const match = TOOL_ICONS[tool];
              return (
                <li
                  key={tool}
                  title={tool}
                  className={
                    match
                      ? "project-detail__tool--icon"
                      : "project-detail__tool--text"
                  }
                >
                  {match ? (
                    <match.Icon title={tool} color={match.color} />
                  ) : (
                    tool
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="project-detail__description">
        {descriptionParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {screenshots && screenshots.length > 0 && (
        <div className="project-detail__filmstrip">
          <div className="project-detail__filmstrip-frames">
            {screenshots.map((src, index) => (
              <div className="project-detail__filmstrip-frame" key={src}>
                <img src={src} alt={`Capture d'écran ${title} ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      )}

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
