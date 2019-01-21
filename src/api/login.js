import { makeRequest, METHODS } from '@entando/apimanager';
import { BODY_OK, getMockWithUsername, hasMockUserPass } from 'test/mocks/accesses';

export const getErrors = (username, password) => (
  (hasMockUserPass(username, password)) ?
    [] :
    [{ code: 1, message: 'invalid credentials' }]
);

const login = (username, password) => makeRequest({
  uri: '/oauth',
  method: METHODS.POST,
  mockResponse: { ...BODY_OK, ...getMockWithUsername(username) },
  contentType: 'application/x-www-form-urlencoded',
  body: {
    username,
    password,
    grant_type: 'password',
    client_id: true,
    client_secret: true,
  },
  errors: () => getErrors(username, password),
});

export default login;
