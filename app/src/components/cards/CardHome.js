import React, { useState } from "react";

import { Box, Card, CardHeader, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

import { useAuth } from "../../contexts/AuthContext";
import { useResponsive } from "../../hooks/use-responsive";

const CardHome = ({ title, content, imageUrl }) => {
  const theme = useTheme();
  const { user } = useAuth();
  const formatedDate = formatDate(user?.dh_criacao);

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
          background: theme.palette.background.paper,
          color: theme.palette.text.primary,
          border: theme.palette.border.card,
          borderRadius: "0px",
          height: "140px",
          display: "flex",
          alignItems: "start-flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "10px 10px",
          paddingLeft: "20px",
        }}
        style={{ transition: "1s" }}
      >
        <Box>
          <CardHeader
            sx={{ padding: "0", paddingRight: imageWidth || "300px" }}
            style={{ transition: "1s" }}
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
            style={{ transition: "1s" }}
            sx={{
              fontWeight: 600,
              lineHeight: "normal",
              fontFamily: "Rawline Thin",
              color: theme.palette.text.primary,
            }}
          >
            A situção do seu cadastro é
          </Typography>
          <Typography
            variant="h6"
            style={{ transition: "1s" }}
            sx={{
              fontWeight: 600,
              lineHeight: "normal",
              fontFamily: "Rawline Bold",
              color: theme.palette.text.primary,
            }}
          >
            {content}
          </Typography>
          <Typography
            variant="h6"
            style={{ transition: "1s" }}
            sx={{
              fontWeight: 600,
              lineHeight: "normal",
              fontFamily: "Rawline Thin",
              color: theme.palette.text.primary,
            }}
          >
            desde de
          </Typography>
          <Typography
            variant="h6"
            style={{ transition: "1s" }}
            sx={{
              fontWeight: 600,
              lineHeight: "normal",
              fontFamily: "Rawline Bold",
              color: theme.palette.text.primary,
            }}
          >
            {formatedDate}
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

function formatDate(isoDate) {
  // Parse the ISO date string
  const date = new Date(isoDate);

  // Extract day, month, and year
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = date.getFullYear();

  // Format the date as dd/mm/yyyy
  return `${day}/${month}/${year}`;
}
