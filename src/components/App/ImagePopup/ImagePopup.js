import React from "react";

function ImagePopup(props) {
  return (
    <div
      className={`popup popup_handle_${props.name} ${
        props.portfolioImage.isOpen && "popup_opened"
      }`}
      onClick={props.onOverlayClose}
    >
      <div className="image-viewing">
        <button
          className="popup__close popup__close_type_image-viewing"
          type="button"
          aria-label="Close"
          onClick={props.onClose}
        >
          &#10006;
        </button>
        <figure className="image-viewing__img-card">
          <img
            src={props.portfolioImage.src}
            alt={"View"}
            className="image-viewing__image"
          />
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
