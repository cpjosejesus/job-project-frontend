import imgLogo from "../../images/logo_coffeeshop_dark.svg";

import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <img className="nav__logo" src={imgLogo} alt="" />

      <ul className="nav__links">
        <li>
          <Link className="nav__link" to="/">
            Home
          </Link>
        </li>
        <li>
          <a className="nav__link" href="#">
            About
          </a>
        </li>
        <li>
          <Link className="nav__link" to="/jobBoard">
            Jobs
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
