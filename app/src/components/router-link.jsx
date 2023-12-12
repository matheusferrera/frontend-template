import React from "react";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

// ----------------------------------------------------------------------

const RouterLink = forwardRef(({ href, ...other }, ref) => (
  <Link
    ref={ref}
    to={href}
    {...other}
  />
));

RouterLink.propTypes = {
  href: PropTypes.string,
};

RouterLink.displayName = "RouterLink";

export default RouterLink;
