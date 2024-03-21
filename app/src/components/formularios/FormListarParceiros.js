import React, { useEffect } from "react";
import { useState } from "react";

import InfoIcon from "@mui/icons-material/Info";
import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  Link,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";

import { useAuth } from "../../contexts/AuthContext";
import optionsService from "../../services/options.service.js";
import ConfirmacaoModal from "../modals/ConfirmacaoModal";
import FinanceiroModal from "../modals/FinanceiroModal";
import { SelectAtuacaoParceiro } from "./fields/SelectAutacaoParceiro.js";
import { SelectCidade } from "./fields/SelectCidade.js";
import { SelectUF } from "./fields/SelectUF.js";
import { formatCEP, formatCNPJ, formatCPF, formatSite, formatTelefone, validarCPF } from "./utils.js";

const FormListarParceiros = ({ loading, handleSubmit, confirmacaoModal, setConfirmacaoModal }) => {
  const { user } = useAuth();

  const initialValues = {
    email: user.email,
    cnpj: "",
    razaoSocial: "",
    nomeFantasia: "",
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    uf: "",
    cidade: "",
    telefone: "",
    site: "",
    redeSocial: "",
    nomeRepresentante: "",
    cpf: "",
    telefoneRepresentante: "",
    ufRepresentante: "",
    cidadeRepresentante: "",
    nomePontoFocal: "",
    emailPontoFocal: "",
    telefonePontoFocal: "",
    areaAtuacao: "",
    naturezaJuridica: user.naturezaJuridica,
    checkVagaEmprego: false,
    checkVagaEstagio: false,
    checkVagaJovem: false,
    checkCursos: false,
    checkFinanceiro: false,
    checkMobilidadePublico: false,
    checkMobilidadeParceiro: false,
    toggleCienteNormas: false,
    toggleCienteGratuito: false,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Forneça um email válido").required("Email é obrigatório"),
    cnpj: Yup.string().min(18, "O CNPJ deve ter 14 dígitos").required("CNPJ é obrigatório"),
    razaoSocial: Yup.string().required("Razão social é obrigatório"),
    cep: Yup.string().min(10, "O CEP deve ter 8 dígitos").required("CEP é obrigatório"),
    endereco: Yup.string().required("Endereço é obrigatório"),
    bairro: Yup.string().required("Bairro é obrigatório"),
    uf: Yup.string().required("UF é obrigatório"),
    cidade: Yup.string().required("Cidade é obrigatório"),
    telefone: Yup.string().min(14, "Insira um telefone válido").required("Telefone é obrigatório"),
    site: Yup.string()
      .test("url", "O site deve ter um formato válido", function (site) {
        if (!site) return true; // Se o campo estiver vazio, a validação passa
        return Yup.string().url().isValidSync(site);
      })
      .test("Site-Ativo", "O site informado não está ativo", async function (site) {
        if (!site || !Yup.string().url().isValidSync(site)) {
          return true; // Se o campo estiver vazio ou a URL for inválida, a validação passa
        }
        return await optionsService.siteAtivo(site);
      }),
    nomeRepresentante: Yup.string().required("Nome do representante é obrigatório"),
    cpf: Yup.string()
      .min(14, "O CPF deve ter 11 dígitos")
      .required("CPF do representante é obrigatório")
      .test("Validar-CPF", "O CPF informado não é válido", value => validarCPF(value)),
    telefoneRepresentante: Yup.string().min(14, "Insira um telefone válido").required("Telefone do representante é obrigatório"),
    ufRepresentante: Yup.string().required("UF do representante é obrigatório"),
    cidadeRepresentante: Yup.string().required("Cidade do representante é obrigatório"),
    nomePontoFocal: Yup.string().required("Nome do Ponto Focal é obrigatório"),
    emailPontoFocal: Yup.string().email("Forneça um email válido").required("Email do Ponto Focal é obrigatório"),
    telefonePontoFocal: Yup.string().min(14, "Insira um telefone válido").required("Telefone do Ponto Focal é obrigatório"),
    areaAtuacao: Yup.string().required("Área de atuação do parceiro é obrigatório"),
    naturezaJuridica: Yup.string().required("Natureza jurídica é obrigatório"),
    toggleCienteNormas: Yup.boolean().oneOf([true], "Você precisa concordar com as normas"),
    toggleCienteGratuito: Yup.boolean().oneOf([true], "Você precisa informar que está ciente da condição"),
  });

  const [financeiroModal, setFinanceiroModal] = useState(false);
  const [financeiro, setFinanceiro] = useState(false);

  const [ufs, setUfs] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [cidadesRepresentante, setCidadesRepresentante] = useState([]);

  const [selectedUf, setSelectedUf] = useState("");
  const [selectedCidade, setSelectedCidade] = useState("");
  const [selectedUfRepresentante, setSelectedUfRepresentante] = useState("");
  const [selectedCidadeRepresentante, setSelectedCidadeRepresentante] = useState("");

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

  const [atuacoes, setAtuacoes] = useState([]);

  useEffect(() => {
    const fetchAtuacoes = async () => {
      await optionsService
        .getAtuacoes()
        .then(atuacoesData => {
          setAtuacoes(atuacoesData);
        })
        .catch(error => {
          console.error("Erro ao obter Atuações:", error);
        });
    };
    fetchAtuacoes();
  }, []);

  const handleFinanceiro = () => {
    setFinanceiroModal(true);
  };

  const handleFinanceiroClose = (event, setFieldValue) => {
    const { name } = event.target;
    setFieldValue(name, false);
    setFinanceiro(false);
    setFinanceiroModal(false);
  };

  const handleFinanceiroContinuar = (event, setFieldValue) => {
    const { name } = event.target;
    setFieldValue(name, true);
    setFinanceiro(true);
    setFinanceiroModal(false);
  };

  const handleSelectUf = (event, setFieldValue) => {
    const { name, value } = event.target;
    setFieldValue(name, value);

    if (name === "uf") {
      setSelectedUf(value);
      setSelectedCidade("");
      setFieldValue("cidade", "");
      fetchCidadesByUf(event.target.value, setCidades);
    } else if (name === "ufRepresentante") {
      setSelectedUfRepresentante(event.target.value);
      setSelectedCidadeRepresentante("");
      setFieldValue("cidadeRepresentante", "");
      fetchCidadesByUf(event.target.value, setCidadesRepresentante);
    }
  };

  const handleSelectCidade = (event, setFieldValue) => {
    const { name, value } = event.target;
    setFieldValue(name, value);

    if (name === "cidade") {
      setSelectedCidade(event.target.value);
    } else if (name === "cidadeRepresentante") {
      setSelectedCidadeRepresentante(event.target.value);
    }
  };

  const handleSite = (event, setFieldValue) => {
    const { name, value } = event.target;
    setFieldValue(name, formatSite(value));
  };

  const isURLValid = value => {
    // Função para verificar se o valor é uma URL válida
    try {
      Yup.string().url().validateSync(value);
      return true;
    } catch (error) {
      return false;
    }
  };

  const avisoSiteValido = (errors, valor) => {
    // Função para verificar se o site é válido e se não há erros e mostrar uma mensagem válida
    if (isURLValid(formatSite(valor)) && !errors.site && valor.trim() !== "") {
      return "Site válido";
    }
    return "";
  };

  const handleConfirmacaoClose = () => {
    setConfirmacaoModal(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnChange={false}
    >
      {({ values, setFieldValue, handleChange, handleBlur, handleSubmit, isSubmitting, errors, touched }) => (
        <Form>
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
                DADOS
              </Typography>
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
                    <Typography
                      sx={{
                        mb: "8px",
                      }}
                    >
                      * Email{" "}
                      <Tooltip
                        title="E-mail do representante da empresa"
                        placement="right"
                      >
                        <InfoIcon
                          color="primary"
                          sx={{ width: "15px", height: "15px" }}
                        />
                      </Tooltip>
                    </Typography>
                    <TextField
                      disabled
                      id="email"
                      name="email"
                      value={values.email}
                      placeholder="Insira seu Email aqui"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.email && touched.email}
                      helperText={errors.email && touched.email && errors.email}
                    />
                  </FormGroup>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                >
                  <FormGroup>
                    <Typography
                      sx={{
                        mb: "8px",
                      }}
                    >
                      * CNPJ
                    </Typography>
                    <TextField
                      id="cnpj"
                      name="cnpj"
                      value={formatCNPJ(values.cnpj)}
                      placeholder="Insira o CNPJ"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      inputProps={{
                        maxLength: 18,
                      }}
                      error={errors.cnpj && touched.cnpj}
                      helperText={errors.cnpj && touched.cnpj && errors.cnpj}
                    />
                  </FormGroup>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                >
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>* Razão Social</Typography>
                    <TextField
                      id="razaoSocial"
                      name="razaoSocial"
                      value={values.razaoSocial}
                      placeholder="Insira a Razão Social"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.razaoSocial && touched.razaoSocial}
                      helperText={errors.razaoSocial && touched.razaoSocial && errors.razaoSocial}
                    />
                  </FormGroup>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                >
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>Nome Fantasia</Typography>
                    <TextField
                      id="nomeFantasia"
                      name="nomeFantasia"
                      value={values.nomeFantasia}
                      placeholder="Insira o Nome Fantasia"
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
                >
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>* CEP</Typography>
                    <TextField
                      id="cep"
                      name="cep"
                      value={formatCEP(values.cep)}
                      placeholder="Insira o CEP"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      inputProps={{
                        maxLength: 10,
                      }}
                      error={errors.cep && touched.cep}
                      helperText={errors.cep && touched.cep && errors.cep}
                    />
                  </FormGroup>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                >
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>* Endereço</Typography>
                    <TextField
                      id="endereco"
                      name="endereco"
                      value={values.endereco}
                      placeholder="Insira o Endereço"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.endereco && touched.endereco}
                      helperText={errors.endereco && touched.endereco && errors.endereco}
                    />
                  </FormGroup>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={3}
                >
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>Número</Typography>
                    <TextField
                      id="numero"
                      name="numero"
                      value={values.numero}
                      placeholder="Insira o Número"
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
                >
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>Complemento</Typography>
                    <TextField
                      id="complemento"
                      name="complemento"
                      value={values.complemento}
                      placeholder="Insira o Complemento"
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
                >
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>* Bairro</Typography>
                    <TextField
                      id="bairro"
                      name="bairro"
                      value={values.bairro}
                      placeholder="Insira o Bairro"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.bairro && touched.bairro}
                      helperText={errors.bairro && touched.bairro && errors.bairro}
                    />
                  </FormGroup>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={2}
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
                  sm={2}
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
                  sm={4}
                >
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>* Telefone</Typography>
                    <TextField
                      id="telefone"
                      name="telefone"
                      value={formatTelefone(values.telefone)}
                      placeholder="Insira o Telefone"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      inputProps={{
                        maxLength: 15,
                      }}
                      error={errors.telefone && touched.telefone}
                      helperText={errors.telefone && touched.telefone && errors.telefone}
                    />
                  </FormGroup>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={3}
                >
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>Site</Typography>
                    <TextField
                      id="site"
                      name="site"
                      value={values.site}
                      onChange={event => handleSite(event, setFieldValue)}
                      placeholder="Insira o Site"
                      type="text"
                      onBlur={handleBlur}
                      error={errors.site && touched.site}
                      helperText={errors.site && touched.site && errors.site}
                    />
                    <FormHelperText id="site-valido">{avisoSiteValido(errors, values.site)}</FormHelperText>
                  </FormGroup>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={3}
                >
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>Rede Social</Typography>
                    <TextField
                      id="redeSocial"
                      name="redeSocial"
                      value={values.redeSocial}
                      placeholder="Insira a Rede Social"
                      type="text"
                      onChange={handleChange}
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
              <Typography
                variant="h4"
                sx={{
                  fontSize: "20",
                  mb: "16px",
                }}
              >
                REPRESENTANTE{" "}
                <Tooltip
                  title="Responsável pelo cadastramento da instituição na rede de parceiros no portal SISPRP"
                  placement="right"
                >
                  <InfoIcon
                    color="primary"
                    sx={{ width: "15px", height: "15px" }}
                  />
                </Tooltip>
              </Typography>
              <Grid
                spacing={1}
                container
              >
                <Grid
                  item
                  xs={12}
                  sm={9}
                >
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>*Nome</Typography>
                    <TextField
                      id="nomeRepresentante"
                      name="nomeRepresentante"
                      value={values.nomeRepresentante}
                      placeholder="Insira o Nome"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.nomeRepresentante && touched.nomeRepresentante}
                      helperText={errors.nomeRepresentante && touched.nomeRepresentante && errors.nomeRepresentante}
                    />
                  </FormGroup>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={3}
                >
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>* CPF</Typography>
                    <TextField
                      id="cpf"
                      name="cpf"
                      value={formatCPF(values.cpf)}
                      placeholder="Insira o CPF"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      inputProps={{
                        maxLength: 14,
                      }}
                      error={errors.cpf && touched.cpf}
                      helperText={errors.cpf && touched.cpf && errors.cpf}
                    />
                  </FormGroup>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={5}
                >
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>* Telefone</Typography>
                    <TextField
                      id="telefoneRepresentante"
                      name="telefoneRepresentante"
                      value={formatTelefone(values.telefoneRepresentante)}
                      placeholder="Insira o Telefone"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      inputProps={{
                        maxLength: 15,
                      }}
                      error={errors.telefoneRepresentante && touched.telefoneRepresentante}
                      helperText={errors.telefoneRepresentante && touched.telefoneRepresentante && errors.telefoneRepresentante}
                    />
                  </FormGroup>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={3}
                >
                  <FormGroup>
                    <SelectUF
                      idSelect={"ufRepresentante"}
                      nameSelect={"ufRepresentante"}
                      value={values.ufRepresentante}
                      ufs={ufs}
                      uf={selectedUfRepresentante}
                      handleSelectUf={event => handleSelectUf(event, setFieldValue)}
                      onBlur={handleBlur}
                      errors={errors.ufRepresentante}
                      touched={touched.ufRepresentante}
                    />
                    {errors.ufRepresentante && touched.ufRepresentante && errors.ufRepresentante && (
                      <Typography
                        sx={{
                          color: "#FF5630",
                          fontSize: "12px",
                          ml: "12px",
                        }}
                      >
                        {errors.ufRepresentante}
                      </Typography>
                    )}
                  </FormGroup>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                >
                  <FormGroup>
                    <SelectCidade
                      idSelect={"cidadeRepresentante"}
                      nameSelect={"cidadeRepresentante"}
                      value={values.cidadeRepresentante}
                      cidades={cidadesRepresentante}
                      cidade={selectedCidadeRepresentante}
                      handleSelectCidade={event => handleSelectCidade(event, setFieldValue)}
                      onBlur={handleBlur}
                      errors={errors.cidadeRepresentante}
                      touched={touched.cidadeRepresentante}
                    />
                    {errors.cidadeRepresentante && touched.cidadeRepresentante && errors.cidadeRepresentante && (
                      <Typography
                        sx={{
                          color: "#FF5630",
                          fontSize: "12px",
                          ml: "12px",
                        }}
                      >
                        {errors.cidadeRepresentante}
                      </Typography>
                    )}
                  </FormGroup>
                </Grid>
              </Grid>
            </Card>
            <Card
              color="#ffffff"
              sx={{
                width: "100%",
                borderRadius: "8px",
                padding: "16px",
                mt: "25px",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: "20",
                  mb: "16px",
                }}
              >
                PONTO FOCAL{" "}
                <Tooltip
                  title="Responsável operacional pelos serviços ofertados em parceria com o Programa Redução da Pobreza"
                  placement="right"
                >
                  <InfoIcon
                    color="primary"
                    sx={{ width: "15px", height: "15px" }}
                  />
                </Tooltip>
              </Typography>
              <Grid
                spacing={1}
                container
              >
                <Grid
                  item
                  xs={12}
                  sm={4}
                >
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>* Nome</Typography>
                    <TextField
                      id="nomePontoFocal"
                      name="nomePontoFocal"
                      value={values.nomePontoFocal}
                      placeholder="Insira o Nome"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.nomePontoFocal && touched.nomePontoFocal}
                      helperText={errors.nomePontoFocal && touched.nomePontoFocal && errors.nomePontoFocal}
                    />
                  </FormGroup>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                >
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>*Email</Typography>
                    <TextField
                      id="emailPontoFocal"
                      name="emailPontoFocal"
                      value={values.emailPontoFocal}
                      placeholder="Insira o Email"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.emailPontoFocal && touched.emailPontoFocal}
                      helperText={errors.emailPontoFocal && touched.emailPontoFocal && errors.emailPontoFocal}
                    />
                  </FormGroup>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                >
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>* Telefone</Typography>
                    <TextField
                      id="telefonePontoFocal"
                      name="telefonePontoFocal"
                      value={formatTelefone(values.telefonePontoFocal)}
                      placeholder="Insira o Telefone"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      inputProps={{
                        maxLength: 15,
                      }}
                      error={errors.telefonePontoFocal && touched.telefonePontoFocal}
                      helperText={errors.telefonePontoFocal && touched.telefonePontoFocal && errors.telefonePontoFocal}
                    />
                  </FormGroup>
                </Grid>
              </Grid>
            </Card>
            <Card
              color="#ffffff"
              sx={{
                width: "100%",
                padding: "16px",
                mt: "25px",
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
                    <SelectAtuacaoParceiro
                      idSelect={"areaAtuacao"}
                      nameSelect={"areaAtuacao"}
                      handleSelect={handleChange}
                      list={atuacoes}
                      item={values.areaAtuacao}
                      label={"* Área de Atuação"}
                      placeholder={"Selecione a Área de Atuação"}
                      errors={errors.areaAtuacao}
                      touched={touched.areaAtuacao}
                    />
                    {errors.areaAtuacao && touched.areaAtuacao && errors.areaAtuacao && (
                      <Typography
                        sx={{
                          color: "#FF5630",
                          fontSize: "12px",
                          ml: "12px",
                        }}
                      >
                        {errors.areaAtuacao}
                      </Typography>
                    )}
                  </FormGroup>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                >
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>* Natureza Jurídica</Typography>
                    <TextField
                      disabled
                      id="naturezaJuridica"
                      name="naturezaJuridica"
                      value={values.naturezaJuridica}
                      placeholder="Insira a Natureza Jurídica"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.naturezaJuridica && touched.naturezaJuridica}
                      helperText={errors.naturezaJuridica && touched.naturezaJuridica && errors.naturezaJuridica}
                    />
                  </FormGroup>
                </Grid>
              </Grid>
            </Card>
            <Card
              sx={{
                width: "100%",
                padding: "16px",
                mt: "25px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  mb: "16px",
                }}
              >
                * Que tipo de serviço essa instituição irá ofertar?
              </Typography>
              <FormGroup>
                <Grid
                  container
                  sx={{ width: "100%" }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="checkVagaEmprego"
                        name="checkVagaEmprego"
                        checked={values.checkVagaEmprego}
                        onChange={handleChange}
                        color="primary"
                      />
                    }
                    label={
                      <Typography>
                        Vagas de Emprego &nbsp;
                        <Tooltip
                          title="Para oferta de vaga(s) formal(is) de emprego com carteira assinada."
                          placement="right"
                        >
                          <InfoIcon
                            color="primary"
                            sx={{ width: "15px", height: "15px" }}
                          />
                        </Tooltip>
                      </Typography>
                    }
                    sx={{
                      border: "solid 1px",
                      borderRadius: "4px",
                      borderColor: "#CCCCCC",
                      margin: "4px 24px 4px 4px",
                      pr: "10px",
                    }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="checkVagaEstagio"
                        name="checkVagaEstagio"
                        checked={values.checkVagaEstagio}
                        onChange={handleChange}
                        color="primary"
                      />
                    }
                    label={
                      <Typography>
                        Vagas de Estágio &nbsp;
                        <Tooltip
                          title="Para oferta de vaga(s) de estágio (nível médio e superior)."
                          placement="right"
                        >
                          <InfoIcon
                            color="primary"
                            sx={{ width: "15px", height: "15px" }}
                          />
                        </Tooltip>
                      </Typography>
                    }
                    sx={{
                      border: "solid 1px",
                      borderRadius: "4px",
                      borderColor: "#CCCCCC",
                      margin: "4px 24px 4px 4px",
                      pr: "10px",
                    }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="checkVagaJovem"
                        name="checkVagaJovem"
                        checked={values.checkVagaJovem}
                        onChange={handleChange}
                        color="primary"
                      />
                    }
                    label={
                      <Typography>
                        Vagas de Jovem Aprendiz &nbsp;
                        <Tooltip
                          title="Para oferta de vaga(s) de trabalho para Jovem Aprendiz (14 a 24 anos)."
                          placement="right"
                        >
                          <InfoIcon
                            color="primary"
                            sx={{ width: "15px", height: "15px" }}
                          />
                        </Tooltip>
                      </Typography>
                    }
                    sx={{
                      border: "solid 1px",
                      borderRadius: "4px",
                      borderColor: "#CCCCCC",
                      margin: "4px 24px 4px 4px",
                      pr: "10px",
                    }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="checkCursos"
                        name="checkCursos"
                        checked={values.checkCursos}
                        onChange={handleChange}
                        color="primary"
                      />
                    }
                    label={
                      <Typography>
                        Cursos &nbsp;
                        <Tooltip
                          title="Para oferta de cursos (presenciais ou a distância) para o público do Programa Redução da Pobreza/Cadastro Único."
                          placement="right"
                        >
                          <InfoIcon
                            color="primary"
                            sx={{ width: "15px", height: "15px" }}
                          />
                        </Tooltip>
                      </Typography>
                    }
                    sx={{
                      border: "solid 1px",
                      borderRadius: "4px",
                      borderColor: "#CCCCCC",
                      margin: "4px 24px 4px 4px",
                      pr: "10px",
                    }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="checkFinanceiro"
                        name="checkFinanceiro"
                        value={financeiro}
                        checked={financeiro}
                        onBlur={handleBlur}
                        color="primary"
                      />
                    }
                    onClick={handleFinanceiro}
                    label={
                      <Typography>
                        Financeiros e Pagamentos &nbsp;
                        <Tooltip
                          title="Para instituições que operam com oferta de microcrédito produtivo orientado para empreendedores formais ou informais."
                          placement="right"
                        >
                          <InfoIcon
                            color="primary"
                            sx={{ width: "15px", height: "15px" }}
                          />
                        </Tooltip>
                      </Typography>
                    }
                    sx={{
                      border: "solid 1px",
                      borderRadius: "4px",
                      borderColor: "#CCCCCC",
                      margin: "4px 24px 4px 4px",
                      pr: "10px",
                    }}
                  />
                  <FinanceiroModal
                    showModal={financeiroModal}
                    handleContinuar={event => handleFinanceiroContinuar(event, setFieldValue)}
                    handleClose={event => handleFinanceiroClose(event, setFieldValue)}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="checkMobilidadePublico"
                        name="checkMobilidadePublico"
                        checked={values.checkMobilidadePublico}
                        onChange={handleChange}
                        color="primary"
                      />
                    }
                    label={
                      <Typography>
                        Mobilização de Público &nbsp;
                        <Tooltip
                          title="Para instituições com capacidade para mobilizar público e oferecer os serviços do Programa Redução da Pobreza no seu município."
                          placement="right"
                        >
                          <InfoIcon
                            color="primary"
                            sx={{ width: "15px", height: "15px" }}
                          />
                        </Tooltip>
                      </Typography>
                    }
                    sx={{
                      border: "solid 1px",
                      borderRadius: "4px",
                      borderColor: "#CCCCCC",
                      margin: "4px 24px 4px 4px",
                      pr: "10px",
                    }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="checkMobilidadeParceiro"
                        name="checkMobilidadeParceiro"
                        checked={values.checkMobilidadeParceiro}
                        onChange={handleChange}
                        color="primary"
                      />
                    }
                    label={
                      <Typography>
                        Mobilização de Parceiro &nbsp;
                        <Tooltip
                          title="Para associações, confederações, cooperativas, grupos, e entidades com potencial para articular a adesão de novos integrantes da Rede."
                          placement="right"
                        >
                          <InfoIcon
                            color="primary"
                            sx={{ width: "15px", height: "15px" }}
                          />
                        </Tooltip>
                      </Typography>
                    }
                    sx={{
                      border: "solid 1px",
                      borderRadius: "4px",
                      borderColor: "#CCCCCC",
                      margin: "4px 24px 4px 4px",
                      pr: "10px",
                    }}
                  />
                </Grid>
              </FormGroup>
              <hr />
              <Grid
                spacing={1}
                container
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                >
                  <Card
                    color="#ffffff"
                    sx={{
                      width: "100%",
                      borderRadius: "0px",
                      padding: "16px 0px",
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          id="toggleCienteNormas"
                          name="toggleCienteNormas"
                          checked={values.toggleCienteNormas}
                          onChange={handleChange}
                          color="primary"
                        />
                      }
                      label={
                        <Typography variant="body1">
                          Declaro, para os devidos fins, estar ciente e conforme com todos os termos, cláusulas, condições e normas das{" "}
                          <Link href="#">Portarias MDS nº 386/2017</Link>,<Link href="#"> nº 490/2017</Link>,
                          <Link href="#"> nº 1.321/2018</Link> e do <Link href="#">Edital de Chamada Pública do MDS nº 01/2017</Link>, e
                          manifesto o interesse em me credenciar como INTEGRANTE DA REDE DE PARCEIROS DO DESENVOLVIMENTO SOCIAL.
                        </Typography>
                      }
                    />
                    {touched.toggleCienteNormas && errors.toggleCienteNormas && (
                      <div style={{ color: "#FF5630" }}>{errors.toggleCienteNormas}</div>
                    )}
                    <FormControlLabel
                      control={
                        <Checkbox
                          id="toggleCienteGratuito"
                          name="toggleCienteGratuito"
                          checked={values.toggleCienteGratuito}
                          onChange={handleChange}
                          color="primary"
                        />
                      }
                      label={
                        <Typography variant="body1">
                          Declaro, para os devidos fins, que estou ciente que todos os serviços ofertados por esta Instituição ao público
                          inscrito no Programa Redução da Pobreza serão gratuitos.
                        </Typography>
                      }
                      sx={{ mt: "24px" }}
                    />
                    {touched.toggleCienteGratuito && errors.toggleCienteGratuito && (
                      <div style={{ color: "#FF5630" }}>{errors.toggleCienteGratuito}</div>
                    )}
                  </Card>
                </Grid>
                <Grid
                  container
                  spacing={1}
                  sx={{ mt: "5px" }}
                >
                  <Grid
                    item
                    xs={0}
                    sm={7}
                  ></Grid>
                  <Grid
                    item
                    xs={12}
                    sm={5}
                  >
                    <Grid
                      container
                      spacing={2}
                    >
                      <Grid
                        item
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
                        sm={8}
                        xs={12}
                      >
                        <LoadingButton
                          size="large"
                          type="submit"
                          variant="contained"
                          color="success"
                          onClick={handleSubmit}
                          loading={loading || isSubmitting}
                          fullWidth
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
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

FormListarParceiros.propTypes = {
  loading: PropTypes.bool,
  handleSubmit: PropTypes.func,
  confirmacaoModal: PropTypes.bool,
  setConfirmacaoModal: PropTypes.func,
};

export default FormListarParceiros;
