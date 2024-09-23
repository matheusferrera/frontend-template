import React, { useState } from 'react';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Box, Button, Card, CardContent, CircularProgress, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import CustomForm from '../form/CustomForm';

const LoginForm = ({ onSubmit }) => {

  const [isLoading, setIsLoading] = useState(false);


  const formFields = [
    {
      name: 'email',
      label: 'Email',
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
      label: 'Senha',
      type: 'password',
      validation: {
        required: 'Senha é obrigatória',
        minLength: { value: 6, message: 'Senha necessita ter no mínimo 6 caracteres' },
      },
    },
  ];

  const handleFormSubmit = async (data) => {
    setIsLoading(true);
    try {
      await onSubmit(data);
    } finally {
      setIsLoading(false);
    }
  };

  const customButtons = (
    <Box display="flex" justifyContent="center" mt={2}>
      <Button
        type="submit"
        variant="contained"
        style={{ width: "50%" }}
        color="primary"
        disabled={isLoading}
      >
        {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Entrar'}
      </Button>
    </Box>
  );

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f4f6f8"
    >
      <Card sx={{ maxWidth: 400, p: 3, boxShadow: 3 }}>
        <CardContent>
          <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Faça seu login no Carteira na mão
            </Typography>
          </Box>
          <CustomForm fields={formFields} onSubmit={handleFormSubmit} buttons={customButtons} />
        </CardContent>
      </Card>
    </Box>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


export default LoginForm;
