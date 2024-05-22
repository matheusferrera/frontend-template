import React from "react";

import WarningIcon from "@mui/icons-material/Warning";
import LoadingButton from "@mui/lab/LoadingButton";
import { Container, Typography } from "@mui/material";
import { Card, Grid } from "@mui/material";

import CardBreadcrumb from "../../components/cards/CardBreadcrumb";

const PageCurriculo = () => {
  const linksBreadCrumb = [
    { href: "/", text: "Cidadão" },
    { href: "/vagas-de-trabalho", text: "Vagas de trabalho" },
  ];

  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 0 }}
    >
      <CardBreadcrumb
        homeLink="/listar_parceiros_pendentes"
        currentPage="Currículo"
        links={linksBreadCrumb}
      />

      <Typography
        variant="h5"
        mt={2}
        sx={{ fontFamily: "Rawline Bold", marginBottom: "40px" }}
      >
        Meu currículo
      </Typography>

      <Card
        color="#ffffff"
        sx={{
          borderRadius: "8px",
          padding: "16px",
        }}
        style={{ transition: "1s" }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: "20",
            mb: "16px",
            fontFamily: "Rawline Regular",
          }}
        >
          Meu perfil
        </Typography>
        <Grid
          spacing={1}
          container
          sx={{ justifyContent: "center", flexDirection: "column", alignItems: "center" }}
        >
          <WarningIcon
            color="disabled"
            style={{ fontSize: 32 }}
          ></WarningIcon>
          <Typography
            variant="h6"
            sx={{
              fontSize: "10px",
              mt: "8px",
              mb: "16px",
              fontFamily: "Rawline Regular",
              color: "grey",
            }}
          >
            Não foi localizado currículo cadastrado
          </Typography>
        </Grid>

        <Grid
          container
          spacing={1}
          sm={12}
          sx={{ mt: "5px", justifyContent: "flex-end" }}
        >
          <Grid
            item
            md={12}
            sm={12}
            xs={12}
          >
            <LoadingButton
              size="large"
              type="submit"
              variant="contained"
              onClick={async () => {}}
              fullWidth
              sx={{ borderRadius: "24px", fontFamily: "Rawline Bold" }}
            >
              Cadastre seu currículo no SISPRP
            </LoadingButton>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default PageCurriculo;
