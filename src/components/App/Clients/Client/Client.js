import React, { useState } from "react";
import PropTypes from "prop-types";

function Client(props) {
  const [isClientOpen, setIsClientOpen] = useState(false);

  function handleClick() {
    setIsClientOpen(!isClientOpen);
  }

  function handleOpenEditClient() {
    const clientData = {
      email: props.client.email,
      phone: props.client.phone,
      status: props.client.status,
      description: props.client.description,
      id: props.client._id,
    };
    props.onOpenEditClient(clientData);
  }

  function handleDeleteClient() {
    props.onConfirmation(props.client); // Settings for opening a delete confirmation popup
  }

  const statusColor = (status) => {
    switch (status) {
      case "New Client":
        return "clients__data-item_type_new";
      case "В Pending":
        return "clients__data-item_type_working";
      case "Order complete":
        return "clients__data-item_type_end";
      default:
        return "clients__data-item_type_new";
    }
  };

  return (
    <li className="clients__item">
      <div className="clients__data">
        <p className="clients__data-item">{props.client.email}</p>
        <p className="clients__data-item">{props.client.phone}</p>
        <p className={`clients__data-item ${statusColor(props.client.status)}`}>
          {props.client.status}
        </p>
        <button
          className="clients__edit-button"
          area-label="Edit"
          type="button"
          onClick={handleOpenEditClient}
        ></button>
        <button
          className="clients__remove-button"
          area-label="Delete"
          type="button"
          onClick={handleDeleteClient}
        ></button>
        <button
          className={`clients__more-button ${
            isClientOpen ? "clients__more-button_active" : ""
          }`}
          area-label="Question?"
          type="button"
          onClick={handleClick}
        >
          &#10140;
        </button>
      </div>
      <p
        className={`clients__description ${
          isClientOpen ? "clients__description_active" : ""
        }`}
      >
        {props.client.description}
      </p>
    </li>
  );
}

Client.propTypes = {
  client: PropTypes.shape({
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  onOpenEditClient: PropTypes.func.isRequired,
  onConfirmation: PropTypes.func.isRequired,
};

export default Client;
