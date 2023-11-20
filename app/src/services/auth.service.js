import axios from "axios";

const API_URL = "http://localhost:8000/api/";

/**
 * Registers a user with the provided email, name, username, password, and password confirmation.
 *
 * @param {string} email - The user's email address.
 * @param {string} name - The user's name.
 * @param {string} username - The user's username.
 * @param {string} password - The user's password.
 * @param {string} password_confirmation - The confirmation of the user's password.
 * @return {Promise} A promise that resolves to the result of the registration request.
 */
const register = (email, name, username, password, password_confirmation) => {
  return axios
    .post(API_URL + "register", {
      email,
      name,
      username,
      password,
      password_confirmation,
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
const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then(response => response.data.access_token)
    .catch(error => {
      throw error;
    });
};

/**
 * Logs the user out by sending a POST request to the logout API endpoint.
 *
 * @return {Promise} A promise that resolves with the response from the API.
 */
const logout = access_token => {
  console.log("Service chamou logout", access_token);
  return axios
    .post(API_URL + "v1/logout", {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    })
    .then(response => {
      console.log("Service Logout response:", response);
      return response.data.message;
    })
    .catch(error => {
      console.error("Service Error on logout:", error);
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
      return response.data.user;
    })
    .catch(error => {
      console.error("Error fetching authenticated user:", error);
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
  register,
  login,
  logout,
  getCurrentUser,
  getAuthUser,
};

export default AuthService;
