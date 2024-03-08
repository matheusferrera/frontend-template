import React from "react";

import PropTypes from "prop-types";

import CustomModal from "./CustomModal";

const ConfirmacaoModal = ({ showModal, handleClose }) => {
  const modalTitle = "Confirmação de envio";
  const modalContent = (
    <>
      <p>
        <center>
          {
            "Cadastro realizado com sucesso e enviado para aprovação da Secretaria de Inclusão Socioeconômica do Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome."
          }
        </center>
      </p>
      <p>
        <center>
          {"Assim que seu cadastro for validado, você será informado da aprovação por e-mail e poderá iniciar a oferta de serviços."}
        </center>
      </p>
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

ConfirmacaoModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ConfirmacaoModal;
