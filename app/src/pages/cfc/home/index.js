/* eslint-disable no-unused-vars */
import React from "react";

import { Card, CardActions, CardContent, Grid, Typography, useTheme } from "@mui/material";
import { PieChart } from '@mui/x-charts/PieChart';

import PageLayout from "../../../components/page/PageLayout";


const PageHomeCfc = () => {
  return (
    <PageLayout title="CFC home page">
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <CardTotalClicks></CardTotalClicks>
        </Grid>
        <Grid item xs={12} md={3}>
          <CardValue></CardValue>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardTotalMessages></CardTotalMessages>
        </Grid>
      </Grid>

    </PageLayout>
  );
};


const CardTotalClicks = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          Total de cliques
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.disabled">
          Quantidade de pessoas que visualizaram sua CFC
        </Typography>
        <Typography variant="h1" component="div">
          26
        </Typography>
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
  )
}

const CardValue = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          Valor disponivel
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.disabled">
          Quantidade de créditos disponiveis para ser consumido pelos clientes
        </Typography>
        <Typography variant="h1" component="div">
          R$ 15
        </Typography>
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
  )
}

const CardTotalMessages = () => {
  return (
    <Card variant="outlined" style={{ height: "auto" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Saldo
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.disabled">
          Veja o valor investido e o valor consumido
        </Typography>
      </CardContent>
      <CardActions>
        <BasicPie />
      </CardActions>
    </Card>
  )
}

const BasicPie = () => {
  const theme = useTheme();

  // Valores absolutos
  const investido = 30;
  const utilizado = 15;

  // Total para calcular as proporções
  const dif = investido - utilizado;

  return (

    <PieChart
      colors={[theme.palette.primary.main, theme.palette.primary.light, theme.palette.primary.lighter]}
      series={[
        {
          data: [
            {
              id: 0,
              value: dif,
              label: `Investido $${investido} `,
              color: theme.palette.primary.main
            },
            {
              id: 2,
              value: utilizado, // Proporção do utilizado
              label: `Utilizado $${utilizado}`,
              color: theme.palette.primary.dark
            },
          ],
        },
      ]}
      width={400}
      height={150}
      margin={30}
      legend={{ padding: 10, position: { vertical: "center", horizontal: "right" } }}

    />
  );
};


export default PageHomeCfc;