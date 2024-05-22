import React from "react";
import { Route, Routes } from "react-router-dom";

import PageCurriculo from "../../pages/cidadao/PageCurriculo";
import PageEditarPerfil from "../../pages/cidadao/PageEditarPerfilCidadao";
import PageHomeCidadao from "../../pages/cidadao/PageHomeCidadao";
import PageVisualizarCurriculo from "../../pages/cidadao/PageVisualizarCurriculo";
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
      path="/editar-perfil"
      element={<PageEditarPerfil />}
    />

    <Route
      path="/vagas-de-trabalho/curriculo"
      element={<PageCurriculo />}
    />
    <Route
      path="/vagas-de-trabalho/visualizar-curriculo"
      element={<PageVisualizarCurriculo />}
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
