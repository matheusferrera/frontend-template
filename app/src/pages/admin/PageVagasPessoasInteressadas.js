import React from "react";

import { Container, Typography } from "@mui/material";

import CardBreadcrumb from "../../components/cards/CardBreadcrumb";
import FormPessoasInteressadas from "../../components/formularios/FormPessoasInteressadas";

const VagasPessoasInteressadas = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 0 }}
    >
      <CardBreadcrumb
        links={[
          { href: "/listar-parceiros-pendentes", text: "Listar Parceiros Pendentes" },
          { href: "/listar-parceiros-pendentes/visualizar-parceiro-pendente", text: "Vizualizar Parceiro Pendente" },
        ]}
        currentPage="Listar pessoas interessadas"
      />

      <Typography
        variant="h4"
        mt={3}
        mb={3}
        sx={{ fontFamily: "Rawline Bold" }}
        style={{ transition: "1s" }}
      >
        Listar pessoas interessadas
      </Typography>

      <FormPessoasInteressadas />
    </Container>
  );
};

export default VagasPessoasInteressadas;
