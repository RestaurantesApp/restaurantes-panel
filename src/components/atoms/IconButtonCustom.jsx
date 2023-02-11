import React from 'react';

// Components
import { IconButton } from '@mui/material';

// Core
import { renderColor } from '../../core/utils';

export const IconButtonCustom = ({
  onClick = () => null,
  size = 32,
  className = '',
  icon = null,
  disabled = false,
  typeColor = undefined,
  typeColorHover = undefined,
}) => {
  return (
    <IconButton
      color="primary"
      disabled={disabled}
      className={className}
      onClick={onClick}
      sx={{
        width: size * 1.5,
        height: size * 1.5,
        '&:hover, &.Mui-focusVisible': {
          backgroundColor: `${renderColor(typeColor)}0F`,
        },
        '&.MuiButtonBase-root svg': {
          color: `${renderColor(typeColor)}`,
          width: size,
          height: size,
        },
        '&:hover.MuiButtonBase-root svg': {
          color: `${renderColor(typeColorHover)}`,
        },
        color: renderColor(typeColor),
        ':hover': {
          color: `${renderColor(typeColorHover)}`,
        },
      }}
    >
      {icon}
    </IconButton>
  );
};
