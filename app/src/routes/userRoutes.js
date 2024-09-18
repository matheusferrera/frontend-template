import React from "react";
import { Route, Routes } from "react-router-dom";

import PageProfile from "../pages/PageProfile";
import PageFaqUser from "../pages/user/faq";
import PageHomeUser from "../pages/user/home";

const UserRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={<PageHomeUser />}
    />
    <Route
      path="/faq"
      element={<PageFaqUser />}
    />
    <Route
      path="/profile"
      element={<PageProfile />}
    />
  </Routes>
);

export default UserRoutes;
