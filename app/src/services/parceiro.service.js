import axios from "axios";

const API_URL = "http://localhost:3000/api/";
const acessToken = localStorage.getItem("token");

/**
 * Retrieves a admin using the provided access token and ID.
 *
 * @param {number} id - The ID of the admin to retrieve
 * @return {Promise} A Promise that resolves to the data of the retrieved admin
 */
const getParceiroData = id => {
  return axios
    .get(API_URL + `v1/parceiros/index/${id}`, {
      headers: {
        Authorization: "Bearer " + acessToken,
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

const parceiroService = {
  getParceiroData,
};

export default parceiroService;
