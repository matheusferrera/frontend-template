import React from "react";

import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export const SelectCidade = ({ cidades, cidade, handleSelectCidade }) => {
  if (!cidade) {
    cidade = "none";
  }
  return (
    <FormControl fullWidth>
      <Typography sx={{ mb: "8px" }}>* Cidade</Typography>
      <Select
        id="cidade"
        name="cidade"
        defaultValue=""
        value={cidade}
        placeholder="Selecione uma cidade"
        onChange={handleSelectCidade}
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
  cidades: PropTypes.array.isRequired,
  cidade: PropTypes.string.isRequired,
  handleSelectCidade: PropTypes.func.isRequired,
};
