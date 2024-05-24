import React from "react";

import { Container, Typography } from "@mui/material";

import CardBreadcrumb from "../../components/cards/CardBreadcrumb";

const CursosPessoasInteressadas = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 0 }}
    >
      <CardBreadcrumb
        links={[
          { href: "/listar-parceiros-pendentes", text: "Listar Parceiros Pendentes" },
          { href: "/vizualizar-informacoes-complementares", text: "Informações do Parceiro" },
        ]}
        currentPage="Listar pessoas interessadas"
      />

      <Typography
        variant="h4"
        mt={3}
        mb={3}
        sx={{ fontFamily: "Rawline Bold" }}
        style={{ transition: "1s" }}
      >
        Listar pessoas interessadas
      </Typography>

      {/* <FormAnalisarParceiroPendente
        mudancaDeStatusModal={mudancaDeStatusModal}
        setMudancaDeStatusModal={setMudancaDeStatusModal}
        informacoesModal={informacoesModal}
        setInformacoesModal={setInformacoesModal}
      /> */}
    </Container>
  );
};

export default CursosPessoasInteressadas;
