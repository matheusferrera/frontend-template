import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Grid, MenuItem, TextField } from '@mui/material';
import PropTypes from 'prop-types';

const CustomForm = ({ fields, onSubmit, buttons }) => {
  const { handleSubmit, control, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <Controller
          key={index}
          name={field.name}
          control={control}
          defaultValue={field.defaultValue || ''}
          rules={field.validation}
          render={({ field: controllerField }) => (
            <TextField
              {...controllerField}
              label={field.label}
              type={field.type || 'text'}
              select={field.select || false}
              error={!!errors[field.name]}
              helperText={errors[field.name]?.message || field.helperText}
              fullWidth
              margin="normal"
            >
              {field.select && field.options && field.options.map((option, optionIndex) => (
                <MenuItem key={optionIndex} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
      ))}
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
    defaultValue: PropTypes.string,
  })).isRequired,
  onSubmit: PropTypes.func.isRequired,
  buttons: PropTypes.node.isRequired, // Validando que `buttons` seja um nó React
};

export default CustomForm;
