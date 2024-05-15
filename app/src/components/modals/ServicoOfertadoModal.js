import React from "react";

import { Checkbox } from "@mui/material";
import PropTypes from "prop-types";

import CustomModal from "./CustomModal";

const termos = {
  VEP: "Vaga de Emprego",
  VET: "Vaga de Estágio",
  VJA: "Vaga de Jovem Aprendiz",
  CUR: "Cursos",
  FPG: "Financeiros e de Pagamentos",
  MPu: "Mobilização de Público",
  MPa: "Mobilização de Parceiro",
};

const ServicoOfertadoModal = ({ showModal, handleClose, parceiro }) => {
  const modalTitle = "Serviços Ofertados";

  if (parceiro.length == 0) {
    return false;
  }

  const modalContent = (
    <>
      <center>{"Os serviços ofertados são: "}</center>
      <p>
        {Object.keys(parceiro[0].tipoDeServico).map(nome => {
          if (nome in termos) {
            return (
              <>
                <Checkbox
                  disabled
                  id={nome}
                  name={nome}
                  checked={parceiro[0].tipoDeServico[nome]}
                />{" "}
                {termos[nome]} <br></br>
              </>
            );
          }
        })}
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

ServicoOfertadoModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  parceiro: PropTypes.array,
};

export default ServicoOfertadoModal;
