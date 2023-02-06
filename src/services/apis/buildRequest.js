const buildRequest = (request = undefined) => {
  let headers;
  headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    params: request,
  };
  return headers;
};

export default buildRequest;
