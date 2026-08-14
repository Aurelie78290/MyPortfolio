import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const links = [
  { label: "Qui suis-je ?", to: "/#qui-suis-je" },
  { label: "Compétences", to: "/#competences" },
  { label: "Projets", to: "/projets" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("mousedown", closeOnOutsideClick);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <header className="navbar" ref={navRef}>
      <Link to="/" className="navbar__logo" onClick={() => setIsOpen(false)}>
        Aurélie Dumotier
      </Link>

      <button
        type="button"
        className={`navbar__burger${isOpen ? " navbar__burger--open" : ""}`}
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
      >
        <span className="navbar__burger-icon">
          <span className="navbar__burger-line" />
          <span className="navbar__burger-line" />
          <span className="navbar__burger-line" />
        </span>
      </button>

      <nav
        className={`navbar__links${isOpen ? " navbar__links--open" : ""}`}
      >
        {links.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className="navbar__pill"
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="mailto:aurelie.dumotier@gmail.com"
          className="navbar__pill"
          onClick={() => setIsOpen(false)}
        >
          Me contacter
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
