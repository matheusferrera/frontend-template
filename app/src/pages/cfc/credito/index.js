/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Cards from 'react-credit-cards-2';

import { Box, Button, Card, CardActions, CardContent, CircularProgress, Grid, TextField, Typography } from "@mui/material";

import CustomForm from "../../../components/form/CustomForm";
import PageLayout from "../../../components/page/PageLayout";
import { useAuth } from "../../../contexts/AuthContext";
import asaasService from "../../../services/asaas.service";

import 'react-credit-cards-2/dist/es/styles-compiled.css';

const PageCreditoCfc = () => {
  return (
    <PageLayout title="Créditos">
      <Grid container spacing={2}>
        <CreditoForm />
      </Grid>
    </PageLayout>
  );
};

export default PageCreditoCfc;

const CreditoForm = () => {
  const [tipoRecarga, setTipoRecarga] = useState('');
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [pixInfo, setPixInfo] = useState(null);
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    focus: '',
  });

  const { user } = useAuth();

  const formFields = [
    {
      name: 'value',
      label: 'Valor de recarga (R$)',
      type: 'number',
      md: 6, lg: 6, xs: 6, sm: 6,
      validation: {
        required: 'Valor é obrigatório',
      },
    },
    {
      name: 'tipoRecarga',
      label: 'Tipo de Recarga',
      select: true,
      options: [
        { value: 'credito', label: 'Crédito' },
        { value: 'debito', label: 'Débito' },
        { value: 'PIX', label: 'PIX' },
      ],
      md: 6, lg: 6, xs: 6, sm: 6,
      validation: {
        required: 'Selecione um tipo de recarga',
      },
    },
  ];

  const handleFormSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await asaasService.createCharge({
        customer: user.dadosuser.idasaas,
        value: data.value,
        billingType: data.tipoRecarga
      });
      console.log('[Dados atualizados do usuário no form] =>', data);
      console.log('[Dados da resposta da API] =>', response);
      setTipoRecarga(data.tipoRecarga);
      if (data.tipoRecarga === 'PIX') {
        setPixInfo({
          qrCode: response.encodedImage,
          valor: data.value,
          codigoPix: response.payload
        });
      }
    } catch (error) {
      console.error('Erro ao criar cobrança:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setCardData(prev => ({ ...prev, [name]: value }));
  };

  const handleCardInputFocus = (e) => {
    setCardData(prev => ({ ...prev, focus: e.target.name }));
  };

  const customButtons = (
    <Box display="flex" justifyContent="flex-end" mt={2}>
      <Button
        type="submit"
        variant="contained"
        sx={{ width: { xs: "100%", md: "50%" } }}
        color="primary"
        disabled={isLoading}
      >
        {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Próximo'}
      </Button>
    </Box>
  );

  return (
    <>
      <Grid item xs={12} md={5}>
        <Card variant="outlined" >
          <CardContent>
            <Typography variant="h5" component="div">
              Recarregue seus créditos
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.disabled">
              É através dos créditos que sua CFC será exibida para o usuário
            </Typography>
          </CardContent>
          <CardActions style={{ width: "100%" }}>
            <CustomForm fields={formFields} onSubmit={handleFormSubmit} buttons={customButtons} />
          </CardActions>
        </Card>
      </Grid>

      {tipoRecarga === 'credito' || tipoRecarga === 'debito' ? (
        <Grid item xs={12} md={7}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                Dados do Cartão
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Cards
                  number={cardData.number}
                  name={cardData.name}
                  expiry={cardData.expiry}
                  cvc={cardData.cvc}
                  focused={cardData.focus}
                />
              </Box>
              <TextField
                label="Número do Cartão"
                name="number"
                value={cardData.number}
                onChange={handleCardInputChange}
                onFocus={handleCardInputFocus}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Nome no Cartão"
                name="name"
                value={cardData.name}
                onChange={handleCardInputChange}
                onFocus={handleCardInputFocus}
                fullWidth
                margin="normal"
              />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="Data de Validade"
                    name="expiry"
                    value={cardData.expiry}
                    onChange={handleCardInputChange}
                    onFocus={handleCardInputFocus}
                    fullWidth
                    margin="normal"
                    placeholder="MM/AA"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="CVV"
                    name="cvc"
                    value={cardData.cvc}
                    onChange={handleCardInputChange}
                    onFocus={handleCardInputFocus}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
              </Grid>
            </CardContent>
            <Box display="flex" justifyContent="flex-end" mt={2}>
              <Button
                type="submit"
                variant="contained"
                sx={{ width: { xs: "100%", md: "50%" }, mb: 2, ml: 2 }}
                color="primary"
              >
                Realizar pagamento
              </Button>
            </Box>
          </Card>
        </Grid>
      ) : null}

      {tipoRecarga === 'PIX' && pixInfo && (
        <Grid item xs={12} md={7}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">
                Pagamento via PIX
              </Typography>
              <Typography variant="body1" component="div">
                Escaneie o QR Code ou use o código PIX abaixo para realizar o pagamento:
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                <img src={`data:image/png;base64,${pixInfo.qrCode}`} alt="QR Code PIX" />
              </Box>
              <Typography variant="body1" component="div">
                Código PIX:
              </Typography>
              <Typography variant="body2" component="div" sx={{ mt: 1, p: 2, border: '1px solid #ccc', borderRadius: '4px', wordBreak: 'break-all' }}>
                {pixInfo.codigoPix}
              </Typography>
              <Typography variant="body1" component="div" sx={{ mt: 2 }}>
                Valor a pagar:   <Typography variant="h6" component="div">
                  R$  {pixInfo.valor}
                </Typography>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      )}
    </>
  );
};
