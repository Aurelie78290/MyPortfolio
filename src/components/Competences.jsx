import { useEffect, useId, useState } from "react";
import "./Competences.css";

function FlightPathArrow({ flip }) {
  const arrowId = useId();
  const arrowIdVertical = useId();
  const path = flip ? "M4,10 Q60,44 116,10" : "M4,30 Q60,-4 116,30";
  const verticalPath = flip ? "M10,4 Q24,32 10,60" : "M22,4 Q8,32 22,60";

  return (
    <>
      <svg
        className="competences__connector"
        viewBox="0 0 120 40"
        aria-hidden="true"
      >
        <defs>
          <marker
            id={arrowId}
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
          </marker>
        </defs>
        <path
          d={path}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="6 6"
          strokeLinecap="round"
          markerEnd={`url(#${arrowId})`}
        />
      </svg>
      <svg
        className="competences__connector-vertical"
        viewBox="0 0 32 64"
        aria-hidden="true"
      >
        <defs>
          <marker
            id={arrowIdVertical}
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
          </marker>
        </defs>
        <path
          d={verticalPath}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="6 6"
          strokeLinecap="round"
          markerEnd={`url(#${arrowIdVertical})`}
        />
      </svg>
    </>
  );
}

function LandingPath() {
  return (
    <>
      <div className="competences__landing" aria-hidden="true">
        <svg
          className="competences__landing-path"
          viewBox="0 0 200 60"
          preserveAspectRatio="none"
        >
          <path
            d="M4,8 Q100,52 185,30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 6"
            strokeLinecap="round"
          />
        </svg>
        <span className="competences__plane" role="img" aria-label="Avion">
          ✈️
        </span>
      </div>
      <div className="competences__landing-vertical" aria-hidden="true">
        <svg
          className="competences__landing-path-vertical"
          viewBox="0 0 60 90"
          preserveAspectRatio="none"
        >
          <path
            d="M22,4 Q54,45 30,86"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 6"
            strokeLinecap="round"
          />
        </svg>
        <span
          className="competences__plane-vertical"
          role="img"
          aria-label="Avion"
        >
          ✈️
        </span>
      </div>
    </>
  );
}

const skillGroups = ["frontend", "backend", "tools", "other"];

const categories = [
  {
    id: "etudes",
    label: "Mon Parcours",
    type: "text",
    text: [
      "Mon parcours s'est construit en deux chapitres : comprendre les organisations dans un premier temps, puis construire les outils qui les font avancer.",
      "Diplômée en 2010 d'un Master 2 en Management et ingéniérie économique, j'ai construit le début de ma carrière dans l'univers de la supervision d'équipe et de la Relation Client, l'écoute des besoins clients étant alors au centre de mes préoccupations.",
      "Par passion et envie de mé réinventer, j'ai ensuite choisi de devenir développeuse web. À la Wild Code School, j'ai appris à concevoir des applications full-stack et à collaborer en équipe selon les méthodes Agiles.",
    ],
  },
  {
    id: "hard-skills",
    label: "Mes Hard Skills",
    type: "tags",
    items: [
      { name: "React", group: "frontend" },
      { name: "Vite", group: "frontend" },
      { name: "HTML", group: "frontend" },
      { name: "CSS3", group: "frontend" },
      { name: "JavaScript", group: "frontend" },
      { name: "TypeScript", group: "frontend" },
      { name: "Node.js", group: "backend" },
      { name: "Express.js", group: "backend" },
      { name: "API REST", group: "backend" },
      { name: "MySQL", group: "backend" },
      { name: "GitHub", group: "tools" },
      { name: "Figma", group: "tools" },
      { name: "Jira", group: "tools" },
      { name: "WordPress", group: "tools" },
      { name: "Vercel", group: "tools" },
      { name: "Railway", group: "tools" },
      { name: "Trello", group: "other" },
      { name: "Pack Office", group: "other" },
      { name: "Canva", group: "other" },
      { name: "Salesforce", group: "other" },
      { name: "Power BI", group: "other" },
    ],
  },
  {
    id: "soft-skills",
    label: "Mes Soft Skills",
    type: "text",
    text: [
      "Mon approche du développement est influencée par ce qui m'anime au quotidien. Les pays nordiques m'inspirent par leur esthétique épurée et leur sens de la fonctionnalité. La création textile développe ma créativité et mon souci du détail. Le golf m'apprend la patience et la concentration, tandis que la danse classique cultive la rigueur, l'équilibre et la précision.",
      "Ces passions façonnent naturellement ma manière de travailler : avec curiosité, méthode, sens de l'analyse et envie de créer des expériences utiles et soignées.",
    ],
  },
];

