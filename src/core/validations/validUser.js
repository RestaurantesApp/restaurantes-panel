import { typesValidation } from '../../common/types'
import { validInputEmail } from './validateInput'

export const formValidAddUser = user => {
  const response = {
    isValid: true,
    msgValid: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  }
  if (!user.name) {
    response.msgValid.name = 'Nombre no ha sido asignado.\n'
    response.isValid = false
  }
  if (!user.email) {
    response.msgValid.email = 'Correo no ha sido asignado.\n'
    response.isValid = false
  }
  if (!user.password) {
    response.msgValid.password = 'Contraseña no ha sido asignada.\n'
    response.isValid = false
  }
  if (!user.confirmPassword) {
    response.msgValid.confirmPassword = 'Contraseña no ha sido asignada.\n'
    response.isValid = false
  }
  if (
    !response.msgValid.email &&
    !validInputEmail(user.email, typesValidation.validateEmail)
  ) {
    response.msgValid.email = 'Correo no válido.\n'
    response.isValid = false
  }
  if (
    !response.msgValid.confirmPassword &&
    user.password !== user.confirmPassword
  ) {
    response.msgValid.confirmPassword = 'Las contraseñas no coinciden.\n'
    response.isValid = false
  }
  return response
}

export const formValidEditUser = user => {
  const response = {
    isValid: true,
    msgValid: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  }
  if (!user.name) {
    response.msgValid.name = 'Nombre no ha sido asignado.\n'
    response.isValid = false
  }
  if (!user.email) {
    response.msgValid.email = 'Correo no ha sido asignado.\n'
    response.isValid = false
  }
  if (
    !response.msgValid.email &&
    !validInputEmail(user.email, typesValidation.validateEmail)
  ) {
    response.msgValid.email = 'Correo no válido.\n'
    response.isValid = false
  }
  if (
    !response.msgValid.confirmPassword &&
    user.password !== user.confirmPassword
  ) {
    response.msgValid.confirmPassword = 'Las contraseñas no coinciden.\n'
    response.isValid = false
  }
  return response
}
