import "./Navbar.css";

const links = [
  { label: "Qui suis-je ?", href: "#qui-suis-je" },
  { label: "Compétences", href: "#competences" },
  { label: "Projets", href: "#projets" },
  { label: "Me contacter", href: "#contact" },
];

function Navbar() {
  return (
    <header className="navbar">
      <span className="navbar__logo">Aurélie Dumotier</span>
      <nav className="navbar__links">
        {links.map((link) => (
          <a key={link.label} href={link.href} className="navbar__pill">
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
