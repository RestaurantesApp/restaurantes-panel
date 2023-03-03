export const formValidCategories = extra => {
  const response = {
    isValid: true,
    msgValid: {
      name: '',
      position: '',
    },
  }
  if (!extra.name) {
    response.msgValid.name = 'Nombre no ha sido asignado.\n'
    response.isValid = false
  }
  if (!extra.position) {
    response.msgValid.position = 'La posición no ha sido asignada.\n'
    response.isValid = false
  }
  return response
}