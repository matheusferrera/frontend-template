import React from "react";

import { Container, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";



export default function PageLayout({ title, children }) {

    return (
        <Container
            maxWidth="lg"

        >
            <Grid container  >
                <Grid item xs={12} sx={{ mb: 3 }}>


                    <Typography
                        variant="h3"
                    >
                        {title}
                    </Typography>
                </Grid>
                <Grid item container spacing={2}>
                    {children}
                </Grid>
            </Grid>
        </Container>
    );
}

PageLayout.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string
};
