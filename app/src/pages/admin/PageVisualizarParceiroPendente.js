import React from "react";

import { Container, Typography } from "@mui/material";

import CardBreadcrumb from "../../components/cards/CardBreadcrumb";
import FormVisualizarParceiroPendente from "../../components/formularios/FormVisualizarParceiroPendente";

const VisualizarParceiroPendente = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 0 }}
    >
      <CardBreadcrumb
        homeLink="/listar_parceiros_pendentes"
        homeText="Admin > Listar Parceiros Pendentes"
        currentPage="Visualizar Parceiro Pendente"
      />

      <Typography
        variant="h4"
        mt={3}
        mb={3}
        sx={{ fontFamily: "Rawline Bold" }}
        style={{ transition: "1s" }}
      >
        Visualizar Parceiro Pendente
      </Typography>

      <FormVisualizarParceiroPendente />
    </Container>
  );
};

export default VisualizarParceiroPendente;
