import React from "react";
import { Helmet } from "react-helmet-async";

import Profile from "../components/Profile";

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> Perfil </title>
      </Helmet>

      <Profile />
    </>
  );
}