function Competences() {
  const [activeId, setActiveId] = useState(null);
  const active = categories.find((category) => category.id === activeId);

  useEffect(() => {
    if (!active) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setActiveId(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [active]);

  return (
    <section id="competences" className="competences">
      <h2 className="competences__title">Compétences</h2>
      <div className="competences__row">
        <div className="competences__bubbles">
          {categories.map((category, index) => (
            <div key={category.id} className="competences__bubble-item">
              <button
                type="button"
                className={`competences__bubble${
                  activeId === category.id ? " competences__bubble--active" : ""
                }`}
                onClick={() => setActiveId(category.id)}
              >
                {(() => {
                  const [firstWord, ...rest] = category.label.split(" ");
                  return (
                    <>
                      <span className="competences__bubble-word">
                        {firstWord}
                      </span>
                      <span className="competences__bubble-word">
                        {rest.join(" ")}
                      </span>
                    </>
                  );
                })()}
              </button>
              {index < categories.length - 1 && (
                <FlightPathArrow flip={index % 2 === 1} />
              )}
            </div>
          ))}
        </div>
        <LandingPath />
        <a className="competences__cv-button" href="/cv.pdf" download>
          Télécharger mon CV
        </a>
      </div>

      {active && (
        <div className="competences__overlay" onClick={() => setActiveId(null)}>
          <div
            className="competences__modal"
            role="dialog"
            aria-modal="true"
            aria-label={active.label}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="competences__modal-close"
              onClick={() => setActiveId(null)}
              aria-label="Fermer"
            >
              ×
            </button>
            {active.id === "soft-skills" && (
              <img
                src="/assets/Vegvisir.svg.webp"
                alt=""
                aria-hidden="true"
                className="competences__soft-skills-decoration"
              />
            )}
            {active.id === "etudes" && (
              <span
                aria-hidden="true"
                className="competences__etudes-decoration"
              >
                🎓
              </span>
            )}
            <h3
              className={`competences__modal-title${
                active.id === "soft-skills"
                  ? " competences__modal-title--indent"
                  : ""
              }`}
            >
              {active.label}
            </h3>
            {active.type === "tags" ? (
              <div className="competences__marquee-rows">
                {skillGroups.map((group, rowIndex) => {
                  const groupItems = active.items.filter(
                    (item) => item.group === group,
                  );
                  return (
                    <div key={group} className="competences__marquee-row">
                      <div
                        className="competences__marquee-track"
                        style={{
                          animationDuration: `${groupItems.length * 6}s`,
                          animationDirection:
                            rowIndex % 2 === 1 ? "reverse" : "normal",
                        }}
                      >
                        {[...groupItems, ...groupItems].map((item, index) => (
                          <span
                            key={`${item.name}-${index}`}
                            className={`competences__item competences__item--${item.group}`}
                          >
                            {item.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <>
                {(Array.isArray(active.text)
                  ? active.text
                  : [active.text]
                ).map((paragraph, index) => (
                  <p key={index} className="competences__placeholder">
                    {paragraph}
                  </p>
                ))}
                {active.id === "etudes" && (
                  <a
                    href={encodeURI(
                      "/assets/Diplôme_certification RNCP.jpg",
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="competences__certification-link"
                  >
                    Ma certification
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Competences;
