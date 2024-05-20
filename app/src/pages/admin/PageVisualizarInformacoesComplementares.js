import React from "react";

import {
  Button,
  Card,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import CardBreadcrumb from "../../components/cards/CardBreadcrumb";

const VisualizarInformacoesComplementares = () => {
  const theme = useTheme();

  const valores = {
    eOSPC: false,
    finalidade1: "",
    eRegistradoBCB: false,
    finalidade2: "",
    seguimento: "",
    eCorrespondenteBancario: "",
    cnpjs: "",
    nomes: "",
    fintec: false,
    orientaAtividadeProdutiva: false,
    empresaSimplesCredito: false,
    pmpo: false,
    dataDeInicio: null,
    repassadorasCnpjs: "",
    repassadorasNomes: "",
    eMicrocreditoMandato: false,
    mandatariasCnpjs: "",
    mandatariasNomes: "",
    abrangenciaOperacao: "",
    uf: "none",
    municipio: "none",
    situacao: "none",
    motivo: "",
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 0 }}
    >
      <CardBreadcrumb
        homeLink="/visualizar_informacoes_complementares"
        homeText="Admin > Listar Parceiros Pendentes"
        currentPage="Visualizar Informações Complementares"
      />

      <Typography
        variant="h4"
        mt={3}
        mb={3}
        sx={{ fontFamily: "Rawline Bold" }}
        style={{ transition: "1s" }}
      >
        Visualizar Informações Complementares
      </Typography>

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
              mb={1}
              container
            >
              <Grid
                item
                xs={5}
                sm={5}
              >
                <Grid
                  item
                  xs={12}
                >
                  <Typography variant="subtitle2">É OSPC?</Typography>
                </Grid>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                >
                  <Typography>Não</Typography>
                  <Switch value={valores.eOSPC} />
                  <Typography>Sim</Typography>
                </Stack>
              </Grid>
              <Grid
                item
                xs={7}
                sm={7}
              >
                <FormGroup>
                  <TextField
                    id="finalidades1"
                    name="finalidades1"
                    placeholder="Finalidades"
                    label="Quais as finalidades"
                    value={valores.finalidades1}
                    type="text"
                  />
                </FormGroup>
              </Grid>
            </Grid>

            <Grid
              spacing={1}
              mb={1}
              container
            >
              <Grid
                item
                xs={5}
                sm={5}
              >
                <Grid
                  item
                  xs={12}
                >
                  <Typography variant="subtitle2">É registrado(a) no Banco Central do Brasil?</Typography>
                </Grid>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                >
                  <Typography>Não</Typography>
                  <Switch value={valores.eRegistradoBCB} />
                  <Typography>Sim</Typography>
                </Stack>
              </Grid>
              <Grid
                item
                xs={7}
                sm={7}
              >
                <FormGroup>
                  <TextField
                    id="finalidades2"
                    name="finalidades2"
                    placeholder="Finalidades"
                    label="Quais as finalidades"
                    value={valores.finalidades2}
                    type="text"
                  />
                </FormGroup>
              </Grid>
            </Grid>

            <Grid
              container
              mb={2}
            >
              <Grid
                item
                xs={12}
              >
                <FormGroup>
                  <TextField
                    id="seguimento"
                    name="seguimento"
                    placeholder="Seguimento do Sistema Financeiro Nacional"
                    label="Em qual seguimento do Sistema Financeiro Nacional?"
                    value={valores.seguimento}
                    type="text"
                  />
                </FormGroup>
              </Grid>
            </Grid>

            <Grid
              spacing={1}
              mb={1}
              container
            >
              <Grid
                item
                xs={12}
              >
                <Grid
                  item
                  xs={12}
                >
                  <Typography variant="subtitle2">É correspondete bancário?</Typography>
                </Grid>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                >
                  <Typography>Não</Typography>
                  <Switch value={valores.eCorrespondenteBancario} />
                  <Typography>Sim</Typography>
                </Stack>
              </Grid>
            </Grid>

            <Grid
              container
              mb={1}
            >
              <Grid
                item
                xs={12}
                mb={2}
              >
                <FormGroup>
                  <TextField
                    id="cnpjs"
                    name="cnpjs"
                    placeholder="Instituições (CNPJ)"
                    label="De quais instituições? CNPJ"
                    value={valores.cnpjs}
                    type="text"
                  />
                </FormGroup>
              </Grid>
              <Grid
                item
                xs={12}
              >
                <FormGroup>
                  <TextField
                    id="nomes"
                    name="nomes"
                    placeholder="Instituições (Nome)"
                    label="De quais instituições? Nome"
                    value={valores.nomes}
                    type="text"
                  />
                </FormGroup>
              </Grid>
            </Grid>

            <Grid
              container
              mb={1}
            >
              <Grid
                item
                xs={12}
                mb={2}
              >
                <Grid
                  item
                  xs={12}
                >
                  <Typography variant="subtitle2">
                    É uma instituição financeira que realiza operações exclusivamente por meio de sítio eletrônico ou de aplicativo
                    (Fintec)?
                  </Typography>
                </Grid>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                >
                  <Typography>Não</Typography>
                  <Switch value={valores.fintec} />
                  <Typography>Sim</Typography>
                </Stack>
              </Grid>

              <Grid
                item
                xs={12}
                mb={2}
              >
                <Grid
                  item
                  xs={12}
                >
                  <Typography variant="subtitle2">
                    É pessoa jurídica especializada no apoio, no fomento ou na orientação a atividades produtivas?
                  </Typography>
                </Grid>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                >
                  <Typography>Não</Typography>
                  <Switch value={valores.orientaAtividadeProdutiva} />
                  <Typography>Sim</Typography>
                </Stack>
              </Grid>

              <Grid
                item
                xs={12}
                mb={2}
              >
                <Grid
                  item
                  xs={12}
                >
                  <Typography variant="subtitle2">É empresa Simples de Crédito?</Typography>
                </Grid>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                >
                  <Typography>Não</Typography>
                  <Switch value={valores.empresaSimplesCredito} />
                  <Typography>Sim</Typography>
                </Stack>
              </Grid>

              <Grid container>
                <Grid
                  item
                  xs={5}
                >
                  <Grid
                    item
                    xs={12}
                  >
                    <Typography variant="subtitle2">É operador de PMPO?</Typography>
                  </Grid>
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >
                    <Typography>Não</Typography>
                    <Switch value={valores.pmpo} />
                    <Typography>Sim</Typography>
                  </Stack>
                </Grid>
                <Grid
                  item
                  xs={7}
                >
                  <FormGroup>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Data de Inicio"
                        id="dataDeInicio"
                        name="dataDeInicio"
                        value={valores.dataDeInicio}
                        format="DD/MM/YYYY"
                      />
                    </LocalizationProvider>
                  </FormGroup>
                </Grid>
              </Grid>
            </Grid>

            <Grid conatiner>
              <Typography variant="body2">É operador de carteira de microcrédito com que tipo de recursos?</Typography>
              <FormGroup>
                <RadioGroup
                  disabled
                  name="tipoDeRecurso"
                >
                  <FormControlLabel
                    value="proprios"
                    control={<Radio style={{ color: theme.palette.primary.main }} />}
                    label="Próprios"
                  />
                  <FormControlLabel
                    value="terceirosRepasse"
                    control={<Radio style={{ color: theme.palette.primary.main }} />}
                    label="De terceiros/repasse"
                  />
                  <FormControlLabel
                    value="propriosETerceirosRepasse"
                    control={<Radio style={{ color: theme.palette.primary.main }} />}
                    label="Próprios e de terceiros/repasse"
                  />
                </RadioGroup>
              </FormGroup>
            </Grid>

            <Grid
              container
              mb={2}
            >
              <Grid
                item
                xs={12}
                mb={2}
              >
                <FormGroup>
                  <TextField
                    id="repassadorasCnpjs"
                    name="repassadorasCnpjs"
                    placeholder="Instituições (CNPJ)"
                    label="De quais instituições repassadoras? CNPJ"
                    value={valores.repassadorasCnpjs}
                    type="text"
                  />
                </FormGroup>
              </Grid>
              <Grid
                item
                xs={12}
              >
                <FormGroup>
                  <TextField
                    id="repassadorasNomes"
                    name="repassadorasNomes"
                    placeholder="Instituições (Nome)"
                    label="De quais instituições repassadoras? Nome"
                    value={valores.repassadorasNomes}
                    type="text"
                  />
                </FormGroup>
              </Grid>

              <Grid
                item
                xs={12}
                sm={12}
              >
                <Grid
                  item
                  xs={12}
                >
                  <Typography variant="subtitle2">É operador de carteira de microcrédito por mandato?</Typography>
                </Grid>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                >
                  <Typography>Não</Typography>
                  <Switch value={valores.eMicrocreditoMandato} />
                  <Typography>Sim</Typography>
                </Stack>
              </Grid>
            </Grid>

            <Grid
              container
              mb={2}
            >
              <Grid
                item
                xs={12}
                mb={2}
              >
                <FormGroup>
                  <TextField
                    id="mandatariasCnpjs"
                    name="mandatariasCnpjs"
                    placeholder="Instituições (CNPJ)"
                    label="De quais instituições mandatárias? CNPJ"
                    value={valores.mandatariasCnpjs}
                    type="text"
                  />
                </FormGroup>
              </Grid>
              <Grid
                item
                xs={12}
              >
                <FormGroup>
                  <TextField
                    id="mandatariasNomes"
                    name="mandatariasNomes"
                    placeholder="Instituições (Nome)"
                    label="De quais instituições mandatárias? Nome"
                    value={valores.mandatariasNomes}
                    type="text"
                  />
                </FormGroup>
              </Grid>
            </Grid>

            <Grid container>
              <Grid
                item
                xs={3.8}
                mb={2}
                mr={1}
              >
                <FormGroup>
                  <TextField
                    id="abrangenciaOperacao"
                    name="abrangenciaOperacao"
                    placeholder="Abragência de Operações"
                    label="Qual a abrangência de operação?"
                    value={valores.abrangenciaOperacao}
                    type="text"
                  />
                </FormGroup>
              </Grid>
              <Grid
                item
                xs={3.8}
                mb={2}
                ml={1}
                mr={1}
              >
                <FormGroup>
                  <FormControl>
                    <InputLabel id="label-uf">UF</InputLabel>
                    <Select
                      id="uf"
                      name="uf"
                      placeholder="UF"
                      label="UF"
                      value={valores.uf}
                      labelId="label-uf"
                    >
                      <MenuItem
                        value="none"
                        disabled
                      >
                        Selecione uma opção
                      </MenuItem>
                    </Select>
                  </FormControl>
                </FormGroup>
              </Grid>
              <Grid
                item
                xs={3.8}
                mb={2}
                ml={1}
              >
                <FormGroup>
                  <FormControl>
                    <InputLabel id="label-municipio">Municipio</InputLabel>
                    <Select
                      id="municipio"
                      name="municipio"
                      placeholder="Município"
                      label="Município"
                      value={valores.municipio}
                      labelID="label-municipio"
                    >
                      <MenuItem
                        value="none"
                        disabled
                      >
                        Selecione uma opção
                      </MenuItem>
                    </Select>
                  </FormControl>
                </FormGroup>
              </Grid>
            </Grid>

            <Grid
              container
              mb={2}
            >
              <Grid
                item
                xs={12}
              >
                <FormGroup>
                  <FormControl>
                    <InputLabel id="label-situacao">Situação</InputLabel>
                    <Select
                      id="situacao"
                      name="situacao"
                      placeholder="Situação"
                      label="Situação"
                      value={valores.situacao}
                      labelID="label-situacao"
                    >
                      <MenuItem
                        value="none"
                        disabled
                      >
                        Selecione uma opção
                      </MenuItem>
                    </Select>
                  </FormControl>
                </FormGroup>
              </Grid>
            </Grid>

            <Grid
              container
              mb={2}
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
                  />
                </FormGroup>
              </Grid>
            </Grid>
          </Card>

          <Grid container>
            <Grid
              item
              xs={10.5}
              sm={10.5}
            ></Grid>
            <Grid
              item
              xs={1.5}
              sm={1.5}
            >
              <Button
                variant="outlined"
                onClick={() => window.history.back()}
              >
                <Typography variant={"BUTTON TEXT"}> CANCELAR </Typography>
              </Button>
            </Grid>
          </Grid>
        </Stack>
      </>
    </Container>
  );
};

export default VisualizarInformacoesComplementares;
