import { createSelector } from 'reselect';

const getForm = state => state.loginForm;

// eslint-disable-next-line
export const getLoginErrorMessage = createSelector(
  [getForm],
  form => form.loginErrorMessage,
);

export const getShowPassword = createSelector(
  [getForm],
  form => form.showPassword,
);
