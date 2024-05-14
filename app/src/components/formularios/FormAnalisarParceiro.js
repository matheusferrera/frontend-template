import React, { useEffect, useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormGroup,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";

const FormAnalisarParceiroPendente = () => {
  const value = JSON.parse(localStorage.getItem("analisarID"));

  const [valores, setValores] = useState({
    nomePontoFocal: "",
    cnpj: "",
    cadastro: "",
    telefone: "",
    motivo: "",
    status: "none",
    tipoDeServico: ["none"],
    novoCadastro: false,
    cadastroAlterado: false,
    ultimaModificacao: null,
  });

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
      telefone: "(00) 00000-0000",
      tipoDeServico: {
        VEP: true,
        VET: false,
        VJA: false,
        CUR: false,
        FPG: false,
        MPu: false,
        MPa: false,
      },
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
      telefone: "(00) 00000-0000",
      tipoDeServico: {
        VEP: false,
        VET: true,
        VJA: false,
        CUR: false,
        FPG: false,
        MPu: false,
        MPa: false,
      },
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
      telefone: "(00) 00000-0000",
      tipoDeServico: {
        VEP: false,
        VET: false,
        VJA: true,
        CUR: false,
        FPG: false,
        MPu: false,
        MPa: false,
      },
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
      telefone: "(00) 00000-0000",
      tipoDeServico: {
        VEP: true,
        VET: false,
        VJA: false,
        CUR: false,
        FPG: false,
        MPu: false,
        MPa: false,
      },
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
      telefone: "(00) 00000-0000",
      tipoDeServico: {
        VEP: false,
        VET: true,
        VJA: true,
        CUR: false,
        FPG: false,
        MPu: false,
        MPa: false,
      },
    },
  ];

  useEffect(() => {
    if (value) {
      for (var i = 0; i < initialData.length; i++) {
        var parceiro = initialData[i];
        console.log(parceiro);
        if (parceiro["id"] == value) {
          console.log("Aqui");
          var servicos = [];
          Object.keys(parceiro["tipoDeServico"]).map(servico => {
            if (parceiro["tipoDeServico"][servico]) {
              servicos.push(servico);
            }
          });
          parceiro["tipoDeServico"] = servicos;
          parceiro["ultimaModificacao"] = dayjs(parceiro["ultimaModificacao"]);
          setValores(parceiro);
          break;
        }
      }
    }
  }, []);

  const handleChanges = event => {
    const { name, value } = event.target;
    setValores({ ...valores, [name]: value });
  };

  const handleSelectChanges = event => {
    const { name, value } = event.target;
    if (value.length == 0 || value == ["none"]) {
      setValores({ ...valores, [name]: ["none"] });
    } else {
      setValores({
        ...valores,
        [name]:
          typeof value === "string"
            ? value.split(",")
            : value.filter(v => {
                return v != "none";
              }),
      });
    }
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
                  id="nomePontoFocal"
                  name="nomePontoFocal"
                  label="Nome"
                  placeholder="Nome"
                  value={valores.nomePontoFocal}
                  type="text"
                  onChange={handleChanges}
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
                  id="cnpj"
                  name="cnpj"
                  label="CNPJ"
                  placeholder="CNPJ"
                  value={valores.cnpj}
                  type="text"
                  onChange={handleChanges}
                />
              </FormGroup>
            </Grid>
          </Grid>

          <Grid
            spacing={1}
            container
            marginTop={1}
          >
            <Grid
              item
              xs={6}
              sm={4}
            >
              <FormGroup>
                <TextField
                  id="cadastro"
                  name="cadastro"
                  label="Cadastro"
                  placeholder="Cadastro"
                  value={valores.cadastro}
                  type="text"
                  onChange={handleChanges}
                />
              </FormGroup>
            </Grid>
            <Grid
              item
              xs={6}
              sm={4}
            >
              <FormGroup>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Ultima Modificação"
                    id="ultimaModificacao"
                    name="ultimaModificacao"
                    value={valores.ultimaModificacao}
                    format="DD/MM/YYYY"
                    onChange={valor => setValores({ ...valores, ["ultimaModificacao"]: valor })}
                  />
                </LocalizationProvider>
              </FormGroup>
            </Grid>
            <Grid
              item
              xs={6}
              sm={4}
            >
              <FormGroup>
                <TextField
                  id="telefone"
                  name="telefone"
                  label="Telefone"
                  placeholder="Telefone"
                  value={valores.telefone}
                  type="text"
                  onChange={handleChanges}
                />
              </FormGroup>
            </Grid>
          </Grid>
        </Card>

        <Card
          color="#ffffff"
          sx={{
            borderRadius: "8px",
            padding: "16px",
            mt: "24px",
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
            >
              <Typography
                variant={"h6"}
                sx={{ mb: "8px" }}
              >
                Motivo da Pendência
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={1}
          >
            <Grid
              item
              xs={4.5}
            >
              <Grid
                item
                xs={12}
              >
                <Checkbox
                  id="novoCadastro"
                  name="novoCadastro"
                  checked={valores.novoCadastro}
                />{" "}
                Novo cadastro
              </Grid>
              <Grid
                item
                xs={12}
              >
                <Checkbox
                  id="cadastroAlterado"
                  name="cadastroAlterado"
                  checked={valores.cadastroAlterado}
                />{" "}
                Cadastro Alterado
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={7.5}
            >
              <Grid
                item
                xs={4.5}
                marginTop={3}
              >
                <Button
                  variant="outlined"
                  onClick={handleChanges}
                  sx={{ gap: "8px" }}
                >
                  <Typography
                    variant={"BUTTON TEXT"}
                    sx={{
                      fontSize: "12px",
                      mt: "8px",
                      mb: "8px",
                    }}
                  >
                    VIZUALIZAR ALTERAÇÕES
                  </Typography>
                </Button>
              </Grid>
              <Grid
                item
                xs={7.5}
                marginTop={3}
              >
                <Button
                  variant="outlined"
                  onClick={handleChanges}
                  sx={{ gap: "8px" }}
                >
                  <Typography
                    variant={"BUTTON TEXT"}
                    sx={{
                      fontSize: "12px",
                      mt: "8px",
                      mb: "8px",
                    }}
                  >
                    VIZUALIZAR INFORMAÇÕES COMPLEMENTARES
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={8}
            >
              <FormGroup variant="filled">
                <FormControl variant="filled">
                  <InputLabel>Status do Parceiro</InputLabel>
                  <Select
                    id="status"
                    name="status"
                    value={valores.status}
                    type="text"
                    onChange={handleChanges}
                  >
                    <MenuItem
                      value="none"
                      disabled
                    >
                      {" "}
                      Altere o Status do Parceiro{" "}
                    </MenuItem>
                    <MenuItem value="Negado">Negado</MenuItem>
                    <MenuItem value="Pendente">Pendente</MenuItem>
                    <MenuItem value="Aprovado">Aprovado</MenuItem>
                  </Select>
                </FormControl>
              </FormGroup>
            </Grid>
            <Grid
              item
              xs={4}
              mt="5px"
            >
              <Button
                variant="outlined"
                onClick={handleChanges}
                sx={{ gap: "8px" }}
              >
                <Typography
                  variant={"BUTTON TEXT"}
                  sx={{
                    fontSize: "11px",
                    mt: "8px",
                    mb: "8px",
                  }}
                >
                  VIZUALIZAR INFORMAÇÕES DO PARCEIRO
                </Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            mt={1}
          >
            <Grid
              item
              xs={12}
            >
              <FormGroup>
                <TextField
                  multiline
                  rows={4}
                  id="motivo"
                  name="motivo"
                  label="Motivo"
                  placeholder="Motivo"
                  value={valores.motivo}
                  type="text"
                  onChange={handleChanges}
                />
              </FormGroup>
            </Grid>
          </Grid>
        </Card>

        <Card
          color="#ffffff"
          sx={{
            borderRadius: "8px",
            padding: "16px",
            mt: "24px",
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
            >
              <Typography variant="subtitle2">Oferta(s) de serviço(s) ofertado(s) pelo parceiro</Typography>

              <FormGroup>
                <FormControl variant="filled">
                  <Select
                    id="tipoDeServico"
                    name="tipoDeServico"
                    multiple
                    value={valores.tipoDeServico || "none"}
                    type="text"
                    onChange={handleSelectChanges}
                  >
                    <MenuItem
                      value="none"
                      disabled
                    >
                      {" "}
                      Selecione o tipo de serviço
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
              </FormGroup>
            </Grid>
          </Grid>
        </Card>

        <Card
          color="#ffffff"
          sx={{
            borderRadius: "8px",
            padding: "16px",
            mt: "24px",
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
            >
              <Typography variant="subtitle 2"> Anexar Documentos</Typography>
            </Grid>
            <Grid
              item
              xs={12}
            >
              <FormGroup>
                <TextField
                  variant="filled"
                  label="Anexar imagem"
                  InputProps={{
                    endAdornment: <UploadFileIcon />,
                  }}
                />
              </FormGroup>
            </Grid>
            <Grid
              item
              xs={12}
              mt={2}
            >
              <Grid
                item
                my={1}
              >
                <Box
                  pl={1}
                  width={1}
                  sx={{ border: "1px solid grey" }}
                >
                  <Grid container>
                    <Grid
                      item
                      xs={11}
                      sx={{ py: 1 }}
                    >
                      Nome do Arquivo...
                    </Grid>
                    <Grid
                      item
                      sx={{ border: "1px solid blue", borderRadius: 1 }}
                    >
                      <IconButton>
                        <DeleteIcon sx={{ color: "#1351B4" }} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid
                item
                my={1}
              >
                <Box
                  pl={1}
                  width={1}
                  sx={{ border: "1px solid grey" }}
                >
                  <Grid container>
                    <Grid
                      item
                      xs={11}
                      sx={{ py: 1 }}
                    >
                      Nome do Arquivo...
                    </Grid>
                    <Grid
                      item
                      sx={{ border: "1px solid blue", borderRadius: 1 }}
                    >
                      <IconButton>
                        <DeleteIcon sx={{ color: "#1351B4" }} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Card>

        <Grid container>
          <Grid
            item
            xs={8.5}
          ></Grid>
          <Grid
            item
            xs={1.5}
          >
            <Button variant="outlined">
              <Typography variant={"BUTTON TEXT"}> CANCELAR </Typography>
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
          >
            <Button variant="contained">
              <SaveIcon fontSize="small" />
              <Typography variant={"BUTTON TEXT"}>SALVAR</Typography>
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default FormAnalisarParceiroPendente;
