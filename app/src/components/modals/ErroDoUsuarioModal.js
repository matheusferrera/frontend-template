import React from "react";

import PropTypes from "prop-types";

import CustomModal from "./CustomModal";

const termos = {
  email: "E-mail",
  cnpj: "CNPJ",
  razaoSocial: "Razão Social",
  nomeFantasia: "Nome Fantasia",
  cep: "CEP",
  endereco: "Endereço",
  numero: "Número",
  complemento: "Complemento",
  bairro: "Bairro",
  uf: "UF",
  cidade: "Cidade",
  telefone: "Telefone",
  site: "Site",
  nomeRepresentante: "Nome Representante",
  cpf: "CPF",
  telefoneRepresentante: "Telefone do Representante",
  ufRepresentante: "UF do Representante",
  cidadeRepresentante: "Cidade do Representante",
  nomePontoFocal: "Nome do Ponto Focal",
  emailPontoFocal: "E-mail do Ponto Focal",
  telefonePontoFocal: "Telefone do Ponto Focal",
  areaAtuacao: "Área de Atuação",
  naturezaJuridica: "Natureza Jurídica",
  checkVagaEmprego: "Tipo de Serviço",
  checkVagaEstagio: "Tipo de Serviço",
  checkVagaJovem: "Tipo de Serviço",
  checkCursos: "Tipo de Serviço",
  checkFinanceiro: "Tipo de Serviço",
  checkMobilidadePublico: "Tipo de Serviço",
  checkMobilidadeParceiro: "Tipo de Serviço",
  toggleCienteNormas: "Você precisa concordar com as normas",
  toggleCienteGratuito: "Você precisa informar que está ciente da condição",
  // Esse campo não aparece normalmente na lista de erros
  erroDiferente: "Tipo de Serviço",
};

const ErroDoUsuarioModal = ({ showModal, handleClose, erros }) => {
  if (Object.keys(erros).length == 0) {
    // Detecta os erros dos checks
    erros = { erroDiferente: "erro" };
  }

  const modalTitle = "Erro de Preenchimento";

  const modalContent = (
    <>
      <center>{"Ocorreu um erro no preenchimento do formulário nos campos: "}</center>
      <center>
        {Object.keys(erros).map(campo => {
          if (campo in termos) {
            return <center key={campo}>{termos[campo]}</center>;
          }
        })}
      </center>
      <center>{"Por favor, corrija e tente novamente."}</center>
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

ErroDoUsuarioModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  erros: PropTypes.object.isRequired,
};

export default ErroDoUsuarioModal;
