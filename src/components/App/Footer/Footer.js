import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer" id={"footer"}>
      <div className="footer__content">
        <ul className="footer__contacts">
          <li className="footer__item">
            <div className="footer__logo" src="" alt=""></div>
          </li>
          <li className="footer__item">
            <p className="footer__hours">Mon-Fri 09:00 to 16:00</p>
          </li>
          <li className="footer__item">
            <a href="mailto:silent-hill@gmail.com" className="footer__email">
              silent-hill@gmail.com
            </a>
          </li>
          <li className="footer__item">
            <a href="tel:+14129003131" className="footer__tel">
              +1(412) 900-3131
            </a>
          </li>
        </ul>
        <nav>
          <h3 className="footer__links-title">Menu</h3>
          <ul className="footer__links">
            <li>
              <a href="/#services" className="footer__link">
                Services
              </a>
            </li>
            <li>
              <a href="/#portfolio" className="footer__link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/#working" className="footer__link">
                Partners
              </a>
            </li>
            <li>
              <a href="/#faq" className="footer__link">
                Frequently Ask Questions
              </a>
            </li>
            <li>
              <a href="/#about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <Link to="/signin" className="footer__link">
                Sign-in
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <a
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
        className="footer__copyright"
      >
        © 2022. Ivan Hill | Frontend Developer |
      </a>
    </footer>
  );
}

export default Footer;
