import React, { useState } from "react";

import { ThemeProvider } from "@emotion/react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Card, CardContent, FormGroup, Grid, Stack, Typography } from "@mui/material";
import { createTheme, useTheme } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import PropTypes from "prop-types";

import ServicoOfertadoModal from "../modals/ServicoOfertadoModal";
import DefaultTable from "../table/DefaultTable";
import { dadosParceirosReprovados } from "./dadosMockados";

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
const initialData = dadosParceirosReprovados;

// Retornar a pesquisa vazia
const initialFilterState = {
  tipoDeServico: [],
  dataDoCadastroInicio: null,
  dataDoCadastroFim: null,
  dataDaUltimaModificacaoInicio: null,
  dataDaUltimaModificacaoFim: null,
};

const initialCores = {
  0: "naoSelecionado",
  1: "naoSelecionado",
  2: "naoSelecionado",
  3: "naoSelecionado",
  4: "naoSelecionado",
  5: "naoSelecionado",
  6: "naoSelecionado",
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

const FormListarParceirosReprovados = ({ servicosModal, setServicosModal }) => {
  const [filter, setFilter] = useState(initialFilterState);
  const [filteredData, setFilteredData] = useState(initialData);

  const tabelaHiddenLinhas = filteredData.map(row =>
    keysHidden.reduce((acc, key) => {
      acc[key] = row[key];
      return acc;
    }, {}),
  );

  const theme = useTheme();
  const isDark = theme.palette.mode == "dark";

  const tema = createTheme({
    palette: {
      naoSelecionado: {
        main: isDark ? "#02b1c4" : "#FFFFFF",
        dark: isDark ? "#017a87" : "#D9D9D9",
      },
      selecionado: {
        main: isDark ? "#64a367" : "#8AE38F",
        dark: isDark ? "#4d7d50" : "#77C77B",
      },
    },
  });

  const [cores, setCores] = useState(initialCores);

  const applyFilter = () => {
    const filtered = initialData.filter(parceiro => {
      const matchesTextFilter =
        filter.tipoDeServico.length === 0 ||
        Object.keys(parceiro.tipoDeServico)
          .map(servico => {
            return parceiro.tipoDeServico[servico] == true && filter.tipoDeServico.includes(servico);
          })
          .includes(true);

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
    setCores(initialCores);
    applyFilter();
  };

  const handleListaOpen = id => {
    idSelecionado = id;
    setServicosModal(true);
  };

  const handleListaClose = () => {
    setServicosModal(false);
  };

  const selectServico = event => {
    const { id, name } = event.target;
    console.log(isDark);
    if (filter["tipoDeServico"].includes(name)) {
      setFilter({ ...filter, ["tipoDeServico"]: filter["tipoDeServico"].filter(nome => nome !== name) });
      setCores({ ...cores, [id]: "naoSelecionado" });
    } else {
      setFilter({ ...filter, ["tipoDeServico"]: filter["tipoDeServico"].concat([name]) });
      setCores({ ...cores, [id]: "selecionado" });
    }
  };

  const getTabelaActions = () => [
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
      href: "",
      icon: "visibility",
      // onClick: rowId => localStorage.setItem("analisarID", JSON.stringify(rowId)),
    },
    {
      title: "Documentos Anexos",
      href: "",
      icon: "attach_file",
      // onClick: rowId => localStorage.setItem("analisarID", JSON.stringify(rowId)),
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
            >
              <Typography variant="subtitle2">Filtros</Typography>
            </Grid>
          </Grid>
          <ThemeProvider theme={tema}>
            <Grid container>
              <Grid
                item
                xs={2.8}
              >
                <Button
                  id={0}
                  name="VEP"
                  variant="contained"
                  color={cores[0]}
                  onClick={selectServico}
                >
                  Vaga de Emprego
                </Button>
              </Grid>
              <Grid
                item
                xs={2.7}
              >
                <Button
                  id={1}
                  name="VET"
                  variant="contained"
                  color={cores[1]}
                  onClick={selectServico}
                >
                  Vaga de Estágio
                </Button>
              </Grid>
              <Grid
                item
                xs={3.6}
              >
                <Button
                  id={2}
                  name="VJA"
                  variant="contained"
                  color={cores[2]}
                  onClick={selectServico}
                >
                  Vaga de Jovem Aprendiz
                </Button>
              </Grid>
              <Grid
                item
                xs={2}
              >
                <Button
                  id={3}
                  name="CUR"
                  variant="contained"
                  color={cores[3]}
                  onClick={selectServico}
                >
                  Cursos
                </Button>
              </Grid>
            </Grid>

            <Grid
              container
              mt={1}
            >
              <Grid
                item
                xs={4.3}
              >
                <Button
                  id={4}
                  name="FPG"
                  variant="contained"
                  color={cores[4]}
                  onClick={selectServico}
                >
                  Financeiros e de Pagamentos
                </Button>
              </Grid>
              <Grid
                item
                xs={3.7}
              >
                <Button
                  id={5}
                  name="MPu"
                  variant="contained"
                  color={cores[5]}
                  onClick={selectServico}
                >
                  Mobilização de Público
                </Button>
              </Grid>
              <Grid
                item
                xs={4}
              >
                <Button
                  id={6}
                  name="MPa"
                  variant="contained"
                  color={cores[6]}
                  onClick={selectServico}
                >
                  Mobilização de Parceiro
                </Button>
              </Grid>
            </Grid>
          </ThemeProvider>

          <Grid
            mt={2}
            spacing={3}
            container
          >
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
              notFoundText={"Não foi localizado Parceiro na situação reprovado!"}
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

FormListarParceirosReprovados.propTypes = {
  setServicosModal: PropTypes.func,
  servicosModal: PropTypes.bool,
};

export default FormListarParceirosReprovados;
