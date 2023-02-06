import React from 'react';
import Typography from '@mui/material/Typography';

const TextCustom = ({
  text = '',
  isParagraph = false,
  variant = '',
  isWrap = false,
  component = '',
  className = '',
}) => {
  return (
    <Typography
      paragraph={isParagraph}
      noWrap={isWrap}
      variant={variant}
      component={component}
      className={className}
    >
      {text}
    </Typography>
  );
};

export default TextCustom;
