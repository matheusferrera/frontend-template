import React, { createContext, useContext, useEffect, useState } from "react";

import isEqual from "lodash/isEqual";

import authService from "../services/auth.service";

const AuthContext = createContext();

/**
 * AuthProvider component that handles user authentication and authorization.
 * @param {object} props - React component props.
 * @param {React.ReactNode} props.children - The child components to render.
 * @returns {React.ReactNode} - The rendered child components wrapped in AuthContext.Provider.
 */
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const storedUser = localStorage.getItem("user");
  const storedToken = localStorage.getItem("token");

  const [user, setUser] = useState(storedUser !== null ? JSON.parse(storedUser) : null);
  const [token, setToken] = useState(storedToken !== null ? storedToken : null);
  const [refreshingToken, setRefreshingToken] = useState(false);

  const naturezasJuridicas = ["Público", "Privado", "Terceiro Setor"];

  console.log("token -> ", token?.slice(-4));

  //O STATE UTILIZADO DENTRO DO USEFFECT É O STATE QUE FOI SETADO NA PRIMEIRA CHAMADA ENTAO NECESSITA UTILIZAR O LOCALSTORAGE
  useEffect(() => {
    const interval = setInterval(() => {
      const _storedToken = localStorage.getItem("token");
      const _storedTimeRefreshToken = localStorage.getItem("timeRefreshToken");

      console.log("TIMER-> ", Date.now() - parseInt(_storedTimeRefreshToken));

      if (!refreshingToken && Date.now() - parseInt(localStorage.getItem("timeRefreshToken")) > 30000000) {
        setRefreshingToken(true);
        localStorage.setItem("timeRefreshToken", Date.now());
        authService
          .refreshToken(_storedToken)
          .then(resp => {
            localStorage.setItem("token", resp.access_token);
            setToken(resp.access_token);
            setRefreshingToken(false);
          })
          .catch(e => {
            console.log("Token expirado => ", e);
            setRefreshingToken(false);
            logout();
          });
      }
    }, 60000);

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, []);

  useEffect(() => {
    console.log("TOKEN FOI ALTERADO -> ", token);
  }, [token]);

  /**
   * Function to handle user login.
   * @param {string} username - The user's username.
   * @param {string} password - The user's password.
   * @returns {Promise} - A promise that resolves to the user details.
   */
  const login = (username, password, user_type) => {
    return authService
      .login(username, password, user_type)
      .then(token => {
        // Ensure that token is truthy before setting it
        if (token) {
          setToken(token);
          localStorage.setItem("token", token);
          return authService.getAuthUser(token);
        } else {
          throw new Error("Invalid token received");
        }
      })
      .then(userDetails => {
        console.log("USER DETAILS -> ", userDetails);
        // Ensure that userDetails is truthy before setting user
        if (userDetails) {
          if (!userDetails.photo_path) {
            userDetails.photo_path = "/assets/images/avatars/avatar_25.jpg";
          }
          if (!userDetails.naturezaJuridica) {
            const randomIndex = Math.floor(Math.random() * naturezasJuridicas.length);
            userDetails.naturezaJuridica = naturezasJuridicas[randomIndex];
          }
          setUser(userDetails);
          localStorage.setItem("user", JSON.stringify(userDetails));
          localStorage.setItem("timeRefreshToken", Date.now());
        } else {
          throw new Error("Invalid user details received");
        }
      })
      .catch(error => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("timeRefreshToken");
        console.error("Login error:", error);
        // Rethrow the error to propagate it to the calling code
        throw error;
      });
  };

  /**
   * Logout function that handles the user logout process.
   *
   * @return {undefined} No return value.
   */
  const logout = token => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("timeRefreshToken");
    return authService
      .logout(token)
      .then(response => {
        return response;
      })
      .catch(error => {
        console.error("Logout error:", error);
        throw error;
      });
  };

  /**
   * Function to handle user registration.
   * @param {string} email - The user's email.
   * @param {string} name - The user's name.
   * @param {string} password - The user's password.
   * @param {string} password_confirmation - The user's password confirmation.
   */
  const register = (email, name, password, password_confirmation) => {
    return authService
      .register(email, name, password, password_confirmation)
      .then(response => {
        return response;
      })
      .catch(error => {
        console.error("Registration error:", error);
        throw error;
      });
  };

  /**
   * Function to activate user account with a token.
   * @param {string} token - The activation token.
   */
  const activate = token => {
    return authService
      .activate(token)
      .then(response => {
        return response;
      })
      .catch(error => {
        console.error("Activation error:", error);
        throw error;
      });
  };

  /**
   * Retrieves the authenticated user details using the provided token.
   *
   * @param {string} token - The authentication token.
   * @return {Promise} A promise that resolves with the user details or rejects with an error.
   */
  const getAuthUser = token => {
    return authService
      .getAuthUser(token)
      .then(userDetails => {
        /* Exemplo de userDetails
        {"message":
          "Usu\u00e1rio encontrado",
          "expires_in":3508,
          "user":{
            "pk_usuario":1,
            "no_usuario":"teste teste",
            "nu_id_sso":null,
            "nu_cpf":null,
            "ds_email":"teste@teste.com",
            "st_ativo":"sim",
            "tp_usuario":"EMP",
            "ds_perfil_sso":"[\"Parceiro\"]",
            "ds_acoes_sso":"[\"ACESSO_LOGIN\"]",
            "fk_central_auditoria":1,
            "fk_administracao_registros":1,
            "fk_administracao_anexos_foto":null,
            "dh_criacao":"2024-03-25T19:09:34.000000Z",
            "dh_atualizacao":"2024-03-25T19:11:02.000000Z"}}
          */
        if (!userDetails.photo_path) {
          userDetails.photo_path = "/assets/images/avatars/avatar_25.jpg";
        }
        if (!userDetails.naturezaJuridica) {
          const randomIndex = Math.floor(Math.random() * naturezasJuridicas.length);
          userDetails.naturezaJuridica = naturezasJuridicas[randomIndex];
        }
        // Check if the user data has changed before updating the context
        if (!isEqual(userDetails, user)) {
          setUser(userDetails);
          localStorage.setItem("user", JSON.stringify(userDetails));
        }
      })
      .catch(error => {
        setUser(null);
        localStorage.removeItem("user");
        console.error("Error fetching authenticated user:", error);
        throw error;
      });
  };

  const value = {
    user,
    token,
    activate,
    login,
    logout,
    register,
    getAuthUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/**
 * Returns the authentication context.
 *
 * @return {AuthContext} The authentication context.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
};
