import React from "react";

import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

import { useResponsive } from "../../hooks/use-responsive";

const CardBreadcrumb = ({ homeLink, homeText, currentPage }) => {
  const lgUp = useResponsive("up", "lg");

  const theme = useTheme();

  if (!lgUp) {
    return null;
  }

  const isCurrentPagePresent = Boolean(currentPage);

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{ mt: 2 }}
      style={{ color: theme.palette.text.disabled, borderBottom: "1px solid #d3d3d3", paddingBottom: "5px" }}
      separator={<NavigateNextIcon fontSize="small" />}
    >
      <Link>
        <HomeIcon
          sx={{ color: theme.palette.primary.main }}
          fontSize="inherit"
        />
      </Link>
      <Link
        underline="hover"
        style={{
          transition: "1s",
          display: "flex",
          alignItems: "center",
          color: isCurrentPagePresent ? theme.palette.text.disabled : theme.palette.primary.main,
          fontFamily: isCurrentPagePresent ? "Rawline Medium" : "Rawline Bold",
        }}
        href={homeLink}
      >
        {homeText}
      </Link>
      {isCurrentPagePresent && (
        <Typography
          sx={{ display: "flex", alignItems: "center", fontSize: "inherit" }}
          color="primary.main"
          style={{ transition: "1s", fontFamily: "Rawline Bold" }}
        >
          {currentPage}
        </Typography>
      )}
    </Breadcrumbs>
  );
};

CardBreadcrumb.propTypes = {
  homeLink: PropTypes.string.isRequired,
  homeText: PropTypes.string.isRequired,
  currentPage: PropTypes.string,
};

export default CardBreadcrumb;
