import { createSelector } from 'reselect';

export const getGalleryState = state => state.gallery;

export const getGalleryImages = createSelector([getGalleryState], gallery => gallery.list);

export const getGalleryMeta = createSelector([getGalleryState], gallery => gallery.meta);
