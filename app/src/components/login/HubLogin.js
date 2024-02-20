import React from "react";

import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const CardButton = ({ icon, title, onClick, path }) => {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      href={path}
      sx={{
        width: 300,
        height: 200,
        flexDirection: "column",
        justifyContent: "center",
        bgcolor: "background.paper",
        borderRadius: 2,
      }}
    >
      {icon}
      <Typography
        variant="h4"
        sx={{
          color: "common.black",
        }}
      >
        {title}
      </Typography>
    </Button>
  );
};

CardButton.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  onClick: PropTypes.func,
  path: PropTypes.string,
};

const HubLogin = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ height: "80vh", display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          width: "100%",
        }}
      >
        <CardButton
          icon={<PeopleIcon sx={{ fontSize: 64 }} />}
          title="Login Parceiro"
          path="/parceiro_login"
        />
        <CardButton
          icon={<ManageAccountsIcon sx={{ fontSize: 64 }} />}
          title="Login Admin"
          path="/admin_login"
        />
        <CardButton
          icon={<PersonIcon sx={{ fontSize: 64 }} />}
          title="Login Cidadão"
          path="/cidadao_login"
        />
      </Box>
    </Container>
  );
};

export default HubLogin;
