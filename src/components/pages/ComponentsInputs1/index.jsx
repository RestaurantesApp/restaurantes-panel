import React, { useState } from 'react';

// Components
import { Divider } from '@mui/material';
import { TextCustom, TextInputCustom } from '../../atoms';

// Assets
import SendIcon from '@mui/icons-material/Send';
import ReplyIcon from '@mui/icons-material/Reply';

const ComponentsInputs1 = () => {
  const [inputDefault, setInputDefault] = useState('');
  const [inputDisabled, setInputDisabled] = useState('');
  const [inputRequired, setInputRequired] = useState('');
  const [inputMultiline, setInputMultiline] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputError, setInputError] = useState('');
  const [inputSuccess, setInputSuccess] = useState('');
  const [inputIconAdornament, setInputIconAdornament] = useState('');
  const [inputIconButton, setInputIconButton] = useState('');
  const [inputIconButtonColor, setInputIconButtonColor] = useState('');

  return (
    <div className="pb-4">
      <TextCustom text="Componentes para TextInputs" className="text-6xl" />
      <Divider />
      {/* Variante de TextInputs */}
      <div className="px-4 pt-4">
        <TextCustom text="Variantes de TextInputs" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <TextInputCustom
            value={inputDefault}
            setValue={setInputDefault}
            name="Por defecto"
          />
          <TextInputCustom
            value={inputDisabled}
            setValue={setInputDisabled}
            name="Deshabilitado"
            disabled
          />
          <TextInputCustom
            value={inputRequired}
            setValue={setInputRequired}
            name="Requerido"
            required
          />
          <TextInputCustom
            value={inputMultiline}
            setValue={setInputMultiline}
            name="Multiline"
            multiline
          />
          <TextInputCustom value={name} setValue={setName} name="Texto" />
          <TextInputCustom
            value={number}
            setValue={setNumber}
            name="Numero"
            type="number"
          />
          <TextInputCustom
            value={email}
            setValue={setEmail}
            name="Email"
            type="email"
          />
          <TextInputCustom
            value={password}
            setValue={setPassword}
            name="Password"
            type="password"
          />
          <TextInputCustom
            value={inputError}
            setValue={setInputError}
            name="Error"
            msgError="Datos no válidos"
          />
          <TextInputCustom
            value={inputSuccess}
            setValue={setInputSuccess}
            name="Exitoso"
            success
          />
        </div>
        <Divider />
      </div>
      {/* Iconos para TextInputs */}
      <div className="px-4 pt-4">
        <TextCustom text="Iconos para TextInputs" className="text-3xl" />
        <Divider />
        <div className="flex flex-col gap-1">
          <TextInputCustom
            name="Iconos de adorno"
            value={inputIconAdornament}
            setValue={setInputIconAdornament}
            iconStart={<ReplyIcon />}
            iconEnd={<SendIcon />}
          />
          <TextInputCustom
            name="Iconos de botones"
            value={inputIconButton}
            setValue={setInputIconButton}
            iconStart={<ReplyIcon />}
            iconEnd={<SendIcon />}
            iconMode="button"
            iconOnClick={() => setInputIconButton('')}
          />
          <TextInputCustom
            name="Color para iconos de botones"
            value={inputIconButtonColor}
            setValue={setInputIconButtonColor}
            iconStart={<ReplyIcon />}
            iconEnd={<SendIcon />}
            iconMode="button"
            iconOnClick={() => setInputIconButtonColor('')}
            iconTypeColor="success"
          />
          <TextCustom
            text="La accion de los botones es limpiar los inputs"
            className="italic"
          />
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default ComponentsInputs1;
