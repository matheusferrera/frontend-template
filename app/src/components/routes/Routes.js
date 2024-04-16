import React from "react";
import { Outlet, Route, Routes, useRoutes } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";
import PageHomeAdm from "../../pages/admin/home.admin";
import PageHomeCidadao from "../../pages/cidadao/home.cidadao";
import PageHomeParceiro from "../../pages/parceiro/home.parceiros";
import Activate from "../activate/Activate";
import FAQ from "../FAQ";
import Home from "../Home";
import HubLogin from "../login/HubLogin";
import Login from "../login/Login";
import Logout from "../Logout";
import NotFound from "../NotFound";
import ListarParceiros from "../parceiro/ListarParceiros";
import VisualizacaoFormulario from "../parceiro/VisualizacaoFormulario";
import Profile from "../Profile";
import Register from "../register/Register";
import { DashboardLayoutWithSuspense, NoDashboardLayout } from "./RoutesLayout";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route
        path="/parceiro_login"
        element={<Login userRota="/parceiro" />}
      />
      <Route
        path="/admin_login"
        element={<Login userRota="/admin" />}
      />
      <Route
        path="/cidadao_login"
        element={<Login userRota="/cidadao" />}
      />
      <Route
        path="/login"
        element={<HubLogin />}
      />
      <Route
        path="/register"
        element={<Register />}
      />
      <Route
        path="/activate"
        element={<Activate />}
      />
      <Route
        path="/faq"
        element={<FAQ />}
      />
      <Route
        path="*"
        element={<HubLogin />}
      />
    </Routes>
  );
};

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/home"
        element={<Home />}
      />
      <Route
        path="/login"
        element={<Profile />}
      />
      <Route
        path="/register"
        element={<Profile />}
      />
      <Route
        path="/logout"
        element={<Logout />}
      />
      <Route
        path="/profile"
        element={<Profile />}
      />
      <Route
        path="/admin"
        element={<PageHomeAdm />}
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
        path="/parceiro"
        element={<PageHomeParceiro />}
      />
      <Route
        path="/cidadao"
        element={<PageHomeCidadao />}
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
};

const AppRoutes = () => {
  const { token } = useAuth();

  const routes = useRoutes([
    {
      element: token ? (
        <DashboardLayoutWithSuspense>
          <Outlet />
        </DashboardLayoutWithSuspense>
      ) : (
        <NoDashboardLayout>
          <Outlet />
        </NoDashboardLayout>
      ),
      children: [{ path: "*", element: token ? <ProtectedRoutes /> : <AuthRoutes /> }],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return routes;
};

export default AppRoutes;
