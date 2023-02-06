import React from 'react';

const TableState = ({
  className = '',
  size = 8,
  marginRight = 12,
  state = '',
}) => {
  const renderColor = () => {
    let color = null;
    switch (state) {
      case 'ACTIVO':
        color = '#2DA54B';
        break;
      case 'INACTIVO':
        color = '#EB2341';
        break;
      case 'VIGENTE':
        color = '#2DA54B';
        break;
      case 'EXPIRADO':
        color = '#EB2341';
        break;
      default:
        color = 'gray';
        break;
    }
    return color;
  };

  const renderLabel = () => {
    let label = null;
    switch (state) {
      case 'ACTIVO':
        label = 'Activo';
        break;
      case 'INACTIVO':
        label = 'Inactivo';
        break;
      case 'VIGENTE':
        label = 'Vigente';
        break;
      case 'EXPIRADO':
        label = 'Expirado';
        break;
      default:
        label = 'No definido';
        break;
    }
    return label;
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

export default TableState;
