function Conditions(props) {
  function handleOpenFeedback() {
    props.onOpenFeedback();
  }
  return (
    <section className="conditions">
      <div className="conditions__content">
        <h2 className="conditions__title">
          KEEP THE MEMORY OF YOUR LOVED ONES ALIVE...
        </h2>
        <p className="conditions__subtitle">
          Turning to us, you get a quality product at an affordable price
        </p>
        <ul className="conditions__list">
          <li className="conditions__list-item">
            In the manufacture of the monument with the installation of 10%
            discount on installation
          </li>
          <li className="conditions__list-item">
            Free storage of the monument for up to 1 year
          </li>
          <li className="conditions__list-item">
            Installments for up to 6 months
          </li>
        </ul>
        <button
          className="conditions__feedback-button"
          onClick={handleOpenFeedback}
        >
          Order
        </button>
      </div>
    </section>
  );
}

export default Conditions;
