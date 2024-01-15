import React from "react";
import { Helmet } from "react-helmet-async";

import NotFound from "../components/NotFound";

// ----------------------------------------------------------------------

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title> 404 Página não encontrada </title>
      </Helmet>

      <NotFound />
    </>
  );
}
