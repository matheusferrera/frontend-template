import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SearchIcon from "@mui/icons-material/Search";
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

import ServicoOfertadoModal from "../modals/ServicoOfertadoModal";
import { dadosParceiros } from "./dadosMockados";

// Cada botão poderá ter uma função diferente, está é apenas um modelo
function handleButtonClick(id) {
  return id;
}

let idSelecionado = 0;

const termos = {
  id: "ID",
  habilitacao: "Habilitação",
  status: "Status",
  cnpj: "CNPJ",
  nomeFantasia: "Nome Fantasia",
  nomePontoFocal: "Nome Representante",
  razaoSocial: "Razão Social",
  naturezaJuridica: "Natureza Juridica",
  nomeResponsavel: "Nome Responsável",
  telefone: "Telefone",
  email: "E-mail",
  endereco: "Endereço",
  complemento: "Complemento",
  cidade: "Cidade",
  uf: "UF",
  dataCadastro: "Data do Cadastro",
  dataUltimaModificacao: "Data da última modificação",
  tipoDeServico: "Tipo de Serviço",
  VEP: "Vaga de Emprego",
  VET: "Vaga de Estágio",
  VJA: "Vaga de Jovem Aprendiz",
  CUR: "Cursos",
  FPG: "Financeiros e de Pagamentos",
  MPu: "Mobilização de Público",
  MPa: "Mobilização de Parceiro",
};

