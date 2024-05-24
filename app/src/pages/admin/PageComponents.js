/* eslint-disable no-unused-vars */
import React from "react";

import { Container, Typography } from "@mui/material";

import CardBreadcrumb from "../../components/cards/CardBreadcrumb";
import CardVisaoGeral from "../../components/cards/CardVisaoGeral";
import { dadosParceirosPendentes } from "../../components/formularios/dadosMockados";
import DefaultTable from "../../components/table/DefaultTable";

const columns = [
  { field: "cnpj", headerName: "CNPJ", sxProps: { width: "250px" } },
  { field: "status", headerName: "Status" },
  { field: "habilitacao", headerName: "Habilitação", sxRowProps: { textTransform: "uppercase", color: "primary.main" } },
];

const rows = dadosParceirosPendentes;

const keysHidden = ["dataCadastro", "dataUltimaModificacao", "cnpj"];

const hiddenRows = rows.map(row =>
  keysHidden.reduce((acc, key) => {
    acc[key] = row[key];
    return acc;
  }, {}),
);

const keysHiddenSegunda = [
  "dataCadastro",
  "dataUltimaModificacao",
  "cnpj",
  "nomeFantasia",
  "razaoSocial",
  "naturezaJuridica",
  "nomeResponsavel",
  "email",
  "nomePontoFocal",
  "emailPontoFocal",
  "telefone",
  "complemento",
  "uf",
  "cidade",
  "endereco",
];

const hiddenRowsSegunda = rows.map(row =>
  keysHiddenSegunda.reduce((acc, key) => {
    acc[key] = row[key];
    return acc;
  }, {}),
);

const getActionButtons = () => [
  {
    title: "Visualizar",
    icon: "visibility",
    href: "",
  },
  {
    title: "Editar",
    icon: "edit",
    href: "",
  },
  {
    title: "Excluir",
    icon: "delete",
    href: "",
  },
];

const termos = {
  id: "ID",
  habilitacao: "Habilitação",
  status: "Status",
  cnpj: "CNPJ",
  nomeFantasia: "Nome Fantasia",
  razaoSocial: "Razão Social",
  naturezaJuridica: "Natureza Juridica",
  nomeResponsavel: "Nome do Responsável",
  email: "E-mail do Responsável",
  nomePontoFocal: "Nome Ponto Focal",
  emailPontoFocal: "E-mail do Ponto Focal",
  telefone: "Telefone",
  endereco: "Endereço",
  complemento: "Complemento",
  cidade: "Cidade",
  uf: "UF",
  dataCadastro: "Data do Cadastro",
  dataUltimaModificacao: "Data da última modificação",
  tipoDeServico: "Tipo de Serviço",
  VEP: "Vaga de Emprego",
  VET: "Vaga de Estágio",
  VJA: "Vaga de Jovem Aprendiz",
  CUR: "Cursos",
  FPG: "Financeiros e de Pagamentos",
  MPu: "Mobilização de Público",
  MPa: "Mobilização de Parceiro",
};

const PageComponents = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 0 }}
    >
      <CardBreadcrumb
        homeLink="/home"
        homeText="Admin"
        currentPage="Components"
      />

      <Typography
        variant="h5"
        mt={2}
        sx={{ fontFamily: "Rawline Bold", marginBottom: "10px", marginTop: "40px" }}
        style={{ transition: "1s" }}
      >
        Default Table (sem termos)
      </Typography>

      <DefaultTable
        rows={rows}
        columns={columns}
        hiddenRows={hiddenRows}
        notFoundText={"Não foram encontrados registros"}
      ></DefaultTable>

      <Typography
        variant="h5"
        mt={2}
        sx={{ fontFamily: "Rawline Bold", marginBottom: "10px", marginTop: "40px" }}
        style={{ transition: "1s" }}
      >
        Default Table sem nenhum dado
      </Typography>

      <DefaultTable></DefaultTable>

      <Typography
        variant="h5"
        mt={2}
        sx={{ fontFamily: "Rawline Bold", marginBottom: "10px", marginTop: "40px" }}
        style={{ transition: "1s" }}
      >
        Default Table com action buttons e termos
      </Typography>

      <DefaultTable
        rows={rows}
        columns={columns}
        hiddenRows={hiddenRowsSegunda}
        actionButtons={getActionButtons()}
        termos={termos}
      ></DefaultTable>

      <Typography
        variant="h5"
        mt={2}
        sx={{ fontFamily: "Rawline Bold", marginBottom: "10px", marginTop: "40px" }}
        style={{ transition: "1s" }}
      >
        Card Visao Geral
      </Typography>

      <CardVisaoGeral
        number={2}
        title={"title"}
      ></CardVisaoGeral>

      <CardVisaoGeral></CardVisaoGeral>
    </Container>
  );
};

export default PageComponents;
