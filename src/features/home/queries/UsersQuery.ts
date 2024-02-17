import { baseApi } from '@core/baseApi';
import { END_POINTS } from '@config';
import { User, HTTPResponse, HTTPMethods } from '@types';

export const extendedBaseQuery = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query<HTTPResponse<User>, void>({
      query: () => ({
        url: END_POINTS.USER.GET_CURRENT_USER,
        method: HTTPMethods.GET
      })
    })
  })
});

export const { useGetCurrentUserQuery, useLazyGetCurrentUserQuery } =
  extendedBaseQuery;
