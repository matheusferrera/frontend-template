import React from "react";

import HomeIcon from "@mui/icons-material/Home";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import PropTypes from "prop-types";

import { useResponsive } from "../../hooks/use-responsive";

const CardBreadcrumb = ({ homeLink, homeText, currentPage }) => {
  const lgUp = useResponsive("up", "lg");

  if (!lgUp) {
    return null;
  }

  const isCurrentPagePresent = Boolean(currentPage);

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{ mt: 2 }}
    >
      <Link
        underline="hover"
        sx={{ display: "flex", alignItems: "center" }}
        color={isCurrentPagePresent ? "inherit" : "primary.main"}
        href={homeLink}
      >
        <HomeIcon
          sx={{ mr: 0.5 }}
          fontSize="inherit"
        />
        {homeText}
      </Link>
      {isCurrentPagePresent && (
        <Typography
          sx={{ display: "flex", alignItems: "center", fontSize: "inherit" }}
          color="primary.main"
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
