import React, { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import { Button, Card, CardContent, FormControl, FormGroup, Grid, InputLabel, Select, Stack, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import PropTypes from "prop-types";

import ServicoOfertadoModal from "../modals/ServicoOfertadoModal";
import DefaultTable from "../table/DefaultTable";
import { dadosParceirosPendentes } from "./dadosMockados";

let idSelecionado = 0;

const termos = {
  id: "ID",
  habilitacao: "Habilitação",
  status: "Status",
  cnpj: "CNPJ",
  nomeFantasia: "Nome Fantasia",
  razaoSocial: "Razão Social",
  naturezaJuridica: "Natureza Juridica",
  nomeResponsavel: "Nome do Responsável",
  email: "E-mail do Responsável",
  nomePontoFocal: "Nome Ponto Focal",
  emailPontoFocal: "E-mail do Ponto Focal",
  telefone: "Telefone",
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

// Dados fictícios para teste da tabela
const initialData = dadosParceirosPendentes;

// Retornar a pesquisa vazia
const initialFilterState = {
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

const tabelaColunas = [
  { field: "habilitacao", headerName: "Habilitação", sxRowProps: { textTransform: "uppercase", color: "primary.main" } },
  { field: "status", headerName: "Status" },
];

const keysHidden = [
  "dataCadastro",
  "dataUltimaModificacao",
  "cnpj",
  "nomeFantasia",
  "razaoSocial",
  "naturezaJuridica",
  "nomeResponsavel",
  "email",
  "nomePontoFocal",
  "emailPontoFocal",
  "telefone",
  "complemento",
  "uf",
  "cidade",
  "endereco",
];

const FormListarParceirosPendentes = ({ servicosModal, setServicosModal }) => {
  const [filter, setFilter] = useState(initialFilterState);
  const [filteredData, setFilteredData] = useState(initialData);

  const tabelaHiddenLinhas = filteredData.map(row =>
    keysHidden.reduce((acc, key) => {
      acc[key] = row[key];
      return acc;
    }, {}),
  );

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

  const resetFilter = () => {
    setFilter(initialFilterState);
    applyFilter();
  };

  const handleListaOpen = id => {
    idSelecionado = id;
    setServicosModal(true);
  };

  const handleListaClose = () => {
    setServicosModal(false);
  };

  const getTabelaActions = () => [
    {
      title: "Visualizar Informações Complementares",
      href: "listar-parceiros-pendentes/visualizar-informacoes-complementares",
      icon: "description",
      onClick: rowId => localStorage.setItem("analisarID", JSON.stringify(rowId)),
    },
    {
      title: "Analisar Informações Complementares",
      href: "listar-parceiros-pendentes/analisar-informacoes-complementares",
      icon: "post_add",
      onClick: rowId => localStorage.setItem("analisarID", JSON.stringify(rowId)),
    },
    {
      title: "Serviços Ofertados",
      href: "",
      icon: "list",
      onClick: rowId => handleListaOpen(rowId),
    },
    {
      title: "Analisar",
      href: "listar-parceiros-pendentes/analisar-parceiro-pendente",
      icon: "check_circle",
      onClick: rowId => localStorage.setItem("analisarID", JSON.stringify(rowId)),
    },
    {
      title: "Visualizar",
      href: "listar-parceiros-pendentes/visualizar-parceiro-pendente",
      icon: "visibility",
      onClick: rowId => localStorage.setItem("analisarID", JSON.stringify(rowId)),
    },
  ];

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

          {/* Botões de pesquisa/cancelar */}
          <Box sx={{ flexGrow: 1, mt: "16px" }}>
            <Grid
              container
              spacing={1}
              justifyContent="flex-end"
            >
              <Grid item>
                <Button
                  variant="outlined"
                  onClick={resetFilter}
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
            <DefaultTable
              rows={filteredData}
              notFoundText={"Não foi localizado Parceiro na situação pendente de aprovação!"}
              columns={tabelaColunas}
              hiddenRows={tabelaHiddenLinhas}
              actionButtons={getTabelaActions()}
              termos={termos}
            ></DefaultTable>
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

FormListarParceirosPendentes.propTypes = {
  setServicosModal: PropTypes.func,
  servicosModal: PropTypes.bool,
};

export default FormListarParceirosPendentes;
