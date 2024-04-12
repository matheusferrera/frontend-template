import React from "react";

import { Box, Card, CardHeader, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

import { useResponsive } from "../../hooks/use-responsive";

const CardPrimario = ({ title, content, subContent, imageUrl, imageWidth, imageHeight }) => {
  const theme = useTheme();

  const lgUp = useResponsive("up", "lg");

  return (
    <div style={{ height: "200px", marginTop: "-50px", paddingTop: "60px", overflowY: "hidden", borderBottom: "1px solid #9E9E9E" }}>
      <Card
        sx={{
          background: "white",
          color: "white",
          border: "1px solid #9E9E9E",
          borderRadius: "0px",
          height: "140px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box>
          <CardHeader
            sx={{ padding: "0", paddingLeft: "20px", paddingRight: "20px" }}
            title={
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  lineHeight: "normal",
                  color: theme.palette.primary.main,
                  fontFamily: "Rawline Bold",
                }}
              >
                {title}
              </Typography>
            }
          />
        </Box>

        <Grid sx={{ paddingRight: imageWidth }}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              lineHeight: "normal",
              fontFamily: "Rawline Medium",
              color: "black",
            }}
          >
            {content}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              lineHeight: "normal",
              fontFamily: "Rawline Thin",
              color: "black",
            }}
          >
            {subContent}
          </Typography>
        </Grid>
      </Card>

      {lgUp && (
        <img
          alt="Imagem do Card"
          height={imageHeight || "200"}
          src={imageUrl}
          style={{
            objectFit: "fill",
            width: imageWidth || "300px",
            position: "relative",
            left: imageWidth ? `calc(99% - ${imageWidth})` : "calc(99% - 300px)",
            top: imageHeight ? `-${imageHeight}` : "-200px",
            overflowY: "hidden",
          }}
        />
      )}
    </div>
  );
};

CardPrimario.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  imageUrl: PropTypes.string,
  imageWidth: PropTypes.string,
  imageHeight: PropTypes.string,
  subContent: PropTypes.string,
};

export default CardPrimario;
