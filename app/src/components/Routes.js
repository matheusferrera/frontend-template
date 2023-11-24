import React from "react";
import { Routes, Route } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Logout from "./Logout";

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
      {/* <Route
        path="/user"
        element={<BoardUser />}
      />
      <Route
        path="/mod"
        element={<BoardModerator />}
      />
      <Route
        path="/admin"
        element={<BoardAdmin />}
      /> */}
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
};

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

const AppRoutes = () => {
  const { token } = useAuth();
  return token ? <ProtectedRoutes /> : <AuthRoutes />;
};

export default AppRoutes;
