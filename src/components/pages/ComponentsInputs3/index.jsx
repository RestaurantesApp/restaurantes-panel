import React, { useState } from 'react';

// Components
import { Divider } from '@mui/material';
import { DatePickerCustom, SelectCustom, TextCustom } from '../../atoms';

// Const
import { constGenders } from '../../../common/constants';

const ComponentsInputs3 = () => {
  const [genero1, setGenero1] = useState('');
  const [genero2, setGenero2] = useState('');
  const [genero3, setGenero3] = useState('');
  const [genero4, setGenero4] = useState('');
  const [genero5, setGenero5] = useState('');
  const [genero6, setGenero6] = useState('');
  const [fecha1, setFecha1] = useState(null);
  const [fecha2, setFecha2] = useState(null);
  const [fecha3, setFecha3] = useState(null);
  const [fecha4, setFecha4] = useState(null);
  const [fecha5, setFecha5] = useState(null);
  const [fecha6, setFecha6] = useState(null);
  const [fecha7, setFecha7] = useState(null);
  const [fecha8, setFecha8] = useState(null);

  return (
    <div className="pb-4 flex flex-col">
      <TextCustom text="Selects" className="text-3xl font-bold" variant="h1" />
      <Divider className="border-2 border-black" />
      {/* Estados */}
      <div className="px-4 pt-4">
        <TextCustom text="Estados" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <SelectCustom
            name="Por defecto"
            options={constGenders}
            value={genero1}
            setValue={setGenero1}
          />
          <SelectCustom
            name="Tamaño pequeño: small"
            options={constGenders}
            value={genero2}
            setValue={setGenero2}
            size="small"
          />
          <SelectCustom
            name="Requerido"
            options={constGenders}
            value={genero3}
            setValue={setGenero3}
            required
          />
          <SelectCustom
            name="Deshabilitado"
            options={constGenders}
            value={genero4}
            setValue={setGenero4}
            disabled
          />
          <SelectCustom
            name="Error"
            options={constGenders}
            value={genero5}
            setValue={setGenero5}
            msgError="Selección incorrecta"
          />
          <SelectCustom
            name="Exitoso"
            options={constGenders}
            value={genero6}
            setValue={setGenero6}
            msgError=""
          />
        </div>
        <Divider />
      </div>
      <TextCustom
        text="DatePickers"
        className="text-3xl font-bold mt-10"
        variant="h1"
      />
      <Divider className="border-2 border-black" />
      {/* Estados */}
      <div className="px-4 pt-4">
        <TextCustom text="Estados" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <DatePickerCustom
            name="Por defecto"
            value={fecha1}
            setValue={setFecha1}
          />
          <DatePickerCustom
            name="Tamaño pequeño: small"
            value={fecha2}
            setValue={setFecha2}
            size="small"
          />
          <DatePickerCustom
            name="Requerido"
            value={fecha3}
            setValue={setFecha3}
            required
          />
          <DatePickerCustom
            name="Deshabilitado"
            value={fecha4}
            setValue={setFecha4}
            disabled
          />
          <DatePickerCustom
            name="Error"
            value={fecha5}
            setValue={setFecha5}
            msgError="Fecha no válida"
          />
          <DatePickerCustom
            name="Exitoso"
            value={fecha6}
            setValue={setFecha6}
            msgError=""
          />
        </div>
        <Divider />
      </div>
      {/* Validaciones */}
      <div className="px-4 pt-4">
        <TextCustom text="Validaciones" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <DatePickerCustom
            name="Fecha mínima hoy"
            value={fecha7}
            setValue={setFecha7}
            minDate={new Date()}
          />
          <DatePickerCustom
            name="Fecha máxima hoy"
            value={fecha8}
            setValue={setFecha8}
            maxDate={new Date()}
          />
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default ComponentsInputs3;
