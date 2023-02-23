export const convertMethod = value => {
  let newValue = ''
  switch (value) {
    case 'GET':
      newValue = 'Obtener'
      break
    case 'POST':
      newValue = 'Crear'
      break
    case 'PATCH':
      newValue = 'Actualizar'
      break
    case 'DELETE':
      newValue = 'Eliminar'
      break
    default:
      newValue = ' '
      break
  }
  return newValue
}
