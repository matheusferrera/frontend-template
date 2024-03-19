import React from "react";

import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export const SelectCidade = ({ idSelect, nameSelect, cidades, cidade, handleSelectCidade, errors, touched }) => {
  if (!cidade) {
    cidade = "none";
  }
  return (
    <FormControl fullWidth>
      <Typography sx={{ mb: "8px" }}>* Cidade</Typography>
      <Select
        id={idSelect}
        name={nameSelect}
        defaultValue=""
        value={cidade}
        placeholder="Selecione uma cidade"
        onChange={handleSelectCidade}
        error={errors && touched}
      >
        <MenuItem
          key="none"
          value="none"
          disabled
        >
          Selecione uma cidade
        </MenuItem>
        {cidades.map(cidade => (
          <MenuItem
            key={cidade.nome}
            id={cidade.nome}
            name={cidade.nome}
            value={cidade.nome}
          >
            {cidade.nome
              .toLowerCase()
              .split(" ")
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
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
  errors: PropTypes.string,
  touched: PropTypes.bool,
};
