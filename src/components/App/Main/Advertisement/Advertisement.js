function Advertisement(props) {
  function handleOpenFeedback() {
    props.onOpenFeedback();
  }

  return (
    <section className="Advertisement">
      <div className="Advertisement__content">
        <h1 className="Advertisement__title">
          Start Designing a Custom Headstone
        </h1>
        <p className="Advertisement__subtitle">Starting from $700</p>
        <div className="Advertisement__info">
          <button
            className="Advertisement__feedback"
            onClick={handleOpenFeedback}
          >
            Order
          </button>
          <h2 className="advertisemet__info-title">
            Create Your Loved One’s Customized Headstone
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Advertisement;
