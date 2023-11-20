import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import BoardUser from "./BoardUser";
import BoardModerator from "./BoardModerator";
import BoardAdmin from "./BoardAdmin";
import NotFound from "./NotFound";

const AppRoutes = () => {
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
        element={<Login />}
      />
      <Route
        path="/register"
        element={<Register />}
      />
      <Route
        path="/profile"
        element={<Profile />}
      />
      <Route
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
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
};

export default AppRoutes;
