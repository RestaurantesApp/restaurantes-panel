import axios from 'axios'
import { buildToken } from '../buildRequest'

export const apiGetExtras = async params => {
  const url = `${process.env.REACT_APP_API}extras`
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

export const apiGetExtra = async params => {
  const url = `${process.env.REACT_APP_API}extras/${params.idExtra}`
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

export const apiPostExtras = async params => {
  const url = `${process.env.REACT_APP_API}extras`
  const dataResponse = {
    success: false,
    statusCode: 0,
    message: '',
    data: [],
  }

  const request = {
    name: params.name,
    active: params.active,
    price: Number(params.price),
    createBy: params.idUser,
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

export const apiPatchExtra = async params => {
  const url = `${process.env.REACT_APP_API}extras/${params.idExtra}`
  const dataResponse = {
    success: false,
    statusCode: 0,
    message: '',
    data: [],
  }

  const request = {
    name: params.name,
    active: params.active,
    price: Number(params.price),
    updateBy: params.idUser,
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

export const apiDeleteExtra = async params => {
  const url = `${process.env.REACT_APP_API}extras/${params.idExtra}`
  const dataResponse = {
    success: false,
    statusCode: 0,
    message: '',
    data: [],
  }
  if (params.active === false) {
    dataResponse.message = 'El extra ya está Desactivado'
    return dataResponse
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
