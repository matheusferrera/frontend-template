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
    setLoading(true)

    console.log(values)

    setSubmitting(false)
    setLoading(false)

  }

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
        handleSubmit={handleSubmit} />
    </Box>

  )

};

export default ListarParceiros;
