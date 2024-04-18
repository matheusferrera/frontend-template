import React from "react";
import { Outlet, Route, Routes, useRoutes } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";
import FAQ from "../../pages/FAQ";
import NotFound from "../../pages/NotFound";
import Activate from "../activate/Activate";
import HubLogin from "../login/HubLogin";
import Login from "../login/Login";
import Register from "../register/Register";
import AdminRoutes from "./adminRoutes";
import CidadaoRoutes from "./cidadaoRoutes";
import ParceiroRoutes from "./parceiroRoutes";
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
  const { user } = useAuth();
  const perfilUser = user?.ds_perfil_sso?.substring(2, user.ds_perfil_sso.length - 2);

  let profileRoutes;

  switch (perfilUser) {
    case "Servidor":
      profileRoutes = AdminRoutes();
      break;

    case "Parceiro":
      profileRoutes = ParceiroRoutes();
      break;

    case "Trabalhador":
      profileRoutes = CidadaoRoutes();
      break;

    default:
      profileRoutes = (
        <Routes>
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
      break;
  }

  return profileRoutes;
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
