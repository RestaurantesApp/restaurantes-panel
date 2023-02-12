import React, { useReducer, useEffect } from 'react';

// Hooks
import { AuthContext, authReducer, AUTH_INITIAL_STATE } from './';

// Const
import { typesGlobalState } from '../common/types';

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

  useEffect(() => {
    authDispatch({ type: typesGlobalState.authLogout });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authState,
        authDispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
