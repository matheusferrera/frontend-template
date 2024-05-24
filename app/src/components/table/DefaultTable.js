import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
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
import dayjs from "dayjs";
import PropTypes from "prop-types";
import { utils as XLSXUtils, writeFile as writeXLSXFile } from "xlsx";

import { useResponsive } from "../../hooks/use-responsive";

const defaultColumns = [
  { field: "primeira", headerName: "Primeira coluna" },
  { field: "segunda", headerName: "Segunda coluna" },
  { field: "terceira", headerName: "Terceira coluna" },
];

const defaultTermos = {
  primeira: "Primeira",
  segunda: "Segunda",
  terceira: "Terceira",
};

export default function DefaultTable({
  rows = [],
  columns = defaultColumns,
  hiddenRows = [],
  actionButtons = undefined,
  notFoundText = "Nenhum registro encontrado",
  termos = defaultTermos,
}) {
  const theme = useTheme();
  const isXs = useResponsive("down", "md");

  const [expandedRows, setExpandedRows] = useState([]);
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 5; // Define quantas linhas por página

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleArrowClick = globalIndex => {
    const newExpandedRows = [...expandedRows];
    if (newExpandedRows.includes(globalIndex)) {
      newExpandedRows.splice(newExpandedRows.indexOf(globalIndex), 1);
    } else {
      newExpandedRows.push(globalIndex);
    }
    setExpandedRows(newExpandedRows);
  };

  const handleDownloadCSV = data => {
    if (data.length === 0) {
      console.error("Sem dados para download");
      return;
    }

    // Extract all unique keys from the data
    const allColumns = Array.from(new Set(data.flatMap(row => Object.keys(row))));
    const csvDataHead = allColumns.map(key => (termos[key] ? termos[key] : key)).join(";") + "\n";

    const csvDataBody = data
      .map(row =>
        allColumns
          .map(column => {
            const value = row[column];
            if (Array.isArray(value)) {
              return value.join("; ");
            } else if (typeof value === "object" && value !== null) {
              return JSON.stringify(value);
            } else {
              return value !== undefined ? value : "";
            }
          })
          .join(";"),
      )
      .join("\n");

    const csvData = csvDataHead + csvDataBody;

    // Add BOM to ensure UTF-8 encoding
    const bom = "\uFEFF";
    const blob = new Blob([bom + csvData], { type: "text/csv;charset=utf-8;" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "dados_tabela.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleDownloadExcel = data => {
    const worksheet = XLSXUtils.json_to_sheet(data);
    const workbook = XLSXUtils.book_new();

    XLSXUtils.book_append_sheet(workbook, worksheet, "Dados Tabela");

    writeXLSXFile(workbook, "dados_tabela.xlsx");
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Lista de Dados Tabela",
    onAfterPrint: () => console.log("Printing completed"),
  });

  const componentRef = useRef();
  const tableRef = useRef();

  return (
    <TableContainer
      component={Paper}
      ref={tableRef}
    >
      <Table>
        <TableHead>
          <TableRow>
            {columns.length > 0 &&
              columns.map((objColumn, index) => (
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
                  onClick={() => handleDownloadCSV(rows)}
                >
                  <span className="material-icons">sim_card_download</span>
                </IconButton>
              </Tooltip>
              <Tooltip title="Download da tabela em EXCEL">
                <IconButton
                  color="primary"
                  onClick={() => handleDownloadExcel(rows)}
                >
                  <span className="material-icons">sim_card</span>
                </IconButton>
              </Tooltip>
              <Tooltip title="Imprimir tabela">
                <IconButton
                  color="primary"
                  onClick={() => handlePrint()}
                >
                  <span className="material-icons">print</span>
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        </TableHead>
        {rows && rows.length !== 0 ? (
          <>
            {rows.length > 0 &&
              rows.slice(rowsPerPage * (page - 1), rowsPerPage * page).map((objRow, localIndex) => {
                const globalIndex = rowsPerPage * (page - 1) + localIndex;
                return (
                  <TableBody key={globalIndex + "_tbody"}>
                    <TableRow key={globalIndex + "_TableRow"}>
                      {/* Verifica quais valores em rows estao presentes no array de columns, para exibir somente os valores explicitados */}
                      {columns
                        // eslint-disable-next-line no-prototype-builtins
                        .filter(column => objRow.hasOwnProperty(column.field))
                        .sort((a, b) => columns.indexOf(a) - columns.indexOf(b))
                        .map(column => (
                          <TableCell
                            key={globalIndex + "_" + column.field}
                            sx={column.sxRowProps}
                          >
                            {objRow[column.field]}
                          </TableCell>
                        ))}
                      <TableCell align="right">
                        {/* Verifica se tem action buttons para mostrá-los */}
                        {actionButtons && (
                          <ActionButtons
                            id={objRow.id}
                            actions={actionButtons.map(action => ({
                              ...action,
                              onClick: action.onClick ? (objRow.id ? () => action.onClick(objRow.id) : action.onClick) : undefined,
                            }))}
                          />
                        )}
                        {/* Verifica se possui hiddenRows para exibir o dropDown */}
                        {hiddenRows.length > 0 && (
                          <Tooltip title="Detalhes do item">
                            <IconButton
                              color="primary"
                              onClick={() => handleArrowClick(globalIndex)}
                            >
                              {expandedRows.includes(globalIndex) ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                          </Tooltip>
                        )}
                      </TableCell>
                    </TableRow>
                    {hiddenRows.length > 0 && expandedRows.includes(globalIndex) && (
                      <TableRow key={globalIndex + "_HiddenRows"}>
                        <TableCell
                          colSpan={10}
                          style={{ backgroundColor: theme.palette.grey[200] }}
                        >
                          <Grid
                            container
                            spacing={2}
                          >
                            {/* TABELA NORMAL */}
                            {/* Itera sobre o object de uma posicao do array */}
                            {Object.entries(hiddenRows[globalIndex]).map(([key, value], subIndex) => (
                              <React.Fragment key={globalIndex + "_HiddenRows_fragment" + subIndex}>
                                <Grid
                                  key={globalIndex + "_HiddenRows_grid" + subIndex}
                                  item
                                  md={3}
                                  xs={6}
                                >
                                  <a style={{ fontFamily: "Rawline Bold" }}>{termos[key] ? termos[key] : key}</a>
                                  <p style={{ fontFamily: "Rawline Medium" }}>
                                    {key.startsWith("data") ? dayjs(value).format("DD/MM/YYYY") : value}
                                  </p>
                                </Grid>
                                {((isXs && (subIndex + 1) % 2 === 0) || (!isXs && (subIndex + 1) % 4 === 0)) && (
                                  <Grid
                                    item
                                    xs={12}
                                    key={globalIndex + "_divider" + subIndex}
                                  >
                                    <div style={{ borderBottom: "1px solid", borderColor: theme.palette.grey[600] }}></div>
                                  </Grid>
                                )}
                              </React.Fragment>
                            ))}
                          </Grid>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                );
              })}
          </>
        ) : (
          <TableBody>
            <TableRow>
              <TableCell colSpan={5}>{notFoundText}</TableCell>
            </TableRow>
          </TableBody>
        )}
      </Table>

      {/* PAGINACAO */}
      <div style={{ borderTop: "1px solid #d3d3d3", padding: "15px", display: "flex", justifyContent: "center" }}>
        <Pagination
          page={page}
          count={rows.length > 0 ? Math.ceil(rows.length / rowsPerPage) : 1}
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
                {columns.length > 0 &&
                  columns.map((objColumn, index) => (
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
                {rows.length > 0 &&
                  rows.map((objRow, index) => (
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
                        {hiddenRows.length > 0 && (
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
                      {hiddenRows.length > 0 && (
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
                                {/* TABELA HIDDEN */}
                                {/* Itera sobre o object de uma posicao do array */}
                                {Object.entries(hiddenRows[index]).map(([key, value], subIndex) => (
                                  <React.Fragment key={index + "_HiddenRows_fragment" + subIndex}>
                                    <Grid
                                      key={index + "_HiddenRows_grid" + subIndex}
                                      item
                                      xs={4}
                                    >
                                      <a style={{ fontFamily: "Rawline Bold" }}>{termos[key] ? termos[key] : key}</a>
                                      <p style={{ fontFamily: "Rawline Medium" }}>
                                        {key.startsWith("data") ? dayjs(value).format("DD/MM/YYYY") : value}
                                      </p>
                                    </Grid>

                                    {(subIndex + 1) % 3 === 0 && (
                                      <Grid
                                        item
                                        xs={12}
                                        key={index + "_divider" + subIndex}
                                      >
                                        <div style={{ borderBottom: "1px solid", borderColor: theme.palette.grey[600] }}></div>
                                      </Grid>
                                    )}
                                  </React.Fragment>
                                ))}
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
                  <TableCell colSpan={5}>{notFoundText}</TableCell>
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
  rows: PropTypes.array,
  columns: PropTypes.array,
  hiddenRows: PropTypes.array,
  actionButtons: PropTypes.array,
  notFoundText: PropTypes.string,
  termos: PropTypes.object,
};

const ActionButtons = ({ actions, id }) => {
  return (
    <>
      {actions.map((action, index) => (
        <Tooltip
          key={index}
          title={action.title}
        >
          <IconButton
            color="primary"
            href={action.href || undefined}
            onClick={
              action.onClick
                ? id
                  ? () => action.onClick(id)
                  : action.onClick
                : () => console.log(`onClick not defined for ${action.title}`)
            }
          >
            <span className="material-icons">{action.icon}</span>
          </IconButton>
        </Tooltip>
      ))}
    </>
  );
};

ActionButtons.propTypes = {
  id: PropTypes.number,
  actions: PropTypes.array,
};
