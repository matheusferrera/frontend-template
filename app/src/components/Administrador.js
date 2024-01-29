import React, { useEffect, useState } from "react";

import InfoIcon from "@mui/icons-material/Info";
import { Box, Container, Link, Typography } from "@mui/material";

import imagemPrimaria from "../assets/images/Ilustra-Admin.png";
import { useAuth } from "../contexts/AuthContext";
import CardBreadcrumb from "./cards/CardBreadcrumb";
import CardPrimario from "./cards/CardPrimario";
import CardServicos from "./cards/CardServicos";
import CardVisaoGeral from "./cards/CardVisaoGeral";

const Administrador = () => {
  const { adminData, token, getAdminData } = useAuth();
  const [fetched, setFetched] = useState(false); // Track if data has been fetched
  const [dadosConsolidados, setDadosConsolidados] = useState({
    listaPermissao: {
      permissao1: false,
      permissao2: false,
    },
    listaVisaoGeral: {
      "Parceiros Pendentes": 15,
      "Cursos Pendentes": 20,
      "Novas Vagas de Trabalho": 100,
      "Novos Interessados em Empreendedorismo": 10,
      "Parceiros Aprovados": 5,
      "Cursos Aprovados": 35,
      "Vagas Encerrando em até 10 dias": 23,
      "Interesses excluídos": 5,
      "Parceiros Reprovados": 25,
      "Vagas sem Validade": 23,
      "Interessados em Empreendedorismo": 20,
      "Parceiros Inativados": 2,
      "Cursos Inativados": 20,
      "Vagas Inativadas": 20,
    },
  });

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

  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 0 }}
    >
      <CardBreadcrumb
        homeLink="/"
        homeText="Página Inicial"
        currentPage="Administrador"
      />

      <Typography
        variant="h4"
        mt={2}
        textTransform="uppercase"
      >
        Seja bem-vindo ao
      </Typography>

      <CardPrimario
        title="Administrativo"
        imageUrl={imagemPrimaria}
      />

      <Typography
        variant="h4"
        mt={3}
        mb={1}
        sx={{ color: "primary.main" }}
      >
        Visão Geral
      </Typography>

      <CardVisaoGeral
        backgroundColor="common.white"
        services={dadosConsolidados.listaVisaoGeral}
      />

      <Typography
        variant="h4"
        mt={3}
        mb={1}
        sx={{ color: "primary.main" }}
      >
        Serviços ofertados
      </Typography>

      <CardServicos />

      <Box
        mt={5}
        sx={{ display: "flex", alignItems: "center", borderRadius: "4px", background: "#E6E6E6", padding: "16px" }}
      >
        <InfoIcon />
        <Typography
          variant="body1"
          sx={{ ml: 1 }}
        >
          No caso de dúvidas e/ou problemas, acesse
          <Link
            component="a"
            href="#"
            color="primary.main"
            underline="always"
            sx={{ ml: 1 }}
          >
            Perguntas Frequentes
          </Link>
          . Caso o problema persista, envie e-mail para redeprogredir.senisp@cidadania.gov.br
        </Typography>
      </Box>
    </Container>
  );
};

export default Administrador;
