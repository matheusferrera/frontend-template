import React from "react";

import { Container, Typography } from "@mui/material";

import CardBreadcrumb from "../../components/cards/CardBreadcrumb";
import FormAnalisarParceiroPendente from "../../components/formularios/FormAnalisarParceiro";

const AnalisarParceiroPendente = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 0 }}
    >
      <CardBreadcrumb
        homeLink="/listar_parceiros_pendentes"
        homeText="Admin / Listar Parceiros Pendentes"
        currentPage="Listar Parceiros Pendentes"
      />

      <Typography
        variant="h4"
        mt={2}
        sx={{ fontFamily: "Rawline Bold", marginBottom: "20px" }}
        style={{ transition: "1s" }}
      >
        Analisar parceiro pendente
      </Typography>

      <FormAnalisarParceiroPendente />
    </Container>
  );
};

export default AnalisarParceiroPendente;
