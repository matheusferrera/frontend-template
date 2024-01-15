import React from "react";
import { Helmet } from "react-helmet-async";

import Parceiro from "../components/Parceiro";
// ----------------------------------------------------------------------

export default function ParceiroPage() {
  return (
    <>
      <Helmet>
        <title> Parceiro </title>
      </Helmet>

      <Parceiro />
    </>
  );
}
