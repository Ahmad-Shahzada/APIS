import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.freeapi.app/api/v1/public" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/randomusers",
    }),
    getUserById: builder.query({
      query: (userId) => `/randomusers/${userId}`,
    }),
    getRandomUser: builder.query({
      query: () => "/randomusers/user/random",
    }),
  }),
});

export const { useGetUsersQuery, useLazyGetUserByIdQuery, useGetRandomUserQuery } = usersApi;
