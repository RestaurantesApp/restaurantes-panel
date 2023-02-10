import axios from 'axios';
import { buildBasic } from '../buildRequest';

export const apiLogin = async params => {
  const url = `${process.env.REACT_APP_API}login`;
  const dataResponse = {
    success: false,
    statusCode: 0,
    message: '',
    data: [],
  };

  const request = {
    email: params.email,
    password: params.password,
  };

  try {
    const response = await axios.post(url, request, buildBasic('es'));
    const { status, data } = response;
    dataResponse.success = true;
    dataResponse.data = data.data;
    dataResponse.message = data.message;
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
