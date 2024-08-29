import React from "react";
import { Suspense } from "react";

import PropTypes from "prop-types";

import DashboardLayout from "../theme/dashboard";

/**
 * Dashboard layout with suspense.
 *
 * @param {object} children - The children components to be rendered within the layout.
 * @return {JSX.Element} The rendered dashboard layout with suspense.
 */
export const DashboardLayoutWithSuspense = ({ children }) => (
  <DashboardLayout>
    <Suspense fallback={<div>Carregando...</div>}>{children}</Suspense>
  </DashboardLayout>
);

DashboardLayoutWithSuspense.propTypes = {
  children: PropTypes.node,
};

/**
 * Function to render children without dashboard layout.
 *
 * @param {object} children - The children to be rendered.
 * @return {JSX.Element} The rendered React component.
 */
export const NoDashboardLayout = ({ children }) => (
  <React.Fragment>
    <Suspense fallback={<div>Carregando...</div>}>{children}</Suspense>
  </React.Fragment>
);

NoDashboardLayout.propTypes = {
  children: PropTypes.node,
};
