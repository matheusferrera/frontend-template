import React from "react";

import { Grid } from "@mui/material";

import PageLayout from "../../../components/page/PageLayout"; // ajuste o caminho conforme necessário
import CardAddMensagem from "./CardAddMensagem";
import TableMensagem from "./TableMensagem";

const PageMensagensAdmin = () => {
    return (
        <PageLayout title="Contatos">
            <Grid item xs={12}>
                <CardAddMensagem />
            </Grid>
            <Grid item xs={12}>
                <TableMensagem />
            </Grid>
        </PageLayout>
    );
};


export default PageMensagensAdmin;