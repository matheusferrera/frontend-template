import React from 'react';

import { Avatar, Box, Button, Card, CardContent, Typography } from '@mui/material';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

import CustomForm from '../form/CustomForm';

const EditUserForm = ({ onSubmit, initialData }) => {
    const formFields = [
        {
            name: 'name',
            label: 'Nome',
            type: 'text',
            defaultValue: initialData.name,
            validation: {
                required: 'Nome é obrigatório',
            },
        },
        {
            name: 'email',
            label: 'Email',
            type: 'email',
            disabled: true,
            defaultValue: initialData.email,
            validation: {
                required: 'Email obrigatório',
                pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Insira um email válido',
                },
            },
        },
        {
            name: 'dob',
            label: 'Data de Nascimento',
            type: 'date',
            defaultValue: initialData.dob,
            validation: {
                required: 'Data de nascimento é obrigatória',
            },
            InputProps: {
                inputProps: {
                    max: format(new Date(), 'yyyy-MM-dd'), // Define a data máxima como o dia atual
                },
            },
        },
        {
            name: 'phone',
            label: 'Telefone',
            type: 'tel',
            defaultValue: initialData.phone,
            validation: {
                required: 'Telefone é obrigatório',
                pattern: {
                    value: /^\(\d{2}\) \d{4,5}-\d{4}$/,
                    message: 'Insira um telefone válido',
                },
            },
        }
    ];

    const handleFormSubmit = (data) => {
        console.log('[Dados atualizados do usuário no form] =>', data);
        onSubmit(data);
    };

    const customButtons = (
        <Box display="flex" justifyContent="center" mt={2}>
            <Button type="submit" variant="contained" sx={{ width: { xs: "100%", sm: "70%", md: "50%" } }} color="primary">
                Salvar Alterações
            </Button>
        </Box>
    );

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            p={2}
        >
            <Card sx={{ width: { xs: '100%', sm: '80%', md: '60%' }, p: 3, boxShadow: 3 }}>
                <CardContent>
                    <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
                        <Avatar
                            src={initialData.profilePicture || '/default-profile.png'} // URL da foto do usuário ou uma imagem padrão
                            alt="Foto do usuário"
                            sx={{ width: 100, height: 100, mb: 2 }}
                        />
                        <Typography component="h1" variant="h5">
                            Editar Dados do Usuário
                        </Typography>
                    </Box>
                    <CustomForm fields={formFields} onSubmit={handleFormSubmit} buttons={customButtons} />
                </CardContent>
            </Card>
        </Box>
    );
};

EditUserForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    initialData: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        dob: PropTypes.string,
        phone: PropTypes.string,
        address: PropTypes.string,
        profilePicture: PropTypes.string, // Adicionei a propriedade da foto do usuário
    }).isRequired,
};

export default EditUserForm;
