import React from "react";

import AppRoutes from "./components/routes/Routes";
import { AuthProvider } from "./contexts/AuthContext";
import { useScrollToTop } from "./hooks/use-scroll-to-top";
import ThemeProvider from "./theme";

import "simplebar-react/dist/simplebar.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/fonts/style.css";

const App = () => {
  useScrollToTop();
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
