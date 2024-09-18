import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Grid, InputAdornment, MenuItem, TextField } from '@mui/material';
import PropTypes from 'prop-types';

const CustomForm = ({ fields, onSubmit, buttons, defaultValues }) => {
  const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: defaultValues || {}
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Grid container spacing={2} >
        {fields.map((field, index) => (
          <Grid
            item
            xs={field.xs || 12}
            sm={field.sm || 12}
            md={field.md || 12}
            lg={field.lg || 12}
            key={index}
          >
            <Controller
              name={field.name}
              control={control}
              rules={field.validation}
              render={({ field: controllerField }) => (
                <TextField
                  {...controllerField}
                  label={field.label}
                  type={field.type || 'text'}
                  select={field.select || false}
                  disabled={field.disabled || false}
                  error={!!errors[field.name]}
                  helperText={errors[field.name]?.message || field.helperText}
                  fullWidth
                  margin="normal"
                  InputProps={{
                    startAdornment: field.name === 'value' ? (
                      <InputAdornment position="start">R$</InputAdornment>
                    ) : null,
                  }}
                >
                  {field.select && field.options && field.options.map((option, optionIndex) => (
                    <MenuItem key={optionIndex} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
          </Grid>
        ))}
      </Grid>
      <Grid item mt={2}>
        {buttons}
      </Grid>
    </form>
  );
};

CustomForm.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    select: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })),
    validation: PropTypes.object,
    helperText: PropTypes.string,
    xs: PropTypes.number, // Define o tamanho xs
    sm: PropTypes.number, // Define o tamanho sm
    md: PropTypes.number, // Define o tamanho md
    lg: PropTypes.number, // Define o tamanho lg
  })).isRequired,
  onSubmit: PropTypes.func.isRequired,
  buttons: PropTypes.node.isRequired,
  defaultValues: PropTypes.object,
};

export default CustomForm;
