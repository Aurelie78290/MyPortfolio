import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import ScrollToHash from './components/ScrollToHash.jsx'
import HomePage from './pages/HomePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ProjectDetailPage from './pages/ProjectDetailPage.jsx'
import './App.css'

function App() {
  return (
    <div className="page">
      <Navbar />
      <ScrollToHash />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projets" element={<ProjectsPage />} />
          <Route path="/projets/:id" element={<ProjectDetailPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
