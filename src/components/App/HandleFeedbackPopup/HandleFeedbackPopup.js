import React from "react";
import PropTypes from "prop-types";

function HandleFeedbackPopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
    let email = `${props.values["feedbackemail"] || ""}`;
    let phone = `${props.values["feedbacktel"] || ""}`;
    props.onCreateClient({ email, phone });
  }

  function handleClosePopup() {
    props.onClose();
  }

  function handleInputChange(e) {
    props.onInputChange(e);
  }

  return (
    <div
      className={`popup popup_handle_feedback ${
        props.isOpenFeedBack ? "popup_opened" : ""
      }`}
      onClick={props.onOverlayClose}
    >
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          aria-label="close"
          onClick={handleClosePopup}
        >
          &#10006;
        </button>
        <form
          action="#"
          name="feedbackform"
          className="form"
          noValidate
          onSubmit={handleSubmit}
        >
          <h2 className="form__title">Contact Us</h2>
          <label htmlFor="feedbackemail" className="form__field">
            <input
              id="feedbackemail"
              type="email"
              className="form__input form__input_add_name"
              name="feedbackemail"
              placeholder="Enter your email address"
              required
              minLength="2"
              maxLength="30"
              pattern="[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}"
              value={props.values["feedbackemail"] || ""}
              onChange={handleInputChange}
            />
            <span id="error-email" className="form__input-error">
              {props.errors["feedbackemail"] || ""}
            </span>
          </label>
          <label htmlFor="feedbacktel" className="form__field">
            <input
              id="feedbacktel"
              type="text"
              className="form__input form__input_add_link"
              name="feedbacktel"
              placeholder="Enter your phone number"
              required
              pattern="\+01[0-9]{9}"
              value={props.values["feedbacktel"] || ""}
              onChange={handleInputChange}
            />
            <span id="error-tel" className="form__input-error">
              {props.errors["feedbacktel"] || ""}
            </span>
          </label>
          <button
            className={`form__submit ${
              !props.isValid ? "form__submit_disabled" : ""
            }`}
            type="submit"
            disabled={!props.isValid}
          >
            <span
              className={`form__submit-text ${
                props.isValid ? "form__submit-text_hover" : ""
              }`}
            >
              <span className="form__submit-icon form__submit-icon_type_hidden"></span>
              <span className="form__submit-icon">Free Consultation</span>
            </span>
          </button>
          <label
            htmlFor="feedbackconditions"
            className="form__field form__field_type_row"
          >
            <input
              className="form__checkbox"
              id="feedbackconditions"
              name="feedbackconditions"
              type="checkbox"
              required
              onChange={handleInputChange}
              defaultChecked={props.checks["feedbackconditions"] || false}
            ></input>
            <span className="form__checkbox-item">&#10004;</span>
            <span className="form__conditions">Terms and Conditions</span>
            <a
              className="form__conditions-link"
              href="https://www.rememberingalife.com/pages/funeral-service-terms"
              rel="noreferrer"
              target="_blank"
            >
              Personal Information
            </a>
            <span id="error-conditions" className="form__input-error">
              {props.checks["feedbackconditions"]
                ? `${props.errors["feedbackconditions"]}`
                : "To continue, select this checkbox."}
            </span>
          </label>
        </form>
      </div>
    </div>
  );
}

HandleFeedbackPopup.propTypes = {
  values: PropTypes.object.isRequired,
  isOpenFeedBack: PropTypes.bool.isRequired,
  onOverlayClose: PropTypes.func.isRequired,
  onCreateClient: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  isValid: PropTypes.bool.isRequired,
  checks: PropTypes.object.isRequired,
};

export default HandleFeedbackPopup;
