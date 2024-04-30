import React, { useState } from "react";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DescriptionIcon from "@mui/icons-material/Description";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ListIcon from "@mui/icons-material/List";
import PostAddIcon from "@mui/icons-material/PostAdd";
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
import MenuItem from "@mui/material/MenuItem";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
//import dayjs from "dayjs";
import PropTypes from "prop-types";

// Responsável == Representante
// Parceiro == PontoFocal

// Cada botão poderá ter uma função diferente, está é apenas um modelo
function handleButtonClick(id) {
  return id;
}

function TabelaParceiros({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {/*<TableCell>Habilitação</TableCell>*/}
            {/* <TableCell>Status</TableCell> */}
            {/* <TableCell>CNPJ</TableCell> */}
            <TableCell>Parceiro</TableCell>
            <TableCell>Razão Social</TableCell>
            <TableCell>Nome Fantasia</TableCell>
            {/* <TableCell>Natureza Jurídica</TableCell> */}
            <TableCell>Responsável</TableCell>
            {/* <TableCell>Cidade</TableCell> */}
            {/* <TableCell>UF</TableCell> */}
            <TableCell>Cadastro</TableCell>
            <TableCell>Última Modificação</TableCell>
            <TableCell sx={{ width: 300 }}>Ações</TableCell>
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
                <TableCell>{parceiro.cadastro}</TableCell>
                <TableCell>{parceiro.ultimaModificacao}</TableCell>
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
          "Não foi localizado Parceiro na situação pendente de aprovação!"
        )}
      </Table>
    </TableContainer>
  );
}

const FormListarParceirosPendentes = () => {
  // Dados da tabela
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
      cadastro: "20-03-2024",
      ultimaModificacao: "21-03-2024",
      tipoDeServico: "Vaga de Emprego",
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
      cadastro: "03-03-2024",
      ultimaModificacao: "10-04-2024",
      tipoDeServico: "Vaga de Estágio",
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
      cadastro: "27-02-2024",
      ultimaModificacao: "15-03-2024",
      tipoDeServico: "Mobilização de Público",
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
      cadastro: "11-02-2024",
      ultimaModificacao: "13-02-2024",
      tipoDeServico: "Vaga de Emprego",
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
      cadastro: "20-03-2024",
      ultimaModificacao: "21-03-2024",
      tipoDeServico: "Vaga de Estágio",
    },
  ];

  const [filter, setFilter] = useState({
    razaoSocial: "",
    nomeFantasia: "",
    nomeResponsavel: "",
    nomePontoFocal: "",
    tipoDeServico: "",
    dataDoCadastroInicio: undefined,
    dataDoCadastroFim: undefined,
    dataDaUltimaModificacaoInicio: undefined,
    dataDaUltimaModificacaoFim: undefined,
  });

  const [filteredData, setFilteredData] = useState(initialData);

  const handleFilterChange = event => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  const applyFilter = () => {
    let filtered = initialData.filter(parceiro => {
      return parceiro.nomeResponsavel.toLowerCase().includes(filter.nomeResponsavel.toLowerCase());
    });
    setFilteredData(filtered);
  };

  const handleDownloadCSV = () => {
    // Code to download data as CSV
    // For simplicity, let's assume data is already filtered
    const csvData = filteredData.map(student => Object.values(student).join(",")).join("\n");
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "student_data.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div>
      <Stack>
        <Card
          color="#ffffff"
          sx={{
            borderRadius: "8px",
            padding: "16px",
            mt: "24px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: "20",
              mb: "16px",
            }}
          >
            Listar Parceiros Pendentes
          </Typography>
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
                  id="nomePontoFocal"
                  name="nomePontoFocal"
                  label="Nome Ponto Focal"
                  value={filter.nomePontoFocal}
                  type="text"
                  onChange={handleFilterChange}
                />
              </FormGroup>
            </Grid>
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
                  value={filter.tipoDeServico || "none"}
                  type="text"
                  onChange={handleFilterChange}
                >
                  <MenuItem
                    value="none"
                    disabled
                  >
                    {" "}
                    Selecione uma opção{" "}
                  </MenuItem>
                  <MenuItem value="Vaga de Emprego"> Vaga de Emprego </MenuItem>
                  <MenuItem value="Vaga de Estágio"> Vaga de Estágio </MenuItem>
                  <MenuItem value="Vaga de Jovem Aprendiz"> Vaga de Jovem Aprendiz </MenuItem>
                  <MenuItem value="Cursos"> Cursos </MenuItem>
                  <MenuItem value="Financeiros e de Pagamentos">Financeiros e de Pagamentos</MenuItem>
                  <MenuItem value="Mobilização de Público">Mobilização de Público</MenuItem>
                  <MenuItem value="Mobilização de Parceiro">Mobilização de Parceiro</MenuItem>
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
              sm={2}
            >
              <FormGroup>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Inicio"
                    id="dataDoCadastroInicio"
                    name="dataDoCadastroInicio"
                    value={filter.dataDoCadastroInicio}
                    format="DD/MM/YYYY"
                    //onChange={handleFilterChange}
                  />
                </LocalizationProvider>
              </FormGroup>
            </Grid>
            <Grid
              item
              xs={6}
              sm={2}
            >
              <FormGroup>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    id="dataDoCadastroFim"
                    name="dataDoCadastroFim"
                    value={filter.dataDoCadastroFim}
                    label="Fim"
                    //onSelectedSectionsChange={} // Faz algo quando o range selecioando muda
                    format="DD/MM/YYYY"
                  />
                </LocalizationProvider>
              </FormGroup>
            </Grid>
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
              sm={2}
            >
              <FormGroup>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    id="dataDaUltimaModificacaoInicio"
                    name="dataDaUltimaModificacaoInicio"
                    value={filter.dataDaUltimaModificacaoInicio}
                    label="Inicio"
                    //onSelectedSectionsChange={} // Faz algo quando o range selecioando muda
                    format="DD/MM/YYYY"
                  />
                </LocalizationProvider>
              </FormGroup>
            </Grid>
            <Grid
              item
              xs={6}
              sm={2}
            >
              <FormGroup>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    id="dataDoCadastroFim"
                    name="dataDoCadastroFim"
                    value={filter.dataDoCadastroFim}
                    label="Fim"
                    //onSelectedSectionsChange={} // Faz algo quando o range selecioando muda
                    format="DD/MM/YYYY"
                  />
                </LocalizationProvider>
              </FormGroup>
            </Grid>

            <Grid
              container
              spacing={1}
              sx={{ mt: "5px" }}
            >
              <Grid
                item
                sm={7}
              ></Grid>
              <Grid
                item
                xs={5}
                sm={5}
              >
                <Grid
                  container
                  spacing={4}
                >
                  <Grid
                    item
                    sm={3}
                    xs={3}
                  ></Grid>
                  <Grid
                    item
                    sm={3}
                    xs={6}
                  >
                    <Button
                      variant="contained"
                      onClick={applyFilter}
                    >
                      Pesquisar
                    </Button>
                  </Grid>
                  <Grid
                    item
                    sm={6}
                    xs={2}
                  >
                    <Button
                      variant="contained"
                      onClick={handleDownloadCSV}
                    >
                      Download CSV
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Stack>
      <TabelaParceiros data={filteredData} />
    </div>
  );
};

TabelaParceiros.propTypes = {
  data: PropTypes.array,
};

export default FormListarParceirosPendentes;
