import React, { memo } from 'react'

// Components
import { InputAdornment, TextField } from '@mui/material'
import { TextCustom, IconButtonCustom } from './'

// Core
import {
  validTextInput,
  validInputInitialNumbers,
} from '../../core/validations'

// Styles
import { colors } from '../themes'

const Component = ({
  name = '',
  value = '',
  setValue = () => null,
  onBlur = () => null,
  onEnter = () => null,
  size = 'medium',
  placeholder = '',
  type = 'text',
  typesValidation = undefined,
  validInitNumbers = [],
  maxLength = undefined,
  className = '',
  iconStart = null,
  iconEnd = null,
  iconMode = 'adornment',
  iconTypeColor = 'primary',
  iconOnClick = () => null,
  msgError = null,
  disabled = false,
  multiline = false,
  required = false,
  fontSize = 18,
}) => {
  const handleOnChange = e => {
    const inputValue = e.target.value
    let isValid = true
    if (validInitNumbers.length) {
      isValid = validInputInitialNumbers(inputValue, validInitNumbers)
    } else {
      isValid = validTextInput(inputValue, typesValidation)
    }
    if (isValid || inputValue === '' || !inputValue) {
      setValue(inputValue)
    }
  }

  const renderIcon = icon => {
    if (icon) {
      return iconMode === 'button' ? (
        <IconButtonCustom
          icon={icon}
          onClick={iconOnClick}
          typeColor={iconTypeColor}
        />
      ) : (
        <InputAdornment position="start">{icon}</InputAdornment>
      )
    } else {
      return null
    }
  }

  return (
    <div className={`flex flex-col ${className}`}>
      <TextField
        label={name}
        value={value}
        onChange={handleOnChange}
        onBlur={onBlur}
        onKeyDown={e => {
          if (e.code === 'Enter' || e.code === 'NumpadEnter') onEnter()
        }}
        variant="outlined"
        size={size}
        multiline={multiline}
        minRows={multiline ? '3' : '1'}
        maxRows={multiline ? '4' : '1'}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        required={required}
        inputProps={{
          maxLength: maxLength,
          style: { textAlign: 'left' },
        }}
        InputProps={{
          startAdornment: renderIcon(iconStart),
          endAdornment: renderIcon(iconEnd),
        }}
        sx={{
          '& legend': { marginLeft: 2, fontSize: fontSize * 0.82 },
          '& .MuiInputBase-root': {
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
            '&.Mui-focused fieldset': {
              borderColor: colors['dark-gray'],
              color: colors.black,
              fontSize,
            },
            fontFamily: 'poppins',
          },
          '& .MuiInputLabel-root': { fontFamily: 'poppins' },
          '& .MuiInputLabel-asterisk': { color: colors.danger },
          '& .MuiInputLabel-shrink': {
            marginLeft: 2,
            color: colors.black,
            fontSize,
            fontWeight: '600',
            '& .MuiInputLabel-asterisk': {
              color: colors.danger,
              display: 'inline',
            },
          },
          backgroundColor: disabled ? colors['ligth-gray'] : colors.white,
          borderRadius: 1,
          marginTop: 0,
        }}
      />
      {msgError && (
        <TextCustom text={msgError} className="text-xs ml-1 mt-1 text-danger" />
      )}
    </div>
  )
}

export const TextInputCustom = memo(Component)
