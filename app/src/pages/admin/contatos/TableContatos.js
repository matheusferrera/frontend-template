import React from "react";

import { Card, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";


export default function TableContatos() {

    const columns = [
        { field: 'name', headerName: 'Nome completo', width: 130 },
        { field: 'year', headerName: 'Ano', width: 130 },
        { field: 'type', headerName: 'Tipo', width: 100 },
        { field: 'phone', headerName: 'Telefone', width: 200 },
    ];

    const rows = [
        { id: 1, name: 'Matheus Ferreira', year: '9-C', type: "Aluno", phone: "(61)98250-1719" },
        { id: 2, name: 'Felipe Almeida', year: '8-A', type: "Responsável", phone: "(61)98233-2139" },
        { id: 3, name: 'Ana Andrade', year: '8-A', type: "Responsável", phone: "(61)98252-3319" },
        { id: 4, name: 'Julia Silva', year: '9-C', type: "Professor" },
        { id: 5, name: 'João Cardoso', year: '7-B', type: "Aluno" },
        { id: 6, name: 'Matheus Henrique', year: '6-D', type: "Aluno" },

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