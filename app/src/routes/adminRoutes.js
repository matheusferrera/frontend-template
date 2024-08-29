import React from "react";
import { Route, Routes } from "react-router-dom";

import PageContatosAdmin from "../pages/admin/contatos/index";
import PageHomeAdm from "../pages/admin/home/index";
import PageMensagensAdmin from "../pages/admin/mensagens";

const AdminRoutes = () => (
  <Routes>
    <Route
      path="/home"
      element={<PageHomeAdm />}
    />
    <Route
      path="/usuarios"
      element={<PageContatosAdmin />}
    />
    <Route
      path="/mensagens"
      element={<PageMensagensAdmin />}
    />
  </Routes>
);

export default AdminRoutes;
