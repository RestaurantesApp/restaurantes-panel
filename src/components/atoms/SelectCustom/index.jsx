import React, { memo } from 'react';

// Components
import { InputLabel, Select } from '@mui/material';
import { FormControlCustom, MenuItemCustom, TextCustom } from '../';

// Core
import { colors } from '../../styles/theme';

const SelectCustom = ({
  name = null,
  options = [],
  value = '',
  setValue = () => null,
  msgError = '',
  success = false,
  disabled = false,
  required = false,
  fontSize = 18,
  className = '',
}) => {
  const handleChange = event => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <FormControlCustom required={required}>
        <InputLabel id="demo-simple-select-label" style={{ fontSize }}>
          {name}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          label={name}
          value={value}
          onChange={handleChange}
          className="w-full"
          size="large"
          disabled={disabled}
          sx={{
            '& MuiPaper-root': {
              marginTop: 1,
            },
            '& legend': {
              marginLeft: 2,
              fontSize: fontSize * 0.82,
            },
            '& fieldset': {
              borderRadius: 2,
              border: msgError.length > 0 || success ? 2 : 1,
              borderColor:
                msgError.length > 0
                  ? colors.red
                  : success
                  ? colors.green
                  : colors.gray,
              color: colors.black,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: colors.primary,
              color: colors.black,
            },
            backgroundColor: disabled ? colors.ligthGray : colors.white,
            borderRadius: 2,
          }}
        >
          {options.map((option, index) => (
            <MenuItemCustom key={index} value={option?.id}>
              {option?.label}
            </MenuItemCustom>
          ))}
        </Select>
      </FormControlCustom>
      <TextCustom
        text={msgError}
        className="text-xs ml-1 mr-1 fontPRegular text-red"
      />
    </div>
  );
};

export default memo(SelectCustom);
