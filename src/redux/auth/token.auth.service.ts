import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URI = `${import.meta.env.VITE_API_AUTH}/tokens`;

export const tokenAuthService = createApi({
  reducerPath: "token_auth",
  baseQuery: fetchBaseQuery({ baseUrl: API_URI }),
  endpoints: (builder) => ({
    generateForgetPasswordToken: builder.query({
      query: () => ({
        url: `/creation/password`,
        method: "GET",
      }),
    }),
    verifyForgetPasswordToken: builder.mutation({
      query: ({ apiData }) => ({
        url: "/verifications/password",
        method: "POST",
        body: apiData,
      }),
    }),
    generateEmailVerificationToken: builder.query({
      query: () => ({
        url: `/creation/email`,
        method: "GET",
      }),
    }),
    verifyEmailVerificationToken: builder.mutation({
      query: ({ apiData }) => ({
        url: "/verifications/email",
        method: "POST",
        body: apiData,
      }),
    }),
    generateTFAToken: builder.query({
      query: () => ({
        url: `/creation/tfa`,
        method: "GET",
      }),
    }),
    verifyTFAToken: builder.mutation({
      query: ({ apiData }) => ({
        url: "/verifications/tfa",
        method: "POST",
        body: apiData,
      }),
    }),
  }),
});

// Export the hook
export const {
  useLazyGenerateForgetPasswordTokenQuery,
  useVerifyForgetPasswordTokenMutation,
  useLazyGenerateEmailVerificationTokenQuery,
  useVerifyEmailVerificationTokenMutation,
  useLazyGenerateTFATokenQuery,
  useVerifyTFATokenMutation,
} = tokenAuthService;
