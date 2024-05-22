import React, { useEffect } from "react";
import { useState } from "react";

import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";
import { Button, Card, FormGroup, Grid, Stack, TextField, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Form, Formik } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";

import { useAuth } from "../../contexts/AuthContext.js";
import optionsService from "../../services/options.service.js";
import ConfirmacaoModal from "../modals/ConfirmacaoModal.js";
import ErroModal from "../modals/ErroModal.js";
import { SelectCidade } from "./fields/SelectCidade.js";
import { SelectUF } from "./fields/SelectUF.js";
import { formatTelefone } from "./utils.js";

const FormEditarPerfilCidadao = ({
  loading,
  handleSubmit,
  confirmacaoModal,
  setConfirmacaoModal,
  erroModal,
  setErroModal,
  values,
  readOnly = false,
}) => {
  const { user } = useAuth();

  // eslint-disable-next-line no-unused-vars
  const theme = useTheme();

  //========================================>  <================================================
  //VARIAVEIS UTILIZADAS NO FORM  - Primeiramente deve setar os valores iniciais
  //========================================>  <================================================
  const initialValues = values
    ? values
    : {
        email: user.ds_email,
        nome: "",
        nomePai: "",
        nomeMae: "",
        emailAdicional: "",
        telefone: "",
        estadoCivil: "",
        escolaridade: "",
        cnpj: "",
        uf: "",
        municipio: "",
        corRaca: "",
        genero: "",
        faixaRenda: "",
        acessoInternet: "",
        estaTrabalhando: false,
        interesseAbrirNegocio: false,
        pcd: false,
        sabeLer: false,
        situacaoRua: false,
        buscandoEmprego: false,
      };

  const [ufs, setUfs] = useState([]);
  const [cidades, setCidades] = values ? useState(optionsService.cidadesJSON.filter(cidade => cidade.estado === values.uf)) : useState([]);
  const [selectedUf, setSelectedUf] = values ? useState(values.uf) : useState("");
  const [selectedCidade, setSelectedCidade] = values ? useState(values.cidade) : useState("");

  //========================================>  <================================================
  //HANDLES (SET VALUES) DIFERENTES UTILIZADOS NO FORM  - Caso necessite fazer um novo handle utilize o setFielValue, seguir o exemplo do handleSwitch
  //========================================>  <================================================
  const handleSwitchChange = (event, setFieldValue) => {
    const { name, checked } = event.target;
    setFieldValue(name, checked);
  };

  const handleDataNascimetoChange = (event, setFieldValue) => {
    const date = new Date(event.$d);
    const formattedDate = date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    setFieldValue("dataNascimento", formattedDate);
  };

  const handleConfirmacaoClose = () => {
    setConfirmacaoModal(false);
  };

  const handleErroClose = () => {
    setErroModal(false);
  };

  const handleSelectUf = (event, setFieldValue) => {
    const { name, value } = event.target;
    setFieldValue(name, value);

    if (name === "uf") {
      setSelectedUf(value);
      setSelectedCidade("");
      setFieldValue("cidade", "");
      fetchCidadesByUf(event.target.value, setCidades);
    }
  };

  const handleSelectCidade = (event, setFieldValue) => {
    const { name, value } = event.target;
    setFieldValue(name, value);

    if (name === "cidade") {
      setSelectedCidade(event.target.value);
    }
  };

  //========================================>  <================================================
  //DEFINICAO DE INPUTS OBRIGATORIOS  - Necessita utilizar a tag error & helpText, como no exemplo de UF
  //========================================>  <================================================
  const validationSchema = Yup.object().shape({
    nomeMae: Yup.string().email("Forneça o nome da sua mãe").required("Nome da mãe é obrigatório"),
    nomePai: Yup.string().email("Forneça o nome da sua mãe").required("Nome da mãe é obrigatório"),
    dataNascimento: Yup.string().email("Forneça uma data de nascimento válida").required("Data de nascimento é obrigatório"),
  });

  //========================================>  <================================================
  //FETCH PARA PREENCHER OPCOES NOS INPUTS - Caso necessite fazer um fetch para mostrar options
  //========================================>  <================================================
  useEffect(() => {
    const fetchUfs = async () => {
      await optionsService
        .getAllUFs()
        .then(ufsData => {
          setUfs(ufsData);
        })
        .catch(error => {
          console.error("Erro ao obter UFs:", error);
        });
    };
    fetchUfs();
  }, []);

  const fetchCidadesByUf = async (ufSigla, setCidadesFunction) => {
    try {
      const cidadesData = await optionsService.getCidadesFromUF(ufSigla);
      setCidadesFunction(cidadesData);
    } catch (error) {
      console.error("Erro ao obter cidades:", error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnChange={false}
    >
      {({ values, setFieldValue, handleChange, handleBlur, isSubmitting, errors, touched, validateForm }) => (
        <Form>
          <Stack>
            <Card
              color="#ffffff"
              sx={{
                borderRadius: "8px",
                padding: "16px",
              }}
              style={{ transition: "1s" }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: "20",
                  mb: "16px",
                  fontFamily: "Rawline Regular",
                }}
              >
                Meu perfil
              </Typography>
              <Grid
                spacing={1}
                container
              >
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    mb: "16px",
                  }}
                >
                  <FormGroup>
                    <TextField
                      label="Nome "
                      id="nome"
                      name="nome"
                      value={values.nome}
                      placeholder="Insira o seu Nome completo"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      inputProps={{
                        readOnly: readOnly,
                      }}
                    />
                  </FormGroup>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    mb: "16px",
                  }}
                >
                  <FormGroup>
                    <TextField
                      label="* E-mail"
                      id="email"
                      name="email"
                      value={values.email}
                      placeholder="Insira seu Email aqui"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.email && touched.email}
                      helperText={errors.email && touched.email && errors.email}
                    ></TextField>
                  </FormGroup>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={4}
                  sx={{
                    mb: "16px",
                  }}
                >
                  <FormGroup>
                    <TextField
                      label="* Nome do pai"
                      id="nomePai"
                      name="nomePai"
                      value={values.nomePai}
                      placeholder="Insira o Nome completo do seu pai"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      inputProps={{
                        readOnly: readOnly,
                      }}
                      error={errors.nomePai && touched.nomePai}
                      helperText={errors.nomePai && touched.nomePai && errors.nomePai}
                    />
                  </FormGroup>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  sx={{
                    mb: "16px",
                  }}
                >
                  <FormGroup>
                    <TextField
                      label="* Nome da mãe"
                      id="nomeMae"
                      name="nomeMae"
                      value={values.nomeMae}
                      placeholder="Insira o Nome completo da sua mãe"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      inputProps={{
                        readOnly: readOnly,
                      }}
                      error={errors.nomeMae && touched.nomeMae}
                      helperText={errors.nomeMae && touched.nomeMae && errors.nomeMae}
                    />
                  </FormGroup>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  sx={{
                    mb: "16px",
                  }}
                >
                  <FormGroup>
                    <TextField
                      label="* E-mail adicional"
                      id="emailAdicional"
                      name="emailAdicional"
                      value={values.emailAdicional}
                      placeholder="Insira seu Email adicional aqui"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.email && touched.email}
                      helperText={errors.email && touched.email && errors.email}
                    ></TextField>
                  </FormGroup>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  sx={{
                    mb: "16px",
                  }}
                >
                  <FormGroup>
                    <TextField
                      label="Telefone"
                      id="telefone"
                      name="telefone"
                      value={formatTelefone(values.telefone)}
                      placeholder="Insira o Telefone"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      inputProps={{
                        maxLength: 15,
                        readOnly: readOnly,
                      }}
                    />
                  </FormGroup>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  style={{ paddingTop: "0" }}
                >
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    fullWidth
                  >
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="* Data de nascimento"
                        id="DataNascimento"
                        name="DataNascimento"
                        placeholder="Insira o Telefone"
                        onChange={event => handleDataNascimetoChange(event, setFieldValue)}
                        slotProps={{
                          textField: {
                            fullWidth: true,
                            error: errors.dataNascimento && touched.dataNascimento,
                            helperText: errors.dataNascimento && touched.dataNascimento && errors.dataNascimento,
                          },
                        }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={4}
                  sx={{
                    mb: "16px",
                  }}
                >
                  <FormControl fullWidth>
                    <InputLabel id="estadoCivilLabel">* Estado civil</InputLabel>
                    <Select
                      labelId="estadoCivilLabel"
                      id="estadoCivil"
                      value={values.estadoCivil}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={"solteiro"}>Solteiro</MenuItem>
                      <MenuItem value={"viuvo"}>Viuvo</MenuItem>
                      <MenuItem value={"casado"}>Casado</MenuItem>
                      <MenuItem value={"divorciado"}>Divorciado</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    mb: "16px",
                  }}
                >
                  <FormGroup>
                    <TextField
                      label="Escolaridade / Grau de instrução"
                      id="escolaridade"
                      name="escolaridade"
                      value={values.escolaridade}
                      placeholder="Insira sua escolaridade (ex: Ensino médio incompleto)"
                      type="text"
                    ></TextField>
                  </FormGroup>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    mb: "16px",
                  }}
                >
                  <FormGroup>
                    <TextField
                      label="CNPJ de microempreendedor individual (MEI)"
                      id="cnpj"
                      name="cnpj"
                      value={values.cnpj}
                      placeholder="Insira um CNPJ válido"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </FormGroup>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={3}
                  sx={{
                    mb: "16px",
                  }}
                >
                  <FormGroup>
                    <SelectUF
                      idSelect={"uf"}
                      nameSelect={"uf"}
                      value={values.uf}
                      ufs={ufs}
                      uf={selectedUf}
                      handleSelectUf={event => handleSelectUf(event, setFieldValue)}
                      onBlur={handleBlur}
                      readOnly={readOnly}
                      errors={errors.uf}
                      touched={touched.uf}
                    />
                    {errors.uf && touched.uf && errors.uf && (
                      <Typography
                        sx={{
                          color: "#FF5630",
                          fontSize: "12px",
                          ml: "12px",
                        }}
                      >
                        {errors.uf}
                      </Typography>
                    )}
                  </FormGroup>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={3}
                  sx={{
                    mb: "16px",
                  }}
                >
                  <FormGroup>
                    <SelectCidade
                      idSelect={"cidade"}
                      nameSelect={"cidade"}
                      value={values.cidade}
                      cidades={cidades}
                      cidade={selectedCidade}
                      handleSelectCidade={event => handleSelectCidade(event, setFieldValue)}
                      onBlur={handleBlur}
                      readOnly={readOnly}
                      errors={errors.cidade}
                      touched={touched.cidade}
                    />
                    {errors.cidade && touched.cidade && errors.cidade && (
                      <Typography
                        sx={{
                          color: "#FF5630",
                          fontSize: "12px",
                          ml: "12px",
                        }}
                      >
                        {errors.cidade}
                      </Typography>
                    )}
                  </FormGroup>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={6}
                  sx={{
                    mb: "16px",
                  }}
                >
                  <FormControl fullWidth>
                    <InputLabel id="estadoCivilLabel">Cor ou raça</InputLabel>
                    <Select
                      labelId="estadoCivilLabel"
                      id="estadoCivil"
                      value={values.estadoCivil}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={"branco"}>Branco</MenuItem>
                      <MenuItem value={"negro"}>Negro</MenuItem>
                      <MenuItem value={"indigena"}>Indigena</MenuItem>
                      <MenuItem value={"pardo"}>Pardo</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={4}
                  sx={{
                    mb: "16px",
                  }}
                >
                  <FormControl fullWidth>
                    <InputLabel id="generoLabel">Genero</InputLabel>
                    <Select
                      labelId="generoLabel"
                      id="genero"
                      value={values.genero}
                      label="genero"
                      onChange={handleChange}
                    >
                      <MenuItem value={"masculino"}>Masculino</MenuItem>
                      <MenuItem value={"feminino"}>Feminino</MenuItem>
                      <MenuItem value={"naoDeclarado"}>Não declarado</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={4}
                  sx={{
                    mb: "16px",
                  }}
                >
                  <FormGroup>
                    <TextField
                      label="Faixa de renda"
                      id="faixaRenda"
                      name="faixaRenda"
                      value={values.faixaRenda}
                      placeholder="Insira uma faixa de renda"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </FormGroup>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={4}
                  sx={{
                    mb: "16px",
                  }}
                >
                  <FormControl fullWidth>
                    <InputLabel id="estadoCivilLabel">Como geralmente você acessa a internet?</InputLabel>
                    <Select
                      labelId="estadoCivilLabel"
                      id="estadoCivil"
                      value={values.estadoCivil}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={"smartPhone"}>Smartphone (celular)</MenuItem>
                      <MenuItem value={"computador"}>Computador</MenuItem>
                      <MenuItem value={"tablet"}>Tablet</MenuItem>
                      <MenuItem value={"lanHouse"}>Lan house</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  sx={{
                    mb: "16px",
                  }}
                >
                  <p
                    id="negocioProprioLabel"
                    style={{ fontFamily: "rawline Bold", marginBottom: "5px" }}
                  >
                    Tem interesse em abrir um negócio próprio?
                  </p>
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >
                    <Typography>Não</Typography>
                    <AntSwitch
                      labelId="negocioProprioLabel"
                      inputProps={{ "aria-label": "ant design", name: "interesseAbrirNegocio" }}
                      checked={values.interesseAbrirNegocio}
                      onChange={event => handleSwitchChange(event, setFieldValue)}
                      value={values.interesseAbrirNegocio}
                    />
                    <Typography>Sim</Typography>
                  </Stack>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  sx={{
                    mb: "16px",
                  }}
                >
                  <p
                    id="negocioProprioLabel"
                    style={{ fontFamily: "rawline Bold", marginBottom: "5px" }}
                  >
                    Você atualmente está trabalhando ou estagiando?
                  </p>
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >
                    <Typography>Não</Typography>
                    <AntSwitch
                      labelId="negocioProprioLabel"
                      inputProps={{ "aria-label": "ant design", name: "estaTrabalhando" }}
                      checked={values.estaTrabalhando}
                      onChange={event => handleSwitchChange(event, setFieldValue)}
                      value={values.estaTrabalhando}
                    />
                    <Typography>Sim</Typography>
                  </Stack>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  sx={{
                    mb: "16px",
                  }}
                >
                  <p
                    id="negocioProprioLabel"
                    style={{ fontFamily: "rawline Bold", marginBottom: "5px" }}
                  >
                    PCD?
                  </p>
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >
                    <Typography>Não</Typography>
                    <AntSwitch
                      labelId="negocioProprioLabel"
                      inputProps={{ "aria-label": "ant design", name: "pcd" }}
                      checked={values.pcd}
                      onChange={event => handleSwitchChange(event, setFieldValue)}
                      value={values.pcd}
                    />
                    <Typography>Sim</Typography>
                  </Stack>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  sx={{
                    mb: "16px",
                  }}
                >
                  <p
                    id="negocioProprioLabel"
                    style={{ fontFamily: "rawline Bold", marginBottom: "5px" }}
                  >
                    Sabe ler e escrever?
                  </p>
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >
                    <Typography>Não</Typography>
                    <AntSwitch
                      labelId="negocioProprioLabel"
                      inputProps={{ "aria-label": "ant design", name: "sabeLer" }}
                      checked={values.sabeLer}
                      onChange={event => handleSwitchChange(event, setFieldValue)}
                      value={values.sabeLer}
                    />
                    <Typography>Sim</Typography>
                  </Stack>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  sx={{
                    mb: "16px",
                  }}
                >
                  <p
                    id="negocioProprioLabel"
                    style={{ fontFamily: "rawline Bold", marginBottom: "5px" }}
                  >
                    Você se encontra em situação de rua?
                  </p>
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >
                    <Typography>Não</Typography>
                    <AntSwitch
                      labelId="negocioProprioLabel"
                      inputProps={{ "aria-label": "ant design", name: "situacaoRua" }}
                      checked={values.situacaoRua}
                      onChange={event => handleSwitchChange(event, setFieldValue)}
                      value={values.situacaoRua}
                    />
                    <Typography>Sim</Typography>
                  </Stack>
                </Grid>

                <Grid
                  item
                  xs={12}
                  sm={12}
                  sx={{
                    mb: "16px",
                  }}
                >
                  <p
                    id="negocioProprioLabel"
                    style={{ fontFamily: "rawline Bold", marginBottom: "5px" }}
                  >
                    Você está buscando emprego ou estágio?
                  </p>
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >
                    <Typography>Não</Typography>
                    <AntSwitch
                      labelId="negocioProprioLabel"
                      inputProps={{ "aria-label": "ant design", name: "buscandoEmprego" }}
                      checked={values.buscandoEmprego}
                      onChange={event => handleSwitchChange(event, setFieldValue)}
                      value={values.buscandoEmprego}
                    />
                    <Typography>Sim</Typography>
                  </Stack>
                </Grid>
              </Grid>

              <Grid
                container
                spacing={1}
                sm={12}
                sx={{ mt: "5px", justifyContent: "flex-end" }}
              >
                <Grid
                  item
                  md={2}
                  sm={4}
                  xs={12}
                >
                  <Button
                    size="large"
                    type="submit"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    sx={{ border: "solid 1px", borderRadius: "24px" }}
                  >
                    Cancelar
                  </Button>
                </Grid>
                <Grid
                  item
                  md={4}
                  sm={8}
                  xs={12}
                >
                  <LoadingButton
                    size="large"
                    type="submit"
                    variant="contained"
                    color="success"
                    onClick={async () => {
                      const erro = await validateForm();
                      console.log("ERRO NO FORM PERFIL CIDADAO -> ", erro);
                    }}
                    fullWidth
                    loading={loading || isSubmitting}
                    sx={{ borderRadius: "24px" }}
                  >
                    {loading && <span className="spinner-border spinner-border-sm"></span>}
                    <SaveIcon sx={{ mb: "4px", mr: "4px", width: "20px", height: "20px" }} />
                    Salvar Informações
                  </LoadingButton>
                  <ConfirmacaoModal
                    showModal={confirmacaoModal}
                    handleClose={handleConfirmacaoClose}
                  />
                  <ErroModal
                    showModal={erroModal}
                    handleClose={handleErroClose}
                  />
                </Grid>
              </Grid>
            </Card>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

FormEditarPerfilCidadao.propTypes = {
  loading: PropTypes.bool,
  handleSubmit: PropTypes.func,
  confirmacaoModal: PropTypes.bool,
  setConfirmacaoModal: PropTypes.func,
  setErroModal: PropTypes.func,
  erroModal: PropTypes.bool,
  erroDoUsuarioModal: PropTypes.bool,
  values: PropTypes.object,
  readOnly: PropTypes.bool,
};

export default FormEditarPerfilCidadao;

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,.35)" : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));
