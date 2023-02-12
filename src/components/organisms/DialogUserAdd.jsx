import React, { useState, useEffect, useContext } from 'react';

// Hooks
import useMessage from '../../hooks/others/useMessage';
import { AuthContext } from '../../hooks/context';

// Components
import { DialogActions, DialogContent } from '@mui/material';
import { DialogCustom } from '../templates';
import {
  AlertCustom,
  ButtonCustom,
  Loader,
  SelectCustom,
  TextInputCustom,
} from '../atoms';

// Const
import { typesValidation } from '../../common/types';

// Core
import { formValidAddUser } from '../../core/validations';
import { apiPostUser } from '../../services/apis';

export const DialogUserAdd = ({
  open = false,
  setOpen = () => null,
  onDismiss = () => null,
}) => {
  const { auth } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [loader, setLoader] = useState(false);
  const [enabledValid, setEnabledValid] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState({
    title: '',
    description: '',
    severity: 'info',
  });
  const { messages, setMessages, resetMessages } = useMessage({
    name: null,
    email: null,
    password: null,
    confirmPassword: null,
  });
  const { token } = auth;

  useEffect(() => {
    if (!open) {
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setRole('');
    setLoader(false);
    setShowAlert(false);
    resetMessages();
    setEnabledValid(false);
  };

  const handleAccept = async () => {
    setShowAlert(false);
    setEnabledValid(true);
    if (handleValidForm()) {
      setLoader(true);
      const params = {
        name,
        email,
        password,
        role,
        token,
      };
      const response = await apiPostUser(params);
      const { success, message } = response;
      if (success) {
        setOpen(false);
        onDismiss();
      } else {
        setShowAlert(true);
        setAlert({
          title: 'Error',
          description: message,
          severity: 'error',
        });
      }
      setLoader(false);
    }
  };

  const handleValidForm = () => {
    const params = {
      name,
      email,
      password,
      confirmPassword,
    };
    const response = formValidAddUser(params);
    setMessages(response.msgValid);
    return response.isValid;
  };

  const handleCancel = () => {
    setOpen(false);
    resetForm();
  };

  const handleDismiss = () => {
    resetForm();
  };

  return (
    <DialogCustom
      open={open}
      setOpen={setOpen}
      title="Crear Usuario"
      onDismiss={handleDismiss}
    >
      <DialogContent>
        <AlertCustom
          title={alert.title}
          description={alert.description}
          open={showAlert}
          setOpen={setShowAlert}
          severity={alert.severity}
        />
        <div className="flex flex-col relative">
          <TextInputCustom
            name="Nombre"
            value={name}
            setValue={setName}
            onBlur={() => enabledValid && handleValidForm()}
            onEnter={handleAccept}
            className="mt-2"
            maxLength={50}
            required
            typesValidation={typesValidation.onlyLettersExtend}
            msgError={messages.name}
          />
          <TextInputCustom
            name="Email"
            value={email}
            setValue={setEmail}
            onBlur={() => enabledValid && handleValidForm()}
            onEnter={handleAccept}
            className="mt-2"
            maxLength={30}
            required
            msgError={messages.email}
          />
          <TextInputCustom
            name="Contraseña"
            value={password}
            setValue={setPassword}
            onBlur={() => enabledValid && handleValidForm()}
            onEnter={handleAccept}
            className="mt-2"
            type="password"
            maxLength={25}
            required
            msgError={messages.password}
          />
          <TextInputCustom
            name="Confirmar contraseña"
            value={confirmPassword}
            setValue={setConfirmPassword}
            onBlur={() => enabledValid && handleValidForm()}
            onEnter={handleAccept}
            className="mt-2"
            type="password"
            maxLength={25}
            required
            msgError={messages.confirmPassword}
          />
          <SelectCustom
            name="Rol"
            options={auth.roles}
            value={role}
            setValue={setRole}
            className="mt-2"
          />
          {loader && <Loader mode="modal" />}
        </div>
      </DialogContent>
      <DialogActions>
        <ButtonCustom
          text="Cancelar"
          typeColor="secondary"
          onClick={handleCancel}
        />
        <ButtonCustom
          text="Guardar"
          typeColor="primary"
          onClick={handleAccept}
        />
      </DialogActions>
    </DialogCustom>
  );
};
