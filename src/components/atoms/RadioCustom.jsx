import React from 'react'

// Components
import { Radio } from '@mui/material'

// Core
import { renderColor } from '../../core/utils'

// Styles
import { colors } from '../themes'

export const RadioCustom = ({
  value = false,
  setValue = () => null,
  disabled = false,
  size = 'medium',
  typeColor = 'primary',
  fontSize = undefined,
}) => {
  const handleChange = () => {
    setValue(!value)
  }

  return (
    <Radio
      checked={value}
      onChange={handleChange}
      disabled={disabled}
      size={size}
      sx={{
        '& .MuiSvgIcon-root': { fontSize },
        '&.Mui-checked': { color: renderColor(typeColor) },
        color: colors['ligth-gray'],
      }}
    />
  )
}
