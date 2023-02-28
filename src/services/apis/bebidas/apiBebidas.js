import axios from 'axios'
import { buildToken } from '../buildRequest'

export const apiGetDrinks = async params => {
  const url = `${process.env.REACT_APP_API}drinks`
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

export const apiGetDrink = async params => {
  const url = `${process.env.REACT_APP_API}drinks/${params.idDrink}`
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

export const apiPostDrink = async params => {
  const url = `${process.env.REACT_APP_API}drinks`
  const method = 'post'
  const dataResponse = {
    success: false,
    statusCode: 0,
    message: '',
    data: [],
  }
  const request = {
    name: params.name,
    price: Number(params.price),
    active: params.active,
    image: params.image,
    createBy: params.idUser,
  }
  console.log(request)
  try {
    const response = await axios[method](
      url,
      request,
      buildToken('es', params.token),
    )
    console.log(response)
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



export const apiPatchDrink = async params => {
  const url = `${process.env.REACT_APP_API}drinks/${params.idDrink}`
  const method = 'patch'
  const dataResponse = {
    success: false,
    statusCode: 0,
    message: '',
    data: [],
  }

  const request = {
    name: params.name,
    price: Number(params.price),
    active: params.active,
    image: params.image,
    updateBy: params.idUser,
  }


  try {
    const response = await axios[method](
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

export const apiDeleteDrink = async params => {
  const url = `${process.env.REACT_APP_API}drinks/${params.idDrink}`
  const dataResponse = {
    success: false,
    statusCode: 0,
    message: '',
    data: [],
  }

  if (params.active === false) {
    dataResponse.message = 'La Bebida ya está Desactivado'
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