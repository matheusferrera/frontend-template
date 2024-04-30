import React from "react";

import { Container, Typography } from "@mui/material";

import CardBreadcrumb from "../../components/cards/CardBreadcrumb";
import FormListarParceirosPendentes from "../../components/formularios/FormListarParceirosPendentes";

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
        variant="h5"
        mt={2}
        sx={{ fontFamily: "Rawline Bold", marginBottom: "40px" }}
        style={{ transition: "1s" }}
      >
        Listar Parceiros Pendentes
      </Typography>

      <FormListarParceirosPendentes />
    </Container>
  );
};

export default PageParceirosPendentes;
