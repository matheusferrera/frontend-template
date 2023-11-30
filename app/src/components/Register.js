import React from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";

const Register = () => {
  const { register } = useAuth();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: "",
    name: "",
    username: "",
    password: "",
    passwordConfirmation: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Forneça um email válido").required("Email é obrigatório"),
    name: Yup.string().required("Nome é obrigatório"),
    username: Yup.string().required("Username é obrigatório"),
    password: Yup.string().min(6, "Senha deve ter no mínimo 6 caracteres").required("Senha é obrigatória"),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Senhas devem ser iguais")
      .required("Confirmação de senha é obrigatória"),
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
              <div>
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="form-label"
                  >
                    Email
                  </label>
                  <Field
                    id="email"
                    type="text"
                    className={errors.email && touched.email ? "text-input error" : "text-input"}
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && <div className="input-feedback">{errors.email}</div>}
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="name"
                    className="form-label"
                  >
                    Nome
                  </label>
                  <Field
                    id="name"
                    type="text"
                    className={errors.name && touched.name ? "text-input error" : "text-input"}
                    name="name"
                    placeholder="Nome"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                {errors.name && touched.name && <div className="input-feedback">{errors.name}</div>}

                <div className="mb-3">
                  <label
                    htmlFor="username"
                    className="form-label"
                  >
                    Nome de usuário
                  </label>
                  <Field
                    id="username"
                    type="text"
                    className={errors.username && touched.username ? "text-input error" : "text-input"}
                    name="username"
                    placeholder="Nome de usuário"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.username && touched.username && <div className="input-feedback">{errors.username}</div>}
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
                    type="password"
                    className={errors.password && touched.password ? "text-input error" : "text-input"}
                    name="password"
                    placeholder="Senha"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password && <div className="input-feedback">{errors.password}</div>}
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="passwordConfirmation"
                    className="form-label"
                  >
                    Confirmação de senha
                  </label>
                  <Field
                    id="passwordConfirmation"
                    type="password"
                    className={errors.passwordConfirmation && touched.passwordConfirmation ? "text-input error" : "text-input"}
                    name="passwordConfirmation"
                    placeholder="Confirmação de senha"
                    value={values.passwordConfirmation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.passwordConfirmation && touched.passwordConfirmation && (
                    <div className="input-feedback">{errors.passwordConfirmation}</div>
                  )}
                </div>

                <div className="mb-3">
                  <button
                    type="submit"
                    disabled={loading || isSubmitting}
                  >
                    {loading && <span className="spinner-border spinner-border-sm"></span>}
                    <span>Registrar</span>
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
