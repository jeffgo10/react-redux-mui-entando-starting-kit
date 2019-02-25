import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { api, currentUser } from '@entando/apimanager';
import { routerReducer as router } from '@entando/router';

import loading from './loading/reducer';
import loggedUser from './logged-user/reducer';
import loginForm from './login-form/reducer';
import gallery from './gallery/reducer';

const reducerDef = {
  api,
  currentUser,
  form,
  loading,
  loggedUser,
  loginForm,
  gallery,
  router,
};

// app root reducer
const reducer = combineReducers(reducerDef);

export default reducer;
