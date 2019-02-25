import { createSelector } from 'reselect';

export const getLoadingState = state => state.loading;

export const isItShowingLoad = createSelector([getLoadingState], ld => ld.show);

export const getLoadingMessage = createSelector([getLoadingState], ld => ld.message);

export const getLoadType = createSelector([getLoadingState], ld => ld.loadtype);

export const isLoadTypeDefault = createSelector([getLoadType], ldt => ldt === '');

export const loadingSomethingWith = loadtype => (
  createSelector(
    [isItShowingLoad, getLoadType],
    (ld, ldt) => ld && ldt === loadtype,
  )
);
