import {
  SET_GALLERY_DATA,
  SET_GALLERY_META,
  RESET_GALLERY_DATA,
} from './types';

const initialState = {
  list: [],
  meta: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_GALLERY_DATA: {
      return { ...state, list: action.payload.images };
    }
    case SET_GALLERY_META: {
      return { ...state, meta: action.payload.meta };
    }
    case RESET_GALLERY_DATA: {
      return { ...initialState };
    }
    default: return state;
  }
};

export default reducer;
