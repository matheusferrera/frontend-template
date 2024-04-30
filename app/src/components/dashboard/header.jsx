import React from "react";
import { Link } from "react-router-dom";

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
import { themeProvider } from "../../theme/index";
import Iconify from "../iconify";
import { HEADER } from "./config-layout";

// ----------------------------------------------------------------------

const TitleSistemas = styled.h1`
  font-family: "Rawline Medium";
  font-size: 18px;
  text-decoration: none;
  margin: 0;
`;

const SubTitleSistema = styled.h1`
  font-family: "Rawline Regular";
  font-size: 14px;
  text-decoration: none;
  margin: 0;
`;

const TitleUser = styled.h1`
  font-family: "Rawline Regular";
  font-size: 14px;
  text-decoration: none;
  margin: 0;
`;

const SubTitleUser = styled.h1`
  font-family: "Rawline Bold";
  font-size: 14px;
  text-decoration: none;
  margin: 0;
`;

const StyledStack = styled(Stack)`
  width: 100%;
`;

const IconHeader = styled(Iconify)`
  display: inline-block;
  width: 24px;
  height: 24px;
  font-size: 24px;
  vertical-align: middle;
`;

export default function Header({ onOpenNav }) {
  const theme = useTheme();
  const { toggleMode } = themeProvider();

  const lgUp = useResponsive("up", "lg");

  const { logout, user, token } = useAuth();

  function logoutFunction() {
    logout(token);
  }

  const renderContent = (
    <StyledStack
      direction="row"
      justifyContent="space-between"
    >
      <Stack
        direction="row"
        alignItems="flex-start"
      >
        {!lgUp ? (
          <IconButton
            onClick={onOpenNav}
            sx={{ color: theme.palette.primary.main }}
            style={{ transition: "1s" }}
          >
            <IconHeader
              icon="eva:menu-fill"
              sx={{ color: theme.palette.primary.main }}
              style={{ transition: "1s" }}
            />
          </IconButton>
        ) : (
          <Stack sx={{ ml: 1 }}></Stack>
        )}

        <Stack sx={{ g: 1 }}>
          <TitleSistemas style={{ color: theme.palette.text.primary, transition: "1s" }}>SISPRP</TitleSistemas>
          <SubTitleSistema style={{ color: theme.palette.text.primary, transition: "1s" }}>Programa de redução da pobreza</SubTitleSistema>
        </Stack>
      </Stack>

      {lgUp && (
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
        >
          <IconButton
            onClick={toggleMode}
            sx={{ ml: 1, color: theme => alpha(theme.palette.primary.main, 1) }}
          >
            <IconHeader
              icon="gg:drop-invert"
              sx={{ color: theme => alpha(theme.palette.primary.main, 1) }}
              style={{ transition: "1s" }}
            />
          </IconButton>

          <div style={{ height: "50%", width: "1px", border: "1px solid #b5b5b5" }}></div>

          <IconButton
            component={Link}
            to="/profile"
            sx={{ ml: 1, color: theme => alpha(theme.palette.primary.main, 1) }}
          >
            <IconHeader
              icon="mingcute:user-4-fill"
              sx={{ color: theme => alpha(theme.palette.primary.main, 1) }}
              style={{ transition: "1s" }}
            />
          </IconButton>

          <Stack>
            <TitleUser style={{ color: theme.palette.primary.main, transition: "1s" }}>Bem vindo</TitleUser>
            <SubTitleUser style={{ color: theme.palette.primary.main, transition: "1s" }}>{user?.no_usuario || "..."}</SubTitleUser>
          </Stack>

          <IconButton
            onClick={logoutFunction}
            sx={{ ml: 1, color: theme => alpha(theme.palette.primary.main, 1) }}
          >
            <IconHeader
              icon="ic:outline-logout"
              sx={{ color: theme => alpha(theme.palette.primary.main, 1) }}
              style={{ transition: "1s" }}
            />
          </IconButton>
        </Stack>
      )}
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
          backgroundColor: theme => alpha(theme.palette.text.secondary, 1),
          borderBottom: theme.palette.border.layout,
        }}
        style={{ transition: "1s" }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
