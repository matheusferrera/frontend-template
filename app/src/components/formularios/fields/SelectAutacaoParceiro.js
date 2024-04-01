import React from "react";

import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

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
  if (!item) {
    item = "none";
  }
  return (
    <FormControl fullWidth>
      <Typography sx={{ mb: "8px" }}>{label}</Typography>
      <Select
        id={idSelect}
        name={nameSelect}
        defaultValue=""
        value={item}
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
        {list.map(item => (
          <MenuItem
            key={item.id}
            id={item.id}
            name={item.descricao}
            value={item.descricao}
          >
            {item.descricao
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
