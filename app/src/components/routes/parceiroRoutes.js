import React from "react";
import { Route, Routes } from "react-router-dom";

import FAQ from "../../pages/FAQ";
import NotFound from "../../pages/NotFound";
import PageHomeParceiro from "../../pages/parceiro/PageHomeParceiro";
import PageNovaInscricaoParceiro from "../../pages/parceiro/PageNovaInscricaoParceiro";
import PageVisualizacaoParceiro from "../../pages/parceiro/PageVisualizacaoParceiro";
import Profile from "../../pages/Profile";

const ParceiroRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={<PageHomeParceiro />}
    />
    <Route
      path="/home"
      element={<PageHomeParceiro />}
    />
    <Route
      path="/profile"
      element={<Profile />}
    />
    <Route
      path="/parceiro/cadastro"
      element={<PageNovaInscricaoParceiro />}
    />
    <Route
      path="/parceiro/visualizar"
      element={<PageVisualizacaoParceiro />}
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

export default ParceiroRoutes;
