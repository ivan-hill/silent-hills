import React from "react";

import "./PageNotFound.css";

function PageNotFound({ onBack }) {
  function handleBack() {
    onBack();
  }
  return (
    <div className="not-found">
      <h3 className="not-found__title">404</h3>
      <p className="not-found__text">Page not found</p>
      <button className="not-found__to-main" onClick={handleBack}>
        Back
      </button>
    </div>
  );
}

export default PageNotFound;
