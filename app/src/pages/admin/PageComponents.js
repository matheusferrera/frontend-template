/* eslint-disable no-unused-vars */
import React from "react";

import { Container, Typography } from "@mui/material";

import CardBreadcrumb from "../../components/cards/CardBreadcrumb";
import CardVisaoGeral from "../../components/cards/CardVisaoGeral";
import { dadosParceiros } from "../../components/formularios/dadosMockados";
import DefaultTable from "../../components/table/DefaultTable";

const columns = [
  { field: "cnpj", headerName: "CNPJ", sxProps: { width: "250px" } },
  { field: "status", headerName: "Status" },
  { field: "habilitacao", headerName: "Habilitacao" },
];

const rows = dadosParceiros;

const hiddenRows = rows.map(({ dataCadastro, dataUltimaModificacao, cnpj }) => ({
  dataCadastro,
  dataUltimaModificacao,
  cnpj,
}));

const actionButtons = [
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
        Default Table
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
        Default Table com action buttons
      </Typography>

      <DefaultTable
        rows={rows}
        columns={columns}
        hiddenRows={hiddenRows}
        actionButtons={actionButtons}
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
