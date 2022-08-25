import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userAPI = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    addUser: builder.mutation({
      query: values => ({
        url: '/users/signup',
        method: 'POST',
        body: values,
      }),
    }),
  }),
});

export const { useAddUserMutation } = userAPI;
