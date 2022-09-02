import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userAPI = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/users',
    prepareHeaders: (headers, { getState }) => {
      const { token = '' } = getState().user;
      headers.set('Authorization', token);

      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    signup: builder.mutation({
      query: values => ({
        url: '/signup',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['User'],
    }),
    login: builder.mutation({
      query: values => ({
        url: '/login',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['User'],
    }),
    logout: builder.mutation({
      query: values => ({
        url: '/logout',
        method: 'POST',
        body: values,
      }),
    }),
    currentUser: builder.query({
      query: () => ({
        url: '/current',
      }),
    }),
  }),
});

export const {
  useCurrentUserQuery,
  useLoginMutation,
  useSignupMutation,
  useLogoutMutation,
} = userAPI;
