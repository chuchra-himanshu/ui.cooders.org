import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URI = "http://localhost:3001/api/v1";

export const studioAdminService = createApi({
  reducerPath: "admin",
  baseQuery: fetchBaseQuery({ baseUrl: API_URI }),
  endpoints: (builder) => ({
    createLibrary: builder.mutation({
      query: ({ apiData }) => ({
        url: "/libraries",
        method: "POST",
        body: apiData,
      }),
    }),
    getLibraries: builder.query({
      query: () => ({
        url: `/libraries`,
        method: "GET",
      }),
    }),
    updateLibrary: builder.mutation({
      query: ({ apiData, params }) => ({
        url: `/libraries/${params}`,
        method: "PATCH",
        body: apiData,
      }),
    }),
    deleteLibrary: builder.mutation({
      query: ({ params }) => ({
        url: `/libraries/${params}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export the hook
export const {
  useCreateLibraryMutation,
  useGetLibrariesQuery,
  useUpdateLibraryMutation,
  useDeleteLibraryMutation,
} = studioAdminService;
