import axios from "axios";

const API_URL = "https://brasilapi.com.br/api/";

const getAllUFs = () => {
  return axios
    .get(API_URL + "ibge/uf/v1")
    .then(response => {
      return response.data.sort((a, b) => {
        if (a.nome < b.nome) {
          return -1;
        }
        if (a.nome > b.nome) {
          return 1;
        }
        return 0;
      });
    })
    .catch(error => {
      throw error;
    });
};

const getCidadesFromUF = ufSigla => {
  return axios
    .get(API_URL + "ibge/municipios/v1/" + ufSigla + "?providers=dados-abertos-br,gov,wikipedia")
    .then(response => {
      return response.data.sort((a, b) => {
        if (a.nome < b.nome) {
          return -1;
        }
        if (a.nome > b.nome) {
          return 1;
        }
        return 0;
      });
    })
    .catch(error => {
      throw error;
    });
};

const OptionsService = {
  getAllUFs,
  getCidadesFromUF,
};

export default OptionsService;
