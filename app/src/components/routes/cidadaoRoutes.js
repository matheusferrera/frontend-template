import React from "react";
import { Route, Routes } from "react-router-dom";

import PageHomeCidadao from "../../pages/cidadao/PageHomeCidadao";
import FAQ from "../../pages/FAQ";
import NotFound from "../../pages/NotFound";
import Profile from "../../pages/Profile";

const CidadaoRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={<PageHomeCidadao />}
    />
    <Route
      path="/home"
      element={<PageHomeCidadao />}
    />
    <Route
      path="/profile"
      element={<Profile />}
    />
    <Route
      path="/faq"
      element={<FAQ />}
    />
    <Route
      path="*"
      element={<NotFound />}
    />
  </Routes>
);

export default CidadaoRoutes;
