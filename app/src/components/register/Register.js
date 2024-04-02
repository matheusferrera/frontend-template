import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useAuth } from "../../contexts/AuthContext";
import AvisoDePrivacidadeModal from "../modals/AvisoDePrivacidadeModal";
import TermoDeUsoModal from "../modals/TermoDeUsoModal";
import RegisterForm from "./RegisterForm";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const recaptchaRef = React.createRef();

  const [termoDeUsoModal, setTermoDeUsoModal] = useState(false);
  const [avisoDePrivacidadeModal, setAvisoDePrivacidadeModal] = useState(false);

  const handleTermoDeUsoShow = () => setTermoDeUsoModal(true);
  const handleTermoDeUsoClose = () => setTermoDeUsoModal(false);

  const handleAvisoDePrivacidadeShow = () => setAvisoDePrivacidadeModal(true);
  const handleAvisoDePrivacidadeClose = () => setAvisoDePrivacidadeModal(false);

  const handleSubmit = (values, { setSubmitting }) => {
    const token = recaptchaRef.current.getValue();

    setLoading(true);

    if (!token) {
      alert("Por favor, confirme que você não é um robô");
      setLoading(false);
      setSubmitting(false);
      return;
    }

    register(values.email, values.name, values.password, values.passwordConfirmation)
      .then(response => {
        navigate("/login");
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
            width: 1,
            maxWidth: 625,
            height: 1,
            maxHeight: 900,
          }}
        >
          <Typography variant="h3">Registrar-se</Typography>

          <Typography
            variant="body2"
            sx={{ mt: 2, mb: 3, color: "text.grey" }}
          >
            Crie o seu perfil Progredir
          </Typography>

          <RegisterForm
            loading={loading}
            handleSubmit={handleSubmit}
            recaptchaRef={recaptchaRef}
            handleAvisoDePrivacidadeShow={handleAvisoDePrivacidadeShow}
            handleTermoDeUsoShow={handleTermoDeUsoShow}
          />

          <Button
            variant="outlined"
            sx={{ mt: 2 }}
            href="/parceiro_login"
          >
            Já possuo conta
          </Button>

          <Button
            variant="outlined"
            sx={{ mt: 2, ml: 2 }}
            href="/activate"
          >
            Ativar conta
          </Button>

          <TermoDeUsoModal
            showModal={termoDeUsoModal}
            handleClose={handleTermoDeUsoClose}
          />
          <AvisoDePrivacidadeModal
            showModal={avisoDePrivacidadeModal}
            handleClose={handleAvisoDePrivacidadeClose}
          />
        </Card>
      </Stack>
    </Box>
  );
};

export default Register;
