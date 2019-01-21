import { loginUser } from '@entando/apimanager';

import login from 'api/login';
import { SET_LOGIN_ERROR_MESSAGE, SET_SHOW_PASSWORD } from 'state/login-form/types';

export const setLoginErrorMessage = message => ({
  type: SET_LOGIN_ERROR_MESSAGE,
  payload: {
    message,
  },
});

export const setShowPassword = showPassword => ({
  type: SET_SHOW_PASSWORD,
  payload: {
    showPassword,
  },
});

// thunks

const ERROR_LOGIN_MESSAGE = 'error: username or password is invalid';

export const doLogin = (username, password) => dispatch => (
  new Promise((resolve) => {
    if (username && password) {
      dispatch(setLoginErrorMessage(''));
      login(username, password).then((response) => {
        if (response.ok) {
          response.json().then((json) => {
            dispatch(loginUser(
              username,
              json.access_token || json.payload.access_token,
            ));
            window.location.href = window.location.href.slice();
            resolve(json);
          });
        } else {
          dispatch(setLoginErrorMessage(ERROR_LOGIN_MESSAGE));
          resolve();
        }
      }).catch(() => {});
    } else {
      dispatch(setLoginErrorMessage(ERROR_LOGIN_MESSAGE));
      resolve();
    }
  })
);
