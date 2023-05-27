import React from "react";
import PropTypes from "prop-types";

function EditClientPopup(props) {
  function handleSubmit(e) {
    // Prevent the browser from going to the address of the form
    e.preventDefault();

    let email = `${
      props.values["clientemail"] || props.openedClientData.email
    }`;
    let phone = `${
      props.values["clientphone"] || props.openedClientData.phone
    }`;
    let status = `${
      props.values["clientstatus"] || props.openedClientData.status
    }`;
    let description = `${
      props.values["clientdescription"] || props.openedClientData.description
    }`;
    let id = props.openedClientData.id;
    props.onEditClient({ email, phone, status, description, id });
  }

  function handleInputChange(e) {
    props.onInputChange(e);
  }

  function handleClosePopup() {
    props.onClose();
  }

  return (
    <div
      className={`popup popup_handle_client ${
        props.isEditClientFormOpen ? "popup_opened" : ""
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
          name="editclientform"
          className="form"
          noValidate
          onSubmit={handleSubmit}
        >
          <h2 className="form__title">Edit Customer Information</h2>
          <label htmlFor="clientemail" className="form__field">
            <input
              id="clientemail"
              type="email"
              className="form__input form__input_add_email"
              name="clientemail"
              placeholder="Enter your email address"
              required
              minLength="2"
              maxLength="30"
              pattern="[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}"
              value={
                props.values["clientemail"] ||
                props.openedClientData.email ||
                ""
              }
              onChange={handleInputChange}
            />
            <span id="error-email" className="form__input-error">
              {props.errors["clientemail"] || ""}
            </span>
          </label>
          <label htmlFor="clientphone" className="form__field">
            <input
              id="clientphone"
              type="text"
              className="form__input form__input_add_link"
              name="clientphone"
              placeholder="+14127893131"
              required
              pattern="\+1[0-9]{10}"
              value={
                props.values["clientphone"] ||
                props.openedClientData.phone ||
                ""
              }
              onChange={handleInputChange}
            />
            <span id="error-tel" className="form__input-error">
              {props.errors["clientphone"] || ""}
            </span>
          </label>
          <label htmlFor="clientstatus" className="form__field">
            <select
              id="clientstatus"
              type="text"
              className="form__input form__input_type_status"
              name="clientstatus"
              required
              minLength="2"
              onChange={handleInputChange}
              value={
                props.values["clientstatus"] ||
                props.openedClientData.status ||
                ""
              }
            >
              <option value="New Customer">New Customer</option>
              <option value="Pending">Pending</option>
              <option value="Order completed">Order completed</option>
            </select>
            <span id="error-status" className="form__input-error">
              {props.errors["clientstatus"] || ""}
            </span>
          </label>
          <label
            htmlFor="clientdescription"
            className="form__field form__field_type_description"
          >
            <textarea
              id="clientdescription"
              type="text"
              className="form__input form__input_type_description"
              name="clientdescription"
              required
              minLength="2"
              onChange={handleInputChange}
              value={
                props.values["clientdescription"] ||
                props.openedClientData.description ||
                ""
              }
            ></textarea>
            <span id="error-description" className="form__input-error">
              {props.errors["clientdescription"] || ""}
            </span>
          </label>
          <button
            className={`form__submit ${
              !props.isValid ? "form__submit_disabled" : ""
            }`}
            type="submit"
            disabled={!props.isValid}
          >
            {props.isLoading ? "Saving..." : "Saving"}
          </button>
        </form>
      </div>
    </div>
  );
}

EditClientPopup.propTypes = {
  values: PropTypes.object.isRequired,
  openedClientData: PropTypes.object.isRequired,
  onEditClient: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onOverlayClose: PropTypes.func.isRequired,
  isEditClientFormOpen: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  isValid: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default EditClientPopup;
