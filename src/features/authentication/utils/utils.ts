import { API_URL, END_POINTS } from '@config';
import { TokenKeys } from '@constants/api';
import { AUTH } from '@constants/routes';
import { HTTPMethods, RefreshTokenResponse } from '@types';
import {
  getFromLocalStorage,
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

// Access Token Methods
export const getAccessToken = () => getFromLocalStorage(TokenKeys.ACCESS_TOKEN);
export const setAccessToken = (value: string) =>
  setToLocalStorage(TokenKeys.ACCESS_TOKEN, value);
export const removeAccessToken = () =>
  removeFromLocalStorage(TokenKeys.ACCESS_TOKEN);

// Refresh Token Methods
export const getRefreshToken = () =>
  getFromLocalStorage(TokenKeys.RFERESH_TOKEN);
export const setRefreshToken = (value: string) =>
  setToLocalStorage(TokenKeys.RFERESH_TOKEN, value);
export const removeRefreshToken = () =>
  removeFromLocalStorage(TokenKeys.RFERESH_TOKEN);

// Refresh Tokens Actions
export const onRefreshTokenFailed = () => {
  removeAccessToken();
  removeRefreshToken();
  window.location.href = AUTH.LOGIN;
};

export const onRefreshTokenSuccess = (refreshToken: RefreshTokenResponse) => {
  setAccessToken(refreshToken.accessToken);
  setRefreshToken(refreshToken.refreshToken);
};
