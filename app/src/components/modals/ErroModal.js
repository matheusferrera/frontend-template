import React from "react";

import PropTypes from "prop-types";

import CustomModal from "./CustomModal";

const ErroModal = ({ showModal, handleClose }) => {
  const modalTitle = "Erro inesperado";
  const modalContent = (
    <>
      <center>
        {
          "Erro inesperado, favor tentar novamente mais tarde, caso o erro persista contatar a central de relacionamento pelo número de telefone 121 ou por e-mail para cgad@mds.gov.br."
        }
      </center>
    </>
  );

  const modalButtons = [{ label: "Fechar", onClick: handleClose }];

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

ErroModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ErroModal;
