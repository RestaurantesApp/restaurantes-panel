import { typesValidation } from '../../common/types';
import { validInputEmail } from './validateInput';

const { validateEmail } = typesValidation;

export const formValidLogin = user => {
  const dataResponse = {
    isValid: true,
    msgValid: {
      errors: null,
      success: null,
    },
  };
  let isValid = true;
  let inputsError = {
    email: '',
    password: '',
  };
  let inputsSuccess = {
    email: true,
    password: true,
  };
  if (!user.email) {
    inputsError.email = 'Correo no ha sido asignado.\n';
    inputsSuccess.email = false;
    isValid = false;
  }
  if (!user.password) {
    inputsError.password = 'Contraseña no ha sido asignada.\n';
    inputsSuccess.password = false;
    isValid = false;
  }
  if (!inputsError.email && !validInputEmail(user.email, validateEmail)) {
    inputsError.email = 'Correo no válido.\n';
    inputsSuccess.email = false;
    isValid = false;
  }
  dataResponse.isValid = isValid;
  dataResponse.msgValid.errors = inputsError;
  dataResponse.msgValid.success = inputsSuccess;
  return dataResponse;
};
