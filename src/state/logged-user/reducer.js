import {
  SET_LOGGED_USER,
  RESET_LOGGED_USER,
} from './types';
import DefaultUserImg from './user-default.png';

const initialState = {
  Id: null,
  firstname: '',
  lastname: '',
  photo: DefaultUserImg,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_LOGGED_USER: {
      return { ...state, ...action.payload.profile };
    }
    case RESET_LOGGED_USER: {
      return { ...initialState };
    }
    default: return state;
  }
};

export default reducer;
