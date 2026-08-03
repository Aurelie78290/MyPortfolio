import "./Competences.css";

const categories = [
  {
    label: "Langages & Frameworks",
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
    ],
  },
  {
    label: "Outils",
    items: ["GitHub", "Figma", "Jira", "Trello", "WordPress", "Vercel", "Railway"],
  },
  {
    label: "Autres",
    items: ["Pack Office", "Canva", "Salesforce", "Power BI"],
  },
];

function Competences() {
  return (
    <section id="competences" className="competences">
      <h2 className="competences__title">Compétences</h2>
      <div className="competences__categories">
        {categories.map((category) => (
          <div key={category.label} className="competences__category">
            <h3 className="competences__category-label">{category.label}</h3>
            <ul className="competences__list">
              {category.items.map((item) => (
                <li key={item} className="competences__item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Competences;
