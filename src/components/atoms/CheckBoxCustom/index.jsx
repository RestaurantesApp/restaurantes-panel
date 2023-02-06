import React from 'react';

// Components
import { Checkbox } from '@mui/material';

// Core
import { renderColor } from '../../../core/utils';

const CheckBoxCustom = ({
  value = false,
  setValue = () => null,
  disabled = false,
  size = undefined,
  typeColor = '',
  fontSize = null,
}) => {
  const handleChange = () => {
    setValue(!value);
  };

  return (
    <Checkbox
      checked={value}
      onChange={handleChange}
      disabled={disabled}
      size={size}
      sx={{
        '& .MuiSvgIcon-root': { fontSize },
        '&.Mui-checked': {
          color: renderColor(typeColor),
        },
        color: renderColor(typeColor),
      }}
    />
  );
};

export default CheckBoxCustom;
