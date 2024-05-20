import React, { useEffect, useState } from "react";

import { FormGroup, Grid, Stack, TextField } from "@mui/material";
import PropTypes from "prop-types";

import CustomModal from "./CustomModal";

const InformacoesParceiroModal = ({ showModal, handleClose, parceiro }) => {
  const [valores, setValores] = useState({
    cnpj: "",
    razaoSocial: "",
    endereco: "",
    cidade: "",
    uf: "",
    complemento: "",
    telefone: "",
    email: "",
    nomeResponsavel: "",
    nomePontoFocal: "",
    tipo: "",
    porte: "",
  });

  useEffect(() => {
    setValores(parceiro);
  });

  const modalTitle = "Ver mais Informações do Parceiro";
  const modalContent = (
    <>
      <Stack spacing={1}>
        <Grid
          container
          spacing={1}
        >
          <Grid
            item
            xs={6}
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
              />
            </FormGroup>
          </Grid>
          <Grid
            item
            xs={6}
          >
            <FormGroup>
              <TextField
                disabled
                id="razaoSocial"
                name="razaoSocial"
                label="Razão Social"
                placeholder="Razão Social"
                value={valores.razaoSocial}
                type="text"
              />
            </FormGroup>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={1}
        >
          <Grid
            item
            xs={4}
          >
            <FormGroup>
              <TextField
                disabled
                id="endereco"
                name="endereco"
                label="Endereço"
                placeholder="Endereço"
                value={valores.endereco}
                type="text"
              />
            </FormGroup>
          </Grid>
          <Grid
            item
            xs={4}
          >
            <FormGroup>
              <TextField
                disabled
                id="cidade"
                name="cidade"
                label="Cidade"
                placeholder="Cidade"
                value={valores.cidade}
                type="text"
              />
            </FormGroup>
          </Grid>
          <Grid
            item
            xs={4}
          >
            <FormGroup>
              <TextField
                disabled
                id="uf"
                name="uf"
                label="UF"
                placeholder="UF"
                value={valores.uf}
                type="text"
              />
            </FormGroup>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={1}
        >
          <Grid
            item
            xs={4}
          >
            <FormGroup>
              <TextField
                disabled
                id="complemento"
                name="complemento"
                label="Complemento"
                placeholder="Complemento"
                value={valores.complemento}
                type="text"
              />
            </FormGroup>
          </Grid>
          <Grid
            item
            xs={4}
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
              />
            </FormGroup>
          </Grid>
          <Grid
            item
            xs={4}
          >
            <FormGroup>
              <TextField
                disabled
                id="email"
                name="email"
                label="E-mail"
                placeholder="E-mail"
                value={valores.email}
                type="text"
              />
            </FormGroup>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={1}
        >
          <Grid
            item
            xs={6}
          >
            <FormGroup>
              <TextField
                disabled
                id="responsavel"
                name="responsavel"
                label="Representante"
                placeholder="Representante"
                value={valores.nomeResponsavel}
                type="text"
              />
            </FormGroup>
          </Grid>
          <Grid
            item
            xs={6}
          >
            <FormGroup>
              <TextField
                disabled
                id="pontoFocal"
                name="pontoFocal"
                label="Ponto Focal"
                placeholder="Ponto Focal"
                value={valores.nomePontoFocal}
                type="text"
              />
            </FormGroup>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={1}
        >
          <Grid
            item
            xs={6}
          >
            <FormGroup>
              <TextField
                disabled
                id="tipo"
                name="tipo"
                label="Tipo"
                placeholder="Tipo"
                value={valores.tipo}
                type="text"
              />
            </FormGroup>
          </Grid>
          <Grid
            item
            xs={6}
          >
            <FormGroup>
              <TextField
                disabled
                id="porte"
                name="porte"
                label="Porte"
                placeholder="Porte"
                value={valores.porte}
                type="text"
              />
            </FormGroup>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={1}
        >
          <Grid
            item
            xs={12}
          >
            <FormGroup>
              <TextField
                disabled
                id="atividadeEconomica"
                name="atividadeEconomica"
                label="Atividade Economica"
                placeholder="Atividade Economica"
                value={valores.atividadeEconomica}
                type="text"
              />
            </FormGroup>
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

InformacoesParceiroModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  parceiro: PropTypes.object.isRequired,
};

export default InformacoesParceiroModal;
