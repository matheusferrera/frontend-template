import React from "react";
import { Route, Routes } from "react-router-dom";

import FAQ from "../../pages/FAQ";
import NotFound from "../../pages/NotFound";
import PageHomeParceiro from "../../pages/parceiro/home.parceiros";
import Profile from "../../pages/Profile";
import ListarParceiros from "../parceiro/ListarParceiros";
import VisualizacaoFormulario from "../parceiro/VisualizacaoFormulario";

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
      path="/parceiro/listar_parceiros"
      element={<ListarParceiros />}
    />
    <Route
      path="/parceiro/visualizar_formulario"
      element={<VisualizacaoFormulario />}
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
