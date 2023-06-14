/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://59.152.62.177:8085/api/",
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});

export default apiSlice;
