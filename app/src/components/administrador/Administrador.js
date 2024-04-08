import React from "react";

import InfoIcon from "@mui/icons-material/Info";
import { Box, Container, Link, Typography } from "@mui/material";

import imagemPrimaria from "../../assets/images/Ilustra-Admin.png";
import CardBreadcrumb from "../cards/CardBreadcrumb";
import CardPrimario from "../cards/CardPrimario";
import CardServicos from "../cards/CardServicos";

const Administrador = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 0 }}
    >
      <CardBreadcrumb
        homeLink="/"
        homeText="Página Inicial"
        currentPage="Administrador"
      />

      <Typography
        variant="h4"
        mt={2}
        textTransform="uppercase"
      >
        Seja bem-vindo ao
      </Typography>

      <CardPrimario
        title="Administrativo"
        imageUrl={imagemPrimaria}
      />

      <Typography
        variant="h4"
        mt={3}
        mb={1}
        sx={{ color: "primary.main" }}
      >
        Visão Geral
      </Typography>

      <Typography
        variant="h4"
        mt={3}
        mb={1}
        sx={{ color: "primary.main" }}
      >
        Serviços ofertados
      </Typography>

      <CardServicos />

      <Box
        mt={5}
        sx={{ display: "flex", alignItems: "center", borderRadius: "4px", background: "#E6E6E6", padding: "16px" }}
      >
        <InfoIcon />
        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          No caso de dúvidas e/ou problemas, acesse
          <Link
            component="a"
            href="/faq"
            color="primary.main"
            underline="always"
            sx={{ ml: 1 }}
          >
            Perguntas Frequentes
          </Link>
          . Caso o problema persista, envie e-mail para redeprogredir.senisp@cidadania.gov.br
        </Typography>
      </Box>
    </Container>
  );
};

export default Administrador;
