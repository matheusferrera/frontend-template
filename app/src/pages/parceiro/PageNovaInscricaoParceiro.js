import React, { useState } from "react";

import { Container, Typography } from "@mui/material";

import CardBreadcrumb from "../../components/cards/CardBreadcrumb";
import FormParceiros from "../../components/formularios/FormParceiros";

const mapearNaturezaJuridica = valor => {
  switch (valor) {
    case "Público":
      return "Pub";
    case "Privado":
      return "Pri";
    case "Terceiro Setor":
      return "Trc";
    default:
      return valor; // Retorna o valor original se não corresponder a nenhum dos casos acima
  }
};

const PageNovaInscricaoParceiro = () => {
  const [loading, setLoading] = useState(false);
  const [confirmacaoModal, setConfirmacaoModal] = useState(false);
  const [erroModal, setErroModal] = useState(false);
  const [erroDoUsuarioModal, setErroDoUsuarioModal] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    setLoading(true);
    return new Promise(resolve => {
      if (
        values.checkVagaEmprego ||
        values.checkVagaEstagio ||
        values.checkVagaJovem ||
        values.checkCursos ||
        values.checkFinanceiro ||
        values.checkMobilidadePublico ||
        values.checkMobilidadeParceiro
      ) {
        // Ajuste de naturezaJuridica para o backend
        values.naturezaJuridica = mapearNaturezaJuridica(values.naturezaJuridica);

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
      } else {
        // Detecta a presença de erro de preenchimento e finaliza o promise
        setErroDoUsuarioModal(true);
        setSubmitting(false);
        setLoading(false);
        console.error("Campos em branco");
      }
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
    <Container
      maxWidth="lg"
      sx={{ mt: 0 }}
    >
      <CardBreadcrumb
        homeLink="/parceiro/cadastro"
        homeText="Parceiro"
        currentPage="Cadastrar Parceiros"
      />

      <Typography
        variant="h4"
        mt={3}
        mb={3}
        sx={{ fontFamily: "Rawline Bold" }}
        style={{ transition: "1s" }}
      >
        Nova inscrição
      </Typography>

      <FormParceiros
        loading={loading}
        handleSubmit={handleSubmit}
        confirmacaoModal={confirmacaoModal}
        setConfirmacaoModal={setConfirmacaoModal}
        erroModal={erroModal}
        setErroModal={setErroModal}
        erroDoUsuarioModal={erroDoUsuarioModal}
        setErroDoUsuarioModal={setErroDoUsuarioModal}
      />
    </Container>
  );
};

export default PageNovaInscricaoParceiro;
