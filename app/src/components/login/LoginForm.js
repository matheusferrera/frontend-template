import React from "react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import LoadingButton from "@mui/lab/LoadingButton";
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
import PropTypes from "prop-types";
import * as Yup from "yup";

import Iconify from "../iconify";

const LoginForm = ({ loading, recaptchaRef, handleSubmit, handleTermoDeUsoShow, handleAvisoDePrivacidadeShow }) => {
  const theme = useTheme();

  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: "",
    password: "",
    toggle: false,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email é inválido").required("Campo de email é obrigatório"),
    password: Yup.string().min(6, "Senha deve ter no mínimo 6 caracteres").required("Senha é obrigatória"),
    toggle: Yup.bool().oneOf([true], "Você precisa aceitar os termos e condições"),
  });

  return (
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

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LfH51EpAAAAAHhmahtgrjoaaKrO3n-hn9eCDGsv"
            onChange={handleChange}
          />

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
            Login
          </LoadingButton>
        </Form>
      )}
    </Formik>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  recaptchaRef: PropTypes.object,
  loading: PropTypes.bool,
  handleAvisoDePrivacidadeShow: PropTypes.func,
  handleTermoDeUsoShow: PropTypes.func,
};

export default LoginForm;
