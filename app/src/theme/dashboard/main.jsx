import React from "react";

import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

import { useResponsive } from "../../hooks/use-responsive";
import { HEADER, NAV } from "./config-layout";
// ----------------------------------------------------------------------

const SPACING = 8;

export default function Main({ children, sx, ...other }) {
  const lgUp = useResponsive("up", "lg");
  const theme = useTheme();

  return (
    <Box
      component="main"
      style={{ backgroundColor: theme.palette.background.body }}
      sx={{
        flexGrow: 1,
        minHeight: 1,
        display: "flex",
        flexDirection: "column",
        py: `${HEADER.H_MOBILE + SPACING}px`,
        ...(lgUp && {
          paddingLeft: `calc(${NAV.WIDTH}px + 18px)`,
          py: `${HEADER.H_DESKTOP + SPACING}px`,
          width: `calc(100% - ${NAV.WIDTH}px)`,
        }),
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}

Main.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};
