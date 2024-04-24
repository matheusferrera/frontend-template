import React from "react";
import { Route, Routes } from "react-router-dom";

import PageHomeAdm from "../../pages/admin/home.admin";
import PageParceirosPendentes from "../../pages/admin/listarParceirosPendentes";
import FAQ from "../../pages/FAQ";
import NotFound from "../../pages/NotFound";
import Profile from "../../pages/Profile";

const AdminRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={<PageHomeAdm />}
    />
    <Route
      path="/home"
      element={<PageHomeAdm />}
    />
    <Route
      path="/profile"
      element={<Profile />}
    />
    <Route
      path="/listar_parceiros_pendentes"
      element={<PageParceirosPendentes />}
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

export default AdminRoutes;
