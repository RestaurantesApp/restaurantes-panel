import React, { useReducer, useEffect } from 'react'
// Hooks
import { AuthContext, authReducer, AUTH_INITIAL_STATE } from './'
// Const
import { typesGlobalState } from '../common/types'
import { stGetAuth } from '../services/storage'

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, AUTH_INITIAL_STATE)

  useEffect(() => {
    //Efecto que verifica que verifica si hay data del localstorage,por medio del stGetAuth
    const { data, success } = stGetAuth()
    if (success && data) {
      //Si hay data y success es true
      const { isLogin, ...payload } = data
      authDispatch({ type: typesGlobalState.authLogin, payload })
    } else {
      //Si no hay data se dipara el dispatch y se desloguea.
      authDispatch({ type: typesGlobalState.authLogout })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        authState,
        authDispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
