import React, { useState } from "react";

import ReplyIcon from '@mui/icons-material/Reply';
import { Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, Typography } from "@mui/material";

import UploadTable from "../../../components/uploadTable/UploadTable";

export default function CardAddMensagem() {
    const [open, setOpen] = useState(false);
    const [titulo, setTitulo] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [telefone, setTelefone] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSend = () => {
        // Adicione a lógica de envio da mensagem aqui
        console.log("Título:", titulo);
        console.log("Mensagem:", mensagem);
        setOpen(false);
    };

    return (
        <>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="div">
                        Adicionar mensagem a fila de mensagens
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.disabled">
                        Toda mensagem é inserida na fila de mensagem, para evitar disparo massivo de mensagens
                    </Typography>
                    <Typography variant="body2">
                        É possivel enviar uma unica mensagem à um contato, ou então importar uma tabela para enviar para diversos contatos
                    </Typography>
                </CardContent>
                <CardActions>
                    <Grid container>
                        <Grid item>
                            <Button
                                color="primary"
                                startIcon={<ReplyIcon />}
                                onClick={handleClickOpen}
                            >
                                Enviar individualmente
                            </Button>
                        </Grid>
                        <Grid item>
                            <UploadTable />
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Enviar mensagem individualmente</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ mb: 2 }}>
                        Aqui você pode enviar uma mensagem única para um contato específico.
                        Escolha um titulo para organizar o envio das mensagens
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Título"
                        type="text"
                        sx={{ mr: 2 }}
                        variant="outlined"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Telefone"
                        type="text"
                        variant="outlined"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        label="Mensagem"
                        type="text"
                        fullWidth
                        variant="outlined"
                        multiline
                        rows={4}
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={handleSend} color="primary">
                        Enviar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
