import React from "react";

import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";

import UploadTable from "../../../components/uploadTable/UploadTable";


export default function CardAddContato() {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h5" component="div">
                    Adicione um novo contato
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.disabled">
                    Lembre-se que pode adicionar individualmente ou por lote (via tabela)
                </Typography>
                <Typography variant="body2">
                    Através dos contatos é possível enviar as mensagens via whatsapp. Lembre-se que cada contato necessita de um numero de telefone válido.
                </Typography>
            </CardContent>
            <CardActions>
                <Grid container>
                    <Grid item>
                        <Button
                            color="primary"
                            startIcon={<AddCircleIcon />}
                            onClick={() => null}
                        >
                            Adicionar individualmente
                        </Button>
                    </Grid>
                    <Grid item>
                        <UploadTable />
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    )
}