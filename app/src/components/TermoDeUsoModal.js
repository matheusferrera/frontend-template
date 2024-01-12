import React from "react";

import PropTypes from "prop-types";

import termosDeUsoPath from "../assets/texto/termo-de-uso.md";
import CustomModal from "./CustomModal";
import MarkdownViewer from "./markdown-viewer/markdown-viewer";

const TermoDeUsoModal = ({ showModal, handleClose }) => {
  const modalTitle = "Termo de Uso";
  const modalContent = (
    <>
      <MarkdownViewer filePath={termosDeUsoPath} />
    </>
  );

  const modalButtons = [{ label: "Concordar", onClick: handleClose }];

  return (
    <CustomModal
      showModal={showModal}
      handleClose={handleClose}
      title={modalTitle}
      content={modalContent}
      buttons={modalButtons}
    />
  );
};

TermoDeUsoModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default TermoDeUsoModal;
