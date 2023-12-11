import React from "react";

import NavBar from "./components/NavBar";
import AppRoutes from "./components/Routes";
import { AuthProvider } from "./contexts/AuthContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <div>
        <NavBar />

        <div className="container mt-3">
          <AppRoutes />
        </div>
      </div>
    </AuthProvider>
  );
};

export default App;
