/* eslint-disable no-unused-vars */
import React from "react";

import { Card, CardActions, CardContent, Grid, Typography, useTheme } from "@mui/material";
import { PieChart } from '@mui/x-charts/PieChart';

import PageLayout from "../../../components/page/PageLayout";


const PageHomeAdm = () => {
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "red" }}>
      <a>Teste</a>
    </div>
    // <PageLayout title="Seja bem-vindo(a)">
    //   <Grid item xs={4}>
    //     <p>Teste</p>
    //     <CardTotalUsers></CardTotalUsers>
    //   </Grid>
    //   <Grid item xs={8}>
    //     <CardTotalMessages></CardTotalMessages>
    //   </Grid>
    // </PageLayout>
  );
};


const CardTotalUsers = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          Numero total de usuários
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.disabled">
          Divididos entre alunos, pais e professores
        </Typography>
      </CardContent>
      <CardActions>
        <BasicPie />
      </CardActions>
    </Card>
  )
}

const CardTotalMessages = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          Mensagens enviadas
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.disabled">
          Numero total de mensagens enviadas no dia de hoje
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
  return (
    <PieChart
      colors={[theme.palette.primary.main, theme.palette.primary.light, theme.palette.primary.lighter]}
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Professores', color: theme.palette.primary.main },
            { id: 1, value: 15, label: 'Responsáveis', color: theme.palette.primary.light },
            { id: 2, value: 20, label: 'Alunos', color: theme.palette.primary.dark },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}


export default PageHomeAdm;