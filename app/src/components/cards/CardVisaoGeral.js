import React from "react";

import { Card, CardContent, Skeleton, Typography } from "@mui/material";
import PropTypes from "prop-types";

const CardVisaoGeral = ({ number, title }) => {
  return (
    <Card
      sx={{ borderRadius: "0px", border: "1px solid #9E9E9E", width: "max-content", height: "46px" }}
      style={{ transition: "1s" }}
    >
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
        <Typography sx={{ fontSize: "22px", fontWeight: "bold" }}>
          {number ? (
            number
          ) : (
            <Skeleton
              variant="circular"
              width={30}
              height={30}
            ></Skeleton>
          )}
        </Typography>
        <Typography
          sx={{ fontSize: "16px", fontWeight: "semi-bold" }}
          style={{ transition: "1s" }}
        >
          {title ? (
            title
          ) : (
            <Skeleton
              width={120}
              height={30}
            ></Skeleton>
          )}
        </Typography>
      </CardContent>
    </Card>
  );
};

CardVisaoGeral.propTypes = {
  number: PropTypes.number,
  title: PropTypes.string,
};
export default CardVisaoGeral;
