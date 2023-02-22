import { typesGlobalState } from '../common/types'
import { stSetAuth, stRemoveAuth } from '../services/storage'

export const AUTH_INITIAL_STATE = {
  isLogin: false,
  personalInfo: null,
  paths: [],
  methods: [],
  roles: [],
  token: '',
}

export const authReducer = (state, action) => {
  const { type, payload } = action
  let statusChanged = {} //Inicializacion de variable que almacenara la información del usuario
  switch (type) {
    case typesGlobalState.authLogin:
      statusChanged = {
        //Se le asigna las propiedades que trae la data
        ...state,
        isLogin: true,
        personalInfo: payload?.personalInfo,
        paths: payload?.paths,
        methods: payload?.methods,
        roles: payload?.roles,
        token: payload?.token,
      }
      stSetAuth(statusChanged) //la función actualiza la variable del localstorage
      return statusChanged //Se retorna

    case typesGlobalState.authLogout: //En el caso que no este logueado,se deslogueara y se removera la variable del localstorage
      stRemoveAuth()
      return AUTH_INITIAL_STATE
    default:
      return state
  }
}
