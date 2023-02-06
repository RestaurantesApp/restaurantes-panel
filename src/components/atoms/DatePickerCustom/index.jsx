import React from 'react';

// Components
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextCustom } from '../';

// Styles
import { colors } from '../../styles/theme';

const { black, white, gray, ligthGray, green, red, primary } = colors;

const DatePickerCustom = ({
  name = '',
  value = '',
  setValue = () => null,
  required = false,
  disabled = false,
  minDate = undefined,
  maxDate = undefined,
  msgError = '',
  success = false,
  className = '',
  fontSize = 18,
}) => {
  const handleChange = inputValue => {
    setValue(inputValue);
  };

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
              size="large"
              required={required}
              style={{ backgroundColor: disabled ? '#e9ecef' : '#FFFFFF' }}
              sx={{
                '& legend': {
                  marginLeft: 2,
                  fontSize: fontSize * 0.82,
                },
                '& .MuiInputBase-root': {
                  '& fieldset': {
                    borderRadius: 2,
                    border: msgError.length > 0 || success ? 2 : 1,
                    borderColor:
                      msgError.length > 0 ? red : success ? green : gray,
                    color: black,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: primary,
                    color: black,
                    fontSize: fontSize,
                  },
                },
                '& .MuiInputLabel-asterisk': {
                  display: 'none',
                },
                '& .MuiInputLabel-shrink': {
                  marginLeft: 2,
                  color: black,
                  fontSize: fontSize,
                  fontWeight: '600',
                  '& .MuiInputLabel-asterisk': {
                    color: red,
                    display: 'inline',
                  },
                },
                backgroundColor: disabled ? ligthGray : white,
                borderRadius: 2,
                marginTop: 1,
              }}
              {...params}
            />
          )}
          disabled={disabled}
        />
      </LocalizationProvider>
      <TextCustom
        text={msgError}
        className="text-xs ml-1 mt-1 fontPRegular color-red"
      />
    </div>
  );
};

export default DatePickerCustom;
