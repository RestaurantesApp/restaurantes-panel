import React, { memo } from 'react'

// Components
import TextField from '@mui/material/TextField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { TextCustom } from './'

// Styles
import { colors } from '../themes'

const Component = ({
  name = '',
  value = null,
  setValue = () => null,
  size = 'medium',
  required = false,
  disabled = false,
  minDate = undefined,
  maxDate = undefined,
  msgError = null,
  className = '',
  fontSize = 18,
}) => {
  const handleChange = inputValue => {
    setValue(inputValue)
  }

  return (
    <div className={`flex flex-col ${className}`}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={value}
          label={name}
          onChange={handleChange}
          minDate={minDate}
          maxDate={maxDate}
          className="w-100"
          inputFormat="DD/MM/YYYY"
          renderInput={params => (
            <TextField
              label={name}
              size={size}
              required={required}
              style={{
                backgroundColor: disabled ? colors['ligth-gray'] : colors.white,
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
                '& .MuiInputLabel-asterisk': { display: 'none' },
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
              {...params}
            />
          )}
          disabled={disabled}
        />
      </LocalizationProvider>
      {msgError && (
        <TextCustom text={msgError} className="text-xs ml-1 mt-1 text-danger" />
      )}
    </div>
  )
}

export const DatePickerCustom = memo(Component)
