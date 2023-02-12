import React from 'react'
import Typography from '@mui/material/Typography'

export const TextCustom = ({
  text = '',
  isParagraph = false,
  variant = 'inherit',
  isWrap = false,
  className = '',
}) => {
  return (
    <Typography
      paragraph={isParagraph}
      noWrap={isWrap}
      variant={variant}
      className={`font-poppins ${className}`}
    >
      {text}
    </Typography>
  )
}
