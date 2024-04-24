import React from "react";

import { Box } from "@mui/material";

import CardBreadcrumb from "../../components/cards/CardBreadcrumb";
import FormListarParceirosPendentes from "../../components/formularios/FormListarParceirosPendentes";

const PageParceirosPendentes = () => {
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
        homeLink="/home"
        homeText="Admin"
        currentPage="Listar Parceiros Pendentes"
      />
      <FormListarParceirosPendentes />
    </Box>
  );
};

export default PageParceirosPendentes;
