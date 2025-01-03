import githubLogo from "../../images/github.svg";
function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">Copyright</p>
      <ul className="footer__links">
        <li>
          <a className="footer__link" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="footer__link" href="#">
            Jobs
          </a>
        </li>
        <li>
          <a className="footer__link footer__link-img" href="#">
            <img src={githubLogo} alt="Github Logo" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
