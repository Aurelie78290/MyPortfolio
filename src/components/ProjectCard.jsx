import { Link } from "react-router-dom";
import { TOOL_ICONS } from "../data/toolIcons.js";
import "./ProjectCard.css";

function ProjectCard({ project, variant }) {
  const { id, title, description, image, tools, badge } = project;
  const visibleTools = tools.slice(0, 8);

  return (
    <Link
      to={`/projets/${id}`}
      className={`project-card project-card--${variant}`}
    >
      <div className="project-card__frame">
        {badge && <span className="project-card__badge">{badge}</span>}
        {image ? (
          <img className="project-card__image" src={image} alt={title} />
        ) : (
          <div className="project-card__placeholder">Image à venir</div>
        )}
        <div className="project-card__overlay">
          <span>Consulter</span>
        </div>
      </div>
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__description">{description}</p>
      <ul className="project-card__tools">
        {visibleTools.map((tool) => {
          const match = TOOL_ICONS[tool];
          return (
            <li key={tool} className={match ? "project-card__tool--icon" : ""}>
              {match ? <match.Icon title={tool} color={match.color} /> : tool}
            </li>
          );
        })}
      </ul>
    </Link>
  );
}

export default ProjectCard;
