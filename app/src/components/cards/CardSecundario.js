import React from "react";

import { Box, Card, CardContent, CardMedia, Stack, Typography, useTheme } from "@mui/material";
import PropTypes from "prop-types";

import { useResponsive } from "../../hooks/use-responsive";

const CardSecundario = ({ title, subtitle, description, backgroundColor, imageUrl }) => {
  const theme = useTheme();

  const lgUp = useResponsive("up", "lg");

  return (
    <Card>
      <CardContent
        sx={{
          backgroundColor: backgroundColor || theme.palette.primary.main,
          color: "white",
          boxShadow: "0px 1px 6px 0px rgba(51, 51, 51, 0.16)",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "20px",
          paddingBottom: "20px !important",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 0, sm: 2 }}
          alignItems={{ xs: "flex-start", sm: "center" }}
        >
          <Typography
            variant="h3"
            sx={{ fontSize: "4rem !important" }}
          >
            {title}
          </Typography>

          <Box>
            <Typography variant="h5">{subtitle}</Typography>

            <Typography variant="body1">{description}</Typography>
          </Box>
        </Stack>
        {imageUrl && (
          <CardMedia
            component="img"
            alt="Custom Card Image"
            height="90px"
            src={imageUrl}
            sx={{
              background: backgroundColor || theme.palette.primary.main,
              objectFit: "fill",
              width: lgUp ? "90px" : "200px",
              padding: "0px !important",
            }}
          />
        )}
      </CardContent>
    </Card>
  );
};

CardSecundario.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default CardSecundario;
