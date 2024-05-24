import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import SaveIcon from "@mui/icons-material/Save";
import UploadFileRoundedIcon from "@mui/icons-material/UploadFile";
import { Box, Button, Card, FormControl, FormGroup, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";

import { dadosParceiros } from "./dadosMockados";

const FormAnalisarInformacoesComplementares = () => {
  const value = JSON.parse(localStorage.getItem("analisarID"));
  const [valores, setValores] = useState({
    nomePontoFocal: "",
    cnpj: "",
    dataCadastro: "",
    telefone: "",
    motivo: "",
    status: "Pendente",
    tipoDeServico: ["none"],
    novoCadastro: false,
    cadastroAlterado: false,
    dataUltimaModificacao: null,
  });

  const navigate = useNavigate();

  const initialData = dadosParceiros;
  useEffect(() => {
    if (value) {
      for (var i = 0; i < initialData.length; i++) {
        var parceiro = initialData[i];
        if (parceiro["id"] == value) {
          var servicos = [];
          Object.keys(parceiro["tipoDeServico"]).map(servico => {
            if (parceiro["tipoDeServico"][servico]) {
              servicos.push(servico);
            }
          });
          parceiro["tipoDeServico"] = servicos;
          parceiro["dataUltimaModificacao"] = dayjs(parceiro["dataUltimaModificacao"]);
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

  const handleSalvar = () => {
    if (valores.status != "Pendente") {
      console.log("Iformações salvas com sucesso!", valores);
      navigate("/listar-parceiros-pendentes");
    } else {
      console.log("Status do parceiro ainda é pendente!");
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
                  id="dataCadastro"
                  name="dataCadastro"
                  label="Data do cadastro"
                  placeholder="Data do cadastro"
                  value={valores.dataCadastro}
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
            <Grid
              item
              xs={6}
              sm={4}
            >
              <FormGroup>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Ultima Modificação"
                    id="dataUltimaModificacao"
                    name="dataUltimaModificacao"
                    value={valores.dataUltimaModificacao}
                    format="DD/MM/YYYY"
                    onChange={valor => setValores({ ...valores, ["dataUltimaModificacao"]: valor })}
                  />
                </LocalizationProvider>
              </FormGroup>
            </Grid>
            <Grid
              item
              xs={12}
              sm={9.5}
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
                      value="Pendente"
                      disabled
                    >
                      {" "}
                      Altere o Status do Parceiro{" "}
                    </MenuItem>
                    <MenuItem value="Reprovar">Reprovar</MenuItem>
                    <MenuItem value="Aprovar">Aprovar</MenuItem>
                  </Select>
                </FormControl>
              </FormGroup>
            </Grid>
            <Grid
              item
              xs={0}
              sm={0.2}
            ></Grid>
            <Grid
              item
              xs={12}
              sm={2.3}
            >
              <Box
                py={2}
                px={1}
                alignContent={"center"}
                sx={{
                  bgcolor:
                    valores.status == "Pendente"
                      ? "rgba(255, 0, 0, 0.1)"
                      : valores.status == "Reprovar"
                        ? "rgba(236, 186, 67, 0.48)"
                        : "rgba(0, 255, 0, 0.1)",
                  border: "2px solid",
                  borderColor: valores.status == "Pendente" ? "red" : valores.status == "Reprovar" ? "orange" : "green",
                  borderRadius: "4px",
                }}
              >
                <Typography
                  align="center"
                  sx={{
                    color: valores.status == "Pendente" ? "red" : valores.status == "Reprovar" ? "orange" : "green",
                    fontFamily: "Rawline Bold",
                  }}
                >
                  {valores.status == "Pendente" ? "Pendente de aprovação" : valores.status == "Reprovar" ? "Reprovado" : "Aprovado"}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid
            spacing={1}
            container
            marginTop={1}
          >
            <Grid
              item
              xs={12}
              sm={4}
            ></Grid>
            <Grid
              item
              xs={12}
              sm={4}
            ></Grid>
            <Grid
              item
              xs={12}
              sm={4}
            >
              <Button
                variant="outlined"
                onClick={() => navigate("/listar-parceiros-pendentes")}
              >
                <Typography variant={"BUTTON TEXT"}> VISUALIZAR INFORMAÇÕES COMPLEMENTARES </Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            mt={1}
            spacing={1}
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
          <Grid
            container
            mt={3}
            spacing={1}
          >
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
                    endAdornment: (
                      <Button
                        component="label"
                        role={undefined}
                        variant="secondary"
                        tabIndex={-1}
                      >
                        <UploadFileRoundedIcon />
                      </Button>
                    ),
                  }}
                />
              </FormGroup>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={1}
            mt={3}
          >
            <Grid
              item
              xs={0}
              sm={5.5}
            ></Grid>
            <Grid
              item
              xs={12}
              sm={1.3}
            >
              <Button
                variant="outlined"
                onClick={() => navigate("/listar-parceiros-pendentes")}
              >
                <Typography variant={"BUTTON TEXT"}>CANCELAR</Typography>
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
            >
              <Button
                variant="outlined"
                onClick={() => navigate("/listar-parceiros-pendentes")}
              >
                <Typography variant={"BUTTON TEXT"}>VISUALIZAR INFORMAÇÕES COMPLEMENTARES</Typography>
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              sm={1}
            >
              <Button
                variant="contained"
                onClick={handleSalvar}
              >
                <SaveIcon fontSize="small" />
                <Typography variant={"BUTTON TEXT"}>SALVAR</Typography>
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Stack>
    </>
  );
};

export default FormAnalisarInformacoesComplementares;
