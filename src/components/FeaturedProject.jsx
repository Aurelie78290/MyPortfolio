import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard.jsx";
import { personnelsProjects } from "../data/projects.js";
import "./FeaturedProject.css";

function FeaturedProject() {
  const project = personnelsProjects[personnelsProjects.length - 1];

  return (
    <section className="featured-project">
      <h2 className="featured-project__title">Mon dernier projet</h2>
      <ProjectCard project={project} variant="personnel" />
      <Link to="/projets" className="featured-project__link">
        Voir tous les projets
      </Link>
    </section>
  );
}

export default FeaturedProject;
