import {
  createApi,
  FetchArgs,
  fetchBaseQuery
} from '@reduxjs/toolkit/dist/query/react';
import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes';

import { API_URL } from '@config';

const fetchQ = fetchBaseQuery({
  baseUrl: `${API_URL}/`,
  credentials: 'include'
});

const baseQuery: any = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {}
) => {
  const result = await fetchQ(args, api, extraOptions);
  return result;
};

export default createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: () => ({}),
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true
});
