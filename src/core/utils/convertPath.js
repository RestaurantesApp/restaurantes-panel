export const convertPath = value => {
  let newValue = ''
  switch (value) {
    case 'users':
      newValue = 'Usuarios'
      break
    case 'permissions':
      newValue = 'Permisos'
      break
    case 'categories':
      newValue = 'Categorias'
      break
    case 'local':
      newValue = 'Locales'
      break
    case 'complements':
      newValue = 'Complementos'
      break
    default:
      newValue = ' '
      break
  }
  return newValue
}
