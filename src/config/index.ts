export const API_URL = process.env.REACT_APP_API_URL;

export const END_POINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: 'auth/register'
  },
  USER: {
    GET_CURRENT_USER: '/users/me'
  }
};
