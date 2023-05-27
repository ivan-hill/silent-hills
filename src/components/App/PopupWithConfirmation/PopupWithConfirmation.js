function PopupWithConfirmation(props) {
  function handleDeleteClient(e) {
    e.preventDefault();
    props.onConfirmDelete();
  }
  return (
    <div
      className={`popup popup_handle_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
      onClick={props.onOverlayClose}
    >
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          aria-label="Close"
          onClick={props.onClose}
        >
          {" "}
          &#10006;
        </button>
        <form
          action="#"
          name={`${props.name}form`}
          className="form"
          onSubmit={handleDeleteClient}
        >
          <h2 className="form__title">Удалить?</h2>
          <button className="form__submit" type="submit">
            {props.isLoading ? "Delete..." : "Yes."}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithConfirmation;
