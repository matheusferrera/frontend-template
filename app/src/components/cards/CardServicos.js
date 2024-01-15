import React from "react";

import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SchoolIcon from "@mui/icons-material/School";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";

const services = [
  { name: "Cursos", icon: <SchoolIcon /> },
  { name: "Empreendedorismo", icon: <RocketLaunchIcon /> },
  { name: "Trabalho", icon: <BusinessCenterIcon /> },
  { name: "Estágios", icon: <ManageAccountsIcon /> },
  { name: "Jovem Aprendiz", icon: <PersonAddIcon /> },
];

const CardServicos = () => {
  return (
    <Grid
      container
      spacing={2}
      mt={2}
    >
      {services.map((service, index) => (
        <Grid
          item
          key={index}
          xs={12}
          sm={6}
          md={3}
          sx={{
            paddingBottom: "16px !important",
          }}
        >
          <Box
            sx={{
              transform: "translateX(50%)",
              width: "50%",
              borderTop: "5px solid",
              borderTopColor: "primary.main",
              borderRadius: "8px 8px 0px 0px",
            }}
          ></Box>
          <Card>
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                color: "primary.main",
                boxShadow: "0px 1px 6px 0px rgba(51, 51, 51, 0.16)",
                paddingTop: "16px",
                paddingBottom: "16px !important",
              }}
            >
              {service.icon}
              <Typography
                variant="h6"
                sx={{ marginLeft: "8px" }}
              >
                {service.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardServicos;
