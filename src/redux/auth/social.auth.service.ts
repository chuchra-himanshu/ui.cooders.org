import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URI = `${import.meta.env.VITE_API_AUTH}/social`;

export const socialAuthService = createApi({
  reducerPath: "social_auth",
  baseQuery: fetchBaseQuery({ baseUrl: API_URI }),
  endpoints: (builder) => ({
    googleOAuth: builder.query({
      query: () => ({
        url: `/oauth/google`,
        method: "GET",
      }),
    }),
    githubOAuth: builder.query({
      query: () => ({
        url: `/oauth/github`,
        method: "GET",
      }),
    }),
    linkedInOAuth: builder.query({
      query: () => ({
        url: `/oauth/linkedin`,
        method: "GET",
      }),
    }),
  }),
});

// Export the hook
export const {
  useLazyGoogleOAuthQuery,
  useLazyGithubOAuthQuery,
  useLazyLinkedInOAuthQuery,
} = socialAuthService;
