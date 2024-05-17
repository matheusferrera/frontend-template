import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

import BackupTableIcon from "@mui/icons-material/BackupTable";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import {
  Grid,
  IconButton,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import { utils as XLSXUtils, writeFile as writeXLSXFile } from "xlsx";

export default function DefaultTable({ rows, columns, hiddenRows }) {
  const theme = useTheme();

  const [expandedRows, setExpandedRows] = useState([]);
  const [page, setPage] = React.useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleArrowClick = index => {
    const newExpandedRows = [...expandedRows];
    if (newExpandedRows.includes(index)) {
      newExpandedRows.splice(newExpandedRows.indexOf(index), 1);
    } else {
      newExpandedRows.push(index);
    }
    setExpandedRows(newExpandedRows);
  };

  const handleDownloadCSV = (data, visibleColumns) => {
    let csvDataHead = visibleColumns.join(";");
    csvDataHead = csvDataHead + "\n";

    // Code to download data as CSV
    const csvDataBody = data.map(row => visibleColumns.map(column => row[column]).join(";")).join("\n");

    const csvData = csvDataHead + csvDataBody;

    const blob = new Blob([csvData], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "dados_tabela.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleDownloadExcel = data => {
    // Code to download data as XLSX
    // For simplicity, let's assume data is already filtered

    // Convert data to XLSX format
    const worksheet = XLSXUtils.json_to_sheet(data);
    const workbook = XLSXUtils.book_new();
    XLSXUtils.book_append_sheet(workbook, worksheet, "Dados Parceiros");

    // Save the workbook as an XLSX file
    writeXLSXFile(workbook, "dados_parceiro.xlsx");
  };

  const tableRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Lista de Parceiros Pendentes",
    onAfterPrint: () => console.log("Printing completed"),
  });

  const componentRef = useRef();

  return (
    <TableContainer
      component={Paper}
      ref={tableRef}
    >
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((objColumn, index) => (
              <TableCell
                sx={objColumn.sxProps}
                key={index + "_" + objColumn.headerName}
              >
                {objColumn.headerName}
              </TableCell>
            ))}
            <TableCell align="right">
              <Tooltip title="Download da tabela em CSV">
                <IconButton
                  color="primary"
                  onClick={() =>
                    handleDownloadCSV(
                      rows,
                      columns.map(column => column.field),
                    )
                  }
                >
                  <SimCardDownloadIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Download da tabela em EXCEL">
                <IconButton
                  color="primary"
                  onClick={() => handleDownloadExcel(rows)}
                >
                  <BackupTableIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Imprimir tabela">
                <IconButton
                  color="primary"
                  onClick={() => handlePrint()}
                >
                  <LocalPrintshopIcon />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        </TableHead>
        {rows.length != 0 ? (
          <>
            {rows.slice(5 * (page - 1), 5 * page).map((objRow, index) => (
              <TableBody key={index + "_tbody"}>
                <TableRow key={index + "_TableRow"}>
                  {/* Verifica quais valores em rows estao presentes no array de columns, para exibir somente os valores explicitados */}
                  {columns
                    // eslint-disable-next-line no-prototype-builtins
                    .filter(column => objRow.hasOwnProperty(column.field))
                    .sort((a, b) => columns.indexOf(a) - columns.indexOf(b))
                    .map(column => (
                      <TableCell key={index + "_" + column.field}>{objRow[column.field]}</TableCell>
                    ))}
                  {/* Verifica se possui hiddenRows para exibir o dropDown */}
                  {hiddenRows && (
                    <TableCell align="right">
                      <Tooltip title="Detalhes do item">
                        <IconButton
                          color="primary"
                          onClick={() => handleArrowClick(index)}
                        >
                          {expandedRows.includes(index) ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  )}
                </TableRow>
                {expandedRows.includes(index) && (
                  <TableRow key={index + "_HiddenRows"}>
                    <TableCell
                      colSpan={10}
                      style={{ backgroundColor: theme.palette.grey[200] }}
                    >
                      <Grid>
                        <Grid
                          container
                          spacing={2}
                        >
                          <React.Fragment key={index + "_HiddenRows_div"}>
                            {/* Itera sobre o o object de uma posicao do array */}
                            {Object.entries(hiddenRows[index]).map(([key, value]) => (
                              <Grid
                                key={index + "_HiddenRows_grid"}
                                item
                                xs={3}
                              >
                                <a style={{ fontFamily: "Rawline Bold" }}>{key}</a>
                                <p style={{ fontFamily: "Rawline Medium" }}>{value}</p>
                              </Grid>
                            ))}

                            {(index + 1) % 4 === 0 && (
                              <Grid
                                item
                                xs={12}
                              >
                                <div
                                  key={index + "_divider"}
                                  style={{ borderBottom: "1px solid", borderColor: theme.palette.grey[600] }}
                                ></div>
                              </Grid>
                            )}
                          </React.Fragment>
                        </Grid>
                      </Grid>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            ))}
          </>
        ) : (
          <TableBody>
            <TableRow>
              <TableCell colSpan={5}>Não foi localizado Parceiro na situação pendente de aprovação!</TableCell>
            </TableRow>
          </TableBody>
        )}
      </Table>
      <div style={{ borderTop: "1px solid #d3d3d3", padding: "15px", display: "flex", justifyContent: "center" }}>
        <Pagination
          page={page}
          count={Math.ceil(rows.length / 5)}
          color="primary"
          onChange={handlePageChange}
        />
      </div>

      {/* CRIANDO TEMPLATE DA TABELA DE IMPRESSA */}
      <div style={{ display: "none" }}>
        <TableContainer
          component={Paper}
          ref={componentRef}
        >
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((objColumn, index) => (
                  <TableCell
                    sx={objColumn.sxProps}
                    key={index + "_" + objColumn.headerName + "_template"}
                  >
                    {objColumn.headerName}
                  </TableCell>
                ))}
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            {rows.length != 0 ? (
              <>
                {rows.map((objRow, index) => (
                  <TableBody key={index + "_tbody" + "_template"}>
                    <TableRow key={index + "_TableRow" + "_template"}>
                      {/* Verifica quais valores em rows estao presentes no array de columns, para exibir somente os valores explicitados */}
                      {columns
                        // eslint-disable-next-line no-prototype-builtins
                        .filter(column => objRow.hasOwnProperty(column.field))
                        .sort((a, b) => columns.indexOf(a) - columns.indexOf(b))
                        .map(column => (
                          <TableCell key={index + "_" + column.field + "_template"}>{objRow[column.field]}</TableCell>
                        ))}
                      {/* Verifica se possui hiddenRows para exibir o dropDown */}
                      {hiddenRows && (
                        <TableCell align="right">
                          <Tooltip title="Detalhes do item">
                            <IconButton
                              color="primary"
                              onClick={() => handleArrowClick(index)}
                            >
                              {expandedRows.includes(index) ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                      )}
                    </TableRow>
                    <TableRow
                      key={index + "_HiddenRows" + "_template"}
                      style={{ borderBottom: "2px solid grey" }}
                    >
                      <TableCell
                        colSpan={10}
                        style={{ backgroundColor: theme.palette.grey[200] }}
                      >
                        <Grid>
                          <Grid
                            container
                            spacing={2}
                          >
                            <React.Fragment key={index + "_HiddenRows_div" + "_template"}>
                              {/* Itera sobre o o object de uma posicao do array */}
                              {Object.entries(hiddenRows[index]).map(([key, value]) => (
                                <Grid
                                  key={index + "_HiddenRows_grid" + "_template" + value}
                                  item
                                  xs={3}
                                >
                                  <a style={{ fontFamily: "Rawline Bold" }}>{key}</a>
                                  <p style={{ fontFamily: "Rawline Medium" }}>{value}</p>
                                </Grid>
                              ))}

                              {(index + 1) % 4 === 0 && (
                                <Grid
                                  item
                                  xs={12}
                                >
                                  <div
                                    key={index + "_divider" + "_template"}
                                    style={{ borderBottom: "1px solid", borderColor: theme.palette.grey[600] }}
                                  ></div>
                                </Grid>
                              )}
                            </React.Fragment>
                          </Grid>
                        </Grid>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                ))}
              </>
            ) : (
              <TableBody>
                <TableRow>
                  <TableCell colSpan={5}>Não foi localizado Parceiro na situação pendente de aprovação!</TableCell>
                </TableRow>
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </div>
    </TableContainer>
  );
}

// Add prop types validation
DefaultTable.propTypes = {
  rows: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  hiddenRows: PropTypes.array,
};
