import React from "react";
import { Outlet, Route, Routes, useRoutes } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";
import DashboardLayout from "./dashboard";
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import NotFound from "./NotFound";
import Profile from "./Profile";
import Register from "./Register";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/register"
        element={<Register />}
      />
      <Route
        path="*"
        element={<Login />}
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
      element: (
        <DashboardLayout>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </React.Suspense>
        </DashboardLayout>
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
