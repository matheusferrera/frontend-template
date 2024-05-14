import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DescriptionIcon from "@mui/icons-material/Description";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ListIcon from "@mui/icons-material/List";
import PostAddIcon from "@mui/icons-material/PostAdd";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormGroup,
  Grid,
  IconButton,
  InputLabel,
  Pagination,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
} from "@mui/material";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import { utils as XLSXUtils, writeFile as writeXLSXFile } from "xlsx";

// Cada botão poderá ter uma função diferente, está é apenas um modelo
function handleButtonClick(id) {
  return id;
}

function TabelaParceiros({ data }) {
  // Responsável == Representante
  // Parceiro == PontoFocal

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

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Habilitação</TableCell>
            <TableCell sx={{ minWidth: 100 }}>Status</TableCell>
            <TableCell align="right">
              <Tooltip title="Descrição do documento">
                <IconButton
                  color="primary"
                  onClick={() => ""}
                >
                  <DescriptionIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Descrição do documento">
                <IconButton
                  color="primary"
                  onClick={() => ""}
                >
                  <PostAddIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Descrição do documento">
                <IconButton
                  color="primary"
                  onClick={() => ""}
                >
                  <ListIcon />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        </TableHead>
        {data.length != 0 ? (
          <TableBody>
            {data.slice(5 * (page - 1), 5 * page).map((parceiro, index) => (
              <>
                <TableRow key={index}>
                  <TableCell style={{ color: theme.palette.primary.main }}>{parceiro.nomePontoFocal.toUpperCase()}</TableCell>
                  <TableCell>{parceiro.razaoSocial}</TableCell>
                  {/* <TableCell>{parceiro.nomeFantasia}</TableCell>
                <TableCell>{parceiro.nomeResponsavel}</TableCell>
                <TableCell>{dayjs(parceiro.cadastro).format("DD/MM/YYYY")}</TableCell>
                <TableCell>{dayjs(parceiro.ultimaModificacao).format("DD/MM/YYYY")}</TableCell> */}
                  <TableCell align="right">
                    <Tooltip title="Descrição do documento">
                      <IconButton
                        color="primary"
                        onClick={() => handleButtonClick(parceiro.id)}
                      >
                        <DescriptionIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Descrição do documento">
                      <IconButton
                        color="primary"
                        onClick={() => handleButtonClick(parceiro.id)}
                      >
                        <PostAddIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Descrição do documento">
                      <IconButton
                        color="primary"
                        onClick={() => handleButtonClick(parceiro.id)}
                      >
                        <ListIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Descrição do documento">
                      <IconButton
                        color="primary"
                        onClick={() => handleButtonClick(parceiro.id)}
                      >
                        <CheckCircleIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Detalhes do item">
                      <IconButton
                        color="primary"
                        onClick={() => handleButtonClick(parceiro.id)}
                      >
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton
                        color="primary"
                        onClick={() => handleArrowClick(index)}
                      >
                        {expandedRows.includes(index) ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
                {expandedRows.includes(index) && (
                  <TableRow key={index}>
                    <TableCell
                      colSpan={10}
                      style={{ backgroundColor: theme.palette.grey[200] }}
                    >
                      <Grid>
                        <Grid
                          container
                          spacing={2}
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                            <>
                              <Grid
                                key={item}
                                item
                                xs={3}
                              >
                                <a style={{ fontFamily: "Rawline Bold" }}>Item {item}</a>
                                <p style={{ fontFamily: "Rawline Medium" }}>
                                  Descrição do Item {item} e {index}
                                </p>
                              </Grid>

                              {(index + 1) % 4 === 0 && (
                                <Grid
                                  item
                                  xs={12}
                                >
                                  <div style={{ borderBottom: "1px solid", borderColor: theme.palette.grey[600] }}></div>
                                </Grid>
                              )}
                            </>
                          ))}
                        </Grid>
                      </Grid>
                    </TableCell>
                  </TableRow>
                )}
              </>
            ))}
          </TableBody>
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
          count={Math.ceil(data.length / 5)}
          color="primary"
          onChange={handlePageChange}
        />
      </div>
    </TableContainer>
  );
}

// Converts a string to ArrayBuffer.
export function s2ab(s) {
  const buf = new ArrayBuffer(s.length);
  const view = new Uint8Array(buf);
  for (let i = 0; i < s.length; ++i) {
    view[i] = s.charCodeAt(i) & 0xff;
  }
  return buf;
}

