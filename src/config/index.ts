import { Scalars } from '@types';

export const API_URL = process.env.REACT_APP_API_URL;

export const END_POINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    REFRESH_TOKEN: '/auth/refresh'
  },
  USER: {
    GET_CURRENT_USER: '/users/me'
  },
  PROFILE: {
    CREATE_USER_PROFILE: '/profiles',
    GET_ALL_USER_PROFILES: '/profiles',
    GET_USER_PROFILE: (entityId: Scalars['ID']) => `/profiles/${entityId}`,
    UPDATE_USER_PROFILE: (entityId: Scalars['ID'] | any) =>
      `/profiles/${entityId}`,
    DELETE_USER_PROFILE: (entityId: Scalars['ID']) => `/profiles/${entityId}`
  }
};
