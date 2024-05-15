import axios from "axios";

import API_URL from "./config";

/**
 * Registers a user with the provided email, name, username, password, and password confirmation.
 *
 * @param {string} email - The user's email address.
 * @param {string} name - The user's name.
 * @param {string} password - The user's password.
 * @return {Promise} A promise that resolves to the result of the registration request.
 */
const register = (email, name, password) => {
  return axios
    .post(API_URL + "register", {
      email,
      name,
      password,
    })
    .then(response => {
      return response.data.message;
    })
    .catch(error => {
      throw error;
    });
};

/**
 * Sends a POST request to the login API endpoint with the provided email and password.
 *
 * @param {string} email - The email of the user.
 * @param {string} password - The password of the user.
 * @return {Promise<string>} The access token returned from the API.
 */
const login = (login, password, user_type) => {
  return axios
    .post(API_URL + "login", {
      login,
      password,
      user_type,
    })
    .then(response => response.data.access_token)
    .catch(error => {
      throw error;
    });
};

/**
 * Activates a user account with the provided activation token.
 *
 * @param {string} token - The activation token.
 * @return {Promise} A promise that resolves to the result of the activation request.
 */
const activate = access_token => {
  return axios
    .post(API_URL + "activate", null, {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    })
    .then(response => {
      return response.data.message;
    })
    .catch(error => {
      throw error;
    });
};

/**
 * Generate a new token.
 *
 * @return {Promise} A promise that resolves to the result of the activation request.
 */
const refreshToken = access_token => {
  return axios
    .post(API_URL + "v1/refreshToken", null, {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw error;
    });
};

/**
 * Retrieves the authenticated user from the server.
 *
 * @param {string} access_token - The access token used for authentication.
 * @return {Promise} A promise that resolves to the authenticated user or null if the user is not found.
 * @throws {Error} If there is an error fetching the authenticated user.
 */
const getAuthUser = access_token => {
  return axios
    .get(API_URL + "v1/getAuthUser", {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    })
    .then(response => {
      if (response.data.message !== "Usuário encontrado") {
        return null;
      }
      // console.log("Service usuario", response.data.user);
      return response.data.user;
    })
    .catch(error => {
      // console.error("Error fetching authenticated user:", error);
      throw error;
    });
};

/**
 * Retrieves data for a specific partner using the provided access token and partner ID.
 *
 * @param {string} access_token - The access token for authentication
 * @param {number} id - The ID of the partner to retrieve data for
 * @return {Promise} A Promise that resolves to the data of the specified partner
 */
const getParceiro = (access_token, id) => {
  return axios
    .get(API_URL + `v1/parceiros/index/${id}`, {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    })
    .then(response => {
      // console.log("Service parceiro", response.data);
      return response.data;
    })
    .catch(error => {
      // console.error("Error fetching parceiro data:", error);
      throw error;
    });
};

/**
 * Retrieves admin data using the provided access token and ID.
 *
 * @param {string} access_token - The access token for authorization
 * @param {number} id - The ID of the admin to retrieve
 * @return {Promise} The admin data response
 */
const getAdmin = (access_token, id) => {
  return axios
    .get(API_URL + `v1/admins/index/${id}`, {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    })
    .then(response => {
      // console.log("Service admin", response.data);
      return response.data;
    })
    .catch(error => {
      // console.error("Error fetching admin data:", error);
      throw error;
    });
};

/**
 * Retrieves a trabalhador using the provided access token and ID.
 *
 * @param {string} access_token - The access token for authentication
 * @param {number} id - The ID of the trabalhador to retrieve
 * @return {Promise} A Promise that resolves to the data of the retrieved trabalhador
 */
const getTrabalhador = (access_token, id) => {
  return axios
    .get(API_URL + `v1/trabs/index/${id}`, {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    })
    .then(response => {
      // console.log("Service trabalhador", response.data);
      return response.data;
    })
    .catch(error => {
      // console.error("Error fetching trabalhador data:", error);
      throw error;
    });
};

/**
 * Logs the user out by sending a POST request to the logout API endpoint.
 *
 * @return {Promise} A promise that resolves with the response from the API.
 */
const logout = access_token => {
  return axios
    .post(API_URL + "v1/logout", null, {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    })
    .then(response => {
      return response.data.message;
    })
    .catch(error => {
      throw error;
    });
};

/**
 * Retrieves the current user from the local storage.
 *
 * @return {Object} The current user object or undefined if the user is null or undefined.
 */
const getCurrentUser = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return user || undefined; // Return an empty object if user is null or undefined
};

const AuthService = {
  activate,
  register,
  login,
  refreshToken,
  getCurrentUser,
  getAuthUser,
  getParceiro,
  getAdmin,
  logout,
  getTrabalhador,
};

export default AuthService;
