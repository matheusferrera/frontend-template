import React from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import { Form, Formik } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";

const ActivateForm = ({ loading, handleSubmit }) => {
  const initialValues = {
    token: "",
  };

  const validationSchema = Yup.object().shape({
    token: Yup.string().required("Token é obrigatório"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
        <Form>
          <TextField
            id="token"
            name="token"
            label="Token de ativação"
            placeholder="Token"
            value={values.token}
            type="text"
            error={errors.token && touched.token}
            helperText={errors.token && touched.token && errors.token}
            onChange={handleChange}
            onBlur={handleBlur}
            fullWidth
          />

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
            Ativar
          </LoadingButton>
        </Form>
      )}
    </Formik>
  );
};

ActivateForm.propTypes = {
  handleSubmit: PropTypes.func,
  recaptchaRef: PropTypes.object,
  loading: PropTypes.bool,
  handleAvisoDePrivacidadeShow: PropTypes.func,
  handleTermoDeUsoShow: PropTypes.func,
};

export default ActivateForm;
