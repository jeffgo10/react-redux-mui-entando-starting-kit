import { createSelector } from 'reselect';

export const getLoggedUser = state => state.loggedUser;

export const isItLogged = createSelector([getLoggedUser], profile => profile.Id !== null);
