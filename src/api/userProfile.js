import { makeRequest, METHODS } from '@entando/apimanager';
import { getMockWithUsername } from 'test/mocks/accesses';

export const getUserProfile = username => ( // eslint-disable-line 
  makeRequest({
    uri: `/api/userProfiles/${username}`,
    method: METHODS.GET,
    mockResponse: getMockWithUsername(username),
    useAuthentication: false,
  })
);
