import React from "react";

import { Card, CardContent, Grid, Typography } from "@mui/material";

const CardVisaoGeral = () => {
  return (
    <Grid
      container
    >

      <Grid
        item
        key="1"
      >
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
              5
            </Typography>
            <Typography variant="subtitle1">Mock</Typography>
          </CardContent>
        </Card>
      </Grid>
      )
    </Grid >
  );
};

export default CardVisaoGeral;