// Dados fictícios para teste da tabela
const initialData = [
  {
    id: 1,
    habilitacao: "Parceiro",
    status: "Pendente",
    cnpj: "11.111.111/1000-00",
    nomeFantasia: "Nome 1",
    nomePontoFocal: "Fulano",
    razaoSocial: "Razão 1",
    naturezaJuridica: "Público",
    nomeResponsavel: "Beltrano Gonçalves",
    cidade: "Brasília",
    uf: "DF",
    cadastro: "2024-03-20T00:00",
    ultimaModificacao: "2024-03-21T00:00",
    tipoDeServico: "VEP",
  },
  {
    id: 2,
    habilitacao: "Parceiro",
    status: "Pendente",
    cnpj: "22.222.222/1000-00",
    nomeFantasia: "Nome 2",
    nomePontoFocal: "Beltrano",
    razaoSocial: "Razão 2",
    naturezaJuridica: "Privado",
    nomeResponsavel: "Fulano",
    cidade: "Goiânia",
    uf: "GO",
    cadastro: "2024-03-03T00:00",
    ultimaModificacao: "2024-04-10T00:00",
    tipoDeServico: "VET",
  },
  {
    id: 3,
    habilitacao: "Parceiro",
    status: "Pendente",
    cnpj: "33.333.333/1000-00",
    nomeFantasia: "Nome 1",
    nomePontoFocal: "Fulano da Silva",
    razaoSocial: "Razão 1",
    naturezaJuridica: "Público",
    nomeResponsavel: "Beltrano",
    cidade: "Catalão",
    uf: "GO",
    cadastro: "2024-02-27T00:00",
    ultimaModificacao: "2024-03-15T00:00",
    tipoDeServico: "MPu",
  },
  {
    id: 4,
    habilitacao: "Parceiro",
    status: "Pendente",
    cnpj: "44.444.444/1000-00",
    nomeFantasia: "Nome 3",
    nomePontoFocal: "Beltrano Gonçalves",
    razaoSocial: "Razão 1",
    naturezaJuridica: "Privado",
    nomeResponsavel: "Fulano da Silva",
    cidade: "Belo Horizonte",
    uf: "MG",
    cadastro: "2024-02-11T00:00",
    ultimaModificacao: "2024-02-13T00:00",
    tipoDeServico: "VEP",
  },
  {
    id: 5,
    habilitacao: "Parceiro",
    status: "Pendente",
    cnpj: "55.555.555/1000-00",
    nomeFantasia: "Nome 2",
    nomePontoFocal: "Fulano Beltrano",
    razaoSocial: "Razão 1",
    naturezaJuridica: "Privado",
    nomeResponsavel: "Beltrano Fulano",
    cidade: "Brasília",
    uf: "DF",
    cadastro: "2024-03-20T00:00",
    ultimaModificacao: "2024-03-21T00:00",
    tipoDeServico: "VET",
  },
  {
    id: 6,
    habilitacao: "Parceiro",
    status: "Pendente",
    cnpj: "55.555.555/1000-00",
    nomeFantasia: "Nome 2",
    nomePontoFocal: "Fulano Beltrano",
    razaoSocial: "Razão 1",
    naturezaJuridica: "Privado",
    nomeResponsavel: "Beltrano Fulano",
    cidade: "Brasília",
    uf: "DF",
    cadastro: "2024-03-20T00:00",
    ultimaModificacao: "2024-03-21T00:00",
    tipoDeServico: "VET",
  },
  {
    id: 7,
    habilitacao: "Parceiro",
    status: "Pendente",
    cnpj: "55.555.555/1000-00",
    nomeFantasia: "Nome 2",
    nomePontoFocal: "Fulano Beltrano",
    razaoSocial: "Razão 1",
    naturezaJuridica: "Privado",
    nomeResponsavel: "Beltrano Fulano",
    cidade: "Brasília",
    uf: "DF",
    cadastro: "2024-03-20T00:00",
    ultimaModificacao: "2024-03-21T00:00",
    tipoDeServico: "VET",
  },
];

