import React from "react";
import { Outlet, Route, Routes, useRoutes } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";
import Administrador from "./Administrador";
import Cidadao from "./Cidadao";
import Home from "./Home";
import HubLogin from "./HubLogin";
import Login from "./Login";
import Logout from "./Logout";
import NotFound from "./NotFound";
import Parceiro from "./Parceiro";
import Profile from "./Profile";
import Register from "./Register";
import { DashboardLayoutWithSuspense, NoDashboardLayout } from "./RoutesLayout";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route
        path="/parceiro_login"
        element={<Login redirectPath="/parceiro" />}
      />
      <Route
        path="/admin_login"
        element={<Login redirectPath="/admin" />}
      />
      <Route
        path="/cidadao_login"
        element={<Login redirectPath="/cidadao" />}
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
        element={<Administrador />}
      />
      <Route
        path="/parceiro"
        element={<Parceiro />}
      />
      <Route
        path="/cidadao"
        element={<Cidadao />}
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
