import React from "react";
import { Route, Routes } from "react-router-dom";

import PageCreditoCfc from "../pages/cfc/credito";
import PageFaqCfc from "../pages/cfc/faq";
import PageHomeCfc from "../pages/cfc/home";
import PageProfile from "../pages/PageProfile";

const CfcRoutes = () => (
    <Routes>
        <Route
            path="/"
            element={<PageHomeCfc />}
        />
        <Route
            path="/credito"
            element={<PageCreditoCfc />}
        />
        <Route
            path="/faq"
            element={<PageFaqCfc />}
        />
        <Route
            path="/profile"
            element={<PageProfile />}
        />
    </Routes>
);

export default CfcRoutes;
