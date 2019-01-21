import { getUserProfile } from 'api/userProfile';
import { getUsername } from '@entando/apimanager';

import {
  SET_LOGGED_USER,
  RESET_LOGGED_USER,
} from './types';

export const setLoggedUser = profile => ({
  type: SET_LOGGED_USER,
  payload: {
    profile,
  },
});

export const resetLoggedUser = () => ({
  type: RESET_LOGGED_USER,
});

export const fetchLoggedUser = () => (dispatch, getState) => new Promise((resolve) => {
  const username = getUsername(getState());
  getUserProfile(username).then((response) => {
    response.json().then((json) => {
      if (response.ok) {
        dispatch(setLoggedUser(json.payload));
        resolve();
      } else {
        console.log('error: ', json.errors.map(err => err.message).join(', ')); // eslint-disable-line
        // dispatch(addErrors(json.errors.map(err => err.message)));
        // dispatch(addToast(json.errors[0].message, TOAST_ERROR));
        resolve();
      }
    });
  });
});
