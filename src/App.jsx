import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import BusinessCard from './components/BusinessCard.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import { ecoleProjects, personnelsProjects } from './data/projects.js'
import './App.css'

function App() {
  return (
    <div className="page">
      <Navbar />
      <main>
        <Hero />
        <BusinessCard />
        <ProjectsSection title="Projets École :" projects={ecoleProjects} variant="ecole" />
        <ProjectsSection title="Projets Personnels :" projects={personnelsProjects} variant="personnel" />
      </main>
    </div>
  )
}

export default App
