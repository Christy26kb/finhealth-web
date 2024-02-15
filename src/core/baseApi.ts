import {
  createApi,
  FetchArgs,
  fetchBaseQuery
} from '@reduxjs/toolkit/dist/query/react';
import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes';

import { API_URL } from '@config';
import { getFromLocalStorage } from '@utils/generic-utils';

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
    const accessToken = getFromLocalStorage('access_token');
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
  const result = await fetchBaseQ(args, api, extraOptions);
  return result;
};

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: () => ({}),
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true
});
