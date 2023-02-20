//Api para el perfil de usuario
import axios from 'axios'
import { buildToken } from '../buildRequest'

//Función para traer el perfil del usuario (solo trae el nombre y el email)
export const apiGetProfile = async params => {
  const url = `${process.env.REACT_APP_API}profile/${params.idUser}`
  const dataResponse = {
    sucess: false,
    statusCode: 0,
    message: '',
    data: [],
  }
  try {
    const response = await axios.get(url, buildToken('es', params.token))
    const { status, data } = response
    dataResponse.success = true
    dataResponse.data = data.data
    dataResponse.statusCode = status
  } catch (error) {
    dataResponse.data = error
    if (!error.response?.status || !error.response?.data.message) {
      dataResponse.message = `Error inesperado. Código: ${error.code}`
      return dataResponse
    }
    dataResponse.message = error.response.data.message
    dataResponse.statusCode = error.response.status
  }
  return dataResponse
}

//Función para actualizar el perfil de usuario (solo actualiza,el nombre ,email y pasword si el usuario manda)
export const apiPatchProfile = async params => {
  const url = `${process.env.REACT_APP_API}profile/${params.idUser}`
  const dataResponse = {
    success: false,
    statusCode: 0,
    message: '',
    data: [],
  }
  const request = {
    name: params.name,
    email: params.email,
    password: params.password ? params.password : undefined,
  }
  try {
    const response = await axios.patch(
      url,
      request,
      buildToken('es', params.token),
    )
    const { status, data } = response
    dataResponse.success = true
    dataResponse.data = data.data
    dataResponse.statusCode = status
  } catch (error) {
    dataResponse.data = error
    if (!error.response?.status || !error.response?.data.message) {
      dataResponse.message = `Error inesperado. Código: ${error.code}`
      return dataResponse
    }
    dataResponse.message = error.response.data.message
    dataResponse.statusCode = error.response.status
  }
  return dataResponse
}
