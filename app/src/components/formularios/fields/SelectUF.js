import React from "react";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";

export const SelectUF = ({ idSelect, nameSelect, ufs, uf, handleSelectUf, readOnly, errors, touched }) => {
  const ufSelecionada = uf || "none";

  const options = ufs.map(ufItem => (
    <MenuItem
      key={ufItem.sigla}
      value={ufItem.sigla}
    >
      {ufItem.nome} ({ufItem.sigla})
    </MenuItem>
  ));

  return (
    <FormControl
      fullWidth
      label="Número"
    >
      <InputLabel>* UF</InputLabel>
      <Select
        id={idSelect}
        name={nameSelect}
        value={ufSelecionada}
        placeholder="Selecione uma UF"
        onChange={handleSelectUf}
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
          <a style={{ color: "grey" }}>Selecione uma UF</a>
        </MenuItem>
        {options}
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
  readOnly: PropTypes.bool,
  errors: PropTypes.string,
  touched: PropTypes.bool,
};
