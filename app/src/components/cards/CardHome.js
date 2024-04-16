import React, { useState } from "react";

import { Box, Card, CardHeader, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

import { useResponsive } from "../../hooks/use-responsive";

const CardHome = ({ title, content, imageUrl }) => {
  const theme = useTheme();

  const lgUp = useResponsive("up", "lg");

  const [imageHeight, setImageHeight] = useState(null);
  const [imageWidth, setImageWidth] = useState(null);

  const handleImageLoad = event => {
    setImageHeight(event.target.clientHeight + "px");
    setImageWidth(event.target.clientWidth + "px");
  };

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
          alignItems: "start-flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "10px 10px",
          paddingLeft: "20px",
        }}
      >
        <Box>
          <CardHeader
            sx={{ padding: "0", paddingRight: imageWidth || "300px" }}
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

        <Grid sx={{ paddingRight: imageWidth, display: "flex", flexAlign: "row", gap: "7px" }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              lineHeight: "normal",
              fontFamily: "Rawline Thin",
              color: "black",
            }}
          >
            A situção do seu cadastro é
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              lineHeight: "normal",
              fontFamily: "Rawline Bold",
              color: "black",
            }}
          >
            {content}
          </Typography>
        </Grid>
      </Card>

      {lgUp && (
        <img
          alt="Imagem do Card"
          src={imageUrl}
          onLoad={handleImageLoad}
          style={{
            objectFit: "fill",
            position: "relative",
            left: `calc(99% - ${imageWidth})`,
            top: `-${imageHeight}`,
            overflowY: "hidden",
          }}
        />
      )}
    </div>
  );
};

CardHome.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  imageUrl: PropTypes.string,
  imageWidth: PropTypes.string,
  imageHeight: PropTypes.string,
  subContent: PropTypes.string,
};

export default CardHome;
