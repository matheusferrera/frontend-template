import React from "react";

import { Grid } from "@mui/material";

import PageLayout from "../../../components/page/PageLayout"; // ajuste o caminho conforme necessário
import CardAddContato from "./CardAddContato";
import TableContatos from "./TableContatos";

const PageContatosAdmin = () => {
    return (
        <PageLayout title="Usuarios">
            <Grid item xs={12}>
                <CardAddContato />
            </Grid>
            <Grid item xs={12}>
                <TableContatos />
            </Grid>
        </PageLayout>
    );
};


export default PageContatosAdmin;