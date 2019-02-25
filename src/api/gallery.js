import { makeRequest, METHODS } from '@entando/apimanager';
import { getGalleryData } from 'test/mocks/gallery';

export const getGallery = () => ( // eslint-disable-line 
  makeRequest({
    uri: '/api/images',
    method: METHODS.GET,
    mockResponse: getGalleryData(),
    useAuthentication: false,
  })
);
