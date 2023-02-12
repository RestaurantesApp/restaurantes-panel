import { typesGlobalState } from '../common/types'

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
  switch (type) {
    case typesGlobalState.authLogin:
      return {
        ...state,
        isLogin: true,
        personalInfo: payload?.personalInfo,
        paths: payload?.paths,
        methods: payload?.methods,
        roles: payload?.roles,
        token: payload?.token,
      }
    case typesGlobalState.authLogout:
      return AUTH_INITIAL_STATE
    default:
      return state
  }
}
