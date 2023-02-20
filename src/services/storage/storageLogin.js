//Funcionalidades del localstorage, guardar,traer y remover

export const stSetAuth = data => {//Guardar la información de sesión
  const response = {
    success: false,
    message: '',
    data: null,
  }
  try {
    window.localStorage.setItem('auth', JSON.stringify(data))
    response.success = true
  } catch (error) {
    response.message = error.message
    response.data = error
  }
  return response
}

export const stGetAuth = () => {//Traer la sesión guardada
  const response = {
    success: false,
    message: '',
    data: {},
  }
  try {
    const isLogin = localStorage.getItem('auth')
    if (isLogin) {
      response.data = JSON.parse(isLogin)
      response.success = true
    }
  } catch (error) {
    response.message = error.message
    response.data = error
  }
  return response
}

export const stRemoveAuth = () => { //Remover o eliminar la sesión
  const response = {
    success: false,
    message: '',
    data: null,
  }
  try {
    localStorage.removeItem('auth')
    response.success = true
  } catch (error) {
    response.message = error.message
    response.data = error
  }
  return response
}
