import React from "react";

import InfoIcon from "@mui/icons-material/Info";
import { Box, Container, Grid, Link, Typography } from "@mui/material";

import imagemMoco from "../assets/images/Ilustra-Cursos.png";
import imagemMoca from "../assets/images/Ilustra-Emprego.png";
import imagemPrimaria from "../assets/images/Ilustra-Parceiro.png";
import CardBreadcrumb from "./cards/CardBreadcrumb";
import CardPrimario from "./cards/CardPrimario";
import CardSecundario from "./cards/CardSecundario";
import CardServicos from "./cards/CardServicos";

const Parceiro = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 0 }}
    >
      <CardBreadcrumb
        homeLink="/"
        homeText="Página Inicial"
        currentPage="Rede Parceiro"
      />

      <Typography
        variant="h4"
        mt={2}
        textTransform="uppercase"
      >
        Seja bem-vindo a
      </Typography>

      <CardPrimario
        title="Rede de Parceiros da Inclusão Socioeconomica"
        content="A situação do seu cadastro é: [Situação do Cadastro] desde 99/99/9999"
        imageUrl={imagemPrimaria}
      />

      <Typography
        variant="h4"
        mt={3}
        mb={1}
        sx={{ color: "primary.main" }}
      >
        Serviços ofertados
      </Typography>

      <CardServicos />

      <Typography
        variant="h4"
        mt={3}
        mb={1}
        sx={{ color: "primary.main" }}
      >
        Serviços disponíveis
      </Typography>

      <Grid
        container
        spacing={3}
        mt={0}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ paddingTop: "16px !important" }}
        >
          <CardSecundario
            title="1606"
            subtitle="Vagas de Emprego"
            description="Disponíveis em diversas áreas"
            backgroundColor="primary.main"
            imageUrl={imagemMoca}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ paddingTop: "16px !important" }}
        >
          <CardSecundario
            title="33"
            subtitle="Vagas de Cursos"
            description="Disponíveis em diversas áreas"
            backgroundColor="#1351B4"
            imageUrl={imagemMoco}
          />
        </Grid>
      </Grid>

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
            href="#"
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

export default Parceiro;