function TabelaParceiros({ data, handleDownloadCSV, handleDownloadExcel, handlePrint, handleListaOpen }) {
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
              <Tooltip title="Download CSV">
                <IconButton
                  color="primary"
                  onClick={handleDownloadCSV}
                >
                  <span className="material-icons">sim_card_download</span>
                </IconButton>
              </Tooltip>
              <Tooltip title="Download Excel">
                <IconButton
                  color="primary"
                  onClick={handleDownloadExcel}
                >
                  <span className="material-icons">sim_card</span>
                </IconButton>
              </Tooltip>
              <Tooltip title="Imprimir">
                <IconButton
                  color="primary"
                  onClick={handlePrint}
                >
                  <span className="material-icons">print</span>
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        </TableHead>
        {data.length != 0 ? (
          <TableBody>
            {data.slice(5 * (page - 1), 5 * page).map((parceiro, index) => (
              <>
                <TableRow key={1000 + index}>
                  <TableCell style={{ color: theme.palette.primary.main }}>{parceiro.habilitacao.toUpperCase()}</TableCell>
                  <TableCell>{parceiro.status}</TableCell>
                  <TableCell align="right">
                    <Tooltip title="Visualizar Informações Complementares">
                      <IconButton
                        color="primary"
                        href="listar_parceiros_pendentes/visualizar_informacoes_complementares"
                        onClick={() => localStorage.setItem("analisarID", JSON.stringify(parceiro.id))}
                      >
                        <span className="material-icons">description</span>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Analisar Informações Complementares">
                      <IconButton
                        color="primary"
                        href="listar_parceiros_pendentes/analisar_informacoes_complementares"
                        onClick={() => localStorage.setItem("analisarID", JSON.stringify(parceiro.id))}
                      >
                        <span className="material-icons">post_add</span>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Serviços Ofertados">
                      <IconButton
                        color="primary"
                        onClick={() => handleListaOpen(parceiro.id)}
                      >
                        <span className="material-icons">list</span>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Analisar">
                      <IconButton
                        color="primary"
                        href="listar_parceiros_pendentes/analisar_parceiro_pendente"
                        onClick={() => localStorage.setItem("analisarID", JSON.stringify(parceiro.id))}
                      >
                        <span className="material-icons">check_circle</span>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Visualizar">
                      <IconButton
                        color="primary"
                        onClick={() => handleButtonClick(parceiro.id)}
                      >
                        <span className="material-icons">visibility</span>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Mais Informações">
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
                  <TableRow key={100 + index}>
                    <TableCell
                      colSpan={10}
                      style={{ backgroundColor: theme.palette.grey[200] }}
                    >
                      <Grid>
                        <Grid
                          container
                          spacing={2}
                        >
                          {Object.keys(parceiro).map(chave => {
                            if (chave != "id" && chave != "habilitacao" && chave != "status") {
                              return (
                                <>
                                  <Grid
                                    key={chave}
                                    item
                                    xs={3}
                                  >
                                    <a style={{ fontFamily: "Rawline Bold" }}>{termos[chave]}</a>
                                    <p style={{ fontFamily: "Rawline Medium" }}>
                                      {chave == "tipoDeServico"
                                        ? Object.keys(parceiro[chave]).map(k => {
                                            if (parceiro[chave][k]) {
                                              return termos[k] + "; ";
                                            }
                                          })
                                        : chave == "dataCadastro" || chave == "dataUltimaModificacao"
                                          ? dayjs(parceiro[chave]).format("DD/MM/YYYY")
                                          : parceiro[chave]}
                                    </p>
                                  </Grid>

                                  {/* {(index + 1) % 4 === 0 && (
                                  <Grid
                                    item
                                    xs={12}
                                  >
                                    <div style={{ borderBottom: "1px solid", borderColor: theme.palette.grey[600] }}></div>
                                  </Grid>
                                )} */}
                                </>
                              );
                            }
                          })}
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
const initialData = dadosParceiros;
const pesquisaVazia = {
  razaoSocial: "",
  nomeFantasia: "",
  nomeResponsavel: "",
  nomePontoFocal: "",
  tipoDeServico: [],
  dataDoCadastroInicio: null,
  dataDoCadastroFim: null,
  dataDaUltimaModificacaoInicio: null,
  dataDaUltimaModificacaoFim: null,
};

const FormListarParceirosPendentes = ({ servicosModal, setServicosModal }) => {
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
        (filter.tipoDeServico.length === 0 ||
          Object.keys(parceiro.tipoDeServico)
            .map(servico => {
              return parceiro.tipoDeServico[servico] == true && filter.tipoDeServico.includes(servico);
            })
            .includes(true));

      const matchesDateFilter =
        (!filter.dataDoCadastroInicio ||
          !filter.dataDoCadastroFim ||
          dayjs(parceiro.dataCadastro).isBetween(filter.dataDoCadastroInicio, filter.dataDoCadastroFim, "day", "[]")) &&
        (!filter.dataDaUltimaModificacaoInicio ||
          !filter.dataDaUltimaModificacaoFim ||
          dayjs(parceiro.dataUltimaModificacao).isBetween(
            filter.dataDaUltimaModificacaoInicio,
            filter.dataDaUltimaModificacaoFim,
            "day",
            "[]",
          ));

      return matchesTextFilter && matchesDateFilter;
    });
    setFilteredData(filtered);
  };

  const handleListaOpen = id => {
    idSelecionado = id;
    setServicosModal(true);
  };

  const handleListaClose = () => {
    setServicosModal(false);
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
          {/* Campos para filtrar */}
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
                  <p style={{ fontFamily: "Rawline Regular", color: "grey" }}>Data do Cadastro</p>
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
                  <p style={{ fontFamily: "Rawline Regular", color: "grey" }}>Data da última modificação</p>
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

          {/* Botoões de pesquisa/cancelar */}
          <Box sx={{ flexGrow: 1, mt: "16px" }}>
            <Grid
              container
              spacing={1}
              justifyContent="flex-end"
            >
              <Grid item>
                <Button
                  variant="outlined"
                  onClick={() => setFilter(pesquisaVazia)}
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

          {/* Tabela */}
          <Box sx={{ flexGrow: 1, mt: "40px" }}>
            <TabelaParceiros
              data={filteredData}
              handleDownloadCSV={handleDownloadCSV}
              handleDownloadExcel={handleDownloadExcel}
              handlePrint={handlePrint}
              handleListaOpen={handleListaOpen}
              sx={{ mt: "16px" }}
            />
          </Box>
        </Card>
      </Stack>
      <div>
        {/* Modal para listar Serviços*/}
        <ServicoOfertadoModal
          showModal={servicosModal}
          handleClose={handleListaClose}
          parceiro={filteredData.filter(parceiro => parceiro.id == idSelecionado)}
        />
      </div>
    </>
  );
};

TabelaParceiros.propTypes = {
  data: PropTypes.array,
  handleDownloadCSV: PropTypes.any,
  handleDownloadExcel: PropTypes.any,
  handlePrint: PropTypes.any,
  handleListaOpen: PropTypes.func,
};

FormListarParceirosPendentes.propTypes = {
  setServicosModal: PropTypes.func,
  servicosModal: PropTypes.bool,
};

export default FormListarParceirosPendentes;
