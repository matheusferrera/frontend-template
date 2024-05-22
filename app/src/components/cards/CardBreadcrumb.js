import React from "react";

import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

import { useResponsive } from "../../hooks/use-responsive";

const CardBreadcrumb = ({ currentPage, links }) => {
  const lgUp = useResponsive("up", "lg");
  const theme = useTheme();

  if (!lgUp) {
    return null;
  }

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{ mt: 2 }}
      style={{ color: theme.palette.text.disabled, borderBottom: "1px solid #d3d3d3", paddingBottom: "5px" }}
      separator={<NavigateNextIcon fontSize="small" />}
    >
      <Link href={"/"}>
        <HomeIcon
          sx={{ color: theme.palette.primary.main }}
          style={{ cursor: "pointer" }}
          fontSize="inherit"
        />
      </Link>

      {links &&
        links.map((link, index) => (
          <Link
            key={index}
            underline="hover"
            style={{
              transition: "1s",
              display: "flex",
              alignItems: "center",
              color: "#d3d3d3",
              fontFamily: "Rawline Regular",
            }}
            href={link.href}
          >
            {link.text}
          </Link>
        ))}
      {currentPage && (
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
  currentPage: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
};

export default CardBreadcrumb;
