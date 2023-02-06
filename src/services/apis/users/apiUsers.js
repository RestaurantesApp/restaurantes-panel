import axios from 'axios';
import buildRequest from '../buildRequest';
import { typesEndpoint } from '../../../common/types';

export const apiGetUsers = async params => {
  const url = `${process.env.REACT_APP_api}${typesEndpoint.getUsers}`;
  const method = 'get';
  const dataResponse = {
    success: false,
    statusCode: 0,
    message: '',
    data: [],
  };

  const request = {};

  try {
    const response = await axios[method](url, buildRequest(request));
    const { status, data } = response;
    dataResponse.success = true;
    dataResponse.data = data.data;
    dataResponse.statusCode = status;
  } catch (error) {
    dataResponse.message = error.response.data?.message;
    dataResponse.data = error;
    dataResponse.statusCode = error.response?.status;
  }
  return dataResponse;
};

export const apiGetUser = async params => {
  const url = `${process.env.REACT_APP_api}${typesEndpoint.getUser}`;
  const method = 'get';
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
    dataResponse.message = error.response.data?.message;
    dataResponse.data = error;
    dataResponse.statusCode = error.response?.status;
  }
  return dataResponse;
};

export const apiPostUser = async params => {
  const url = `${process.env.REACT_APP_api}${typesEndpoint.postUser}`;
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
    dataResponse.message = error.response.data?.message;
    dataResponse.data = error;
    dataResponse.statusCode = error.response?.status;
  }
  return dataResponse;
};

export const apiPatchUser = async params => {
  const url = `${process.env.REACT_APP_api}${typesEndpoint.patchUser}`;
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
    dataResponse.message = error.response.data?.message;
    dataResponse.data = error;
    dataResponse.statusCode = error.response?.status;
  }
  return dataResponse;
};

export const apiDeleteUser = async params => {
  const url = `${process.env.REACT_APP_api}${typesEndpoint.deleteUser}`;
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
    dataResponse.message = error.response.data?.message;
    dataResponse.data = error;
    dataResponse.statusCode = error.response?.status;
  }
  return dataResponse;
};
