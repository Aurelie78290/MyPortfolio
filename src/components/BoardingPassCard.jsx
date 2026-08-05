import { Link } from "react-router-dom";
import { TOOL_ICONS } from "../data/toolIcons.js";
import "./BoardingPassCard.css";

function BoardingPassCard({ project }) {
  const { id, title, description, tools, hosting, url, image } = project;

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
          {url && (
            <div className="boarding-pass__row">
              <span className="boarding-pass__row-label">Gate</span>
              <span className="boarding-pass__row-value">{url}</span>
            </div>
          )}
          {hosting && hosting.length > 0 && (
            <div className="boarding-pass__row">
              <span className="boarding-pass__row-label">Terminal</span>
              <span className="boarding-pass__row-value">
                {hosting.join(" & ")}
              </span>
            </div>
          )}
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

      {description && (
        <>
          <div className="boarding-pass__perforation" aria-hidden="true" />
          <p className="boarding-pass__description">{description}</p>
        </>
      )}

      <div className="boarding-pass__overlay">
        <span>Consulter</span>
      </div>
    </Link>
  );
}

export default BoardingPassCard;
