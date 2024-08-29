import React from "react";
import { Route, Routes } from "react-router-dom";

import PageHomeCidadao from "../pages/cidadao/PageHomeCidadao";

const CidadaoRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={<PageHomeCidadao />}
    />
  </Routes>
);

export default CidadaoRoutes;
