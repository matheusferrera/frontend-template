import React from "react";
import { Route, Routes } from "react-router-dom";

import PageContatosAdmin from "../pages/admin/contatos/index";
import PageMensagensAdmin from "../pages/admin/mensagens";
import PageHomeUser from "../pages/user/home";

const UserRoutes = () => (
  <Routes>
    <Route
      path="/home"
      element={<PageHomeUser />}
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

export default UserRoutes;
