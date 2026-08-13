import ProjectsSection from "../components/ProjectsSection.jsx";
import {
  ecoleProjects,
  personnelsProjects,
  hackathonsProjects,
} from "../data/projects.js";

function ProjectsPage() {
  return (
    <>
      <ProjectsSection
        title=". . .  Projets Personnels  . . ."
        projects={personnelsProjects}
        variant="personnel"
        clothesline
        decoration="/assets/appareil_photo.png"
      />
      <ProjectsSection
        title=". . .  Projets École  . . ."
        projects={ecoleProjects}
        variant="ecole"
        clothesline
      />
      <ProjectsSection
        title=". . .  Hackathons  . . ."
        projects={hackathonsProjects}
        variant="hackathon"
        clothesline
      />
    </>
  );
}

export default ProjectsPage;
