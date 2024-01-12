import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { alpha, useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Field } from "formik";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import { useAuth } from "../contexts/AuthContext";
import { bgGradient } from "../theme/css";
import AvisoDePrivacidadeModal from "./AvisoDePrivacidadeModal";
import Iconify from "./iconify";
import TermoDeUsoModal from "./TermoDeUsoModal";
// import Logo from "./logo";

const Login = () => {
  const { login } = useAuth();
  const theme = useTheme();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [termoDeUsoModal, setTermoDeUsoModal] = useState(false);
  const [avisoDePrivacidadeModal, setAvisoDePrivacidadeModal] = useState(false);

  const handleTermoDeUsoShow = () => setTermoDeUsoModal(true);
  const handleTermoDeUsoClose = () => setTermoDeUsoModal(false);

  const handleAvisoDePrivacidadeShow = () => setAvisoDePrivacidadeModal(true);
  const handleAvisoDePrivacidadeClose = () => setAvisoDePrivacidadeModal(false);

  const initialValues = {
    email: "",
    password: "",
    reCaptcha: false,
    toggle: false,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email é inválido").required("Campo de email é obrigatório"),
    password: Yup.string().min(6, "Senha deve ter no mínimo 6 caracteres").required("Senha é obrigatória"),
    reCaptcha: Yup.bool().oneOf([true], "Você precisa provar que não é um robô"),
    toggle: Yup.bool().oneOf([true], "Você precisa aceitar os termos e condições"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setLoading(true);
    login(values.email, values.password)
      .then(() => {
        navigate("/profile");
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

  const renderForm = (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
        <Form>
          <Stack spacing={3}>
            <TextField
              id="email"
              name="email"
              label="Email"
              placeholder="Email"
              value={values.email}
              type="text"
              error={errors.email && touched.email}
              helperText={errors.email && touched.email && errors.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <TextField
              id="password"
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              value={values.password}
              error={errors.password && touched.password}
              helperText={errors.password && touched.password && errors.password}
              onChange={handleChange}
              onBlur={handleBlur}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      <Iconify icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            spacing={3}
          >
            <Link
              variant="subtitle2"
              underline="hover"
              href="#"
            >
              Esqueceu a senha?
            </Link>
          </Stack>

          <Card sx={{ mb: 1 }}>
            <CardContent>
              <FormControlLabel
                control={
                  <Checkbox
                    id="reCaptcha"
                    name="reCaptcha"
                    checked={values.reCaptcha}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    color="primary"
                  />
                }
                label="Não sou um robô"
              />
              {touched.reCaptcha && errors.reCaptcha && <div style={{ color: "#FF5630" }}>{errors.reCaptcha}</div>}
            </CardContent>
          </Card>

          <div className="col-sm-12">
            <label className="d-flex align-items-left">
              <Field
                type="checkbox"
                id="toggle"
                name="toggle"
                checked={values.toggle}
                onChange={handleChange}
                onBlur={handleBlur}
                className="me-2"
                color="primary"
              />
              <div className="d-flex exemplo">
                &nbsp;<span>Estou ciente e concordo com o</span>&nbsp;
                <a
                  className=""
                  href="#"
                  onClick={handleTermoDeUsoShow}
                >
                  Termo de Uso
                </a>
                &nbsp;<span>e</span>&nbsp;
                <a
                  className=""
                  href="#"
                  onClick={handleAvisoDePrivacidadeShow}
                >
                  Aviso de Privacidade
                </a>
              </div>
            </label>
          </div>
          {touched.toggle && errors.toggle && <div style={{ color: "#FF5630" }}>{errors.toggle}</div>}

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            loading={loading || isSubmitting}
            sx={{ mt: 2 }}
          >
            {loading && <span className="spinner-border spinner-border-sm"></span>}
            Login
          </LoadingButton>
        </Form>
      )}
    </Formik>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
        }),
        height: 1,
      }}
    >
      {/* <Logo
        sx={{
          position: "fixed",
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      /> */}

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
            sx={{ mt: 2, mb: 5 }}
            color="text.secondary"
          >
            Acesse aqui sua conta Progredir
          </Typography>

          {renderForm}

          {/* Modals */}
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

export default Login;
