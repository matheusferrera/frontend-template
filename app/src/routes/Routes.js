import React from "react";
import { Outlet, Route, Routes, useRoutes } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";
import NotFound from "../pages/NotFound";
import PageLogin from "../pages/PageLogin";
import AdminRoutes from "./adminRoutes";
import { DashboardLayoutWithSuspense, NoDashboardLayout } from "./RoutesLayout";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<PageLogin />}
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

  console.log("USER -> ", user.user_type)

  let profileRoutes;

  switch (user.user_type) {
    case "admin":
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
