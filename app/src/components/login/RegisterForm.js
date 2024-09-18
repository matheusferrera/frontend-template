import React, { useState } from 'react';

import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import CustomForm from '../form/CustomForm';
import Switch from '../ohters/Switch';

const RegisterForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({});

  // Função para formatar o CPF
  const formatCPF = (value) => {
    return value
      .replace(/\D/g, '') // Remove tudo que não é dígito
      .replace(/(\d{3})(\d)/, '$1.$2') // Coloca um ponto após os 3 primeiros dígitos
      .replace(/(\d{3})(\d)/, '$1.$2') // Coloca outro ponto após os próximos 3 dígitos
      .replace(/(\d{3})(\d{1,2})/, '$1-$2') // Coloca um hífen antes dos últimos 2 dígitos
      .replace(/(-\d{2})\d+?$/, '$1'); // Limita em 2 dígitos após o hífen
  };

  // Função para formatar o CEP
  const formatCEP = (value) => {
    return value
      .replace(/\D/g, '') // Remove tudo que não é dígito
      .replace(/(\d{5})(\d)/, '$1-$2') // Coloca um hífen após os 5 primeiros dígitos
      .replace(/(-\d{3})\d+?$/, '$1'); // Limita em 3 dígitos após o hífen
  };

  // Função para formatar o Telefone
  const formatTelefone = (value) => {
    return value
      .replace(/\D/g, '') // Remove tudo que não é dígito
      .replace(/(\d{2})(\d)/, '($1) $2') // Coloca parênteses nos 2 primeiros dígitos
      .replace(/(\d{5})(\d)/, '$1-$2') // Coloca um hífen após os 5 primeiros dígitos
      .replace(/(-\d{4})\d+?$/, '$1'); // Limita em 4 dígitos após o hífen
  };

  const handleInputChange = (field, value) => {
    let formattedValue = value;
    switch (field) {
      case 'cpf':
        formattedValue = formatCPF(value);
        break;
      case 'cep':
        formattedValue = formatCEP(value);
        break;
      case 'telefone':
        formattedValue = formatTelefone(value);
        break;
      default:
        break;
    }
    setFormData((prevData) => ({ ...prevData, [field]: formattedValue }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    handleInputChange(name, value);
  };

  const formFields = [
    {
      name: 'email',
      label: 'Email *',
      type: 'email',
      validation: {
        required: 'Email obrigatório',
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          message: 'Insira um email válido',
        },
      },
    },
    {
      name: 'password',
      label: 'Senha *',
      type: 'password',
      validation: {
        required: 'Senha é obrigatória',
        minLength: { value: 6, message: 'Senha necessita ter no mínimo 6 caracteres' },
      },
    },
    {
      name: 'repeatPassword',
      label: 'Repita a senha *',
      type: 'password',
      validation: {
        required: 'Senha é obrigatória',
        minLength: { value: 6, message: 'Senha necessita ter no mínimo 6 caracteres' },
      },
    },
    {
      name: 'cpf',
      label: 'CPF *',
      type: 'text',
      validation: {
        required: 'CPF é obrigatório',
        pattern: {
          value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
          message: 'Insira um CPF válido (000.000.000-00)',
        },
      },
    },
    {
      name: 'cep',
      label: 'CEP',
      type: 'text',
      validation: {
        pattern: {
          value: /^\d{5}-\d{3}$/,
          message: 'Insira um CEP válido (00000-000)',
        },
      },
    },
    {
      name: 'telefone',
      label: 'Telefone',
      type: 'text',
      validation: {
        pattern: {
          value: /^\(\d{2}\) \d{5}-\d{4}$/,
          message: 'Insira um telefone válido (00) 90000-0000',
        },
      },
    },
  ];

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  const customButtons = (
    <Box display="flex" justifyContent="center" mt={2}>
      <Button type="submit" variant="contained" style={{ width: '50%' }} color="primary">
        Cadastrar
      </Button>
    </Box>
  );

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#f4f6f8">
      <Card sx={{ width: '100%', p: 3, boxShadow: 3 }}>
        <CardContent>
          <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
            <Typography component="h1" variant="h5">
              Cadastre uma nova conta
            </Typography>
          </Box>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Switch labelLeft={"Sou um usuário"} labelRight={"Sou uma CFC"}></Switch>
          </div>
          <CustomForm
            fields={formFields}
            onSubmit={handleFormSubmit}
            buttons={customButtons}
            formData={formData}
            onChange={handleChange}
          />

        </CardContent>
      </Card>
    </Box>
  );
};

export default RegisterForm;


RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

