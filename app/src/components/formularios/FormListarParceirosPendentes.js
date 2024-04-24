import React, { useState } from "react";

import {
  Button,
  Card,
  FormGroup,
  Grid,
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

function StudentTable({ data }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome Responsável</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Class</TableCell>
            <TableCell>Math Grade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((student, index) => (
            <TableRow key={index}>
              <TableCell>{student.nomeResponsavel}</TableCell>
              <TableCell>{student.age}</TableCell>
              <TableCell>{student.class}</TableCell>
              <TableCell>{student.mathGrade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const FormListarParceirosPendentes = () => {
  // Dados da tabela
  const initialData = [
    { nomeResponsavel: "John", age: 18, class: "A", mathGrade: 85 },
    { nomeResponsavel: "Alice", age: 17, class: "B", mathGrade: 90 },
    { nomeResponsavel: "Bob", age: 19, class: "A", mathGrade: 78 },
    // Additional student data...
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
    let filtered = initialData.filter(student => {
      return student.nomeResponsavel.toLowerCase().includes(filter.nomeResponsavel.toLowerCase());
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
      <StudentTable data={filteredData} />
    </div>
  );
};

StudentTable.propTypes = {
  data: PropTypes.array,
};

export default FormListarParceirosPendentes;
