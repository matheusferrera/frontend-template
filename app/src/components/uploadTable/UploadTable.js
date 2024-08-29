import React, { useRef, useState } from "react";

import CloseIcon from '@mui/icons-material/Close';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, Button, Chip, Container, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material";
import Papa from 'papaparse'; // Para CSV
import * as XLSX from 'xlsx'; // Correção para XLS/XLSX

export default function UploadTable() {
    const [open, setOpen] = useState(false);
    const [fileName, setFileName] = useState("");
    const [error, setError] = useState("");
    const [jsonData, setJsonData] = useState([]);
    const fileInputRef = useRef(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setFileName("");
        setError("");
        setJsonData([]);
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const validExtensions = ['csv', 'xls', 'xlsx'];
            const fileExtension = file.name.split('.').pop().toLowerCase();

            if (validExtensions.includes(fileExtension)) {
                setFileName(file.name);
                setError("");
                processFile(file);
            } else {
                setFileName("");
                setError("Por favor, selecione um arquivo de tabela válido (.csv, .xls, .xlsx).");
            }
        }
    };

    const processFile = (file) => {
        const fileExtension = file.name.split('.').pop().toLowerCase();

        if (fileExtension === 'csv') {
            Papa.parse(file, {
                header: true,
                complete: (result) => {
                    setJsonData(result.data);
                },
                error: (err) => {
                    setError("Erro ao processar o arquivo CSV -", err);
                }
            });
        } else {
            const reader = new FileReader();
            reader.onload = (event) => {
                const data = new Uint8Array(event.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
                const headers = json.shift(); // Remove headers from data
                const formattedData = json.map(row => {
                    const rowObject = {};
                    headers.forEach((header, index) => {
                        rowObject[header] = row[index];
                    });
                    return rowObject;
                });
                setJsonData(formattedData);
            };
            reader.readAsArrayBuffer(file);
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <Container maxWidth="lg" sx={{ m: 0 }}>
            <Button
                color="primary"
                startIcon={<CloudUploadIcon />}
                onClick={handleClickOpen}
            >
                Upload da tabela
            </Button>

            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle>
                    Upload da Tabela
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        p={2}
                        sx={{ border: '2px dashed grey', borderRadius: 1, cursor: 'pointer' }}
                        onClick={handleButtonClick}
                    >
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: "none" }}
                            onChange={handleFileUpload}
                        />
                        <CloudUploadIcon sx={{ fontSize: 40, color: 'grey' }} />
                        <Typography variant="body1" sx={{ mt: 2, color: 'grey' }}>
                            {fileName ? `Arquivo selecionado: ${fileName}` : "Escolha um arquivo"}
                        </Typography>
                    </Box>
                    {error && (

                        <Chip
                            label={error}
                            color="error"
                            variant="outlined"
                            sx={{ width: '100%', mt: 2 }}
                        />

                    )}
                    {jsonData.length > 0 && (
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="h6">Dados JSON:</Typography>
                            <pre>{JSON.stringify(jsonData, null, 2)}</pre>
                        </Box>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">Cancelar</Button>
                    <Button onClick={handleClose} color="primary" disabled={!fileName}>Upload</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}
