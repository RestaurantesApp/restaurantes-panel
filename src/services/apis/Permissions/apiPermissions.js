import axios from 'axios'
import { buildToken } from '../buildRequest'

export const apiGetPermissions = async params => {
  const url = `${process.env.REACT_APP_API}permissions`
  const dataResponse = {
    success: false,
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
} // Fin de la función de get de los permisos

export const apiPostPermission = async params => {
  const url = `${process.env.REACT_APP_API}permissions`
  const dataResponse = {
    success: false,
    statusCode: 0,
    message: '',
    data: [],
  }
  const request = {
    path: params.path,
    method: params.method,
  }

  try {
    const response = await axios.post(
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
} //Fin de la función para crear un permiso

export const apiDeletePermission = async params => {
  const url = `${process.env.REACT_APP_API}permissions/${params.idPermission}`
  const dataResponse = {
    success: false,
    statusCode: 0,
    message: '',
    data: [],
  }

  try {
    const response = await axios.delete(url, buildToken('es', params.token))
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
} //Fin de la función eliminar permisos
