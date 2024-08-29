import React from "react";

import { Card, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

import { useAuth } from "../../contexts/AuthContext";
import LoginForm from "./LoginForm";

const CardButton = ({ icon, title, onClick, path }) => {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      href={path}
      sx={{
        width: 300,
        height: 200,
        flexDirection: "column",
        justifyContent: "center",
        bgcolor: "background.paper",
        borderRadius: 2,
      }}
    >
      {icon}
      <Typography
        variant="h4"
        sx={{
          color: "common.black",
        }}
      >
        {title}
      </Typography>
    </Button>
  );
};

CardButton.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  onClick: PropTypes.func,
  path: PropTypes.string,
};

const HubLogin = () => {

  const { login } = useAuth();

  const handleSubmit = (username, password) => {
    login(username, password, "admin") // ajuste o user_type conforme necessário
      .then(() => {
        console.log("Login successful");
        // Redirecionar ou realizar outras ações após o login bem-sucedido
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };


  const recaptchaRef = React.createRef();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ height: 1 }}
      >

        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 625,
            height: 1,
            maxHeight: 700,
          }}
        >
          <Typography variant="h3">Bem-vindo(a)</Typography>

          <Typography
            variant="body2"
            sx={{ mt: 2, mb: 3, color: "text.grey" }}
          >
            Acesse aqui sua conta Progredir
          </Typography>

          <LoginForm
            loading={false}
            handleSubmit={handleSubmit}
            recaptchaRef={recaptchaRef}
          />


        </Card>
      </Stack>
    </Box>
  );
};

export default HubLogin;
