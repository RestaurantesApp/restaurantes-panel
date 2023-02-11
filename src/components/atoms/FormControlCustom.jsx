import React from 'react';

// Components
import { FormControl, InputLabel } from '@mui/material';

// Core
import { colors } from '../themes';

export const FormControlCustom = ({
  children = null,
  name = '',
  size = 'medium',
  fontSize = 18,
  required = false,
}) => {
  return (
    <FormControl size={size} required={required} fullWidth>
      <InputLabel
        id="demo-simple-select-label"
        sx={{
          '&.MuiInputLabel-root': { fontFamily: 'poppins' },
          '& .MuiInputLabel-asterisk': { color: colors.danger },
          '&.MuiInputLabel-shrink': {
            marginLeft: 2,
            color: colors.black,
            fontSize,
            fontWeight: '600',
            '& .MuiInputLabel-asterisk': {
              color: colors.danger,
              display: 'inline',
            },
          },
        }}
      >
        {name}
      </InputLabel>
      {children}
    </FormControl>
  );
};
