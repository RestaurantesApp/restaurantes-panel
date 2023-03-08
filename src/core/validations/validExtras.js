export const formValidExtra = extra => {
  const response = {
    isValid: true,
    msgValid: {
      name: '',
      price: '',
    },
  }
  if (!extra.name) {
    response.msgValid.name = 'Nombre no ha sido asignado.\n'
    response.isValid = false
  }
  if (!extra.price) {
    response.msgValid.price = 'El precio no ha sido asignado.\n'
    response.isValid = false
  }
  return response
}
