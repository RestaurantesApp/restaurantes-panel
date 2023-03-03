import axios from 'axios'
import { buildToken } from '../buildRequest'

export const apiGetCategories = async params => {
  const url = `${process.env.REACT_APP_API}categories`
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
} // Fin de la función de get de categorias

export const apiGetCategory = async params => {
  const url = `${process.env.REACT_APP_API}categories/${params.idCategory}`
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
} //Fin de la función para traer una categoria

export const apiPatchCategory = async params => {
  const url = `${process.env.REACT_APP_API}categories/${params.idCategory}`
  const dataResponse = {
    success: false,
    statusCode: 0,
    message: '',
    data: [],
  }
  const request = {
    name: params.name,
    position: Number(params.position),
    active: params.active,
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

export const apiPostCategories = async params => {
  const url = `${process.env.REACT_APP_API}categories`
  const dataResponse = {
    success: false,
    statusCode: 0,
    message: '',
    data: [],
  }
  const request = {
    name: params.name,
    position: Number(params.position),
    active: params.active,
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
} //Fin de la función para crear una categoria

export const apiDeleteCategory = async params => {
  const url = `${process.env.REACT_APP_API}categories/${params.idCategory}`
  const dataResponse = {
    success: false,
    statusCode: 0,
    message: '',
    data: [],
  }
  if (params.active === false) {
    dataResponse.message = 'La Categoria ya está desactivada'
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
} //Fin de la función para descativar una categoria
