import { useEffect, useRef } from "react";
import { handleTopnavTopPosition } from "../../../../utils/utils";

function Topnav(props) {
  const topnav = useRef();

  useEffect(() => {
    window.addEventListener("scroll", getTopPosition);
  }, []);

  function getTopPosition() {
    const timer = setTimeout(() => {
      handleTopnavTopPosition(topnav.current);
    }, 100);
    return () => clearTimeout(timer);
  }

  function handleToggleBurger() {
    props.onToggleBurger();
  }

  return (
    <section className="topnav" ref={topnav}>
      <nav className="topnav__content">
        <ul className="contacts topnav__contacts">

          <li className="contacts__item">
            <h3 className="contacts__title">Email:</h3>
            <a href="mailto:silent-hill@gmail.com" className="contacts__email">
              silent-hill@gmail.com
            </a>
          </li>
          <li className="contacts__item">
            <h3 className="contacts__title">Phone:</h3>
            <a href="tel:+14129003131" className="contacts__tel">
              +1(412) 900-3131
            </a>
          </li>
        </ul>
        <div className="topnav__smallscreen-item">
          <a href="mailto:silent-hill@gmail.com" className="topnav__email">
            silent-hill@gmail.com
          </a>
          <a href="tel:+14129003131" className="topnav__tel">
            +1(412) 900-3131
          </a>
        </div>
        <div className="topnav__links-wrapper">
          <div
            className={`burger-menu topnav__burger ${
              props.isToggleBurger ? "open" : ""
            }`}
            onClick={handleToggleBurger}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul
            className={`topnav__links ${
              props.isToggleBurger ? "topnav__links_opened" : ""
            }`}
          >
            <li>
              <a
                href="/#services"
                className="topnav__link"
                onClick={handleToggleBurger}
              >
                Monuments
              </a>
            </li>
            <li>
              <a
                href="/#portfolio"
                className="topnav__link"
                onClick={handleToggleBurger}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="/#working"
                className="topnav__link"
                onClick={handleToggleBurger}
              >
                Process
              </a>
            </li>
            <li>
              <a
                href="/#faq"
                className="topnav__link"
                onClick={handleToggleBurger}
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="topnav__link"
                onClick={handleToggleBurger}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#footer"
                className="topnav__link"
                onClick={handleToggleBurger}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Topnav;
