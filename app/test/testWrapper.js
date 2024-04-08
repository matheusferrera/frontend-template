import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import PropTypes from "prop-types";

import { AuthProvider } from "../src/contexts/AuthContext";
import { NavContentProvider } from "../src/contexts/NavContentContext";
import ThemeProvider from "../src/theme";

export const TestWrapper = ({ children }) => {
  return (
    <AuthProvider>
        <NavContentProvider>
          <ThemeProvider>
            <Router>{children}</Router>
          </ThemeProvider>
        </NavContentProvider>
    </AuthProvider>
  );
};

TestWrapper.propTypes = {
  children: PropTypes.element,
};
