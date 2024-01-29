import React from "react";

import { Box, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

const CardSecundario = ({ title, subtitle, description, backgroundColor, imageUrl }) => {
  return (
    <Card>
      <CardContent
        sx={{
          backgroundColor: backgroundColor || "primary.main",
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
            variant="h1"
            sx={{ fontWeight: 700 }}
          >
            {title}
          </Typography>

          <Box>
            <Typography variant="h3">{subtitle}</Typography>

            <Typography
              variant="h6"
              sx={{ fontWeight: "normal" }}
            >
              {description}
            </Typography>
          </Box>
        </Stack>
        {imageUrl && (
          <CardMedia
            component="img"
            alt="Imagem do CardMedia"
            height="120px"
            src={imageUrl}
            sx={{
              background: backgroundColor || "primary.main",
              objectFit: "fill",
              width: "auto !important",
              padding: "0px !important",
              minWidth: "70px",
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
