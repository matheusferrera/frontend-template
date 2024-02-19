/* eslint-disable react/prop-types */
import React from "react";

const TermoDeUsoModal = ({ showModal, handleClose }) => {
  return (
    <div>
      {showModal && (
        <div>
          This is a mocked TermoDeUsoModal
          <button onClick={handleClose}>Close</button>
        </div>
      )}
    </div>
  );
};

export default TermoDeUsoModal;
