import { throttle } from '@entando/utils';
import {
  SHOW_LOADING,
  HIDE_LOADING,
  SET_LOADING_MSG,
  SET_LOAD_TYPE,
} from './types';

export const showLoading = () => ({
  type: SHOW_LOADING,
});

export const setLoadType = (code = '') => ({
  type: SET_LOAD_TYPE,
  payload: { code },
});

export const hideLoading = delay => (dispatch) => {
  dispatch(setLoadType());
  const fxn = delay ? (
    new Promise(resolve => throttle(() => resolve()))
  ) : Promise.resolve();
  fxn.then(() => dispatch({ type: HIDE_LOADING }));
};

export const setLoadingMessage = message => ({
  type: SET_LOADING_MSG,
  payload: { message },
});

export const showLoadingWithMessage = message => (dispatch) => {
  dispatch(setLoadingMessage(message));
  dispatch(showLoading());
};
