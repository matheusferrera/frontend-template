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
import { useTheme } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import PropTypes from "prop-types";

import AprovarOuReprovarModal from "../modals/AprovarOuReprovarModal";
import InformacoesParceiroModal from "../modals/InformacoesParceiroModal";

const FormAnalisarParceiroPendente = ({ mudancaDeStatusModal, setMudancaDeStatusModal, informacoesModal, setInformacoesModal }) => {
  const value = JSON.parse(localStorage.getItem("analisarID"));
  const theme = useTheme();

  const openInformacoesParceiroModal = () => {
    setInformacoesModal(true);
  };
  const closeInformacoesParceiroModal = () => {
    setInformacoesModal(false);
  };

  const [valores, setValores] = useState({
    nomePontoFocal: "",
    cnpj: "",
    cadastro: "",
    telefone: "",
    motivo: "",
    status: "Pendente",
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
      email: "fulano@teste.com",
      endereco: "Bairro tal, Rua 1",
      cadastro: "2024-03-20T00:00",
      ultimaModificacao: "2024-03-21T00:00",
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
      email: "beltraninho@teste.com",
      endereco: "Bairro tal, Rua 2",
      cadastro: "2024-03-03T00:00",
      ultimaModificacao: "2024-04-10T00:00",
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
      email: "beltrano@teste.com",
      endereco: "Bairro num sei, Rua 10",
      cadastro: "2024-02-27T00:00",
      ultimaModificacao: "2024-03-15T00:00",
      tipoDeServico: {
        VEP: false,
        VET: false,
        VJA: false,
        CUR: false,
        FPG: false,
        MPu: true,
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
      email: "beltranogo@teste.com",
      endereco: "Bairro tal, Rua 1",
      cadastro: "2024-02-11T00:00",
      ultimaModificacao: "2024-02-13T00:00",
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
      email: "fulanobeltrano@teste.com",
      endereco: "Bairro num sei, Rua 2",
      cadastro: "2024-03-20T00:00",
      ultimaModificacao: "2024-03-21T00:00",
      tipoDeServico: {
        VEP: true,
        VET: true,
        VJA: false,
        CUR: false,
        FPG: false,
        MPu: false,
        MPa: false,
      },
    },
    {
      id: 6,
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
      id: 7,
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
      id: 6,
      habilitacao: "Parceiro",
      status: "Pendente",
      cnpj: "66.666.666/1000-00",
      nomeFantasia: "Nome 1",
      nomePontoFocal: "Fulano Bel",
      razaoSocial: "Razão 1",
      naturezaJuridica: "Privado",
      nomeResponsavel: "Be Fulano",
      cidade: "Brasília",
      uf: "DF",
      email: "fulanobel@teste.com",
      endereco: "Bairro sei la, Rua 1",
      cadastro: "2024-02-28T00:00",
      ultimaModificacao: "2024-03-10T00:00",
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
      id: 7,
      habilitacao: "Parceiro",
      status: "Pendente",
      cnpj: "77.777.777/1000-00",
      nomeFantasia: "Nome 2",
      nomePontoFocal: "Fu Beltrano",
      razaoSocial: "Razão 1",
      naturezaJuridica: "Privado",
      nomeResponsavel: "Fulano",
      cidade: "Brasília",
      uf: "DF",
      email: "fubeltrano@teste.com",
      endereco: "Bairro sei la, Rua 5",
      cadastro: "2024-03-29T00:00",
      ultimaModificacao: "2024-04-21T00:00",
      tipoDeServico: {
        VEP: false,
        VET: false,
        VJA: false,
        CUR: false,
        FPG: true,
        MPu: false,
        MPa: false,
      },
    },
  ];
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

  const handleSalvar = () => {
    if (valores.status != "Pendente") {
      setMudancaDeStatusModal(true);
    }
  };

  const handleCloseMudancadeStatus = () => {
    setMudancaDeStatusModal(false);
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
                  style={{ color: theme.palette.text.disabled }}
                  value={valores.novoCadastro}
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
                  style={{ color: theme.palette.text.disabled }}
                  value={valores.cadastroAlterado}
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
                    VISUALIZAR ALTERAÇÕES
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
                    VISUALIZAR INFORMAÇÕES COMPLEMENTARES
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
              xs={4}
              mt="5px"
            >
              <Button
                variant="outlined"
                onClick={openInformacoesParceiroModal}
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
                  VISUALIZAR INFORMAÇÕES DO PARCEIRO
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
            <Button
              variant="outlined"
              href="/listar_parceiros_pendentes"
            >
              <Typography variant={"BUTTON TEXT"}> CANCELAR </Typography>
            </Button>
          </Grid>
          <Grid
            item
            xs={2}
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
      </Stack>
      <div>
        <AprovarOuReprovarModal
          showModal={mudancaDeStatusModal}
          handleClose={handleCloseMudancadeStatus}
          modalTitle={valores.status + " parceiro"}
          servicos={valores.tipoDeServico}
        />
      </div>
      <div>
        <InformacoesParceiroModal
          showModal={informacoesModal}
          handleClose={closeInformacoesParceiroModal}
          parceiro={valores}
        />
      </div>
    </>
  );
};

FormAnalisarParceiroPendente.propTypes = {
  mudancaDeStatusModal: PropTypes.bool,
  setMudancaDeStatusModal: PropTypes.func,
  informacoesModal: PropTypes.bool,
  setInformacoesModal: PropTypes.func,
};

export default FormAnalisarParceiroPendente;
