import React, { createContext, useContext, useState } from "react";

import isEqual from "lodash/isEqual";

import authService from "../services/auth.service";

const DataContext = createContext();

/**
 * DataProvider component that handles the application data
 * @param {object} props - React component props.
 * @param {React.ReactNode} props.children - The child components to render.
 * @returns {React.ReactNode} - The rendered child components wrapped in DataContext.Provider.
 */
// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {
  const [parceiroData, setParceiroData] = useState(null);
  const [adminData, setAdminData] = useState(null);
  const [cidadaoData, setCidadaoData] = useState(null);

  /**
   * Retrieves the parceiro data using the provided token.
   *
   * @param {string} token - The authentication token.
   * @return {Promise} A promise that resolves with the parceiro data or rejects with an error.
   */
  const getParceiroData = token => {
    return authService
      .getParceiro(token, 1) // TODO: receber id do parceiro
      .then(dadosParceiro => {
        if (!isEqual(dadosParceiro, parceiroData)) {
          setParceiroData(dadosParceiro);
        }
      })
      .catch(error => {
        setParceiroData(null);
        console.error("Error fetching parceiro data:", error);
        throw error;
      });
  };

  /**
   * Retrieves the admin data using the provided token.
   *
   * @param {string} token - The authentication token.
   * @return {Promise} A promise that resolves with the admin data or rejects with an error.
   */
  const getAdminData = token => {
    return authService
      .getAdmin(token, 1) // TODO: receber id do admin
      .then(dadosAdmin => {
        if (!isEqual(dadosAdmin, adminData)) {
          setAdminData(dadosAdmin);
        }
      })
      .catch(error => {
        setAdminData(null);
        console.error("Error fetching admin data:", error);
        throw error;
      });
  };

  /**
   * Retrieves the cidadao data using the provided token.
   *
   * @param {string} token - The authentication token.
   * @return {Promise} A promise that resolves with the cidadao data or rejects with an error.
   */
  const getCidadaoData = token => {
    return authService
      .getTrabalhador(token, 1) // TODO: receber id do cidadao
      .then(dadosCidadao => {
        if (!isEqual(dadosCidadao, cidadaoData)) {
          setCidadaoData(dadosCidadao);
        }
      })
      .catch(error => {
        setCidadaoData(null);
        console.error("Error fetching cidadão data:", error);
        throw error;
      });
  };

  const value = {
    parceiroData,
    adminData,
    cidadaoData,
    getParceiroData,
    getAdminData,
    getCidadaoData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

/**
 * Returns the data context.
 *
 * @return {DataContext} The data context.
 */
export const useData = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("useData must be used within an DataProvider.");
  }

  return context;
};
