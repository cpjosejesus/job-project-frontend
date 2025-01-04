import imgLogo from "../../images/tripleTen_project.svg";

import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <Link className="nav__link-img" to="/">
        <img className="nav__logo" src={imgLogo} alt="" />
      </Link>

      <ul className="nav__links">
        <li>
          <Link className="nav__link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav__link" to="/jobs">
            Jobs
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
