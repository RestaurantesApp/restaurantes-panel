import React from 'react'

// Components
import { Checkbox } from '@mui/material'

// Core
import { renderColor } from '../../core/utils'
import { colors } from '../themes'

export const CheckBoxCustom = ({
  name = '',
  value = false,
  setValue = () => null,
  onChange = () => null,
  disabled = false,
  size = 'medium',
  typeColor = 'primary',
  fontSize = undefined,
}) => {
  const handleChange = event => {
    setValue(!value)
    onChange(event)
  }

  return (
    <Checkbox
      name={name}
      checked={value}
      onChange={handleChange}
      disabled={disabled}
      size={size}
      sx={{
        '&.MuiButtonBase-root': { padding: '4px' },
        '& .MuiSvgIcon-root': { fontSize },
        '&.Mui-checked': { color: renderColor(typeColor) },
        color: colors['ligth-gray'],
      }}
    />
  )
}
