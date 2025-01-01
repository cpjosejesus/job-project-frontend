import imgLogo from "../../images/logo_coffeeshop_dark.svg";

function Nav() {
  return (
    <nav className="nav">
      <img className="nav__logo" src={imgLogo} alt="" />

      <ul className="nav__links">
        <li>
          <a className="nav__link" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="nav__link" href="#">
            About
          </a>
        </li>
        <li>
          <a className="nav__link" href="#">
            Jobs
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
