import React from "react";
import { Helmet } from "react-helmet-async";

import Login from "../components/Login";

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Login | Minimal UI </title>
      </Helmet>

      <Login />
    </>
  );
}
