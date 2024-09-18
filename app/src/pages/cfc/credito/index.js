/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { Box, Button, Card, CardActions, CardContent, Grid, TextField, Typography } from "@mui/material";

import CustomForm from "../../../components/form/CustomForm";
import PageLayout from "../../../components/page/PageLayout";
import { useAuth } from "../../../contexts/AuthContext";
import asaasService from "../../../services/asaas.service";

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
        { value: 'pix', label: 'PIX' },
      ],
      md: 6, lg: 6, xs: 6, sm: 6,
      validation: {
        required: 'Selecione um tipo de recarga',
      },
    },
  ];

  const handleFormSubmit = (data) => {
    // setFormData(data);
    // setTipoRecarga(data.tipoRecarga);
    console.log('USer no page creditos -> ', user)
    if (!user.idasaas) {
      asaasService.registerCustomer(user)
      alert("SEM USER ASAAS")
    }
    console.log('[Dados atualizados do usuário no form] =>', data);
  };

  const customButtons = tipoRecarga == "" && (
    <Box display="flex" justifyContent="flex-end" mt={2}>
      <Button type="submit" variant="contained" sx={{ width: { xs: "100%", md: "50%" } }} color="primary">
        Próximo
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
              <Typography variant="h6" component="div">
                Dados do Cartão
              </Typography>
              <TextField label="Número do Cartão" fullWidth margin="normal" />
              <TextField label="Nome no Cartão" fullWidth margin="normal" />
              <TextField label="Data de Validade" fullWidth margin="normal" />
              <TextField label="CVV" fullWidth margin="normal" />
            </CardContent>
            <Box display="flex" justifyContent="flex-end" mt={2}>
              <Button type="submit" variant="contained" sx={{ width: { xs: "100%", md: "50%" } }} color="primary">
                Realizar pagamento
              </Button>
            </Box>
          </Card>
        </Grid>


      ) : tipoRecarga === 'pix' ? (
        <Grid item xs={12} md={7}>
          <Card xs={12} md={8}>
            <CardContent>
              <Typography variant="h6" component="div">
                Pagamento via PIX
              </Typography>
              <Typography variant="body1" component="div">
                Use o código PIX abaixo para realizar o pagamento:
              </Typography>
              <Typography variant="body2" component="div" sx={{ mt: 1, p: 2, border: '1px solid #ccc', borderRadius: '4px' }}>
                {formData.value ? `Código PIX: ${formData.value}` : 'Código PIX será gerado após a confirmação do valor.'}
              </Typography>
            </CardContent>
            <Box display="flex" justifyContent="flex-end" mt={2}>
              <Button type="submit" variant="contained" sx={{ width: { xs: "100%", md: "50%" } }} color="primary">
                Realizar pagamento
              </Button>
            </Box>
          </Card>
        </Grid>


      ) : null}
    </>


  );
};
