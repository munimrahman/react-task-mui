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

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is Required"),
  lastName: Yup.string().required("Last Name is Required"),
  employeeType: Yup.string().required("Employee Type is Required"),
});

const UserFormModal = ({ open, handleModalOpen, modalTitle, user }) => {
  let initialState = {
    firstName: "",
    lastName: "",
    employeeType: "",
    division: "",
    district: "",
  };

  if (modalTitle === "Edit User") {
    initialState = {
      firstName: user?.firstName,
      lastName: user?.lastName,
      employeeType: user?.employeeType,
      division: user?.divisionId,
      district: user?.districeID,
    };
  }

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: validationSchema,
    onSubmit: (data) => {
      console.log(data);
    },
  });

  if (formik.values.employeeType === "Employee") {
    // setUserType("Employee");
    console.log(formik.values.employeeType);
  }

  return (
    <div>
      <Dialog open={open} onClose={handleModalOpen}>
        <DialogTitle sx={{ textAlign: "center" }}>{modalTitle}</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}
          >
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
                    <MenuItem value={101}>Dhaka</MenuItem>
                    <MenuItem value={20}>Barishal</MenuItem>
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
                    <MenuItem value={10222}>Pirojpur</MenuItem>
                    <MenuItem value={203333}>Bhola</MenuItem>
                  </Select>
                </FormControl>
              </div>
            )}

            <Button variant="contained" type="submit">
              Add
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalOpen}>Cancel</Button>
          <Button onClick={handleModalOpen}>Add User</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserFormModal;
