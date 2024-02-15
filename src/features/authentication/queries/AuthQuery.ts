import { authApi } from '@core/baseApi';
import { END_POINTS } from '@config';
import { LoginRequest, SignupRequest, HTTPMethods, HTTPResponse } from '@types';

const extendedBaseQuery = authApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation<HTTPResponse<null>, SignupRequest>({
      query: (reqBody) => ({
        url: END_POINTS.AUTH.REGISTER,
        method: 'POST',
        body: reqBody
      })
    }),
    login: builder.mutation<HTTPResponse<null>, LoginRequest>({
      query: (credentials) => ({
        url: END_POINTS.AUTH.LOGIN,
        method: HTTPMethods.POST,
        body: credentials
      })
    })
  })
});

export const { useLoginMutation, useSignupMutation } = extendedBaseQuery;
