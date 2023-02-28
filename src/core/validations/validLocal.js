import { typesValidation } from '../../common/types'
import { validInputEmail } from './validateInput'

export const formValidAddLocal = local => {
  const response = {
    isValid: true,
    msgValid: {
      name: '',
      phoneNumber: '',
      email: '',
      address: '',
      latitud: '',
      logitud: '',
    },
  }
  if (!local.name) {
    response.msgValid.name = 'Nombre no ha sido asignado.\n'
    response.isValid = false
  }
  if (!local.phoneNumber) {
    response.msgValid.phoneNumber = 'Teléfono no ha sido asignado.\n'
    response.isValid = false
  }
  if (!local.address) {
    response.msgValid.address = 'Dirección no ha sido asignado.\n'
    response.isValid = false
  }
  if (!local.latitud) {
    response.msgValid.latitud = 'Latitud no ha sido asignado.\n'
    response.isValid = false
  }
  if (!local.longitud) {
    response.msgValid.longitud = 'Longitud no ha sido asignado.\n'
    response.isValid = false
  }
  if (!local.email) {
    response.msgValid.email = 'Correo no ha sido asignado.\n'
    response.isValid = false
  }
  if (
    !response.msgValid.email &&
    !validInputEmail(local.email, typesValidation.validateEmail)
  ) {
    response.msgValid.email = 'Correo no válido.\n'
    response.isValid = false
  }
  return response
}
