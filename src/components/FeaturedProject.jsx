import { Link } from "react-router-dom";
import BoardingPassCard from "./BoardingPassCard.jsx";
import { personnelsProjects } from "../data/projects.js";
import "./FeaturedProject.css";

function FeaturedProject() {
  const project = personnelsProjects[personnelsProjects.length - 1];

  return (
    <section className="featured-project">
      <div className="featured-project__header">
        <h2 className="featured-project__title">Mon dernier projet</h2>
        <Link to="/projets" className="featured-project__link">
          Voir tous les projets
          <span className="featured-project__arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
      <BoardingPassCard project={project} />
    </section>
  );
}

export default FeaturedProject;
