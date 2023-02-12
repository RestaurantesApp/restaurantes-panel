import React, { memo } from 'react'

// Components
import { Select } from '@mui/material'
import { FormControlCustom, MenuItemCustom, TextCustom } from './'

// Core
import { colors } from '../themes'

const Component = ({
  name = '',
  options = [],
  value = '',
  setValue = () => null,
  onBlur = () => null,
  size = 'medium',
  msgError = null,
  disabled = false,
  required = false,
  fontSize = 18,
  className = '',
}) => {
  const handleChange = event => {
    const inputValue = event.target.value
    setValue(inputValue)
  }

  return (
    <div className={`flex flex-col ${className}`}>
      <FormControlCustom
        required={required}
        name={name}
        size={size}
        fontSize={fontSize}
      >
        <Select
          labelId="demo-simple-select-label"
          label={name}
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          className="w-full"
          size={size}
          disabled={disabled}
          sx={{
            '& MuiPaper-root': { marginTop: 1 },
            '& legend': {
              marginLeft: 2,
              fontSize: fontSize * 0.82,
            },
            '& fieldset': {
              borderRadius: 1,
              border: typeof msgError === 'string' ? 2 : 1,
              borderColor:
                typeof msgError !== 'string'
                  ? colors['dark-gray']
                  : msgError.length === 0
                  ? colors.success
                  : colors.danger,
              color: colors.black,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: colors['dark-gray'],
              color: colors.black,
            },
            backgroundColor: disabled ? colors['ligth-gray'] : colors.white,
            borderRadius: 1,
          }}
        >
          {options.map((option, index) => (
            <MenuItemCustom key={index} value={option?.id}>
              {option?.label}
            </MenuItemCustom>
          ))}
        </Select>
      </FormControlCustom>
      {msgError && (
        <TextCustom text={msgError} className="text-xs ml-1 mt-1 text-danger" />
      )}
    </div>
  )
}

export const SelectCustom = memo(Component)
