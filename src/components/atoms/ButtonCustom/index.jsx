import React from 'react';

// Components
import { Button } from '@mui/material';

// Core
import { renderColor } from '../../../core/utils';

const ButtonCustom = ({
  text = '',
  onClick = () => null,
  variant = 'contained',
  className = '',
  startIcon = null,
  endIcon = null,
  disabled = false,
  typeColor = '',
  textTransform = 'none',
}) => {
  return (
    <Button
      color="primary"
      variant={variant}
      onClick={onClick}
      className={`fontTWSemibold px-4 ${className}`}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
      sx={{
        textTransform: textTransform,
        backgroundColor:
          variant === 'contained' && !disabled
            ? renderColor(typeColor)
            : undefined,
        borderColor:
          (variant === 'outlined' || variant === 'text') && !disabled
            ? renderColor(typeColor)
            : undefined,
        color:
          (variant === 'outlined' || variant === 'text') && !disabled
            ? renderColor(typeColor)
            : undefined,
        borderRadius: '8px',
        fontSize: '16px',
        boxShadow: 'none',
        '&:hover': {
          backgroundColor:
            variant === 'contained' && !disabled
              ? `${renderColor(typeColor)}CF`
              : (variant === 'outlined' || variant === 'text') && !disabled
              ? `${renderColor(typeColor)}0F`
              : undefined,
          borderColor:
            (variant === 'outlined' || variant === 'text') && !disabled
              ? renderColor(typeColor)
              : undefined,
        },
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonCustom;
