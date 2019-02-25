import { getGallery } from 'api/gallery';
import { showLoading, hideLoading } from 'state/loading/actions';

import {
  SET_GALLERY_DATA,
  SET_GALLERY_META,
} from './types';

export const setGalleryImages = images => ({
  type: SET_GALLERY_DATA,
  payload: { images },
});

export const setGalleryMeta = meta => ({
  type: SET_GALLERY_META,
  payload: { meta },
});

export const fetchGalleryImages = () => dispatch => new Promise((resolve) => {
  dispatch(showLoading());
  getGallery().then((response) => {
    response.json().then((json) => {
      dispatch(hideLoading());
      if (response.ok) {
        dispatch(setGalleryImages(json.payload));
        dispatch(setGalleryMeta(json.metaData));
        resolve(json.payload);
      } else {
        console.log('error: ', json.errors.map(err => err.message).join(', ')); // eslint-disable-line
        // dispatch(addErrors(json.errors.map(err => err.message)));
        // dispatch(addToast(json.errors[0].message, TOAST_ERROR));
        resolve();
      }
    });
  });
});
