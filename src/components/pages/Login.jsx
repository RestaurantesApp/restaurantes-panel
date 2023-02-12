import React, { useContext, useState } from 'react';

// Hooks
import { AuthContext } from '../../hooks/context';
import useMessage from '../../hooks/others/useMessage';

// Components
import {
  AlertCustom,
  ButtonCustom,
  Loader,
  TextCustom,
  TextInputCustom,
} from '../atoms';

// Const
import { typesGlobalState } from '../../common/types';

// Core
import { formValidLogin } from '../../core/validations';
import { apiLogin } from '../../services/apis';

const { authLogin } = typesGlobalState;

export const Login = () => {
  const { dispatchAuth } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Validations
  const [loader, setLoader] = useState(false);
  const [enabledValid, setEnabledValid] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState({
    title: '',
    description: '',
    severity: 'info',
  });
  const { messages, setMessages, resetMessages } = useMessage({
    email: null,
    password: null,
  });

  const resetForm = () => {
    setShowAlert(false);
    resetMessages();
    setEmail('');
    setPassword('');
  };

  const handleLogin = async () => {
    setShowAlert(false);
    setEnabledValid(true);
    const isFormValid = handleValidForm();
    if (isFormValid) {
      setLoader(true);
      const params = { email, password };
      const response = await apiLogin(params);
      const { success, message, data } = response;
      if (success) {
        const payload = {
          personalInfo: data.user,
          paths: data.paths,
          methods: data.methods,
          roles: data.roles,
          token: data.token,
        };
        dispatchAuth({ type: authLogin, payload });
        resetForm();
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
    const response = formValidLogin({ email, password });
    setMessages(response.msgValid);
    return response.isValid;
  };

  return (
    <div className="w-screen min-h-screen flex justify-center items-center bg-general p-8">
      <div className="flex flex-col w-96 px-6 py-8 rounded-xl bg-white">
        <TextCustom
          text="Inicio de sesión"
          className="self-center text-2xl font-bold text-general rounded-lg"
        />
        <AlertCustom
          title={alert.title}
          description={alert.description}
          open={showAlert}
          setOpen={setShowAlert}
          severity={alert.severity}
        />
        <div className="flex flex-col my-4 relative">
          <div className="flex flex-col gap-4 rounded-xl relative">
            <TextInputCustom
              name="Correo"
              type="email"
              value={email}
              setValue={setEmail}
              onBlur={() => enabledValid && handleValidForm()}
              onEnter={handleLogin}
              msgError={messages.email}
            />
            <TextInputCustom
              name="Contraseña"
              type="password"
              value={password}
              setValue={setPassword}
              onBlur={() => enabledValid && handleValidForm()}
              onEnter={handleLogin}
              msgError={messages.password}
            />
            <ButtonCustom
              text="Ingresar"
              onClick={handleLogin}
              className="w-full"
              typeColor="primary"
            />
          </div>
          {loader && <Loader mode="modal" />}
        </div>
      </div>
    </div>
  );
};
