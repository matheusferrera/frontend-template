import React from "react";

import { Grid } from "@mui/material";

import LoginForm from "../components/login/LoginForm";
import { useAuth } from '../contexts/AuthContext';

const PageLogin = () => {


    const handleLoginSubmit = (data) => {
        console.log('[Dados recebidos na page de login] => ', data);
        login(data.email, data.password)
    };

    const { login } = useAuth();

    return (

        <Grid container
            sx={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f5f5f5",
                minHeight: "100%"
            }}>
            <Grid item xs={10} sm={6} md={4} >
                <LoginForm onSubmit={handleLoginSubmit} />
            </Grid>
        </Grid>
    );
};

export default PageLogin;
