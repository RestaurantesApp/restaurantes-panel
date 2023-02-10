import axios from 'axios';
import buildRequest, { buildToken } from '../buildRequest';
import { typesEndpoint } from '../../../common/types';

export const apiGetUsers = async params => {
  const url = `${process.env.REACT_APP_API}users`;
  const dataResponse = {
    success: false,
    statusCode: 0,
    message: '',
    data: [],
  };

  try {
    const response = await axios.get(url, buildToken('es', params.token));
    const { status, data } = response;
    dataResponse.success = true;
    dataResponse.data = data.data;
    dataResponse.statusCode = status;
  } catch (error) {
    dataResponse.data = error;
    if (!error.response?.status || !error.response?.data.message) {
      dataResponse.message = `Error inesperado. Código: ${error.code}`;
      return dataResponse;
    }
    dataResponse.message = error.response.data.message;
    dataResponse.statusCode = error.response.status;
  }
  return dataResponse;
};

export const apiGetUser = async params => {
  const url = `${process.env.REACT_APP_API}users/${params.idUser}`;
  const method = 'get';
  const dataResponse = {
    success: false,
    statusCode: 0,
    message: '',
    data: [],
  };

  try {
    const response = await axios[method](url, buildToken('es', params.token));
    const { status, data } = response;
    dataResponse.success = true;
    dataResponse.data = data.data;
    dataResponse.statusCode = status;
  } catch (error) {
    dataResponse.data = error;
    if (!error.response?.status || !error.response?.data.message) {
      dataResponse.message = `Error inesperado. Código: ${error.code}`;
      return dataResponse;
    }
    dataResponse.message = error.response.data.message;
    dataResponse.statusCode = error.response.status;
  }
  return dataResponse;
};

export const apiPostUser = async params => {
  const url = `${process.env.REACT_APP_API}${typesEndpoint.postUser}`;
  const method = 'post';
  const dataResponse = {
    success: false,
    statusCode: 0,
    message: '',
    data: [],
  };

  const request = {
    name: params.name,
    email: params.email,
    password: params.password,
  };

  try {
    const response = await axios[method](url, request, buildRequest());
    const { status, data } = response;
    dataResponse.success = true;
    dataResponse.data = data.data;
    dataResponse.statusCode = status;
  } catch (error) {
    dataResponse.data = error;
    if (!error.response?.status || !error.response?.data.message) {
      dataResponse.message = `Error inesperado. Código: ${error.code}`;
      return dataResponse;
    }
    dataResponse.message = error.response.data.message;
    dataResponse.statusCode = error.response.status;
  }
  return dataResponse;
};

export const apiPatchUser = async params => {
  const url = `${process.env.REACT_APP_API}${typesEndpoint.patchUser}`;
  const method = 'patch';
  const dataResponse = {
    success: false,
    statusCode: 0,
    message: '',
    data: [],
  };

  const request = {
    idUser: params.idUser,
    name: params.name,
    email: params.email,
    password: params.password,
  };

  try {
    const response = await axios[method](url, request, buildRequest());
    const { status, data } = response;
    dataResponse.success = true;
    dataResponse.data = data.data;
    dataResponse.statusCode = status;
  } catch (error) {
    dataResponse.data = error;
    if (!error.response?.status || !error.response?.data.message) {
      dataResponse.message = `Error inesperado. Código: ${error.code}`;
      return dataResponse;
    }
    dataResponse.message = error.response.data.message;
    dataResponse.statusCode = error.response.status;
  }
  return dataResponse;
};

export const apiDeleteUser = async params => {
  const url = `${process.env.REACT_APP_API}${typesEndpoint.deleteUser}`;
  const method = 'delete';
  const dataResponse = {
    success: false,
    statusCode: 0,
    message: '',
    data: [],
  };

  const request = {
    idUser: params.idUser,
  };

  try {
    const response = await axios[method](url, buildRequest(request));
    const { status, data } = response;
    dataResponse.success = true;
    dataResponse.data = data.data;
    dataResponse.statusCode = status;
  } catch (error) {
    dataResponse.data = error;
    if (!error.response?.status || !error.response?.data.message) {
      dataResponse.message = `Error inesperado. Código: ${error.code}`;
      return dataResponse;
    }
    dataResponse.message = error.response.data.message;
    dataResponse.statusCode = error.response.status;
  }
  return dataResponse;
};
