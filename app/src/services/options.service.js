import axios from "axios";

import JSON_ATUACOES from "../assets/json/areas-atuacao-parceiro.json";
import JSON_CIDADES from "../assets/json/estados-cidades.json";

const API_URL_BRASILAPI = "https://brasilapi.com.br/api/";

const API_URL_SERVICOSIBGE = "https://servicodados.ibge.gov.br/api/";

const API_URL_VIACEP = "https://viacep.com.br/ws/";

const estadosJSON = JSON_CIDADES.estados;

// Cira um array json com objetos cidade que contém o nome, id e estado da cidade
const cidadesJSON = estadosJSON.reduce((acc, estado) => {
  const cidades = estado.cidades.map(cidade => {
    return {
      id: cidade,
      nome: cidade,
      estado: estado.sigla,
    };
  });
  return acc.concat(cidades);
}, []);

const atuacoesJSON = JSON_ATUACOES.atuacoes;

const getAllUFs = () => {
  return axios
    .get(API_URL_SERVICOSIBGE + "v1/localidades/estados")
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
        return estadosJSON;
      }
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
};

const getCidadesFromUF = ufSigla => {
  return axios
    .get(API_URL_SERVICOSIBGE + "v1/localidades/estados/" + ufSigla + "/municipios")
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
        return cidadesJSON.filter(cidade => cidade.UF.id === ufSigla);
      }
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
};

const getAreasAtuacao = () => {
  return axios
    .get(API_URL_SERVICOSIBGE + "v2/cnae/divisoes")
    .then(response => {
      if (response) {
        return response.data;
      } else {
        return atuacoesJSON;
      }
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
};

function verificarCEP(cep) {
  return axios
    .get(API_URL_VIACEP + cep.replace(/\D/g, "") + "/json/")
    .then(response => {
      if (response && !response.data.erro) {
        return response.data;
      } else {
        return false;
      }
    })
    .catch(error => {
      console.error(error);
      throw error;
    });
}

function verificarCNPJ(cnpj) {
  return axios
    .get(API_URL_BRASILAPI + "cnpj/v1/" + cnpj.replace(/\D/g, ""))
    .then(response => {
      if (response) {
        return response.data;
      } else {
        return false;
      }
    })
    .catch(error => {
      // CNPJ inexistente para testes: 67.131.499/0001-47
      console.error(error);
      throw error;
    });
}

function verificarSiteAtivo(site) {
  // Remover os espaços em branco deixados no campo ao escrever a URL
  if (typeof site != typeof undefined) {
    const url = site.replace(/\s/g, "");
    console.log("Checando site:", url);
    return fetch(url, { method: "HEAD", mode: "no-cors" })
      .then(response => {
        if (response.ok || response.type === "opaque") {
          // Site is active
          console.log("Site ativo");
          return true;
        } else {
          // Site is not active
          console.log("Site inativo");
          return false;
        }
      })
      .catch(error => {
        if (error instanceof TypeError || error instanceof SyntaxError) {
          // Handle network errors
          console.error("Network error:", error);
        } else {
          // Handle other errors
          console.error("Error checking site status:", error);
        }
        throw error; // Return false for any error
      });
  }
  return true;
}

const optionsService = {
  getAllUFs,
  getCidadesFromUF,
  cidadesJSON,
  getAreasAtuacao,
  verificarSiteAtivo,
  verificarCEP,
  verificarCNPJ,
};

export default optionsService;
