import React from "react";

import PropTypes from "prop-types";

import CustomModal from "./CustomModal";

const FinanceiroModal = ({ showModal, handleContinuar, handleClose }) => {
  const modalTitle = "Serviço financeiro e pagamento";
  const modalContent = (
    <>
      <p>
        {
          'Para ser avaliada a opção de oferta do tipo de serviço "Financeiros e de Pagamentos" é necessário responder a todas as perguntas e salvar as informações.'
        }
      </p>
      <p>
        {
          "Declaro, sob as penas da lei, que os dados e informações aqui prestados são verídicos e que a instituição dispõe dos correspondentes documentos de comprovação estando-os à disposição para o caso de verificações se necessário for."
        }
      </p>
      <p> {"O que você deseja fazer?"}</p>
    </>
  );

  const modalButtons = [
    { label: "Continuar", onClick: handleContinuar },
    { label: "Voltar", onClick: handleClose },
  ];

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

FinanceiroModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleContinuar: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default FinanceiroModal;
