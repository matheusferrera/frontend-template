import React from "react";

import { Card, Grid, Typography } from "@mui/material";

const services = [
  { title: "Parceiros Pendentes", number: 15 },
  { title: "Cursos Pendentes", number: 20 },
  { title: "Novas Vagas de Trabalho", number: 100 },
  { title: "Novos Interessados em Empreendedorismo", number: 10 },
  { title: "Parceiros Aprovados", number: 5 },
  { title: "Cursos Aprovados", number: 35 },
  { title: "Vagas Encerrando em até 10 dias", number: 23 },
  { title: "Interesses excluídos", number: 5 },
  { title: "Parceiros Reporvados", number: 25 },
  { title: "Vagas sem Validade", number: 23 },
  { title: "Interessados em empreenderorismo", number: 20 },
  { title: "Parceiros Inativados", number: 2 },
  { title: "Cursos Inativados", number: 20 },
  { title: "Vagas Inativadas", number: 20 },
];

const CardVisaoGeral = () => {
  return (
    <Grid
      container
      spacing={2}
      mt={2}
      sx={{
        width: "fixed",
        maxWidth: "1008px",
        height: "auto",
        maxHeight: "248px",
        marginLeft: "1px",
      }}
    >
      {services.map((services, index) => (
        <Grid key={index}>
          <Card
            sx={{
              backgroundColor: "#ffffff",
              border: "1px solid",
              borderRadius: "4px",
              borderColor: "#D3D3D3",
              maxWidth: "400px",
              maxHeight: "45px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              color: "primary.main",
              boxShadow: "0px 1px 6px 0px rgba(51, 51, 51, 0.16)",
              padding: "16px 8px",
              marginRight: "14px",
              marginBottom: "14px",
            }}
          >
            <Typography
              align="left"
              sx={{
                mb: 0.5,
                marginRight: "5px",
                fontSize: "22px",
                fontWeight: "700",
                height: "30px",
                fontStyle: "normal",
                color: "primary.main",
              }}
            >
              {services.number}
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                fontStyle: "bold",
                color: "primary.main",
              }}
            >
              {services.title}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardVisaoGeral;
