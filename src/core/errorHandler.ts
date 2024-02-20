import { isRejectedWithValue } from '@reduxjs/toolkit';
import { createNotifier } from '@features/components/notifications/notificationSlice';

import { ACCESS_DENIED } from '@constants/routes';

export const rtkQueryErrorLogger =
  (store: any) => (next: any) => (action: any) => {
    const ignore403EndpointList = ['login', 'register'];
    const status = action.payload?.status;
    const { dispatch } = store;
    const result = next(action);

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
            window.location.href = ACCESS_DENIED;
          }
          dispatch(
            createNotifier({
              notifier: {
                type: 'error',
                message: 'Access Denied'
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
