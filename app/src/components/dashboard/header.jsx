import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";

import { useResponsive } from "../../hooks/use-responsive";
import { bgBlur } from "../../theme/css";
import AccountPopover from "../dashboard-common/account-popover";
import ThemeSwitcher from "../dashboard-common/theme-switcher";
import Iconify from "../iconify";
import Logo from "../logo";
import { HEADER, NAV } from "./config-layout";

// ----------------------------------------------------------------------

export default function Header({ onOpenNav }) {
  const theme = useTheme();

  const lgUp = useResponsive("up", "lg");

  const logoWidth = 50;
  const logoStyle = {
    ml: lgUp ? `calc((${NAV.WIDTH}px / 2) - ${logoWidth}px)` : undefined,
  };

  const renderContent = (
    <>
      <Logo sx={logoStyle} />

      {/* <Searchbar /> */}

      <Box sx={{ flexGrow: 1 }} />

      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
      >
        {/* <LanguagePopover /> */}
        <ThemeSwitcher />
        {/* <NotificationsPopover /> */}
        <AccountPopover />
      </Stack>

      {/* menu hamburguer fica à esquerda */}
      {!lgUp && (
        <IconButton
          onClick={onOpenNav}
          sx={{ ml: 1, color: "primary.main" }}
        >
          <Iconify icon="eva:menu-fill" />
        </IconButton>
      )}
    </>
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
          px: { lg: 5 },
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
