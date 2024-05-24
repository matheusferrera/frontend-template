import React from "react";

import { Container, Typography } from "@mui/material";

import CardBreadcrumb from "../../components/cards/CardBreadcrumb";
import FormAnalisarInformacoesComplementares from "../../components/formularios/FormAnalisarInformacoesComplementares";

const AnalisarInformacoesComplementares = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 0 }}
    >
      <CardBreadcrumb
        links={[{ href: "/listar-parceiros-pendentes", text: "Listar Parceiros Pendentes" }]}
        currentPage="Analisar Informações Complementares"
      />

      <Typography
        variant="h4"
        mt={3}
        mb={3}
        sx={{ fontFamily: "Rawline Bold" }}
        style={{ transition: "1s" }}
      >
        Analisar Informações Complementares
      </Typography>

      <FormAnalisarInformacoesComplementares />
    </Container>
  );
};

export default AnalisarInformacoesComplementares;
