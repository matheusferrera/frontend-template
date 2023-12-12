import React from "react";
import { Helmet } from "react-helmet-async";

import Home from "../components/Home";

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <Home />
    </>
  );
}
