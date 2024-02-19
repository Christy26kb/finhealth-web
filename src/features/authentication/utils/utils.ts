import { API_URL, END_POINTS } from '@config';
import { AUTH } from '@constants/routes';
import { HTTPMethods, RefreshTokenResponse } from '@types';
import {
  removeFromLocalStorage,
  setToLocalStorage
} from '@utils/generic-utils';

const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: HTTPMethods.POST,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
};

export const getNewTokens = async (refreshToken: string) =>
  postData(`${API_URL}${END_POINTS.AUTH.REFRESH_TOKEN}`, {
    refreshToken
  });

export const onRefreshTokenFailed = () => {
  removeFromLocalStorage('access_token');
  removeFromLocalStorage('refresh_token');
  window.location.href = AUTH.LOGIN;
};

export const onRefreshTokenSuccess = (refreshToken: RefreshTokenResponse) => {
  setToLocalStorage('access_token', refreshToken.accessToken);
  setToLocalStorage('refresh_token', refreshToken.refreshToken);
};
