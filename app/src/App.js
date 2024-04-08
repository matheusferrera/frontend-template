import React from "react";

import AppRoutes from "./components/routes/Routes";
import { AuthProvider } from "./contexts/AuthContext";
import { NavContentProvider } from "./contexts/NavContentContext";
import { useScrollToTop } from "./hooks/use-scroll-to-top";
import ThemeProvider from "./theme";

import "simplebar-react/dist/simplebar.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  useScrollToTop();
  return (
    <AuthProvider>
      <NavContentProvider>
        <ThemeProvider>
          <AppRoutes />
        </ThemeProvider>
      </NavContentProvider>
    </AuthProvider>
  );
};

export default App;
