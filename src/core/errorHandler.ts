import { isRejectedWithValue } from '@reduxjs/toolkit';
import { createNotifier } from '@features/components/notifications/notificationSlice';

import { ACCESS_DENIED, AUTH } from '@constants/routes';
import {
  getNewTokens,
  onRefreshTokenFailed,
  onRefreshTokenSuccess
} from '@features/authentication/utils/utils';
import { getFromLocalStorage } from '@utils/generic-utils';
import { RefreshTokenResponse } from '@types';

export const rtkQueryErrorLogger =
  (store: any) => (next: any) => (action: any) => {
    const ignore403EndpointList = ['login', 'register'];
    const status = action.payload?.status;
    const { dispatch } = store;
    const result = next(action);

    const handleRefreshToken = async () => {
      const refreshToken = getFromLocalStorage('refresh_token');
      if (refreshToken) {
        const response: RefreshTokenResponse = await getNewTokens(refreshToken);
        if (response?.accessToken && response?.refreshToken) {
          onRefreshTokenSuccess(response);
          // TODO: Need to resume the failed api with updated tokens
        } else {
          onRefreshTokenFailed();
          dispatch(
            createNotifier({
              notifier: {
                type: 'error',
                message: 'Unauthenticated'
              }
            })
          );
        }
      }
    };

    if (isRejectedWithValue(action)) {
      switch (status) {
        case 'FETCH_ERROR':
          dispatch(
            createNotifier({
              notifier: {
                type: 'error',
                message: 'Failed to fetch'
              }
            })
          );
          break;
        case 403:
          if (ignore403EndpointList.includes(action.meta.arg.endpointName)) {
            break;
          } else if (action.payload?.data?.error?.error === 'Forbidden') {
            window.location.href = ACCESS_DENIED;
            break;
          } else {
            window.location.href = AUTH.LOGIN;
          }
          dispatch(
            createNotifier({
              notifier: {
                type: 'error',
                message: 'Unauthenticated'
              }
            })
          );
          break;
        case 401:
          if (ignore403EndpointList.includes(action.meta.arg.endpointName))
            break;
          // TODO: Only attempt to refresh token for the original API call
          // not for refreshing token itself
          handleRefreshToken();
          break;
        // Note: BadRequest handling needs to be specific than a general one.
        // case 400:
        default:
          break;
      }
    }
    return result;
  };

export default rtkQueryErrorLogger;
