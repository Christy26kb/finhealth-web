import { isRejectedWithValue } from '@reduxjs/toolkit';
import useNotify from '@hooks/notification';
import { AUTH } from '@constants/routes';

export const rtkQueryErrorLogger =
  (store: any) => (next: any) => (action: any) => {
    const ignore403EndpointList = ['login', 'register'];
    const status = action.payload?.status;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { dispatch } = store;
    const { createErrorNotifier } = useNotify();
    const result = next(action);

    if (isRejectedWithValue(action)) {
      switch (status) {
        case 'FETCH_ERROR':
          createErrorNotifier({
            message: 'Failed to fetch'
          });
          break;
        case 403:
          if (ignore403EndpointList.includes(action.meta.arg.endpointName)) {
            break;
          } else if (action.payload?.data?.errorCode === 'ACCESS_DENIED') {
            break;
          } else {
            window.location.href = AUTH.LOGIN;
          }
          createErrorNotifier({
            message: 'Unauthenticated'
          });
          break;
        case 401:
          if (ignore403EndpointList.includes(action.meta.arg.endpointName))
            break;
          window.location.href = AUTH.LOGIN;
          createErrorNotifier({
            message: 'Unauthenticated'
          });
          break;
        default:
          break;
      }
    }
    return result;
  };

export default rtkQueryErrorLogger;
