import { isRejectedWithValue } from '@reduxjs/toolkit';
import { createNotifier } from '@features/components/notifications/notificationSlice';

import { AUTH } from '@constants/routes';

export const rtkQueryErrorLogger =
  (store: any) => (next: any) => (action: any) => {
    const ignore403EndpointList = ['login', 'register'];
    const status = action.payload?.status;
    const { dispatch } = store;
    const result = next(action);
    const errorMessage = action.payload?.data?.error?.error;

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
          } else if (action.payload?.data?.errorCode === 'ACCESS_DENIED') {
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
          window.location.href = AUTH.LOGIN;
          dispatch(
            createNotifier({
              notifier: {
                type: 'error',
                message: 'Unauthenticated'
              }
            })
          );
          break;
        case 400:
          dispatch(
            createNotifier({
              notifier: {
                type: 'error',
                message: errorMessage || 'Failed to fetch'
              }
            })
          );
          break;
        default:
          break;
      }
    }
    return result;
  };

export default rtkQueryErrorLogger;
