import { Link } from "react-router-dom";
import { SiReact, SiNodedotjs, SiExpress, SiMysql } from "react-icons/si";
import "./BoardingPassCard.css";

const TOOL_ICONS = {
  React: { Icon: SiReact, color: "#61DAFB" },
  Node: { Icon: SiNodedotjs, color: "#339933" },
  Express: { Icon: SiExpress, color: "#000000" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
};

function BoardingPassCard({ project }) {
  const { id, title, tools, url, image } = project;

  return (
    <Link to={`/projets/${id}`} className="boarding-pass">
      <div className="boarding-pass__header">
        <span className="boarding-pass__label">Boarding Pass</span>
        <span className="boarding-pass__badge">Pro</span>
      </div>
      <div className="boarding-pass__body">
        <div className="boarding-pass__info">
          <div className="boarding-pass__row">
            <span className="boarding-pass__row-label">Flight</span>
            <span className="boarding-pass__row-value">{title}</span>
          </div>
          <div className="boarding-pass__row">
            <span className="boarding-pass__row-label">Gate</span>
            <span className="boarding-pass__row-value">{url}</span>
          </div>
          <div className="boarding-pass__row">
            <span className="boarding-pass__row-label">Seats</span>
            <span className="boarding-pass__row-value boarding-pass__tools">
              {tools.map((tool) => {
                const match = TOOL_ICONS[tool];
                return match ? (
                  <match.Icon
                    key={tool}
                    title={tool}
                    color={match.color}
                    className="boarding-pass__tool-icon"
                  />
                ) : (
                  <span key={tool}>{tool}</span>
                );
              })}
            </span>
          </div>
        </div>
        <div className="boarding-pass__photo">
          {image ? (
            <img src={image} alt={title} />
          ) : (
            <div className="boarding-pass__photo-placeholder" />
          )}
        </div>
      </div>
      <div className="boarding-pass__overlay">
        <span>Consulter</span>
      </div>
    </Link>
  );
}

export default BoardingPassCard;
