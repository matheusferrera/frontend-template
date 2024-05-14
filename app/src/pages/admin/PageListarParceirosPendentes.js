/* eslint-disable no-unused-vars */
import React from "react";

import { Container, Typography } from "@mui/material";

import CardBreadcrumb from "../../components/cards/CardBreadcrumb";
import FormListarParceirosPendentes from "../../components/formularios/FormListarParceirosPendentes";
import DefaultTable from "../../components/table/DefaultTable";

const columns = [
  { field: "cnpj", headerName: "CNPJ", sxProps: { width: "100px" } },
  { field: "status", headerName: "Status" },
  { field: "habilitacao", headerName: "Habilitacao" },
];

const rows = [
  {
    id: 1,
    habilitacao: "Parceiro",
    status: "Pendente",
    cnpj: "11.111.111/1000-00",
    nomeFantasia: "Nome 1",
    nomePontoFocal: "Fulano",
    razaoSocial: "Razão 1",
    naturezaJuridica: "Público",
    nomeResponsavel: "Beltrano Gonçalves",
    cidade: "Brasília",
    uf: "DF",
    cadastro: "2024-03-20T00:00",
    ultimaModificacao: "2024-03-21T00:00",
    tipoDeServico: "VEP",
  },
  {
    id: 2,
    habilitacao: "ADM",
    status: "Pendente",
    cnpj: "22.222.222/1000-00",
    nomeFantasia: "Nome 2",
    nomePontoFocal: "Beltrano",
    razaoSocial: "Razão 2",
    naturezaJuridica: "Privado",
    nomeResponsavel: "Fulano",
    cidade: "Goiânia",
    uf: "GO",
    cadastro: "2024-03-03T00:00",
    ultimaModificacao: "2024-04-10T00:00",
    tipoDeServico: "VET",
  },
  {
    id: 3,
    habilitacao: "Parceiro",
    status: "Pendente",
    cnpj: "33.333.333/1000-00",
    nomeFantasia: "Nome 1",
    nomePontoFocal: "Fulano da Silva",
    razaoSocial: "Razão 1",
    naturezaJuridica: "Público",
    nomeResponsavel: "Beltrano",
    cidade: "Catalão",
    uf: "GO",
    cadastro: "2024-02-27T00:00",
    ultimaModificacao: "2024-03-15T00:00",
    tipoDeServico: "MPu",
  },
  {
    id: 4,
    habilitacao: "Parceiro",
    status: "Pendente",
    cnpj: "44.444.444/1000-00",
    nomeFantasia: "Nome 3",
    nomePontoFocal: "Beltrano Gonçalves",
    razaoSocial: "Razão 1",
    naturezaJuridica: "Privado",
    nomeResponsavel: "Fulano da Silva",
    cidade: "Belo Horizonte",
    uf: "MG",
    cadastro: "2024-02-11T00:00",
    ultimaModificacao: "2024-02-13T00:00",
    tipoDeServico: "VEP",
  },
  {
    id: 5,
    habilitacao: "Parceiro",
    status: "Pendente",
    cnpj: "55.555.555/1000-00",
    nomeFantasia: "Nome 2",
    nomePontoFocal: "Fulano Beltrano",
    razaoSocial: "Razão 1",
    naturezaJuridica: "Privado",
    nomeResponsavel: "Beltrano Fulano",
    cidade: "Brasília",
    uf: "DF",
    cadastro: "2024-03-20T00:00",
    ultimaModificacao: "2024-03-21T00:00",
    tipoDeServico: "VET",
  },
  {
    id: 6,
    habilitacao: "Parceiro",
    status: "Pendente",
    cnpj: "55.555.555/1000-00",
    nomeFantasia: "Nome 2",
    nomePontoFocal: "Fulano Beltrano",
    razaoSocial: "Razão 1",
    naturezaJuridica: "Privado",
    nomeResponsavel: "Beltrano Fulano",
    cidade: "Brasília",
    uf: "DF",
    cadastro: "2024-03-20T00:00",
    ultimaModificacao: "2024-03-21T00:00",
    tipoDeServico: "VET",
  },
  {
    id: 7,
    habilitacao: "Parceiro",
    status: "Pendente",
    cnpj: "55.555.555/1000-00",
    nomeFantasia: "Nome 2",
    nomePontoFocal: "Fulano Beltrano",
    razaoSocial: "Razão 1",
    naturezaJuridica: "Privado",
    nomeResponsavel: "Beltrano Fulano",
    cidade: "Brasília",
    uf: "DF",
    cadastro: "2024-03-20T00:00",
    ultimaModificacao: "2024-03-21T00:00",
    tipoDeServico: "VET",
  },
];

const hiddenRows = rows.map(({ cadastro, ultimaModificacao, cnpj }) => ({
  cadastro,
  ultimaModificacao,
  cnpj,
}));

const PageParceirosPendentes = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 0 }}
    >
      <CardBreadcrumb
        homeLink="/home"
        homeText="Admin"
        currentPage="Listar Parceiros Pendentes"
      />

      <Typography
        variant="h4"
        mt={3}
        mb={3}
        sx={{ fontFamily: "Rawline Bold" }}
        style={{ transition: "1s" }}
      >
        Listar Parceiros Pendentes
      </Typography>

      <FormListarParceirosPendentes />
      <h1>DEFAULT TABLE</h1>
      <DefaultTable
        rows={rows}
        columns={columns}
        hiddenRows={hiddenRows}
      ></DefaultTable>
    </Container>
  );
};

export default PageParceirosPendentes;
