import React from "react";
import { Route, Routes } from "react-router-dom";

import PageComponents from "../../pages/admin/PageComponents";
import PageHomeAdm from "../../pages/admin/PageHomeAdmin";
import PageParceirosPendentes from "../../pages/admin/PageListarParceirosPendentes";
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
      path="/components"
      element={<PageComponents />}
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
