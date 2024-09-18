import React from "react";
import { Outlet, Route, Routes, useRoutes } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";
import NotFound from "../pages/NotFound";
import PageLogin from "../pages/PageLogin";
import PageRegister from "../pages/PageRegister";
import AdminRoutes from "./adminRoutes";
import CfcRoutes from "./cfcRoutes";
import { DashboardLayoutWithSuspense, NoDashboardLayout } from "./RoutesLayout";
import UserRoutes from "./userRoutes";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<PageLogin />}
      />
      <Route
        path="/register"
        element={<PageRegister />}
      />
      <Route
        path="*"
        element={<PageLogin />}
      />
    </Routes>
  );
};


//Checa o perfil do usuário
const ProtectedRoutes = () => {
  const { user } = useAuth();

  console.log("USER -> ", user)

  let profileRoutes;

  switch (user.tipouser) {
    case 1:
      profileRoutes = UserRoutes();
      break;
    case 2:
      profileRoutes = CfcRoutes();
      break;
    case 3:
      profileRoutes = AdminRoutes();
      break;

    default:
      profileRoutes = (
        <Routes>
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
  const { user } = useAuth();

  const routes = useRoutes([
    {
      element: user ? (
        <DashboardLayoutWithSuspense>
          <Outlet />
        </DashboardLayoutWithSuspense>
      ) : (
        <NoDashboardLayout>
          <Outlet />
        </NoDashboardLayout>
      ),
      children: [{ path: "*", element: user ? <ProtectedRoutes /> : <AuthRoutes /> }],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return routes;
};

export default AppRoutes;
