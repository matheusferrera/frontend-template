import React from "react";
import { Helmet } from "react-helmet-async";

import Register from "../components/Register";

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Registrar </title>
      </Helmet>

      <Register />
    </>
  );
}
