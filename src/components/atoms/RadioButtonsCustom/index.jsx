import React from 'react';

// Components
import { Radio, RadioGroup } from '@mui/material';
import { ControlLabelCustom, TextCustom } from '../';

// Core
import { renderColor } from '../../../core/utils';

const RadioButtonsCustom = ({
  name = '',
  value = false,
  setValue = () => null,
  options = [],
  isRow = false,
  disabled = false,
  msgError = '',
  size = undefined,
  typeColor = '',
  fontSize = null,
  className = '',
  labelClassName = '',
}) => {
  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div className={`d-flex flex-column ${className}`}>
      <label className={`form-label ${labelClassName}`} style={{ margin: 0 }}>
        {name}
      </label>
      {msgError.length > 0 && (
        <TextCustom text={msgError} style={{ color: 'red' }} />
      )}
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        row={isRow}
        value={value}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <ControlLabelCustom key={index} value={option.id} name={option.label}>
            <Radio
              disabled={disabled}
              size={size}
              sx={{
                '& .MuiSvgIcon-root': { fontSize },
                '&.Mui-checked': {
                  color: renderColor(typeColor),
                },
                color: renderColor(typeColor),
              }}
            />
          </ControlLabelCustom>
        ))}
      </RadioGroup>
    </div>
  );
};

export default RadioButtonsCustom;
