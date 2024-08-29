import React from "react";

import { AuthProvider } from "./contexts/AuthContext";
import { useScrollToTop } from "./hooks/use-scroll-to-top";
import AppRoutes from "./routes/Routes";
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
