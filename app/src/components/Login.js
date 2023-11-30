import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";

const Login = () => {
  const { login } = useAuth();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email é inválido").required("Campo de email é obrigatório"),
    password: Yup.string().min(6, "Senha deve ter no mínimo 6 caracteres").required("Senha é obrigatória"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setLoading(true);
    login(values.email, values.password)
      .then(() => {
        navigate("/profile");
        window.location.reload();
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
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label"
                >
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  type="text"
                  className={errors.email && touched.email ? "text-input error" : "text-input"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && <div className="input-feedback">{errors.email}</div>}
              </div>

              <div className="mb-3">
                <label
                  htmlFor="password"
                  className="form-label"
                >
                  Senha
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  value={values.password}
                  placeholder="Senha"
                  className={errors.password && touched.password ? "text-input error" : "text-input"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password && <div className="input-feedback">{errors.password}</div>}
              </div>

              <div className="mb-3">
                <button
                  type="submit"
                  disabled={loading || isSubmitting}
                >
                  {loading && <span className="spinner-border spinner-border-sm"></span>}
                  <span>Login</span>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
