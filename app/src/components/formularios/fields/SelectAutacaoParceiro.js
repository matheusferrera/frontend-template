import React from "react";

import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

import { capitalizarPrimeiraLetra } from "../utils";

export const SelectAtuacaoParceiro = ({
  idSelect,
  nameSelect,
  handleSelect,
  list,
  item,
  label,
  placeholder,
  readOnly,
  errors,
  touched,
}) => {
  const itemSelecionado = item || "none";

  const options = list.map(listItem => (
    <MenuItem
      key={listItem.id}
      id={listItem.id}
      name={listItem.descricao}
      value={listItem.id}
    >
      {listItem.descricao.toLowerCase().split(" ").map(capitalizarPrimeiraLetra).join(" ")}
    </MenuItem>
  ));

  return (
    <FormControl fullWidth>
      <Typography sx={{ mb: "8px" }}>{label}</Typography>
      <Select
        id={idSelect}
        name={nameSelect}
        defaultValue=""
        value={itemSelecionado}
        onChange={handleSelect}
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
          {placeholder}
        </MenuItem>
        {options}
      </Select>
    </FormControl>
  );
};

SelectAtuacaoParceiro.propTypes = {
  idSelect: PropTypes.string.isRequired,
  nameSelect: PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  item: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  errors: PropTypes.string,
  touched: PropTypes.bool,
};
