import apiSlice from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/Employee/EmployeeData",
    }),

    getSingleUser: builder.query({
      query: (empId) => `/Employee/IndividualEmployeeData/${empId}`,
    }),

    getDivisions: builder.query({
      query: () => "/Employee/Division",
    }),

    getDistricts: builder.query({
      query: (divisionId) => `/Employee/District/${divisionId}`,
    }),

    addUser: builder.mutation({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: data,
      }),
    }),

    editUser: builder.mutation({
      query: (data) => ({
        url: "/",
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetSingleUserQuery,
  useGetDivisionsQuery,
  useGetDistrictsQuery,
  useAddUserMutation,
  useEditUserMutation,
} = userApi;
