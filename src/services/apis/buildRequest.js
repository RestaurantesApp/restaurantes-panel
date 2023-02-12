export const buildBasic = (language, request) => {
  const apiUsername = process.env.REACT_APP_BASIC_AUTH_EMAIL
  const apiPassword = process.env.REACT_APP_BASIC_AUTH_PASSWORD
  const auth = 'Basic ' + window.btoa(apiUsername + ':' + apiPassword)
  let headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: auth,
      'Accept-Language': language,
    },
    params: request,
  }
  return headers
}

export const buildToken = (language, token, request) => {
  let headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'Accept-Language': language,
    },
    params: request,
  }
  return headers
}
