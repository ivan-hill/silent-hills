import React from "react";

function InfoTooltip(props) {
  return (
    <div
      className={`popup popup_handle_${props.name} ${
        props.isOpen && "popup_opened"
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
          &#10006;
        </button>
        <div className="info-tooltip">
          <img
            className="info-tooltip__image"
            src={props.isInfoData.image}
            alt={props.isInfoData.title}
          />
          <h2 className="info-tooltip__title">{props.isInfoData.title}</h2>
          <p className="info-tooltip__subtitle">{props.isInfoData.subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;
