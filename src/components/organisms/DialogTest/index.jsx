import React, { memo, useEffect, useState } from 'react';

// Components
import { DialogActions, DialogContent, Divider } from '@mui/material';
import { DialogCustom } from '../../templates';
import {
  ButtonCustom,
  CheckBoxCustom,
  ControlLabelCustom,
  DatePickerCustom,
  Loader,
  RadioButtonsCustom,
  SelectCustom,
  TextCustom,
  TextInputCustom,
} from '../../atoms';

// Utils y Const
import { getLegalDate } from '../../../core/utils';
import { constEstadosCiviles, constGeneros } from '../../../common/constants';

const DialogTest = ({ open = false, setOpen = () => null }) => {
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmContrasena, setConfirmContrasena] = useState('');
  const [fechaNaicmiento, setFechaNaicmiento] = useState(null);
  const [genero, setGenero] = useState('');
  const [estadoCivil, setEstadoCivil] = useState('');
  const [isConfirm, setIsConfirm] = useState(false);
  const [loader, setLoader] = useState(false);
  const [maxDate, setMaxDate] = useState(null);

  useEffect(() => {
    if (open) {
      const legalDate = getLegalDate();
      setMaxDate(legalDate);
    } else {
      resetValues();
    }
  }, [open]);

  const resetValues = () => {
    setNombres('');
    setApellidos('');
    setCorreo('');
    setContrasena('');
    setConfirmContrasena('');
    setFechaNaicmiento(null);
    setGenero('');
    setEstadoCivil('');
    setIsConfirm(false);
    setMaxDate(null);
    setLoader(false);
  };

  const handleAccept = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      setOpen(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <DialogCustom
      open={open}
      setOpen={setOpen}
      title="Registrar usuario"
      disabledDismiss
      disabledIconClose
    >
      <DialogContent style={{ width: 500 }}>
        <div className="flex flex-col relative">
          <TextCustom text="Ingrese sus datos" variant="h5" />
          <TextInputCustom
            name="Nombres"
            value={nombres}
            setValue={setNombres}
            className="mb-2"
          />
          <TextInputCustom
            name="Apellidos"
            value={apellidos}
            setValue={setApellidos}
            className="mb-2"
          />
          <TextInputCustom
            name="Correo"
            value={correo}
            setValue={setCorreo}
            className="mb-2"
            type="email"
          />
          <TextInputCustom
            name="Contraseña"
            value={contrasena}
            setValue={setContrasena}
            className="mb-2"
            type="password"
          />
          <TextInputCustom
            name="Confirmar Contraseña"
            value={confirmContrasena}
            setValue={setConfirmContrasena}
            className="mb-2"
            type="password"
          />
          <Divider />
          <DatePickerCustom
            name="Fecha Nacimiento"
            value={fechaNaicmiento}
            setValue={setFechaNaicmiento}
            maxDate={maxDate}
          />
          <RadioButtonsCustom
            name="Genero"
            options={constGeneros}
            value={genero}
            setValue={setGenero}
            className="mb-3"
            isRow
          />
          <SelectCustom
            name="Estado Civil"
            options={constEstadosCiviles}
            value={estadoCivil}
            setValue={setEstadoCivil}
            className="mb-2"
          />
          <ControlLabelCustom name={'Estoy de acuerdo con los terminos'}>
            <CheckBoxCustom value={isConfirm} setValue={setIsConfirm} />
          </ControlLabelCustom>
          {loader && <Loader mode="modal" />}
        </div>
      </DialogContent>
      <DialogActions>
        <ButtonCustom
          text="Cancelar"
          typeColor="secondary"
          onClick={handleCancel}
          disabled={loader}
        />
        <ButtonCustom
          text="Guardar"
          typeColor="primary"
          onClick={handleAccept}
          disabled={!isConfirm ? true : loader}
        />
      </DialogActions>
    </DialogCustom>
  );
};

export default memo(DialogTest);
