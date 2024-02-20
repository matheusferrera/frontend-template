import React from "react";

import { Card, CardContent, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";

const CardVisaoGeral = ({ services }) => {
  return (
    <Grid
      container
      spacing={1.5}
      mt={2}
    >
      {Object.entries(services).map(([title, number], index) => (
        <Grid
          item
          key={index}
        >
          {/* {service.hasChanged && (
            <Box
              sx={{
                position: "relative",
                width: "12px",
                height: "12px",
                backgroundColor: "primary.main",
                borderRadius: "50%",
                top: "10px",
                zIndex: 10,
              }}
            ></Box>
          )} */}
          <Card sx={{ borderRadius: "8px", boxShadow: "0px 1px 6px 0px rgba(51, 51, 51, 0.16)" }}>
            <CardContent
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                color: "primary.main",
                paddingTop: "6px",
                paddingBottom: "6px !important",
                gap: "8px",
                position: "relative",
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontSize: "22px" }}
              >
                {number}
              </Typography>
              <Typography variant="subtitle1">{title}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

CardVisaoGeral.propTypes = {
  services: PropTypes.any.isRequired
};
export default CardVisaoGeral;
