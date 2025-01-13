import { Link } from "react-router-dom";
import githubLogo from "../../images/github.svg";
function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; 2025 Jose Jesus CP</p>
      <ul className="footer__links">
        <li>
          <Link className="footer__link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="footer__link" to="/jobs">
            Jobs
          </Link>
        </li>
        <li>
          <Link
            className="footer__link footer__link-img"
            to="https://github.com/cpjosejesus"
          >
            <img src={githubLogo} alt="Github Logo" />
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
