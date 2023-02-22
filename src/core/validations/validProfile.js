//Validaciones para actualizar el perfil de usuario
import { typesValidation } from '../../common/types'
import { validInputEmail } from './validateInput'

export const formValidEditProfile = profile => {
  const response = {
    isValid: true,
    msgValid: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  }
  if (!profile.name) {
    response.msgValid.name = 'Nombre  perfil no ha sido asignado.\n'
    response.isValid = false
  }
  if (!profile.email) {
    response.msgValid.email = 'Correo perfil no ha sido asignado.\n'
    response.isValid = false
  }
  if (
    !response.msgValid.email &&
    !validInputEmail(profile.email, typesValidation.validateEmail)
  ) {
    response.msgValid.email = 'Correo no válido.\n'
    response.isValid = false
  }
  if (
    !response.msgValid.confirmPassword &&
    profile.password !== profile.confirmPassword
  ) {
    response.msgValid.confirmPassword = 'Las contraseñas no coinciden.\n'
    response.isValid = false
  }
  return response
}
