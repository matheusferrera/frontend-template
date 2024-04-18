import React from "react";

import { Box } from "@mui/material";

import { useAuth } from "../../contexts/AuthContext";
import CardBreadcrumb from "../cards/CardBreadcrumb";
import FormListarParceiros from "../formularios/FormListarParceiros";

const VisualizacaoFormulario = () => {
  const { user } = useAuth();

  const values = {
    email: user.ds_email,
    cnpj: "04.082.993/0001-49",
    razaoSocial: "teste",
    nomeFantasia: "teste",
    cep: "70070-912",
    endereco: "teste teste",
    numero: "55",
    complemento: "teste teste",
    bairro: "teste",
    uf: "DF",
    cidade: "Brasília",
    telefone: "(00) 0000-0000",
    site: "https://www.gov.br/ibict/pt-br",
    redeSocial: "rede1;rede2;rede3",
    nomeRepresentante: "teste",
    cpf: "55267041149",
    telefoneRepresentante: "(00) 0000-0000",
    ufRepresentante: "AC",
    cidadeRepresentante: "Acrelândia",
    nomePontoFocal: "teste",
    emailPontoFocal: "teste@email.com",
    telefonePontoFocal: "(00) 0000-0000",
    areaAtuacao: "02", //"PRODUÇÃO FLORESTAL",
    naturezaJuridica: user.naturezaJuridica,
    checkVagaEmprego: false,
    checkVagaEstagio: true,
    checkVagaJovem: true,
    checkCursos: true,
    checkFinanceiro: false,
    checkMobilidadePublico: false,
    checkMobilidadeParceiro: false,
    toggleCienteNormas: false,
    toggleCienteGratuito: false,
  };

  return (
    <Box
      alignSelf={"center"}
      alignItems={"center"}
      sx={{
        width: 1,
        height: 1,
        justifyContent: "center",
      }}
    >
      <CardBreadcrumb
        homeLink="/parceiro/visualizar_formulario"
        homeText="Parceiro"
        currentPage="Visualizar Formulário"
      />
      <FormListarParceiros
        values={values}
        readOnly={true}
      />
    </Box>
  );
};

export default VisualizacaoFormulario;
