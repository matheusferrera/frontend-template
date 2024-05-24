import React, { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { Box, Button, FormGroup, Grid, IconButton, Stack, TextField, Typography } from "@mui/material";
import PropTypes from "prop-types";

import CustomModal from "./CustomModal";

const AprovarOuReprovarModal = ({ showModal, handleClose, modalTitle, servicos }) => {
  const [valores, setValores] = useState({
    motivo: "",
    status: "none",
  });

  const termos = {
    VEP: "Vaga de Emprego",
    VET: "Vaga de Estágio",
    VJA: "Vaga de Jovem Aprendiz",
    CUR: "Cursos",
    FPG: "Financeiros e de Pagamentos",
    MPu: "Mobilização de Público",
    MPa: "Mobilização de Parceiro",
  };

  const handleChanges = event => {
    const { name, value } = event.target;
    setValores({ ...valores, [name]: value });
  };

  const modalContent = (
    <>
      <Stack spacing={1}>
        {/* Motivo */}
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

        {/* Oferta(s) de serviço(s) */}
        <Grid container>
          <Grid
            item
            xs={12}
          >
            <Typography variant="subtitle2"> Oferta(s) de serviço(s) selecionado(s) pelo parceiro</Typography>
          </Grid>

          <Grid
            container
            spacing={1}
          >
            {servicos.map((valor, index) => (
              <Grid
                key={valor + "_grid" + index}
                item
                xs={3}
              >
                <Button
                  id={valor}
                  name={valor}
                  variant="outlined"
                  disabled
                >
                  <Typography
                    key={valor + "_texto"}
                    variant={"caption"}
                  >
                    {termos[valor]}
                  </Typography>
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Anexar Documentos */}
        <Grid container>
          <Grid
            item
            xs={12}
          >
            <Typography
              key={"Teste"}
              variant="subtitle2"
            >
              {" "}
              Anexar Documentos
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
          >
            <FormGroup>
              <TextField
                id="anexarImagem"
                name="anexarImagem"
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

        {/* Botões */}
        <Grid
          container
          spacing={1}
        >
          <Grid
            item
            xs={7}
          ></Grid>
          <Grid
            item
            xs={2.5}
          >
            <Button
              variant="outlined"
              onClick={handleClose}
            >
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

  return (
    <CustomModal
      showModal={showModal}
      handleClose={handleClose}
      title={modalTitle}
      content={modalContent}
      buttons={[]}
    />
  );
};

AprovarOuReprovarModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  modalTitle: PropTypes.string.isRequired,
  servicos: PropTypes.array.isRequired,
};

export default AprovarOuReprovarModal;
