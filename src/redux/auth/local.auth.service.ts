import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URI = `${import.meta.env.VITE_API_AUTH}/local`;

export const localAuthService = createApi({
  reducerPath: "local_auth",
  baseQuery: fetchBaseQuery({ baseUrl: API_URI }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: ({ apiData }) => ({
        url: "/signup",
        method: "POST",
        body: apiData,
      }),
    }),
    signin: builder.mutation({
      query: ({ apiData }) => ({
        url: "/signin",
        method: "POST",
        body: apiData,
      }),
    }),
    signout: builder.query({
      query: () => ({
        url: `/signout`,
        method: "GET",
      }),
    }),
    forgetPassword: builder.mutation({
      query: ({ apiData }) => ({
        url: "/forgets/password",
        method: "POST",
        body: apiData,
      }),
    }),
    changePassword: builder.mutation({
      query: ({ apiData }) => ({
        url: "/updates/password",
        method: "POST",
        body: apiData,
      }),
    }),
    changeUsername: builder.mutation({
      query: ({ apiData }) => ({
        url: "/updates/username",
        method: "POST",
        body: apiData,
      }),
    }),
  }),
});

// Export the hook
export const {
  useSignupMutation,
  useSigninMutation,
  useLazySignoutQuery,
  useForgetPasswordMutation,
  useChangePasswordMutation,
  useChangeUsernameMutation,
} = localAuthService;
