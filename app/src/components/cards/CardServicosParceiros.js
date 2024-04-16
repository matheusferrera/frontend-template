import React from "react";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SchoolIcon from "@mui/icons-material/School";
import { Card, CardContent, Grid, Typography } from "@mui/material";

const services = [
  { name: "Cursos", icon: <SchoolIcon /> },
  { name: "Empreendedorismo", icon: <RocketLaunchIcon /> },
  { name: "Microcrédito", icon: <AttachMoneyIcon /> },
  { name: "Trabalho", icon: <BusinessCenterIcon /> },
  { name: "Estágios", icon: <ManageAccountsIcon /> },
  { name: "Jovem Aprendiz", icon: <PersonAddIcon /> },
];

const CardServicosParceiros = () => {
  return (
    <Grid
      container
      spacing={2}
    >
      {services.map((service, index) => (
        <Grid
          item
          key={index}
          xs={6}
          sm={4}
          md={3}
        >
          <Card>
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                color: "white",
                backgroundColor: "primary.main",
                boxShadow: "0px 1px 6px 0px rgba(51, 51, 51, 0.16)",
                paddingTop: "16px",
                paddingBottom: "16px !important",
                height: "40px",
              }}
            >
              {service.icon}
              <Typography
                variant="h6"
                sx={{ marginLeft: "8px", fontFamily: "Rawline ExtraLight" }}
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

export default CardServicosParceiros;
