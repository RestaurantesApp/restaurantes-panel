import React from 'react';

// Components
import { FormControl } from '@mui/material';

// Core
import { colors } from '../../styles/theme';

const FormControlCustom = ({ children = null, required = false }) => {
  return (
    <FormControl
      size="large"
      required={required}
      fullWidth
      sx={{
        marginTop: 1,
        '& .MuiInputLabel-asterisk': {
          display: 'none',
        },
        '& .MuiInputLabel-shrink': {
          marginLeft: 2,
          color: colors.black,
          fontWeight: '600',
          '& .MuiInputLabel-asterisk': {
            color: colors.red,
            display: 'inline',
          },
        },
      }}
    >
      {children}
    </FormControl>
  );
};

export default FormControlCustom;
