import React, { useState } from "react";

import { Alert, Grid } from "@mui/material";

import LoginForm from "../components/login/LoginForm";
import { useAuth } from '../contexts/AuthContext';

const PageLogin = () => {
    const [errorMessage, setErrorMessage] = useState(null); // Estado para a mensagem de erro
    const { login } = useAuth();

    const handleLoginSubmit = async (data) => {
        const resp = await login(data.email, data.password);

        if (resp === 0) {
            setErrorMessage("Login falhou. Verifique suas credenciais e tente novamente.");
        } else {
            console.log("RESPOSTA DO LOGIN na page login - ", resp);
            setErrorMessage(null); // Limpa o erro se o login for bem-sucedido
        }
    };

    return (
        <Grid container
            sx={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f5f5f5",
                minHeight: "100%"
            }}>
            <Grid item xs={10} sm={6} md={4}>
                {errorMessage && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {errorMessage}
                    </Alert>
                )}
                <LoginForm onSubmit={handleLoginSubmit} />
            </Grid>
        </Grid>
    );
};

export default PageLogin;
