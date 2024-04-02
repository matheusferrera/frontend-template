import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useAuth } from "../../contexts/AuthContext";
import ActivateForm from "./ActivateForm";

const Activate = () => {
  const { activate } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleSubmit = (values, { setSubmitting }) => {
    setLoading(true);

    activate(values.token)
      .then(response => {
        navigate("/parceiro_login");
        alert(response);
      })
      .catch(error => {
        const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        alert(resMessage);
      })
      .finally(() => {
        setLoading(false);
        setSubmitting(false);
      });
  };

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
            width: "100%",
            maxWidth: 800,
            height: "auto",
            maxHeight: 900,
          }}
        >
          <Typography variant="h3">Ative sua conta</Typography>

          <Typography
            variant="body2"
            sx={{ mt: 2, mb: 3, color: "text.grey" }}
          >
            Ative sua conta
          </Typography>

          <ActivateForm
            loading={loading}
            handleSubmit={handleSubmit}
          />

          <Button
            variant="outlined"
            sx={{ mt: 2 }}
            href="/parceiro_login"
          >
            Já ativei a minha conta
          </Button>
        </Card>
      </Stack>
    </Box>
  );
};

export default Activate;
