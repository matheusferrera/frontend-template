import React from "react";

import { Card, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";


export default function TableMensagem() {

    const columns = [
        { field: 'name', headerName: 'Nome completo' },
        { field: 'phone', headerName: 'Telefone' },
        { field: 'type', headerName: 'Nome da fila' },
    ];

    const rows = [
        { id: 1, name: 'Matheus Ferreira', type: "Aviso gincana", phone: "(61)98250-1719" },
        { id: 2, name: 'Felipe Almeida', type: "Falta", phone: "(61)98233-2139" },
        { id: 3, name: 'Ana Andrade', type: "Aviso Reunião de pais", phone: "(61)98252-3319" },
        { id: 4, name: 'Julia Silva', type: "Aviso Reunião de pais" },
        { id: 5, name: 'João Cardoso', type: "Aviso gincana" },
        { id: 6, name: 'Matheus Henrique', type: "Aviso gincana" },

    ];

    const theme = useTheme()

    return (
        <Card variant="outlined" >
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                fullWidth
                sx={{
                    "& .MuiDataGrid-columnHeader": {
                        color: "black",
                        backgroundColor: theme.palette.grey[400]
                    },
                    "& .MuiDataGrid-filler": {
                        backgroundColor: theme.palette.grey[400]
                    },
                    "& .MuiSvgIcon-root": {
                        color: "black"
                    }
                }}
                checkboxSelection
            />
        </Card>
    );
}