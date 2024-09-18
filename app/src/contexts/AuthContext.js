import React, { createContext, useContext, useState } from "react";


const AuthContext = createContext();


// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const storedUser = localStorage.getItem("user");

  const [user, setUser] = useState(storedUser !== null ? JSON.parse(storedUser) : null);


  const login = async (username, password) => {
    console.log("Tentando login -> ")
    try {
      const response = await fetch('https://us-central1-app-carteira-na-mao.cloudfunctions.net/api/user/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: username, senha: password }),
      });

      if (!response.ok) {
        throw new Error('Erro ao fazer login');
      }


      const data = await response.json();

      let resp = {
        dadosuser: data.dadosuser,
        email: data.email,
        tipouser: data.tipouser
      }
      console.log("RESP -> ", resp)
      localStorage.setItem("user", JSON.stringify(resp));
      setUser(resp);

    } catch (error) {
      console.error("Erro ao fazer login:", error);
      return 0
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };


  const value = {
    user,
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
