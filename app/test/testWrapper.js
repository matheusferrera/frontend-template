import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import PropTypes from "prop-types";

import { AuthProvider } from "../src/contexts/AuthContext";
import { DataProvider } from "../src/contexts/DataContext";
import { NavContentProvider } from "../src/contexts/NavContentContext";

export const TestWrapper = ({ children }) => {
  return (
    <Router>
      <AuthProvider>
        <DataProvider>
          <NavContentProvider>{children}</NavContentProvider>
        </DataProvider>
      </AuthProvider>
    </Router>
  );
};

TestWrapper.propTypes = {
  children: PropTypes.element,
};
