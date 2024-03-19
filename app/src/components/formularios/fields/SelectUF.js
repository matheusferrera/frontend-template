import React from "react";

import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export const SelectUF = ({ idSelect, nameSelect, ufs, uf, handleSelectUf, errors, touched }) => {
  if (!uf) {
    uf = "none";
  }
  return (
    <FormControl fullWidth>
      <Typography sx={{ mb: "8px" }}>* UF</Typography>
      <Select
        id={idSelect}
        name={nameSelect}
        defaultValue=""
        value={uf}
        placeholder="Selecione uma UF"
        onChange={handleSelectUf}
        error={errors && touched}
      >
        <MenuItem
          key="none"
          value="none"
          disabled
        >
          Selecione uma UF
        </MenuItem>
        {ufs.map(uf => (
          <MenuItem
            key={uf.sigla}
            id={uf.sigla}
            name={uf.sigla}
            value={uf.sigla}
          >
            {uf.nome} ({uf.sigla})
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

SelectUF.propTypes = {
  idSelect: PropTypes.string.isRequired,
  nameSelect: PropTypes.string.isRequired,
  ufs: PropTypes.array.isRequired,
  uf: PropTypes.string.isRequired,
  handleSelectUf: PropTypes.func.isRequired,
  errors: PropTypes.string,
  touched: PropTypes.bool,
};
