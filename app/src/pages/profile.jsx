import React from "react";
import { Helmet } from "react-helmet-async";

import Profile from "../components/Profile";

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <Profile />
    </>
  );
}
