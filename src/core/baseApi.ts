import {
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta
} from '@reduxjs/toolkit/dist/query/react';
import {
  BaseQueryApi,
  QueryReturnValue
} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { Mutex } from 'async-mutex';

import { API_URL } from '@config';
import {
  getAccessToken,
  getNewTokens,
  getRefreshToken,
  onRefreshTokenFailed,
  onRefreshTokenSuccess
} from '@features/authentication/utils/utils';
import { RefreshTokenResponse } from '@types';

// Synchronization Utility
const mutex = new Mutex();

// Auth Api Definitions
const fetchAuthQ = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders(headers) {
    return headers;
  },
  credentials: 'include'
});

const authQuery: any = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {}
) => {
  const result = await fetchAuthQ(args, api, extraOptions);
  return result;
};

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: authQuery,
  endpoints: () => ({}),
  refetchOnMountOrArgChange: false,
  refetchOnReconnect: false
});

// Base Api Definitions -> (Requires Bearer Token)
const fetchBaseQ = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders(headers) {
    const accessToken = getAccessToken();
    if (accessToken) headers.set('Authorization', `Bearer ${accessToken}`);
    return headers;
  },
  credentials: 'include'
});

const baseQuery: any = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {}
) => {
  try {
    await mutex.waitForUnlock();
    let result: QueryReturnValue<
      unknown,
      FetchBaseQueryError,
      FetchBaseQueryMeta
    > = await fetchBaseQ(args, api, extraOptions);

    if (result?.error?.status === 401)
      if (!mutex.isLocked()) {
        const release = await mutex.acquire();

        try {
          // Generating new tokens with Refresh token
          const refreshToken = getRefreshToken();
          if (refreshToken) {
            const response: RefreshTokenResponse = await getNewTokens(
              refreshToken
            );
            if (response?.accessToken && response?.refreshToken) {
              onRefreshTokenSuccess(response);
              // Retrying the failed api with refreshed tokens.
              result = await fetchBaseQ(args, api, extraOptions);
            } else {
              onRefreshTokenFailed();
            }
          }
        } catch (error) {
          onRefreshTokenFailed();
        } finally {
          release();
        }
      } else {
        await mutex.waitForUnlock();
        result = await fetchBaseQ(args, api, extraOptions);
      }

    return result;
  } catch (error) {
    return error;
  }
};

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: () => ({}),
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true
});
