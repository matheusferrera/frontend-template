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


  const login = (username, password, user_type) => {
    setToken(123)
    setUser({ username, password, user_type })
    // return authService
    //   .login(username, password, user_type)
    //   .then(token => {
    //     // Ensure that token is truthy before setting it
    //     if (token) {
    //       setToken(token);
    //       localStorage.setItem("token", token);
    //       return authService.getAuthUser(token);
    //     } else {
    //       throw new Error("Invalid token received");
    //     }
    //   })
    //   .then(userDetails => {
    //     if (userDetails) {
    //       setUser(userDetails);
    //       localStorage.setItem("user", JSON.stringify(userDetails));
    //       localStorage.setItem("timeRefreshToken", Date.now());
    //     } else {
    //       throw new Error("Invalid user details received");
    //     }
    //   })
    //   .catch(error => {
    //     setUser(null);
    //     setToken(null);
    //     localStorage.removeItem("token");
    //     localStorage.removeItem("user");
    //     localStorage.removeItem("timeRefreshToken");
    //     console.error("Login error:", error);
    //     // Rethrow the error to propagate it to the calling code
    //     throw error;
    //   });
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
