/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { Container, Typography } from "@mui/material";

import CardBreadcrumb from "../../components/cards/CardBreadcrumb";
import FormListarParceirosPendentes from "../../components/formularios/FormListarParceirosPendentes";

const PageParceirosPendentes = () => {
  const [servicosModal, setServicosModal] = useState(false);

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

      <FormListarParceirosPendentes
        servicosModal={servicosModal}
        setServicosModal={setServicosModal}
      />
    </Container>
  );
};

export default PageParceirosPendentes;
