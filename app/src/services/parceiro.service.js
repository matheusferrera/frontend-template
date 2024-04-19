import axios from "axios";

const API_URL = "http://localhost:3000/api/";
// const acessToken = localStorage.getItem("token");

/**
 * Retrieves a parceiro using the provided access token and ID.
 *
 * @param {number} id - The ID of the parceiro to retrieve
 * @return {Promise} A Promise that resolves to the data of the retrieved parceiro
 */
const getParceiroData = id => {
  return axios
    .get(API_URL + `v1/parceiros/index/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
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

const parceiroService = {
  getParceiroData,
};

export default parceiroService;
