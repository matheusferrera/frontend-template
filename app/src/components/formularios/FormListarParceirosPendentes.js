import React, { useState } from "react";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DescriptionIcon from "@mui/icons-material/Description";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ListIcon from "@mui/icons-material/List";
import PostAddIcon from "@mui/icons-material/PostAdd";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Button,
  Card,
  FormGroup,
  Grid,
  IconButton,
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
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import PropTypes from "prop-types";

// Cada botão poderá ter uma função diferente, está é apenas um modelo
function handleButtonClick(id) {
  return id;
}

function TabelaParceiros({ data }) {
  // Responsável == Representante
  // Parceiro == PontoFocal
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {/*<TableCell>Habilitação</TableCell>*/}
            {/* <TableCell>Status</TableCell> */}
            {/* <TableCell>CNPJ</TableCell> */}
            <TableCell>Parceiro</TableCell>
            <TableCell sx={{ minWidth: 100 }}>Razão Social</TableCell>
            <TableCell>Nome Fantasia</TableCell>
            {/* <TableCell>Natureza Jurídica</TableCell> */}
            <TableCell>Responsável</TableCell>
            {/* <TableCell>Cidade</TableCell> */}
            {/* <TableCell>UF</TableCell> */}
            <TableCell sx={{ minWidth: 105 }}>Cadastro</TableCell>
            <TableCell sx={{ minWidth: 105 }}>Última Modificação</TableCell>
            <TableCell sx={{ minWidth: 275 }}>Ações</TableCell>
          </TableRow>
        </TableHead>
        {data.length != 0 ? (
          <TableBody>
            {data.map((parceiro, index) => (
              <TableRow key={index}>
                {/* <TableCell>{parceiro.habilitacao}</TableCell> */}
                {/* <TableCell>{parceiro.status}</TableCell> */}
                {/* <TableCell>{parceiro.cnpj}</TableCell> */}
                <TableCell>{parceiro.nomeParceiro}</TableCell>
                <TableCell>{parceiro.razaoSocial}</TableCell>
                <TableCell>{parceiro.nomeFantasia}</TableCell>
                {/* <TableCell>{parceiro.naturezaJuridica}</TableCell> */}
                <TableCell>{parceiro.nomeResponsavel}</TableCell>
                {/* <TableCell>{parceiro.cidade}</TableCell> */}
                {/* <TableCell>{parceiro.uf}</TableCell> */}
                <TableCell>{dayjs(parceiro.cadastro).format("DD/MM/YYYY")}</TableCell>
                <TableCell>{dayjs(parceiro.ultimaModificacao).format("DD/MM/YYYY")}</TableCell>
                <TableCell>
                  <IconButton
                    color="primary"
                    onClick={() => handleButtonClick(parceiro.id)}
                  >
                    <DescriptionIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    onClick={() => handleButtonClick(parceiro.id)}
                  >
                    <PostAddIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    onClick={() => handleButtonClick(parceiro.id)}
                  >
                    <ListIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    onClick={() => handleButtonClick(parceiro.id)}
                  >
                    <CheckCircleIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    onClick={() => handleButtonClick(parceiro.id)}
                  >
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    onClick={() => handleButtonClick(parceiro.id)}
                  >
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
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
    </TableContainer>
  );
}

// Dados fictícios para teste da tabela
const initialData = [
  {
    id: 1,
    habilitacao: "Parceiro",
    status: "Pendente",
    cnpj: "11.111.111/1000-00",
    nomeFantasia: "Nome 1",
    nomeParceiro: "Fulano",
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
    nomeParceiro: "Beltrano",
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
    nomeParceiro: "Fulano da Silva",
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
    nomeParceiro: "Beltrano Gonçalves",
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
    nomeParceiro: "Fulano Beltrano",
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
    nomeParceiro: "",
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
        parceiro.nomeParceiro.toLowerCase().includes(filter.nomeParceiro.toLowerCase()) &&
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
            spacing={1}
            container
          >
            <Grid
              item
              xs={12}
              sm={6}
            >
              <FormGroup>
                <TextField
                  variant="outlined"
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
                  variant="outlined"
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
                  variant="outlined"
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
                  variant="outlined"
                  id="nomeParceiro"
                  name="nomeParceiro"
                  label="Nome Parceiro"
                  placeholder="Nome Parceiro"
                  value={filter.nomeParceiro}
                  type="text"
                  onChange={handleFilterChange}
                />
              </FormGroup>
            </Grid>
          </Grid>
          <Grid
            spacing={1}
            container
          >
            <Grid
              item
              xs={12}
              sm={12}
            >
              <FormGroup>
                <Typography sx={{ mb: "8px" }}>Tipo de Serviço</Typography>
                <Select
                  id="tipoDeServico"
                  name="tipoDeServico"
                  multiple
                  value={filter.tipoDeServico || "none"}
                  type="text"
                  onChange={handleFilterSelectChange}
                >
                  <MenuItem
                    value="none"
                    disabled
                  >
                    {" "}
                    Selecione uma opção{" "}
                  </MenuItem>
                  <MenuItem value="VEP"> Vaga de Emprego </MenuItem>
                  <MenuItem value="VET"> Vaga de Estágio </MenuItem>
                  <MenuItem value="VJA"> Vaga de Jovem Aprendiz </MenuItem>
                  <MenuItem value="CUR"> Cursos </MenuItem>
                  <MenuItem value="FPG">Financeiros e de Pagamentos</MenuItem>
                  <MenuItem value="MPu">Mobilização de Público</MenuItem>
                  <MenuItem value="MPa">Mobilização de Parceiro</MenuItem>
                </Select>
              </FormGroup>
            </Grid>

            <Grid
              item
              xs={1}
              sm={2}
            >
              <Typography sx={{ mt: "16px" }}>Data do cadastro:</Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sm={3}
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
              sm={3}
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

            <Grid
              item
              xs={1}
              sm={3}
            ></Grid>

            <Grid
              item
              xs={1}
              sm={2}
            >
              <Typography sx={{ mt: "8px" }}>Data da Última Modificação:</Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sm={3}
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
              sm={3}
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
          <Box sx={{ flexGrow: 1, mt: "16px" }}>
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
              >
                <Button
                  variant="contained"
                  onClick={applyFilter}
                  sx={{ gap: "8px" }}
                >
                  <SearchIcon />
                  Pesquisar
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
          >
            <Button
              variant="contained"
              onClick={handleDownloadCSV}
            >
              Download CSV
            </Button>
          </Grid>
        </Grid>
      </Box>
      <TabelaParceiros data={filteredData} />
    </>
  );
};

TabelaParceiros.propTypes = {
  data: PropTypes.array,
};

export default FormListarParceirosPendentes;
