import { Link, useParams } from "react-router-dom";
import { ecoleProjects, personnelsProjects } from "../data/projects.js";
import "./ProjectDetailPage.css";

function ProjectDetailPage() {
  const { id } = useParams();
  const project = [...ecoleProjects, ...personnelsProjects].find(
    (item) => item.id === id
  );

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

  const { title, description, tools, hosting, url, image } = project;

  return (
    <section className="project-detail">
      <Link to="/projets" className="project-detail__back">
        ← Retour aux projets
      </Link>

      {image && (
        <div className="project-detail__image">
          <img src={image} alt={title} />
        </div>
      )}

      <h1 className="project-detail__title">{title}</h1>
      <p className="project-detail__description">{description}</p>

      {hosting && hosting.length > 0 && (
        <p className="project-detail__hosting">
          Hébergé sur {hosting.join(" & ")}
        </p>
      )}

      {url && (
        <a
          href={`https://${url.replace(/^https?:\/\//, "")}`}
          target="_blank"
          rel="noreferrer"
          className="project-detail__url"
        >
          {url}
        </a>
      )}

      <ul className="project-detail__tools">
        {tools.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectDetailPage;
