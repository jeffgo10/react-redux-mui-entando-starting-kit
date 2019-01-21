import {
  SET_LOGIN_ERROR_MESSAGE,
  SET_SHOW_PASSWORD,
  RESET_LOGIN_FORM_STATE,
} from 'state/login-form/types';

const initialState = {
  loginErrorMessage: '',
  showPassword: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_LOGIN_ERROR_MESSAGE:
      return Object.assign({}, state, { loginErrorMessage: action.payload.message });
    case SET_SHOW_PASSWORD: {
      return { ...state, showPassword: action.payload.showPassword };
    }
    case RESET_LOGIN_FORM_STATE: {
      return { ...initialState };
    }
    default: return state;
  }
};

export default reducer;
