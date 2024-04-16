import React, { useEffect, useState } from "react";

import InfoIcon from "@mui/icons-material/Info";
import { Box, Container, Grid, Link, Typography } from "@mui/material";

import imageCidadaoHome from "../../assets/images/cidadaoHome.png";
import imagemServicos1 from "../../assets/images/servico1.png";
import imagemServicos2 from "../../assets/images/servico2.png";
import CardBreadcrumb from "../../components/cards/CardBreadcrumb";
import CardHome from "../../components/cards/CardHome";
import CardPrimario from "../../components/cards/CardPrimario";
import CardServicosParceiros from "../../components/cards/CardServicosParceiros";
import cidadaoService from "../../services/cidadao.service";

const PageHomeCidadao = () => {
  const [cardVisaoGeralData, setCardVisaoGeralData] = useState(null);

  const fetchCardVisaoGeralData = async () => {
    cidadaoService
      .getCidadaoData(1)
      .then(data => {
        setCardVisaoGeralData(data);
      })
      .catch(error => {
        console.error("Erro ao obter dados da visão geral:", error);
      });
  };

  useEffect(() => {
    fetchCardVisaoGeralData();
  }, []);

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
        variant="h5"
        mt={2}
        sx={{ fontFamily: "Rawline Bold", marginBottom: "40px" }}
      >
        Seja bem-vindo(a)
      </Typography>

      <CardHome
        title="Programação redução da Pobreza"
        content={cardVisaoGeralData?.situacao || ""}
        imageUrl={imageCidadaoHome || ""}
      />

      <Typography
        variant="h4"
        mt={3}
        mb={1}
        sx={{ fontFamily: "Rawline Bold", marginTop: "40px" }}
      >
        Serviços ofertados
      </Typography>

      <CardServicosParceiros />

      <Typography
        variant="h4"
        mt={3}
        mb={1}
        sx={{ fontFamily: "Rawline Bold", marginTop: "40px" }}
      >
        Serviços disponiveis
      </Typography>

      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          md={6}
          xs={12}
        >
          <CardPrimario
            title={cardVisaoGeralData?.n_emprego.toString() || ""}
            content="Vagas de emprego"
            subContent="Disponiveis em diversas áreas"
            imageUrl={imagemServicos1}
            imageWidth={"150px"}
            imageHeight={"150px"}
          />
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
        >
          <CardPrimario
            title={cardVisaoGeralData?.n_cursos.toString() || ""}
            content="Vagas de curso"
            subContent="Disponiveis em diversas áreas"
            imageUrl={imagemServicos2}
            imageWidth={"150px"}
            imageHeight={"150px"}
          />
        </Grid>
      </Grid>

      <Box
        mt={5}
        sx={{
          display: "flex",
          alignItems: "center",
          background: "white",
          border: "1px solid #9e9e9e",
          padding: "16px",
          paddingRight: "8px",
        }}
      >
        <InfoIcon />
        <Typography
          variant="body1"
          sx={{ ml: 1, fontFamily: "Rawline Regular" }}
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

export default PageHomeCidadao;
