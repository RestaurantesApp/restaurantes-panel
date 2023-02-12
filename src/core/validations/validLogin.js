import { typesValidation } from '../../common/types'
import { validInputEmail } from './validateInput'

export const formValidLogin = user => {
  const response = {
    isValid: true,
    msgValid: {
      email: null,
      password: null,
    },
  }
  if (!user.email) {
    response.msgValid.email = 'Correo no asignado.\n'
    response.isValid = false
  } else {
    if (!validInputEmail(user.email, typesValidation.validateEmail)) {
      response.msgValid.email = 'Correo no válido.\n'
      response.isValid = false
    } else {
      response.msgValid.email = ''
    }
  }
  if (!user.password) {
    response.msgValid.password = 'Contraseña no asignada.\n'
    response.isValid = false
  } else {
    response.msgValid.password = ''
  }
  return response
}
