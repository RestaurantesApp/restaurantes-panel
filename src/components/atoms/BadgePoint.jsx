import React from 'react';

// Styles
import { colors } from '../themes';

export const BadgePoint = ({
  state = 'UNDEFINED',
  className = '',
  size = 8,
  marginRight = 12,
}) => {
  const renderColor = () => {
    switch (state) {
      case 'ACTIVE':
        return colors.success;
      case 'INACTIVE':
        return colors.danger;
      case 'VALID':
        return colors.success;
      case 'EXPIRED':
        return colors.danger;
      default:
        return colors['dark-gray'];
    }
  };

  const renderLabel = () => {
    switch (state) {
      case 'ACTIVE':
        return 'Activo';
      case 'INACTIVE':
        return 'Inactivo';
      case 'VALID':
        return 'Vigente';
      case 'EXPIRED':
        return 'Expirado';
      default:
        return 'No definido';
    }
  };

  return (
    <div className={`flex justify-start items-center ${className}`}>
      <div
        style={{
          width: size,
          height: size,
          background: renderColor(),
          borderRadius: size,
          marginRight,
        }}
      ></div>
      {renderLabel()}
    </div>
  );
};
