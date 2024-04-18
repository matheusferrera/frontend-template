import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import PropTypes from "prop-types";

import { AuthProvider } from "../src/contexts/AuthContext";
import ThemeProvider from "../src/theme";

export const TestWrapper = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>{children}</Router>
      </ThemeProvider>
    </AuthProvider>
  );
};

TestWrapper.propTypes = {
  children: PropTypes.element,
};
