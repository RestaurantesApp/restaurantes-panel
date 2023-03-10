import React from 'react'

// Components
import { MenuItem } from '@mui/material'

// Core
import { colors } from '../themes'

export const MenuItemCustom = ({ children = null, value = '', ...rest }) => {
  return (
    <MenuItem
      value={value}
      className="font-poppins font-normal"
      sx={{
        '&: hover': {
          backgroundColor: colors.general,
          color: colors.white,
        },
        '&.Mui-selected': {
          backgroundColor: colors.primary,
          color: colors.white,
        },
        '&.Mui-selected:hover': {
          backgroundColor: colors.general,
          color: colors.white,
        },
      }}
      {...rest}
    >
      {children}
    </MenuItem>
  )
}
