import React, { useEffect, useState } from "react";

import InfoIcon from "@mui/icons-material/Info";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

import imagemPrimaria from "../../assets/images/Ilustra-Admin.png";
import imagemServicos1 from "../../assets/images/servico1.png";
import imagemServicos2 from "../../assets/images/servico2.png";
import CardBreadcrumb from "../../components/cards/CardBreadcrumb";
import CardPrimario from "../../components/cards/CardPrimario";
import CardServicos from "../../components/cards/CardServicos";
import CardVisaoGeral from "../../components/cards/CardVisaoGeral";
import adminService from "../../services/admin.service";

const PageHomeAdm = () => {
  const [cardVisaoGeralData, setCardVisaoGeralData] = useState(null);

  const theme = useTheme();

  const fetchCardVisaoGeralData = async () => {
    adminService
      .getAdminData(12)
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
      />

      <Typography
        variant="h5"
        mt={2}
        sx={{ fontFamily: "Rawline Bold", marginBottom: "40px" }}
        style={{ transition: "1s" }}
      >
        Seja bem-vindo(a)
      </Typography>

      <CardPrimario
        title="Administrativo"
        imageUrl={imagemPrimaria}
      />

      <Typography
        variant="h4"
        mt={3}
        mb={1}
        sx={{ fontFamily: "Rawline Bold", marginTop: "40px" }}
        style={{ transition: "1s" }}
      >
        Visão Geral
      </Typography>

      <Grid
        container
        gap={2}
      >
        {cardVisaoGeralData?.visao_geral_list &&
          Object.entries(cardVisaoGeralData.visao_geral_list).map(([title, value]) => (
            <Grid key={title}>
              <CardVisaoGeral
                key={title}
                title={title}
                number={value}
              ></CardVisaoGeral>
            </Grid>
          ))}
        {!cardVisaoGeralData && (
          <>
            <CardVisaoGeral></CardVisaoGeral>
            <CardVisaoGeral></CardVisaoGeral>
            <CardVisaoGeral></CardVisaoGeral>
          </>
        )}
      </Grid>

      <Typography
        variant="h4"
        mt={3}
        mb={1}
        sx={{ fontFamily: "Rawline Bold", marginTop: "40px" }}
        style={{ transition: "1s" }}
      >
        Serviços ofertados
      </Typography>

      <CardServicos />

      <Typography
        variant="h4"
        mt={3}
        mb={1}
        sx={{ fontFamily: "Rawline Bold", marginTop: "40px" }}
        style={{ transition: "1s" }}
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
            title="1606"
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
            title="33"
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
        style={{ transition: "1s" }}
        sx={{
          display: "flex",
          alignItems: "center",
          background: theme.palette.background.paper,
          color: theme.palette.text.primary,
          border: theme.palette.border.layout,
          padding: "16px",
          paddingRight: "8px",
        }}
      >
        <InfoIcon />
        <Typography
          variant="body1"
          sx={{ ml: 1, fontFamily: "Rawline Regular" }}
          style={{ transition: "1s" }}
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

export default PageHomeAdm;
