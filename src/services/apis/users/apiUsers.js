import axios from 'axios'
import { buildToken } from '../buildRequest'

export const apiGetUsers = async params => {
  const url = `${process.env.REACT_APP_API}users`
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

export const apiGetUser = async params => {
  const url = `${process.env.REACT_APP_API}users/${params.idUser}`
  const method = 'get'
  const dataResponse = {
    success: false,
    statusCode: 0,
    message: '',
    data: [],
  }

  try {
    const response = await axios[method](url, buildToken('es', params.token))
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

export const apiPostUser = async params => {
  const url = `${process.env.REACT_APP_API}users`
  const dataResponse = {
    success: false,
    statusCode: 0,
    message: '',
    data: [],
  }

  const request = {
    name: params.name,
    email: params.email,
    password: params.password,
    role: params.role,
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

export const apiPatchUser = async params => {
  const url = `${process.env.REACT_APP_API}users/${params.idUser}`
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
    role: params.role,
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

export const apiDeleteUser = async params => {
  const url = `${process.env.REACT_APP_API}users/${params.idUser}`
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
