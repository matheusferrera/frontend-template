import React from "react";
import { Helmet } from "react-helmet-async";

import Administrador from "../components/Administrador";
// ----------------------------------------------------------------------

export default function AdminPage() {
    return (
        <>
            <Helmet>
                <title> Administrador </title>
            </Helmet>

            <Administrador />
        </>
    );
}