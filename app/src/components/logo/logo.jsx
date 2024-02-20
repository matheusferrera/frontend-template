import React from "react";
import { forwardRef } from "react";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import PropTypes from "prop-types";

import progredirLogo from "../../assets/images/02_VERSÕES_h_1.png";
import RouterLink from "../dashboard/router-link";
// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const logo = (
    <Box
      ref={ref}
      component="img"
      src={progredirLogo}
      sx={{ width: 49, height: 50, cursor: "pointer", ...sx }}
      {...other}
    />
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link
      component={RouterLink}
      href="/"
      sx={{ display: "flex", justifyContent: "center" }}
    >
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

Logo.displayName = "Logo";

export default Logo;
