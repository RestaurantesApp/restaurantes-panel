import { typesGlobalState } from '../../common/types';

const initialState = {
  isLogin: false,
};

const authReducer = (state = initialState, action = null) => {
  const { type, payload } = action;
  const { authLogin, authLogout } = typesGlobalState;
  switch (type) {
    case authLogin:
      const newState = {
        ...state,
        isLogin: true,
        personalInfo: payload?.personalInfo,
        token: payload?.token,
      };
      return newState;
    case authLogout:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
