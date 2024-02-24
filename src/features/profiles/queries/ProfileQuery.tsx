import { baseApi } from '@core/baseApi';
import { END_POINTS } from '@config';
import {
  HTTPResponse,
  HTTPMethods,
  Scalars,
  Profile,
  ProfileRequest
} from '@types';

export const extendedBaseQuery = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUserProfile: builder.mutation<HTTPResponse<Profile>, ProfileRequest>({
      query: (reqBody) => ({
        url: END_POINTS.PROFILE.CREATE_USER_PROFILE,
        method: HTTPMethods.POST,
        body: reqBody
      })
    }),
    getAllUserProfiles: builder.query<HTTPResponse<Profile[]>, void>({
      query: () => ({
        url: END_POINTS.PROFILE.GET_ALL_USER_PROFILES,
        method: HTTPMethods.GET
      })
    }),
    getUserProfile: builder.query<HTTPResponse<Profile>, Scalars['ID']>({
      query: (id) => ({
        url: END_POINTS.PROFILE.GET_USER_PROFILE(id),
        method: HTTPMethods.GET
      })
    }),
    updateUserProfile: builder.mutation<HTTPResponse<Profile>, ProfileRequest>({
      query: (reqBody) => ({
        url: END_POINTS.PROFILE.UPDATE_USER_PROFILE(reqBody.id),
        method: HTTPMethods.PUT,
        body: reqBody
      })
    }),
    deleteUserProfile: builder.mutation<HTTPResponse<Profile>, Scalars['ID']>({
      query: (id) => ({
        url: END_POINTS.PROFILE.DELETE_USER_PROFILE(id),
        method: HTTPMethods.DELETE
      })
    })
  })
});

export const {
  useGetAllUserProfilesQuery,
  useLazyGetUserProfileQuery,
  useCreateUserProfileMutation,
  useUpdateUserProfileMutation,
  useDeleteUserProfileMutation
} = extendedBaseQuery;
