import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <img
        className="footer__chaussons"
        src="/assets/chaussons.png"
        alt=""
        aria-hidden="true"
      />
      <img
        className="footer__danseuse"
        src="/assets/danseuse.png"
        alt=""
        aria-hidden="true"
      />
      <span className="footer__signature">Aurélie Dumotier</span>
      <div className="footer__links">
        <a
          href="https://github.com/Aurelie78290"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/aurelie-dumotier78290/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:aurelie.dumotier@gmail.com">
          aurelie.dumotier@gmail.com
        </a>
      </div>
      <span className="footer__copyright">
        © {new Date().getFullYear()} Aurélie Dumotier
      </span>
    </footer>
  );
}

export default Footer;
