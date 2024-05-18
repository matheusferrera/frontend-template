import React from "react";

import { Container, Typography } from "@mui/material";

import CardBreadcrumb from "../../components/cards/CardBreadcrumb";

const CursosVisualizar = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 0 }}
    >
      <CardBreadcrumb
        homeLink="/visualizar_informacoes_complementares"
        homeText="Admin > Listar Parceiros Pendentes > Informações do Parceiro"
        currentPage="Visualizar Curso"
      />

      <Typography
        variant="h4"
        mt={3}
        mb={3}
        sx={{ fontFamily: "Rawline Bold" }}
        style={{ transition: "1s" }}
      >
        Visualizar Curso
      </Typography>

      {/* <FormAnalisarParceiroPendente
        mudancaDeStatusModal={mudancaDeStatusModal}
        setMudancaDeStatusModal={setMudancaDeStatusModal}
        informacoesModal={informacoesModal}
        setInformacoesModal={setInformacoesModal}
      /> */}
    </Container>
  );
};

export default CursosVisualizar;
