import React from "react";

import { Box, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

import { useResponsive } from "../../hooks/use-responsive";

const CardPrimario = ({ title, content, imageUrl }) => {
  const theme = useTheme();

  const lgUp = useResponsive("up", "lg");

  return (
    <Card sx={{ marginTop: "16px" }}>
      <Box sx={{ display: "flex" }}>
        <CardHeader
          title={
            <Typography
              variant="h2"
              sx={{
                textTransform: "uppercase",
                fontWeight: 700,
                lineHeight: "normal",
                width: lgUp ? "600px" : undefined,
              }}
            >
              {title}
            </Typography>
          }
          sx={{
            background: theme.palette.primary.main,
            color: "white",
            paddingTop: "16px",
            paddingBottom: "16px",
            flex: "1",
          }}
        />
        {lgUp && (
          <CardMedia
            component="img"
            alt="Custom Card Image"
            height="250"
            src={imageUrl}
            sx={{
              background: theme.palette.primary.main,
              objectFit: "fill",
              width: "450px",
            }}
          />
        )}
      </Box>
      <CardContent
        sx={{
          background: "white",
          boxShadow: "0px 1px 6px 0px rgba(51, 51, 51, 0.16)",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: 600,
            lineHeight: "normal",
          }}
        >
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

CardPrimario.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default CardPrimario;
