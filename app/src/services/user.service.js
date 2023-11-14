import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8000/api/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const getAuthUser = () => {
  return axios
    .get(API_URL + "v1/getAuthUser", { headers: authHeader() })
    .then(response => {
      console.log({ response });
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

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  getAuthUser,
};

export default UserService;
