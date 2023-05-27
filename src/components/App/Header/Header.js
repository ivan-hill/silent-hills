function Header(props) {
  function handleInputChange() {
    props.onOpenFeedback();
  }
  return (
    <header className="header" id="header">
      <div className="header__logo">
        <div className="header__logo-image"></div>
        <a href="/" className="header__logo-link">
          Silent Hills
        </a>
      </div>
      <ul className="contacts">
        <li className="contacts__item">
          <h3 className="contacts__title">Business Hours:</h3>
          <p className="contacts__hours">Mon - Fri 09:00 to 16:00</p>
        </li>
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
      <button className="signin__link" onClick={handleInputChange}>
        Sign In
      </button>
    </header>
  );
}

export default Header;
