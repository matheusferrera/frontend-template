import React, { useEffect, useState } from "react";

import { Box } from "@mui/material";

import { useAuth } from "../../contexts/AuthContext";
import { useData } from "../../contexts/DataContext";
import { useNavContent } from "../../contexts/NavContentContext";
import CardBreadcrumb from "../cards/CardBreadcrumb";
import FormListarParceiros from "../formularios/FormListarParceiros";
import parceiroNav from "./ParceiroNav";

const ListarParceiros = () => {
  const { token } = useAuth();
  const { adminData, getAdminData } = useData();
  const [fetched, setFetched] = useState(false); // Track if data has been fetched
  const [loading, setLoading] = useState(false);
  const [confirmacaoModal, setConfirmacaoModal] = useState(false);
  const [erroModal, setErroModal] = useState(false);
  const [, setDadosConsolidados] = useState({
    listaPermissao: {
      permissao1: false,
      permissao2: false,
    },
    listaVisaoGeral: {},
  });
  const { setNavContent } = useNavContent();

  useEffect(() => {
    if (token && !fetched) {
      getAdminData(token)
        .then(() => setFetched(true))
        .catch(error => {
          console.error("Error fetching admin data:", error);
        });
    }
  }, [token, fetched]); // Only run if token or fetched status changes

  useEffect(() => {
    if (adminData) {
      const { permissao_list, visao_geral_list } = adminData;
      setDadosConsolidados({
        listaPermissao: permissao_list,
        listaVisaoGeral: visao_geral_list,
      });
    }
  }, [adminData]);

  useEffect(() => {
    setNavContent(parceiroNav);
  }, []);

  const handleSubmit = (values, { setSubmitting }) => {
    setLoading(true);
    return new Promise(resolve => {
      // TODO: mudar para a chamada no backend
      console.log(values);
      // Simula uma operação assíncrona
      setTimeout(() => {
        // Retorna a Promisse como sucesso no Timeout
        resolve("Submissão bem-sucedida!");
      }, 2000);

      // Código que pode ser usado pra simular erro;
      // Como o código não tem nenhuma condição, ao ser utilizado o erro irá ser lançado antes do Timeout (Sucesso);
      // throw new Error("Erro simulado durante a submissão!");
    })
      .then(mensagem => {
        console.log("Sucesso:", mensagem);
        setConfirmacaoModal(true);
      })
      .catch(erro => {
        console.error("", erro);
        setErroModal(true);
      })
      .finally(() => {
        setSubmitting(false);
        setLoading(false);
      });
  };

  return (
    <Box
      alignSelf={"center"}
      alignItems={"center"}
      sx={{
        width: 1,
        height: 1,
        justifyContent: "center",
      }}
    >
      <CardBreadcrumb
        homeLink="/parceiro/listar_parceiros"
        homeText="Parceiro"
        currentPage="Listar Parceiros"
      />
      <FormListarParceiros
        loading={loading}
        handleSubmit={handleSubmit}
        confirmacaoModal={confirmacaoModal}
        setConfirmacaoModal={setConfirmacaoModal}
        erroModal={erroModal}
        setErroModal={setErroModal}
      />
    </Box>
  );
};

export default ListarParceiros;
