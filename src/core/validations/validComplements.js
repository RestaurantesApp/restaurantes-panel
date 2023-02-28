export const formValidComplement = complement => {
  const response = {
    isValid: true,
    msgValid: {
      name: '',
    },
  }
  if (!complement.name) {
    response.msgValid.name = 'Nombre no ha sido asignado.\n'
    response.isValid = false
  }
  return response
}
