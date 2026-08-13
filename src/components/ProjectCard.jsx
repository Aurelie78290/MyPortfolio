import { Link } from "react-router-dom";
import { TOOL_ICONS } from "../data/toolIcons.js";
import Clothespin from "./Clothespin.jsx";
import "./ProjectCard.css";

function ProjectCard({ project, variant, clothesline, clipColor }) {
  const { id, title, description, image, tools, badge } = project;
  const visibleTools = tools.slice(0, 6);

  return (
    <Link
      to={`/projets/${id}`}
      className={`project-card project-card--${variant}`}
    >
      <div className="project-card__frame">
        {clothesline && (
          <Clothespin className="project-card__clip" color={clipColor} />
        )}
        <div className="project-card__flip">
          <div className="project-card__flip-face project-card__flip-face--front">
            {badge && <span className="project-card__badge">{badge}</span>}
            {image ? (
              <img className="project-card__image" src={image} alt={title} />
            ) : (
              <div className="project-card__placeholder">Image à venir</div>
            )}
            <h3 className="project-card__title">{title}</h3>
            <ul className="project-card__tools">
              {visibleTools.map((tool) => {
                const match = TOOL_ICONS[tool];
                return (
                  <li
                    key={tool}
                    className={match ? "project-card__tool--icon" : ""}
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
          <div className="project-card__flip-face project-card__flip-face--back">
            <span className="project-card__flip-consult">Consulter</span>
            <p className="project-card__flip-description">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
