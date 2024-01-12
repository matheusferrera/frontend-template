import React from "react";

import PropTypes from "prop-types";

import AvisoDePrivacidadePath from "../assets/texto/politica-de-privacidade.md";
import CustomModal from "./CustomModal";
import MarkdownViewer from "./markdown-viewer/markdown-viewer";

const AvisoDePrivacidadeModal = ({ showModal, handleClose }) => {
  const modalTitle = "Aviso de Privacidade";
  const modalContent = (
    <>
      <MarkdownViewer filePath={AvisoDePrivacidadePath} />
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

AvisoDePrivacidadeModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default AvisoDePrivacidadeModal;