const FormListarParceirosPendentes = () => {
  const [filter, setFilter] = useState({
    razaoSocial: "",
    nomeFantasia: "",
    nomeResponsavel: "",
    nomePontoFocal: "",
    tipoDeServico: [],
    dataDoCadastroInicio: null,
    dataDoCadastroFim: null,
    dataDaUltimaModificacaoInicio: null,
    dataDaUltimaModificacaoFim: null,
  });

  const [filteredData, setFilteredData] = useState(initialData);

  const handleFilterChange = event => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  const handleFilterSelectChange = event => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: typeof value === "string" ? value.split(",") : value });
  };

  const applyFilter = () => {
    const filtered = initialData.filter(parceiro => {
      const matchesTextFilter =
        parceiro.nomeResponsavel.toLowerCase().includes(filter.nomeResponsavel.toLowerCase()) &&
        parceiro.nomePontoFocal.toLowerCase().includes(filter.nomePontoFocal.toLowerCase()) &&
        parceiro.nomeFantasia.toLowerCase().includes(filter.nomeFantasia.toLowerCase()) &&
        parceiro.razaoSocial.toLowerCase().includes(filter.razaoSocial.toLowerCase()) &&
        (filter.tipoDeServico.length === 0 || parceiro.tipoDeServico.includes(filter.tipoDeServico));

      const matchesDateFilter =
        (!filter.dataDoCadastroInicio ||
          !filter.dataDoCadastroFim ||
          dayjs(parceiro.cadastro).isBetween(filter.dataDoCadastroInicio, filter.dataDoCadastroFim, "day", "[]")) &&
        (!filter.dataDaUltimaModificacaoInicio ||
          !filter.dataDaUltimaModificacaoFim ||
          dayjs(parceiro.ultimaModificacao).isBetween(
            filter.dataDaUltimaModificacaoInicio,
            filter.dataDaUltimaModificacaoFim,
            "day",
            "[]",
          ));

      return matchesTextFilter && matchesDateFilter;
    });
    setFilteredData(filtered);
  };

  const tableRef = useRef();

  const handleDownloadCSV = () => {
    // Code to download data as CSV
    // For simplicity, let's assume data is already filtered
    const csvData = filteredData.map(parceiro => Object.values(parceiro).join(",")).join("\n");
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "dados_parceiro.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleDownloadExcel = () => {
    // Code to download data as XLSX
    // For simplicity, let's assume data is already filtered

    // Convert data to XLSX format
    const worksheet = XLSXUtils.json_to_sheet(filteredData);
    const workbook = XLSXUtils.book_new();
    XLSXUtils.book_append_sheet(workbook, worksheet, "Dados Parceiros");

    // Save the workbook as an XLSX file
    writeXLSXFile(workbook, "dados_parceiro.xlsx");
  };

  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
    documentTitle: "Lista de Parceiros Pendentes",
    onAfterPrint: () => console.log("Printing completed"),
  });

  return (
    <>
      <Stack spacing={1}>
        <Card
          color="#ffffff"
          sx={{
            borderRadius: "8px",
            padding: "16px",
            mt: "24px",
          }}
        >
          <Grid
            spacing={3}
            container
          >
            <Grid
              item
              xs={12}
              sm={6}
            >
              <FormGroup>
                <TextField
                  id="razaoSocial"
                  name="razaoSocial"
                  label="Razão Social"
                  placeholder="Razão Social"
                  value={filter.razaoSocial}
                  type="text"
                  onChange={handleFilterChange}
                />
              </FormGroup>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <FormGroup>
                <TextField
                  id="nomeFantasia"
                  name="nomeFantasia"
                  label="Nome Fantasia"
                  placeholder="Nome Fantasia"
                  value={filter.nomeFantasia}
                  type="text"
                  onChange={handleFilterChange}
                />
              </FormGroup>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <FormGroup>
                <TextField
                  id="nomeResponsavel"
                  name="nomeResponsavel"
                  label="Nome Responsável"
                  placeholder="Nome Responsável"
                  value={filter.nomeResponsavel}
                  type="text"
                  onChange={handleFilterChange}
                />
              </FormGroup>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <FormGroup>
                <TextField
                  id="nomePontoFocal"
                  name="nomePontoFocal"
                  label="Nome Ponto Focal"
                  placeholder="Nome Ponto Focal"
                  value={filter.nomePontoFocal}
                  type="text"
                  onChange={handleFilterChange}
                />
              </FormGroup>
            </Grid>
          </Grid>
          <Grid
            mt={2}
            spacing={3}
            container
          >
            <Grid
              item
              xs={12}
              sm={12}
            >
              <FormControl style={{ width: "100%" }}>
                <InputLabel id="label-tipo-servico">Tipo de Serviço</InputLabel>
                <Select
                  id="tipoDeServico"
                  name="tipoDeServico"
                  multiple
                  value={filter.tipoDeServico || "none"}
                  type="text"
                  onChange={handleFilterSelectChange}
                  labelId="label-tipo-servico"
                >
                  <MenuItem
                    value="none"
                    disabled
                  >
                    {" "}
                    Selecione uma opção{" "}
                  </MenuItem>
                  <MenuItem value="VEP">Vaga de Emprego</MenuItem>
                  <MenuItem value="VET">Vaga de Estágio</MenuItem>
                  <MenuItem value="VJA">Vaga de Jovem Aprendiz</MenuItem>
                  <MenuItem value="CUR">Cursos</MenuItem>
                  <MenuItem value="FPG">Financeiros e de Pagamentos</MenuItem>
                  <MenuItem value="MPu">Mobilização de Público</MenuItem>
                  <MenuItem value="MPa">Mobilização de Parceiro</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <Card style={{ border: "1px solid #d3d3d3" }}>
                <CardContent>
                  <p style={{ fontFamily: "Rawline Regular", color: "grey" }}>Data do cadastro</p>
                  <Grid
                    container
                    spacing={2}
                  >
                    <Grid
                      item
                      xs={6}
                      sm={6}
                    >
                      <FormGroup>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            label="Inicio"
                            id="dataDoCadastroInicio"
                            name="dataDoCadastroInicio"
                            value={filter.dataDoCadastroInicio}
                            format="DD/MM/YYYY"
                            onChange={valor => setFilter({ ...filter, ["dataDoCadastroInicio"]: valor })}
                          />
                        </LocalizationProvider>
                      </FormGroup>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sm={6}
                    >
                      <FormGroup>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            id="dataDoCadastroFim"
                            name="dataDoCadastroFim"
                            value={filter.dataDoCadastroFim}
                            label="Fim"
                            format="DD/MM/YYYY"
                            onChange={valor => setFilter({ ...filter, ["dataDoCadastroFim"]: valor })}
                          />
                        </LocalizationProvider>
                      </FormGroup>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
            >
              <Card style={{ border: "1px solid #d3d3d3" }}>
                <CardContent>
                  <p style={{ fontFamily: "Rawline Regular", color: "grey" }}>Data da ultima modificação</p>
                  <Grid
                    container
                    spacing={2}
                  >
                    <Grid
                      item
                      xs={6}
                      sm={6}
                    >
                      <FormGroup>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            id="dataDaUltimaModificacaoInicio"
                            name="dataDaUltimaModificacaoInicio"
                            value={filter.dataDaUltimaModificacaoInicio}
                            label="Inicio"
                            format="DD/MM/YYYY"
                            onChange={valor => setFilter({ ...filter, ["dataDaUltimaModificacaoInicio"]: valor })}
                          />
                        </LocalizationProvider>
                      </FormGroup>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sm={6}
                    >
                      <FormGroup>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            id="dataDaUltimaModificacaoFim"
                            name="dataDaUltimaModificacaoFim"
                            value={filter.dataDaUltimaModificacaoFim}
                            label="Fim"
                            format="DD/MM/YYYY"
                            onChange={valor => setFilter({ ...filter, ["dataDaUltimaModificacaoFim"]: valor })}
                          />
                        </LocalizationProvider>
                      </FormGroup>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Box sx={{ flexGrow: 1, mt: "16px" }}>
            <Grid
              container
              spacing={1}
              justifyContent="flex-end"
            >
              <Grid item>
                <Button
                  variant="outlined"
                  onClick={applyFilter}
                  sx={{ gap: "8px" }}
                  style={{ fontFamily: "Rawline Medium" }}
                >
                  Cancelar
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  onClick={applyFilter}
                  sx={{ gap: "8px" }}
                  style={{ fontFamily: "Rawline Medium" }}
                >
                  <SearchIcon />
                  Pesquisar
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 1, mt: "40px" }}>
            <TabelaParceiros
              data={filteredData}
              sx={{ mt: "16px" }}
            />
          </Box>

          <Box sx={{ flexGrow: 1, mt: "16px" }}>
            <Grid
              container
              spacing={1}
              justifyContent="flex-end"
            >
              <Grid item>
                <Button
                  variant="text"
                  onClick={handleDownloadCSV}
                  style={{ fontFamily: "Rawline Medium" }}
                >
                  Download CSV
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Stack>

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={10}
          ></Grid>
          <Grid
            item
            xs
            sx={{
              mt: "4px",
              mb: "4px",
            }}
          >
            <Button
              variant="contained"
              onClick={handleDownloadCSV}
            >
              Download CSV
            </Button>
            <Button
              variant="contained"
              onClick={handleDownloadExcel}
              sx={{
                mt: "4px",
              }}
            >
              Download Excel
            </Button>
            <Button
              variant="contained"
              onClick={handlePrint}
              sx={{
                mt: "4px",
              }}
            >
              Imprimir
            </Button>
          </Grid>
        </Grid>
      </Box>
      <div ref={tableRef}>
        <TabelaParceiros data={filteredData} />
      </div>
    </>
  );
};

TabelaParceiros.propTypes = {
  data: PropTypes.array,
};

export default FormListarParceirosPendentes;
