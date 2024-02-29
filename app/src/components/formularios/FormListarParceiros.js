import React from "react";

import InfoIcon from '@mui/icons-material/Info';
import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from "@mui/lab/LoadingButton";
import { Button, Card, Checkbox, FormControlLabel, FormGroup, Grid, Link, Stack, TextField, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import PropTypes from "prop-types"
import * as Yup from "yup"

const FormListarParceiros = ({ loading, handleSubmit }) => {
  const initialValues = {
    email: "",
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
    naturezaJuridica: "",
    vagaEmprego: false,
    vagaEstagio: false,
    vagaJovem: false,
    cursos: false,
    financeiro: false,
    mobilidadePublico: false,
    mobilidadeParceiro: false,
    toggleCienteNormas: false,
    toggleCienteGratuito: false,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Forneça um email válido").required("Email é obrigatório"),
    cnpj: Yup.string().required("CNPJ é obrigatório"),
    razaoSocial: Yup.string().required("Razão social é obrigatório"),
    cep: Yup.string().required("CEP é obrigatório"),
    endereco: Yup.string().required("Endereço é obrigatório"),
    bairro: Yup.string().required("Bairro é obrigatório"),
    uf: Yup.string().required("UF é obrigatório"),
    cidade: Yup.string().required("Cidade é obrigatório"),
    telefone: Yup.string().required("Telefone é obrigatório"),
    nomeRepresentante: Yup.string().required("Nome do representante é obrigatório"),
    cpf: Yup.string().required("CPF do representante é obrigatório"),
    telefoneRepresentante: Yup.string().required("Telefone do representante é obrigatório"),
    ufRepresentante: Yup.string().required("UF do representante é obrigatório"),
    cidadeRepresentante: Yup.string().required("Cidade do representante é obrigatório"),
    nomePontoFocal: Yup.string().required("Nome do Ponto Focal é obrigatório"),
    emailPontoFocal: Yup.string().email("Forneça um email válido").required("Email do Ponto Focal é obrigatório"),
    telefonePontoFocal: Yup.string().required("Telefone do Ponto Focal é obrigatório"),
    areaAtuacao: Yup.string().required("Área de atuação do parceiro é obrigatório"),
    naturezaJuridica: Yup.string().required("Natureza jurídica é obrigatório"),
    toggleCienteNormas: Yup.boolean().oneOf([true], "Você precisa concordar com as normas"),
    toggleCienteGratuito: Yup.boolean().oneOf([true], "Você precisa informar que está ciente da condição")
  })

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting, errors, touched }) => (
        <Form>
          <Stack>
            <Card
              color="#ffffff"
              sx={{
                borderRadius: "8px",
                padding: "16px",
                mt: "24px"
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: "20",
                  mb: "16px"
                }}
              >
                DADOS
              </Typography>
              <Grid spacing={1} container>
                <Grid item xs={12} sm={12}>
                  <FormGroup>
                    <Typography
                      sx={{
                        mb: "8px",
                      }}
                    >
                      * Email <InfoIcon color="primary" sx={{ width: "15px", height: "15px" }} />
                    </Typography>
                    <TextField
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
                <Grid item xs={12} sm={4}>
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
                      value={values.cnpj}
                      placeholder="Insira o CNPJ"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.cnpj && touched.cnpj}
                      helperText={errors.cnpj && touched.cnpj && errors.cnpj}
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>
                      * Razão Social
                    </Typography>
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
                <Grid item xs={12} sm={4}>
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }} >
                      Nome Fantasia
                    </Typography>
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
                <Grid item xs={12} sm={3}>
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>
                      * CEP
                    </Typography>
                    <TextField
                      id="cep"
                      name="cep"
                      value={values.cep}
                      placeholder="Insira o CEP"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.cep && touched.cep}
                      helperText={errors.cep && touched.cep && errors.cep}
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>
                      * Endereço
                    </Typography>
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
                <Grid item xs={12} sm={3}>
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>
                      Número
                    </Typography>
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
                <Grid item xs={12} sm={4}>
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>
                      Complemento
                    </Typography>
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
                <Grid item xs={12} sm={4}>
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>
                      * Bairro
                    </Typography>
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
                <Grid item xs={12} sm={2}>
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>
                      * UF
                    </Typography>
                    <TextField
                      id="uf"
                      name="uf"
                      value={values.uf}
                      placeholder="Insira a UF"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.uf && touched.uf}
                      helperText={errors.uf && touched.uf && errors.uf}
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>
                      * Cidade
                    </Typography>
                    <TextField
                      id="cidade"
                      name="cidade"
                      value={values.cidade}
                      placeholder="Insira a Cidade"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.cidade && touched.cidade}
                      helperText={errors.cidade && touched.cidade && errors.cidade}
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>
                      * Telefone
                    </Typography>
                    <TextField
                      id="telefone"
                      name="telefone"
                      value={values.telefone}
                      placeholder="Insira o Telefone"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.telefone && touched.telefone}
                      helperText={errors.telefone && touched.telefone && errors.telefone}
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>
                      Site
                    </Typography>
                    <TextField
                      id="site"
                      name="site"
                      value={values.site}
                      placeholder="Insira o Site"
                      type="text"
                      onChange={handleChange}
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>
                      Rede Social
                    </Typography>
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
                mt: "24px"
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: "20",
                  mb: "16px"
                }}
              >
                REPRESENTANTE <InfoIcon color="primary" sx={{ width: "15px", height: "15px" }} />
              </Typography>
              <Grid spacing={1} container>
                <Grid item xs={12} sm={9}>
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>
                      *Nome
                    </Typography>
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
                <Grid item xs={12} sm={3}>
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>
                      * CPF
                    </Typography>
                    <TextField
                      id="cpf"
                      name="cpf"
                      value={values.cpf}
                      placeholder="Insira o CPF"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.cpf && touched.cpf}
                      helperText={errors.cpf && touched.cpf && errors.cpf}
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={12} sm={5}>
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>
                      * Telefone
                    </Typography>
                    <TextField
                      id="telefoneRepresentante"
                      name="telefoneRepresentante"
                      value={values.telefoneRepresentante}
                      placeholder="Insira o Telefone"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.telefoneRepresentante && touched.telefoneRepresentante}
                      helperText={errors.telefoneRepresentante && touched.telefoneRepresentante && errors.telefoneRepresentante}
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>
                      * UF
                    </Typography>
                    <TextField
                      id="ufRepresentante"
                      name="ufRepresentante"
                      value={values.ufRepresentante}
                      placeholder="Insira a UF"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.ufRepresentante && touched.ufRepresentante}
                      helperText={errors.ufRepresentante && touched.ufRepresentante && errors.ufRepresentante}
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>
                      * Cidade
                    </Typography>
                    <TextField
                      id="cidadeRepresentante"
                      name="cidadeRepresentante"
                      value={values.cidadeRepresentante}
                      placeholder="Insira a Cidade"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.cidadeRepresentante && touched.cidadeRepresentante}
                      helperText={errors.cidadeRepresentante && touched.cidadeRepresentante && errors.cidadeRepresentante}
                    />
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
                mt: "25px"
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: "20",
                  mb: "16px"
                }}
              >
                PONTO FOCAL <InfoIcon color="primary" sx={{ width: "15px", height: "15px" }} />
              </Typography>
              <Grid spacing={1} container>
                <Grid item xs={12} sm={4}>
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>
                      * Nome
                    </Typography>
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
                <Grid item xs={12} sm={4}>
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>
                      *Email
                    </Typography>
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
                <Grid item xs={12} sm={4}>
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>
                      * Telefone
                    </Typography>
                    <TextField
                      id="telefonePontoFocal"
                      name="telefonePontoFocal"
                      value={values.telefonePontoFocal}
                      placeholder="Insira o Telefone"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                mt: "25px"
              }}
            >
              <Grid spacing={1} container>
                <Grid item xs={12} sm={6}>
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>
                      * Área de Atuação do Parceiro
                    </Typography>
                    <TextField
                      id="areaAtuacao"
                      name="areaAtuacao"
                      value={values.areaAtuacao}
                      placeholder="Insira a Área de Atuação do Parceiro"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.areaAtuacao && touched.areaAtuacao}
                      helperText={errors.areaAtuacao && touched.areaAtuacao && errors.areaAtuacao}
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormGroup>
                    <Typography sx={{ mb: "8px" }}>
                      * Natureza Jurídica
                    </Typography>
                    <TextField
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
                mt: "25px"
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  mb: "16px"
                }}
              >
                * Que tipo de serviço essa instituição irá ofertar?
              </Typography>
              <FormGroup>
                <Grid container sx={{ width: "100%" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="vagaEmprego"
                        name="vagaEmprego"
                        checked={values.vagaEmprego}
                        onChange={handleChange}
                        color="primary"
                      />
                    }
                    label={
                      <Typography>
                        Vagas de Emprego &nbsp;
                        <InfoIcon color="primary" sx={{ width: "15px", height: "15px" }} />
                      </Typography>
                    }
                    sx={{
                      border: "solid 1px",
                      borderRadius: "4px",
                      borderColor: "#CCCCCC",
                      margin: "4px 24px 4px 4px",
                      pr: "10px"
                    }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="vagaEstagio"
                        name="vagaEstagio"
                        checked={values.vagaEstagio}
                        onChange={handleChange}
                        color="primary"
                      />
                    }
                    label={
                      <Typography>
                        Vagas de Estágio &nbsp;
                        <InfoIcon color="primary" sx={{ width: "15px", height: "15px" }} />
                      </Typography>
                    }
                    sx={{
                      border: "solid 1px",
                      borderRadius: "4px",
                      borderColor: "#CCCCCC",
                      margin: "4px 24px 4px 4px",
                      pr: "10px"
                    }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="vagaJovem"
                        name="vagaJovem"
                        checked={values.vagaJovem}
                        onChange={handleChange}
                        color="primary"
                      />
                    }
                    label={
                      <Typography>
                        Vagas de Jovem Aprendiz &nbsp;
                        <InfoIcon color="primary" sx={{ width: "15px", height: "15px" }} />
                      </Typography>
                    }
                    sx={{
                      border: "solid 1px",
                      borderRadius: "4px",
                      borderColor: "#CCCCCC",
                      margin: "4px 24px 4px 4px",
                      pr: "10px"
                    }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="cursos"
                        name="cursos"
                        checked={values.cursos}
                        onChange={handleChange}
                        color="primary"
                      />
                    }
                    label={
                      <Typography>
                        Cursos &nbsp;
                        <InfoIcon color="primary" sx={{ width: "15px", height: "15px" }} />
                      </Typography>
                    }
                    sx={{
                      border: "solid 1px",
                      borderRadius: "4px",
                      borderColor: "#CCCCCC",
                      margin: "4px 24px 4px 4px",
                      pr: "10px"
                    }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="financeiro"
                        name="financeiro"
                        checked={values.financeiro}
                        onChange={handleChange}
                        color="primary"
                      />
                    }
                    label={
                      <Typography>
                        Financeiros e Pagamentos &nbsp;
                        <InfoIcon color="primary" sx={{ width: "15px", height: "15px" }} />
                      </Typography>
                    }
                    sx={{
                      border: "solid 1px",
                      borderRadius: "4px",
                      borderColor: "#CCCCCC",
                      margin: "4px 24px 4px 4px",
                      pr: "10px"
                    }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="mobilidadePublico"
                        name="mobilidadePublico"
                        checked={values.mobilidadePublico}
                        onChange={handleChange}
                        color="primary"
                      />
                    }
                    label={
                      <Typography>
                        Mobilização de Público &nbsp;
                        <InfoIcon color="primary" sx={{ width: "15px", height: "15px" }} />
                      </Typography>
                    }
                    sx={{
                      border: "solid 1px",
                      borderRadius: "4px",
                      borderColor: "#CCCCCC",
                      margin: "4px 24px 4px 4px",
                      pr: "10px"
                    }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="mobilidadeParceiro"
                        name="mobilidadeParceiro"
                        checked={values.mobilidadeParceiro}
                        onChange={handleChange}
                        color="primary"
                      />
                    }
                    label={
                      <Typography>
                        Mobilização de Parceiro &nbsp;
                        <InfoIcon color="primary" sx={{ width: "15px", height: "15px" }} />
                      </Typography>
                    }
                    sx={{
                      border: "solid 1px",
                      borderRadius: "4px",
                      borderColor: "#CCCCCC",
                      margin: "4px 24px 4px 4px",
                      pr: "10px"
                    }}
                  />
                </Grid>
              </FormGroup>
              <hr />
              <Grid spacing={1} container>
                <Grid item xs={12} sm={12}>
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
                          Declaro, para os devidos fins, estar ciente e conforme com todos os termos,
                          cláusulas, condições e normas das <Link href="#">Portarias MDS nº 386/2017</Link>,
                          <Link href="#"> nº 490/2017</Link>,
                          <Link href="#"> nº 1.321/2018</Link> e do <Link href="#">Edital de Chamada Pública do MDS nº 01/2017</Link>
                          , e manifesto o
                          interesse em me credenciar como INTEGRANTE DA REDE DE PARCEIROS DO DESENVOLVIMENTO SOCIAL.
                        </Typography>
                      }
                    />
                    {touched.toggleCienteNormas && errors.toggleCienteNormas && <div style={{ color: "#FF5630" }}>{errors.toggleCienteNormas}</div>}
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
                          Declaro, para os devidos fins, que estou ciente que todos os serviços ofertados
                          por esta Instituição ao público inscrito no Programa Redução da Pobreza serão gratuitos.
                        </Typography>
                      }
                      sx={{ mt: "24px" }}
                    />
                    {touched.toggleCienteGratuito && errors.toggleCienteGratuito && <div style={{ color: "#FF5630" }}>{errors.toggleCienteGratuito}</div>}
                  </Card>
                </Grid>
                <Grid container spacing={1} sx={{ mt: "5px" }}>
                  <Grid item xs={0} sm={7}></Grid>
                  <Grid item xs={12} sm={5}>
                    <Grid container spacing={2}>
                      <Grid item sm={4} xs={12}>
                        <Button
                          size="large"
                          type="submit"
                          variant="outlined"
                          color="primary"
                          fullWidth
                          sx={{ border: "solid 1px", borderRadius: "24px" }}>
                          Cancelar
                        </Button>
                      </Grid>
                      <Grid item sm={8} xs={12}>
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
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Stack>
        </Form>
      )
      }
    </Formik >
  );
}

FormListarParceiros.propTypes = {
  loading: PropTypes.bool,
  handleSubmit: PropTypes.func,
}

export default FormListarParceiros;