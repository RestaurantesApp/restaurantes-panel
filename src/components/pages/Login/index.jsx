import React, { useContext, useState } from 'react';

// Hooks
import { AuthContext } from '../../../hooks/context';
import { useForm } from '../../../hooks/others';

// Components
import {
  AlertCustom,
  ButtonCustom,
  Loader,
  TextCustom,
  TextInputCustom,
} from '../../atoms';

// Const
import { typesGlobalState } from '../../../common/types';

// Core
import { formValidLogin } from '../../../core/validations';
import { apiLogin } from '../../../services/apis';

const { authLogin } = typesGlobalState;

const Login = () => {
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
  const [formErrors, setFormErrors, resetFormErrors] = useForm({
    email: '',
    password: '',
  });
  const [formSuccess, setFormSuccess, resetFormSuccess] = useForm({
    email: false,
    password: false,
  });

  const resetForm = () => {
    setShowAlert(false);
    resetFormErrors();
    resetFormSuccess();
    setEmail('');
    setPassword('');
  };

  const handleLogin = async () => {
    setShowAlert(false);
    setEnabledValid(true);
    if (handleValidForm()) {
      setLoader(true);
      const params = { email, password };
      const response = await apiLogin(params);
      const { success, message, data } = response;
      if (success) {
        const payload = {
          personalInfo: data.user,
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
    const params = { email, password };
    const responseValid = formValidLogin(params);
    const { isValid, msgValid } = responseValid;
    setFormErrors(msgValid.errors);
    setFormSuccess(msgValid.success);
    return isValid;
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-700">
      <div className="flex flex-col w-96 px-6 py-8 rounded-xl bg-white">
        <TextCustom
          text="Inicio de sesión"
          className="self-center text-2xl fontPBold color-general rounded-lg"
        />
        <div className="flex flex-col my-4 relative">
          <AlertCustom
            title={alert.title}
            description={alert.description}
            open={showAlert}
            setOpen={setShowAlert}
            severity={alert.severity}
          />
          <div className="flex flex-col gap-4 rounded-xl relative">
            <TextInputCustom
              name="Correo"
              type="email"
              value={email}
              setValue={setEmail}
              onBlur={() => enabledValid && handleValidForm()}
              onEnter={handleLogin}
              msgError={formErrors.email}
              success={formSuccess.email}
            />
            <TextInputCustom
              name="Contraseña"
              type="password"
              value={password}
              setValue={setPassword}
              onBlur={() => enabledValid && handleValidForm()}
              onEnter={handleLogin}
              msgError={formErrors.password}
              success={formSuccess.password}
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

export default Login;
