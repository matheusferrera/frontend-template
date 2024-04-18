import React from "react";

import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useAuth } from "../../contexts/AuthContext";
import { useResponsive } from "../../hooks/use-responsive";
import { bgBlur } from "../../theme/css";
import Iconify from "../iconify";
import { HEADER } from "./config-layout";

// ----------------------------------------------------------------------

const TitleSistemas = styled.a`
  color: black;
  font-weight: 700;
  font-size: 18px;
  text-decoration: none;
`;

const SubTitleSistema = styled.a`
  color: black;
  font-weight: 400;
  font-size: 14px;
  text-decoration: none;
`;

const TitleUser = styled.a`
  color: #1351b4;
  font-weight: 400;
  font-size: 14px;
  text-decoration: none;
`;

const SubTitleUser = styled.a`
  color: #1351b4;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
`;

const StyledStack = styled(Stack)`
  width: 100%;
`;

const IconHeader = styled(Iconify)`
  color: #1351b4;
  display: inline-block;
  width: 24px;
  height: 24px;
  font-size: 24px;
  vertical-align: middle;
`;

export default function Header({ onOpenNav }) {
  const theme = useTheme();

  const lgUp = useResponsive("up", "lg");

  const { logout, user } = useAuth();

  function logoutFunction() {
    logout();
  }

  const renderContent = (
    <StyledStack
      direction="row"
      justifyContent="space-between"
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={3}
      >
        <IconButton
          onClick={onOpenNav}
          sx={{ ml: 1, color: theme => alpha(theme.palette.primary.dark, 1) }}
        >
          <IconHeader icon="eva:menu-fill" />
        </IconButton>
        <Stack>
          <TitleSistemas>Abreviação do sistema</TitleSistemas>
          <SubTitleSistema>Versão do sistema</SubTitleSistema>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
      >
        <IconButton
          onClick={onOpenNav}
          sx={{ ml: 1, color: theme => alpha(theme.palette.primary.dark, 1) }}
        >
          <IconHeader icon="gg:drop-invert" />
        </IconButton>

        <div style={{ height: "40%", width: "1px", border: "1px solid #9E9E9E" }}></div>

        <IconButton
          onClick={onOpenNav}
          sx={{ ml: 1, color: theme => alpha(theme.palette.primary.dark, 1) }}
        >
          <IconHeader icon="mingcute:user-4-fill" />
        </IconButton>

        <Stack>
          <TitleUser>Bem vindo</TitleUser>
          <SubTitleUser>{user?.no_usuario || "..."}</SubTitleUser>
        </Stack>

        <IconButton
          onClick={logoutFunction}
          sx={{ ml: 1, color: theme => alpha(theme.palette.primary.dark, 1) }}
        >
          <IconHeader icon="ic:outline-logout" />
        </IconButton>
      </Stack>
    </StyledStack>
  );

  return (
    <AppBar
      sx={{
        boxShadow: "0px 1px 6px 0px rgba(51, 51, 51, 0.16)",
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.common.white,
        }),
        transition: theme.transitions.create(["height"], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          height: HEADER.H_DESKTOP,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 2 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
