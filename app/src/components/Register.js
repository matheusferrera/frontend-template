import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { useAuth } from "../contexts/AuthContext";

const required = value => {
  if (!value) {
    return (
      <div
        className="my-1 alert alert-danger"
        role="alert"
      >
        This field is required!
      </div>
    );
  }
};

const validEmail = value => {
  if (!isEmail(value)) {
    return (
      <div
        className="my-1 alert alert-danger"
        role="alert"
      >
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div
        className="my-1 alert alert-danger"
        role="alert"
      >
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div
        className="my-1 alert alert-danger"
        role="alert"
      >
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const { register } = useAuth();

  const onChangeEmail = e => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangeName = e => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeUsername = e => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = e => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangePasswordConfirmation = e => {
    const passwordConfirmation = e.target.value;
    setPasswordConfirmation(passwordConfirmation);
  };

  const handleRegister = async e => {
    e.preventDefault();

    setMessage("");
    setLoading(true);
    setSuccessful(false);

    form.current.validateAll();

    if (password !== passwordConfirmation) {
      setMessage("Password confirmation does not match the password.");
      setSuccessful(false);
      setLoading(false);
      return;
    }

    register(email, name, username, password, passwordConfirmation)
      .then(response => {
        setMessage(response);
        setSuccessful(true);
        setLoading(false);
      })
      .catch(error => {
        const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        setMessage(resMessage);
        setSuccessful(false);
        setLoading(false);
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

        <Form
          onSubmit={handleRegister}
          ref={form}
        >
          {!successful && (
            <div>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label"
                >
                  Email
                </label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="name"
                  className="form-label"
                >
                  Name
                </label>
                <Input
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={onChangeName}
                  validations={[required]}
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="username"
                  className="form-label"
                >
                  Username
                </label>
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required, vusername]}
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="password"
                  className="form-label"
                >
                  Password
                </label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="passwordConfirmation"
                  className="form-label"
                >
                  Password Confirmation
                </label>
                <Input
                  type="password"
                  className="form-control"
                  name="passwordConfirmation"
                  value={passwordConfirmation}
                  onChange={onChangePasswordConfirmation}
                  validations={[required, vpassword]}
                />
              </div>

              <div className="mb-3">
                <button
                  className="btn btn-primary btn-block"
                  disabled={loading}
                >
                  {loading && <span className="spinner-border spinner-border-sm"></span>}
                  <span>Sign Up </span>
                </button>
              </div>
            </div>
          )}

          {message && (
            <div className="mb-3">
              <div
                className={successful ? "alert alert-success" : "my-1 alert alert-danger"}
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
          <CheckButton
            style={{ display: "none" }}
            ref={checkBtn}
          />
        </Form>
      </div>
    </div>
  );
};

export default Register;
