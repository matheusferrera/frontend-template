import React, { createContext, useContext, useEffect, useState } from "react";

import authService from "../services/auth.service";

const AuthContext = createContext();


// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const storedUser = localStorage.getItem("user");
  const storedToken = localStorage.getItem("token");

  const [user, setUser] = useState(storedUser !== null ? JSON.parse(storedUser) : null);
  const [token, setToken] = useState(storedToken !== null ? storedToken : null);
  const [refreshingToken, setRefreshingToken] = useState(false);


  //O STATE UTILIZADO DENTRO DO USEFFECT É O STATE QUE FOI SETADO NA PRIMEIRA CHAMADA ENTAO NECESSITA UTILIZAR O LOCALSTORAGE
  useEffect(() => {
    const interval = setInterval(() => {
      const _storedToken = localStorage.getItem("token");

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

  useEffect(() => { }, [token]);


  const login = (username, password) => {
    setToken(123) //Mockando token JWT
    setUser({ username, password, user_type: "user", name: "Matheus Ferreira" }) //Mockando todos os dados que sao necessarios vir do back
    console.log("SETOU NO LOGIN!")
  };


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


  const value = {
    user,
    token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};



export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
};
