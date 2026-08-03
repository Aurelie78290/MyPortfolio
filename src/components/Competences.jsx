import { useState } from "react";
import "./Competences.css";

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
  const [activeId, setActiveId] = useState(categories[0].id);
  const active = categories.find((category) => category.id === activeId);

  return (
    <section id="competences" className="competences">
      <h2 className="competences__title">Compétences</h2>
      <div className="competences__bubbles">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`competences__bubble${
              activeId === category.id ? " competences__bubble--active" : ""
            }`}
            onClick={() => setActiveId(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className="competences__panel">
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
      <a className="competences__cv-button" href="/cv.pdf" download>
        Télécharger mon CV
      </a>
    </section>
  );
}

export default Competences;
