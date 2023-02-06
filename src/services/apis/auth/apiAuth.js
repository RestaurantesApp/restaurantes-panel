import axios from 'axios';
import buildRequest from '../buildRequest';
import { typesEndpoint } from '../../../common/types';

export const apiLogin = async params => {
  const url = `${process.env.REACT_APP_api}${typesEndpoint.login}`;
  const method = 'post';
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
    const response = await axios[method](url, request, buildRequest());
    const { status, data } = response;
    dataResponse.success = true;
    dataResponse.data = data.data;
    dataResponse.statusCode = status;
  } catch (error) {
    if (error?.response.status === 400) {
      dataResponse.message = 'Correo o contraseña no válidos';
    } else {
      dataResponse.message = 'Ocurrio un error, intentelo más tarde.';
    }
    dataResponse.data = error;
    dataResponse.statusCode = error.response?.status;
  }
  return dataResponse;
};
