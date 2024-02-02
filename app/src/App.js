import React from "react";

import AppRoutes from "./components/Routes";
import { AuthProvider } from "./contexts/AuthContext";
import { DataProvider } from "./contexts/DataContext";
import { useScrollToTop } from "./hooks/use-scroll-to-top";
import ThemeProvider from "./theme";

import "simplebar-react/dist/simplebar.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  useScrollToTop();
  return (
    <AuthProvider>
      <DataProvider>
        <ThemeProvider>
          <AppRoutes />
        </ThemeProvider>
      </DataProvider>
    </AuthProvider>
  );
};

export default App;
