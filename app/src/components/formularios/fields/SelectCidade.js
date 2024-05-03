import React from "react";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";

import { capitalizarPrimeiraLetra } from "../utils";

const transformarNomeCidade = nome => {
  return nome
    .replace(/\s*\([^)]*\)/g, "")
    .toLowerCase()
    .split(" ")
    .map(capitalizarPrimeiraLetra)
    .join(" ");
};

export const SelectCidade = ({ idSelect, nameSelect, cidades, cidade, handleSelectCidade, readOnly, errors, touched }) => {
  const cidadeTransformada = cidade ? transformarNomeCidade(cidade) : "none";

  const options = cidades
    ? cidades.map(cidadeItem => ({
        key: cidadeItem.nome,
        id: cidadeItem.nome,
        name: transformarNomeCidade(cidadeItem.nome),
        value: transformarNomeCidade(cidadeItem.nome),
      }))
    : [];

  return (
    <FormControl fullWidth>
      <InputLabel>* Cidade</InputLabel>
      <Select
        id={idSelect}
        name={nameSelect}
        defaultValue=""
        value={cidadeTransformada}
        placeholder="Selecione uma cidade"
        onChange={handleSelectCidade}
        inputProps={{
          readOnly: readOnly,
        }}
        error={errors && touched}
      >
        <MenuItem
          key="none"
          value="none"
          disabled
        >
          <a style={{ color: "grey" }}>Selecione uma cidade</a>
        </MenuItem>
        {options.map(option => (
          <MenuItem
            key={option.key}
            id={option.id}
            name={option.name}
            value={option.value}
          >
            {option.value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

SelectCidade.propTypes = {
  idSelect: PropTypes.string.isRequired,
  nameSelect: PropTypes.string.isRequired,
  cidades: PropTypes.array.isRequired,
  cidade: PropTypes.string.isRequired,
  handleSelectCidade: PropTypes.func.isRequired,
  readOnly: PropTypes.bool,
  errors: PropTypes.string,
  touched: PropTypes.bool,
};
