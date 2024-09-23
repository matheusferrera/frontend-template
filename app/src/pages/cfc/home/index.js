/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import { Card, CardActions, CardContent, CircularProgress, Grid, Typography, useTheme } from "@mui/material";
import { PieChart } from '@mui/x-charts/PieChart';
import PropTypes from 'prop-types';

import PageLayout from "../../../components/page/PageLayout";
import { useAuth } from "../../../contexts/AuthContext";
import asaasService from '../../../services/asaas.service';


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
  const { user } = useAuth();
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
          {user.dadosuser.clicked}
        </Typography>
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
  )
}

const CardValue = () => {
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const data = await asaasService.getBalance(user.dadosuser.idasaas);
        console.log('USER -', user);
        console.log('RESPONSE BALANCE -', data, " - ", user.dadosuser.idasaas);
        setBalance(data.value);
      } catch (error) {
        console.error('Erro ao buscar o saldo:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBalance();
  }, []);

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div">
          Valor disponível
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.disabled">
          Quantidade de créditos disponíveis para ser consumido pelos clientes
        </Typography>
        <Typography variant="h1" component="div">
          {loading ? (
            <CircularProgress size={40} thickness={4} />
          ) : (
            `R$ ${balance}`
          )}
        </Typography>
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
  )
}

const CardTotalMessages = () => {
  const { user } = useAuth();
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const data = await asaasService.getBalance(user.dadosuser.idasaas);
        setBalance(data.value);
      } catch (error) {
        console.error('Erro ao buscar o saldo:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBalance();
  }, [user.dadosuser.idasaas]);

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
        {loading ? (
          <CircularProgress size={40} thickness={4} />
        ) : (
          <BasicPie investido={balance} utilizado={user.dadosuser.clicked} />
        )}
      </CardActions>
    </Card>
  )
}

const BasicPie = ({ investido, utilizado }) => {
  const theme = useTheme();

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
              label: `Investido R$${investido.toFixed(2)}`,
              color: theme.palette.primary.main
            },
            {
              id: 2,
              value: utilizado,
              label: `Utilizado R$${utilizado}`,
              color: theme.palette.primary.dark
            },
          ],
        },
      ]}
      width={400}
      height={200}
      margin={{ top: 50, right: 50 }}
      legend={{
        direction: 'row',
        position: { vertical: 'top', horizontal: 'center' },
      }}
    />
  );
};

BasicPie.propTypes = {
  investido: PropTypes.number.isRequired,
  utilizado: PropTypes.number.isRequired,
};


export default PageHomeCfc;