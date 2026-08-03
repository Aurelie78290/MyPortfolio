import ProjectsSection from "../components/ProjectsSection.jsx";
import { ecoleProjects, personnelsProjects } from "../data/projects.js";

function ProjectsPage() {
  return (
    <>
      <ProjectsSection title="Projets École :" projects={ecoleProjects} variant="ecole" />
      <ProjectsSection
        title="Projets Personnels :"
        projects={personnelsProjects}
        variant="personnel"
      />
    </>
  );
}

export default ProjectsPage;
