import React from "react";
import { Route, Routes } from "react-router-dom";

import FAQ from "../../pages/FAQ";
import NotFound from "../../pages/NotFound";
import PageHomeParceiro from "../../pages/parceiro/home.parceiro";
import Profile from "../../pages/Profile";
import PageNovaInscricaoParceiro from "../parceiro/PageNovaInscricaoParceiro";
import PageVisualizacaoParceiro from "../parceiro/PageVisualizacaoParceiro";

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
      path="/parceiro/nova_inscricao"
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
