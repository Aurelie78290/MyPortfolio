import { useEffect, useId, useState } from "react";
import "./Competences.css";

function FlightPathArrow({ flip }) {
  const arrowId = useId();
  const path = flip ? "M4,10 Q60,44 116,10" : "M4,30 Q60,-4 116,30";

  return (
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
  );
}

function LandingPath() {
  return (
    <div className="competences__landing" aria-hidden="true">
      <svg
        className="competences__landing-path"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
      >
        <path
          d="M4,8 Q100,52 196,30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="6 6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

const categories = [
  {
    id: "etudes",
    label: "Études",
    type: "text",
    text: "À compléter : formations, diplômes, certifications...",
  },
  {
    id: "hard-skills",
    label: "Hard Skills",
    type: "tags",
    items: [
      "React",
      "Vite",
      "HTML",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
      "API REST",
      "MySQL",
      "GitHub",
      "Figma",
      "Jira",
      "Trello",
      "WordPress",
      "Vercel",
      "Railway",
      "Pack Office",
      "Canva",
      "Salesforce",
      "Power BI",
    ],
  },
  {
    id: "soft-skills",
    label: "Soft Skills",
    type: "text",
    text: "À compléter : communication, travail d'équipe, adaptabilité...",
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
                {category.label}
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
            <h3 className="competences__modal-title">{active.label}</h3>
            {active.type === "tags" ? (
              <ul className="competences__list">
                {active.items.map((item) => (
                  <li key={item} className="competences__item">
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="competences__placeholder">{active.text}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Competences;
