/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { Container, Typography } from "@mui/material";

import CardBreadcrumb from "../../components/cards/CardBreadcrumb";
import FormListarParceirosReprovados from "../../components/formularios/FormListarParceirosReprovados";

const PageParceirosReprovados = () => {
  const [servicosModal, setServicosModal] = useState(false);

  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 0 }}
    >
      <CardBreadcrumb
        homeLink="/home"
        homeText="Admin"
        currentPage="Listar Reprovados"
      />

      <Typography
        variant="h4"
        mt={3}
        mb={3}
        sx={{ fontFamily: "Rawline Bold" }}
        style={{ transition: "1s" }}
      >
        Listar Reprovados
      </Typography>

      <FormListarParceirosReprovados
        servicosModal={servicosModal}
        setServicosModal={setServicosModal}
      />
    </Container>
  );
};

export default PageParceirosReprovados;
