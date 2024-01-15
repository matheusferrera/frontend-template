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
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import { useAuth } from "../contexts/AuthContext";
import AvisoDePrivacidadeModal from "./AvisoDePrivacidadeModal";
import Iconify from "./iconify";
import TermoDeUsoModal from "./TermoDeUsoModal";

const Register = () => {
  const { register } = useAuth();
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
    name: "",
    username: "",
    password: "",
    passwordConfirmation: "",
    reCaptcha: false,
    toggle: false,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Forneça um email válido").required("Email é obrigatório"),
    name: Yup.string().required("Nome é obrigatório"),
    username: Yup.string().required("Username é obrigatório"),
    password: Yup.string().min(6, "Senha deve ter no mínimo 6 caracteres").required("Senha é obrigatória"),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Senhas devem ser iguais")
      .required("Confirmação de senha é obrigatória"),
    reCaptcha: Yup.boolean().oneOf([true], "Você precisa validar o reCaptcha"),
    toggle: Yup.boolean().oneOf([true], "Você precisa concordar com o Termo de Uso e Aviso de Privacidade"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setLoading(true);
    register(values.email, values.name, values.username, values.password, values.passwordConfirmation)
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
              id="name"
              name="name"
              label="Nome"
              placeholder="Nome"
              value={values.name}
              type="text"
              error={errors.name && touched.name}
              helperText={errors.name && touched.name && errors.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <TextField
              id="username"
              name="username"
              label="Username"
              placeholder="Username"
              value={values.username}
              type="text"
              error={errors.username && touched.username}
              helperText={errors.username && touched.username && errors.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <TextField
              id="password"
              name="password"
              label="Senha"
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

            <TextField
              id="passwordConfirmation"
              name="passwordConfirmation"
              label="Confirmação de Senha"
              type={showPassword ? "text" : "password"}
              placeholder="Confirmação de Senha"
              value={values.passwordConfirmation}
              error={errors.passwordConfirmation && touched.passwordConfirmation}
              helperText={errors.passwordConfirmation && touched.passwordConfirmation && errors.passwordConfirmation}
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

          <Card sx={{ mt: 2, mb: 1, borderRadius: "4px", border: "1px solid #DCDCDC", background: "#F9F9F9" }}>
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

          <FormControlLabel
            sx={{ marginRight: "0px !important" }}
            control={
              <Checkbox
                id="toggle"
                name="toggle"
                checked={values.toggle}
                onChange={handleChange}
                onBlur={handleBlur}
                color="primary"
              />
            }
            label={
              <Typography variant="body1">
                Estou ciente e concordo com o
                <Link
                  component="a"
                  href="#"
                  onClick={handleTermoDeUsoShow}
                  color={theme.palette.primary.main}
                  underline="always"
                  sx={{ mx: 1 }}
                >
                  Termo de Uso
                </Link>
                e
                <Link
                  component="a"
                  href="#"
                  onClick={handleAvisoDePrivacidadeShow}
                  color={theme.palette.primary.main}
                  underline="always"
                  sx={{ mx: 1 }}
                >
                  Aviso de Privacidade
                </Link>
              </Typography>
            }
          />
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
            Registrar
          </LoadingButton>
        </Form>
      )}
    </Formik>
  );

  return (
    <Box
    // sx={{
    //   ...bgGradient({
    //     color: alpha(theme.palette.background.default, 0.9),
    //   }),
    //   height: 1,
    // }}
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

export default Register;
