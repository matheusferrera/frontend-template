import React from "react";

import { Container, Typography } from "@mui/material";

import CardBreadcrumb from "../../components/cards/CardBreadcrumb";
import FormParceiros from "../../components/formularios/FormParceiros";
import { useAuth } from "../../contexts/AuthContext";

const PageVisualizacaoParceiro = () => {
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
    <Container
      maxWidth="lg"
      sx={{ mt: 0 }}
    >
      <CardBreadcrumb
        homeLink="/parceiro/visualizar"
        homeText="Parceiro"
        currentPage="Visualizar Formulário"
      />
      <Typography
        variant="h4"
        mt={3}
        mb={3}
        sx={{ fontFamily: "Rawline Bold" }}
        style={{ transition: "1s" }}
      >
        Visualizar inscrição
      </Typography>

      <FormParceiros
        values={values}
        readOnly={true}
      />
    </Container>
  );
};

export default PageVisualizacaoParceiro;
