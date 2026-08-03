import { Link } from "react-router-dom";
import "./Navbar.css";

const links = [
  { label: "Qui suis-je ?", to: "/#qui-suis-je" },
  { label: "Compétences", to: "/#competences" },
  { label: "Projets", to: "/projets" },
];

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar__logo">
        Aurélie Dumotier
      </Link>
      <nav className="navbar__links">
        {links.map((link) => (
          <Link key={link.label} to={link.to} className="navbar__pill">
            {link.label}
          </Link>
        ))}
        <a href="mailto:aurelie.dumotier@gmail.com" className="navbar__pill">
          Me contacter
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
