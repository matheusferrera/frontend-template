import React from "react";
import { Helmet } from "react-helmet-async";

import Cidadao from "../components/Cidadao";
// ----------------------------------------------------------------------

export default function CidadaoPage() {
  return (
    <>
      <Helmet>
        <title> Cidadão </title>
      </Helmet>

      <Cidadao />
    </>
  );
}
