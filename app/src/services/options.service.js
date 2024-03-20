import axios from "axios";

import JSON_ATUACOES from "../assets/json/atuacao_parceiro.json";
import JSON_CIDADES from "../assets/json/estados-cidades.json";

const API_URL = "https://brasilapi.com.br/api/";

const API_URL2 = "https://servicodados.ibge.gov.br/api/";

const estados = JSON_CIDADES.estados;

// Cira um array json com objetos cidade que contém o nome, id e estado da cidade
const cidades = estados.reduce((acc, estado) => {
  const cidades = estado.cidades.map(cidade => {
    return {
      id: cidade,
      nome: cidade,
      estado: estado.sigla,
    };
  });
  return acc.concat(cidades);
}, []);

const atuacoes = JSON_ATUACOES.atuacoes;

const getAllUFs = () => {
  return axios
    .get(API_URL + "ibge/uf/v1")
    .then(response => {
      if (response) {
        return response.data.sort((a, b) => {
          if (a.nome < b.nome) {
            return -1;
          }
          if (a.nome > b.nome) {
            return 1;
          }
          return 0;
        });
      } else {
        return estados;
      }
    })
    .catch(error => {
      throw error;
    });
};

const getCidadesFromUF = ufSigla => {
  return axios
    .get(API_URL + "ibge/municipios/v1/" + ufSigla + "?providers=dados-abertos-br,gov,wikipedia")
    .then(response => {
      if (response.data.length > 0) {
        return response.data.sort((a, b) => {
          if (a.nome < b.nome) {
            return -1;
          }
          if (a.nome > b.nome) {
            return 1;
          }
          return 0;
        });
      } else {
        return cidades.filter(cidade => cidade.estado === ufSigla);
      }
    })
    .catch(error => {
      throw error;
    });
};

const getAtuacoes = () => {
  return axios
    .get(API_URL2 + "v2/cnae/divisoes")
    .then(response => {
      if (response) {
        return response.data;
      } else {
        return atuacoes;
      }
    })
    .catch(error => {
      throw error;
    });
};

const OptionsService = {
  getAllUFs,
  getCidadesFromUF,
  getAtuacoes,
};

export default OptionsService;
