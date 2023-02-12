import React from 'react'
import { FormControlLabel } from '@mui/material'

export const ControlLabelCustom = ({
  value = undefined,
  children = null,
  name = '',
  align = 'end',
  className = '',
}) => {
  return (
    <FormControlLabel
      value={value}
      control={children}
      label={name}
      labelPlacement={align}
      className={className}
      sx={{
        '&.MuiFormControlLabel-root': { margin: 0 },
        '& .MuiFormControlLabel-label': { fontFamily: 'poppins' },
      }}
    />
  )
}
