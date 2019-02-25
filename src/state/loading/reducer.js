import {
  SHOW_LOADING,
  HIDE_LOADING,
  SET_LOADING_MSG,
  SET_LOAD_TYPE,
} from './types';

const initialState = {
  show: false,
  message: '',
  loadtype: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_LOADING: {
      return { ...state, show: true };
    }
    case HIDE_LOADING: {
      return { ...state, show: false };
    }
    case SET_LOAD_TYPE: {
      return { ...state, loadtype: action.payload.code };
    }
    case SET_LOADING_MSG: {
      return { ...state, ...action.payload };
    }
    default: return state;
  }
};

export default reducer;
