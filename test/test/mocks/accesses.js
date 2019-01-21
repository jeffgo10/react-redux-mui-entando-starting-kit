export const BODY_OK = {
  access_token: '7c36c4a5a6038da6bc8edb939',
  refresh_token: 'baf9bf7319e7c468b8003f85d0',
  expires_in: 7200,
};

export const PROFILES = {
  'gojepoy': {
    Id: 1,
    firstname: 'Jepoy',
    lastname: 'Go',
    photo: 'https://avatars3.githubusercontent.com/u/442736?s=460&v=4',
  },
};

const UNames = Object.keys(PROFILES);

const ACCESSES = {
  'gojepoy': '123456',
};

export const hasMockUserPass = (user, pass) => {
  const unum = Object.keys(ACCESSES).indexOf(user);
  if (unum === -1) {
    return false;
  } else {
    return ACCESSES[user] === pass;
  }
};

export const USER_PROFILE = PROFILES['gojepoy'];

export const getMockWithUsername = uname => PROFILES[uname] || {};
