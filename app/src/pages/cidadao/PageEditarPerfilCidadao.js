import React from "react";

import { Container, Typography } from "@mui/material";

import CardBreadcrumb from "../../components/cards/CardBreadcrumb";
import FormEditarPerfilCidadao from "../../components/formularios/FormEditarPerfilCidadao";

const PageEditarPerfil = () => {
  const handleSubmit = async values => {
    alert(JSON.stringify(values));
  };

  const linksBreadCrumb = [{ href: "/", text: "Cidadão" }];

  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 0 }}
    >
      <CardBreadcrumb
        currentPage="Editar perfil"
        links={linksBreadCrumb}
      />

      <Typography
        variant="h5"
        mt={2}
        sx={{ fontFamily: "Rawline Bold", marginBottom: "40px" }}
      >
        Editar perfil
      </Typography>

      <FormEditarPerfilCidadao handleSubmit={handleSubmit}></FormEditarPerfilCidadao>
    </Container>
  );
};

export default PageEditarPerfil;
