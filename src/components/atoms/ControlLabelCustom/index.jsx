import React from 'react';
import { FormControlLabel } from '@mui/material';

const ControlLabelCustom = ({
  value = false,
  children = null,
  name = '',
  align = 'end',
  clase = '',
}) => {
  return (
    <FormControlLabel
      value={value}
      control={children}
      label={name}
      labelPlacement={align}
      className={clase}
    />
  );
};

export default ControlLabelCustom;
