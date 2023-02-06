import React, { memo } from 'react';

// Components
import { InputAdornment, TextField } from '@mui/material';
import { TextCustom, IconButtonCustom } from '../';

// Core
import {
  validTextInput,
  validInputInitialNumbers,
} from '../../../core/validations';

// Styles
import { colors } from '../../styles/theme';

const { black, white, gray, ligthGray, green, red, primary } = colors;

const TextInputCustom = ({
  name = '',
  value = '',
  setValue = () => null,
  onBlur = () => null,
  onEnter = () => null,
  placeholder = '',
  type = 'text',
  typesValidation = '',
  validInitNumbers = [],
  maxLength = null,
  className = '',
  iconStart = null,
  iconEnd = null,
  iconMode = 'adornment',
  iconTypeColor = 'primary',
  iconOnClick = () => null,
  msgError = '',
  disabled = false,
  multiline = false,
  required = false,
  success = false,
  fontSize = 18,
}) => {
  const handleOnChange = e => {
    const inputValue = e.target.value;
    let isValid = true;
    if (validInitNumbers.length) {
      isValid = validInputInitialNumbers(inputValue, validInitNumbers);
    } else {
      isValid = validTextInput(inputValue, typesValidation);
    }
    if (isValid || inputValue === '' || !inputValue) {
      setValue(inputValue);
    }
  };

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
      );
    } else {
      return null;
    }
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <TextField
        label={name}
        value={value}
        onChange={handleOnChange}
        onBlur={onBlur}
        onKeyDown={event => {
          if (event.code === 'Enter') {
            onEnter();
          }
        }}
        variant="outlined"
        size="large"
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
          '& legend': {
            marginLeft: 2,
            fontSize: fontSize * 0.82,
          },
          '& .MuiInputBase-root': {
            '& fieldset': {
              borderRadius: 2,
              border: msgError.length > 0 || success ? 2 : 1,
              borderColor: msgError.length > 0 ? red : success ? green : gray,
              color: black,
            },
            '&.Mui-focused fieldset': {
              borderColor: primary,
              color: black,
              fontSize: fontSize,
            },
          },
          '& .MuiInputLabel-asterisk': {
            color: red,
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
      />
      <TextCustom
        text={msgError}
        className="text-xs ml-1 mt-1 fontPRegular color-red"
      />
    </div>
  );
};

export default memo(TextInputCustom);
