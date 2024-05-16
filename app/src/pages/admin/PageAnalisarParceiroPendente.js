import React, { useState } from "react";

import { Container, Typography } from "@mui/material";

import CardBreadcrumb from "../../components/cards/CardBreadcrumb";
import FormAnalisarParceiroPendente from "../../components/formularios/FormAnalisarParceiro";

const AnalisarParceiroPendente = () => {
  const [mudancaDeStatusModal, setMudancaDeStatusModal] = useState(false);
  const [informacoesModal, setInformacoesModal] = useState(false);

  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 0 }}
    >
      <CardBreadcrumb
        homeLink="/listar_parceiros_pendentes"
        homeText="Admin / Listar Parceiros Pendentes"
        currentPage="Listar Parceiros Pendentes"
      />

      <Typography
        variant="h4"
        mt={3}
        mb={3}
        sx={{ fontFamily: "Rawline Bold" }}
        style={{ transition: "1s" }}
      >
        Analisar parceiro pendente
      </Typography>

      <FormAnalisarParceiroPendente
        mudancaDeStatusModal={mudancaDeStatusModal}
        setMudancaDeStatusModal={setMudancaDeStatusModal}
        informacoesModal={informacoesModal}
        setInformacoesModal={setInformacoesModal}
      />
    </Container>
  );
};

export default AnalisarParceiroPendente;
