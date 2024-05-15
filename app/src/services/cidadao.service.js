import axios from "axios";

import API_URL from "./config";
// const acessToken = localStorage.getItem("token");

/**
 * Retrieves a cidadao using the provided access token and ID.
 *
 * @param {number} id - The ID of the cidadao to retrieve
 * @return {Promise} A Promise that resolves to the data of the retrieved cidadao
 */
const getCidadaoData = id => {
  return axios
    .get(API_URL + `v1/trabs/index/${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then(response => {
      // console.log("Service cidadao", response.data);
      return response.data;
    })
    .catch(error => {
      // console.error("Error fetching cidadao data:", error);
      throw error;
    });
};

const cidadaoService = {
  getCidadaoData,
};

export default cidadaoService;
