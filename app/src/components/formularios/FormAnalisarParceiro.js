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
import { dadosParceirosPendentes } from "./dadosMockados";

const FormAnalisarParceiroPendente = ({ mudancaDeStatusModal, setMudancaDeStatusModal, informacoesModal, setInformacoesModal }) => {
  const theme = useTheme();

  const openInformacoesParceiroModal = () => {
    setInformacoesModal(true);
  };
  const closeInformacoesParceiroModal = () => {
    setInformacoesModal(false);
  };

  const initialData = dadosParceirosPendentes;
  const parceiroID = JSON.parse(localStorage.getItem("analisarID"));
  const [valores, setValores] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (parceiroID) {
      const parceiroEncontrado = initialData.find(parceiro => parceiro.id === parceiroID);

      if (parceiroEncontrado) {
        const servicos = Object.keys(parceiroEncontrado.tipoDeServico).filter(servico => parceiroEncontrado.tipoDeServico[servico]);

        setValores({
          ...parceiroEncontrado,
          tipoDeServico: servicos,
          dataCadastro: dayjs(parceiroEncontrado.dataCadastro),
          dataUltimaModificacao: dayjs(parceiroEncontrado.dataUltimaModificacao),
        });
      }
    }

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (!valores) {
    return <div>Parceiro não encontrado</div>;
  }

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
                  disabled
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
                  disabled
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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    disabled
                    label="Data do Cadastro"
                    id="dataCadastro"
                    name="dataCadastro"
                    value={valores.dataCadastro}
                    format="DD/MM/YYYY"
                    onChange={valor => setValores({ ...valores, ["dataCadastro"]: valor })}
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
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    disabled
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
              xs={6}
              sm={4}
            >
              <FormGroup>
                <TextField
                  disabled
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
                  href="/listar-parceiros-pendentes/visualizar-informacoes-complementares"
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
                    disabled
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
              href="/listar-parceiros-pendentes"
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
