import { useState } from "react";
import { Link } from "react-router-dom";
import imgLogo from "../../images/tripleTen_project.svg";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <Link className="nav__link-img" to="/">
        <img className="nav__logo" src={imgLogo} alt="" />
      </Link>

      <button
        className={`nav__burger ${isMenuOpen ? "nav__burger_active" : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav__links ${isMenuOpen ? "nav__links_active" : ""}`}>
        <li>
          <Link
            className="nav__link"
            to="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="nav__link"
            to="/jobs"
            onClick={() => setIsMenuOpen(false)}
          >
            Jobs
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
