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
        links={[{ href: "/listar-parceiros-pendentes", text: "Listar Parceiros Pendentes" }]}
        currentPage="Analisar Parceiro Pendente"
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
