import axios from "axios";

const API_URL = "http://localhost:3000/api/";
// const acessToken = localStorage.getItem("token");

/**
 * Retrieves a admin using the provided access token and ID.
 *
 * @param {number} id - The ID of the admin to retrieve
 * @return {Promise} A Promise that resolves to the data of the retrieved admin
 */
const getCidadaoData = id => {
  return axios
    .get(API_URL + `v1/trabs/index/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
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

const cidadaoService = {
  getCidadaoData,
};

export default cidadaoService;
