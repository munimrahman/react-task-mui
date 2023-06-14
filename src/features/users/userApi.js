import apiSlice from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/Employee/EmployeeData",
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
