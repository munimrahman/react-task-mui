/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  useAddUserMutation,
  useEditUserMutation,
  useGetDistrictsQuery,
  useGetDivisionsQuery,
} from "../features/users/userApi";
import { useDispatch } from "react-redux";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is Required"),
  lastName: Yup.string().required("Last Name is Required"),
  employeeType: Yup.string().required("Employee Type is Required"),
});

const UserFormModal = ({ open, handleModalOpen, modalTitle, user }) => {
  const dispatch = useDispatch();
  const [addUser, { isLoading, isError }] = useAddUserMutation();
  const [editUser, { isSuccess }] = useEditUserMutation();

  let initialState;
  if (modalTitle === "Edit User") {
    initialState = {
      firstName: user?.firstName,
      lastName: user?.lastName,
      employeeType: user?.employeeType,
      divisionId: user?.divisionId,
      districeID: user?.districeID,
    };
  } else {
    initialState = {
      firstName: "",
      lastName: "",
      employeeType: "",
      divisionId: "",
      districeID: "",
    };
  }

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: validationSchema,
    onSubmit: (data) => {
      if (modalTitle === "Add User") {
        console.log(data);
        dispatch(data);
        console.log(isError);
      } else if (modalTitle === "Edit User") {
        dispatch(data);
        console.log(isSuccess);
      }
    },
  });

  const { data: divisionsData } = useGetDivisionsQuery();
  const { data: districtsData } = useGetDistrictsQuery(formik.values.division);
  const { readDivisionData: divisions } = divisionsData || {};
  const { readDistrictData: districts } = districtsData || {};

  if (formik.values.employeeType === "Employee") {
    // setUserType("Employee");
  }

  return (
    <div>
      <Dialog open={open} onClose={handleModalOpen}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <DialogTitle sx={{ textAlign: "center" }}>{modalTitle}</DialogTitle>
          <DialogContent>
            <div>
              <TextField
                required
                name="firstName"
                id="outlined-required"
                label="First Name"
                placeholder="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
              <TextField
                required
                name="lastName"
                id="outlined-required"
                label="Last Name"
                placeholder="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </div>
            <div>
              <FormControl sx={{ m: 1, minWidth: "25ch" }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Employee Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={formik.values.employeeType}
                  label="Employee Type"
                  name="employeeType"
                  onChange={formik.handleChange}
                  error={
                    formik.touched.employeeType &&
                    Boolean(formik.errors.employeeType)
                  }
                >
                  <MenuItem value={"Admin"}>Admin</MenuItem>
                  <MenuItem value={"Employee"}>Employee</MenuItem>
                </Select>
                <FormHelperText error>
                  {formik.touched.employeeType && formik.errors.employeeType}
                </FormHelperText>
              </FormControl>
            </div>

            {formik.values.employeeType === "Employee" && (
              <div>
                <FormControl sx={{ m: 1, minWidth: "25ch" }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Division
                  </InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={formik.values.division}
                    label="Division"
                    name="division"
                    onChange={formik.handleChange}
                  >
                    {divisions?.map((division) => (
                      <MenuItem key={division.divID} value={division.divID}>
                        {division.divisionName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: "25ch" }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    District
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={formik.values.district}
                    label="District"
                    name="district"
                    onChange={formik.handleChange}
                  >
                    {districts?.map((district) => (
                      <MenuItem
                        key={district.districtID}
                        value={district.districtID}
                      >
                        {district.districtName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleModalOpen}>Cancel</Button>
            <Button type="submit">{modalTitle}</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
};

export default UserFormModal;
