import axios from "axios";

import API_URL from "./config";

// const acessToken = localStorage.getItem("token");

/**
 * Retrieves a admin using the provided access token and ID.
 *
 * @param {number} id - The ID of the admin to retrieve
 * @return {Promise} A Promise that resolves to the data of the retrieved admin
 */
const getAdminData = id => {
  return axios
    .get(API_URL + `v1/admins/index/${id}`, {
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

const adminService = {
  getAdminData,
};

export default adminService;
