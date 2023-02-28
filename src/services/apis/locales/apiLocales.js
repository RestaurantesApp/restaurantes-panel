import axios from 'axios'
import { buildToken } from '../buildRequest'

//Trae la lista de la data de los locales
export const apiGetLocales = async params => {
  const url = `${process.env.REACT_APP_API}local`
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
}

//Trae la información de un local
export const apiGetLocal = async params => {
  const url = `${process.env.REACT_APP_API}local/${params.idLocal}`
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
}

//Crea un local
export const apiPostLocal = async params => {
  const url = `${process.env.REACT_APP_API}local`
  const dataResponse = {
    success: false,
    statusCode: 0,
    message: '',
    data: [],
  }
  const request = {
    name: params.name,
    active: params.active,
    email: params.email,
    phoneNumber: params.phoneNumber,
    address: params.address,
    location: {
      latitud: params.latitud,
      longitud: params.longitud,
    },
    image: params.image,
    createBy: params.createBy,
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
}
//Actualiza un loca
export const apiPatchLocal = async params => {
  const url = `${process.env.REACT_APP_API}local/${params.idLocal}`
  const dataResponse = {
    success: false,
    statusCode: 0,
    message: '',
    data: [],
  }
  const request = {
    name: params.name,
    active: params.active,
    phoneNumber: params.phoneNumber,
    email: params.email,
    address: params.address,
    image: params.image,
    location: {
      latitud: params.latitud,
      longitud: params.longitud,
    },
    updateBy: params.updateBy,
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

//Desactiva un local (pasa a false)
export const apiDeleteLocal = async params => {
  const url = `${process.env.REACT_APP_API}local/${params.idLocal}`
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
}
