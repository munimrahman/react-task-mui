/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is Required"),
  lastName: Yup.string().required("Last Name is Required"),
  employeeType: Yup.string().required("Employee Type is Required"),
});

const FormKi = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    employeeType: "",
    division: "",
    district: "",
  };

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
    <>
      <h1>Form Ki</h1>
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
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
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
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
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
    </>
  );
};

export default FormKi;

// import React from "react";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import { Button, TextField } from "@mui/material";

// const validationSchema = yup.object({
//   email: yup
//     .string("Enter your email")
//     .email("Enter a valid email")
//     .required("Email is required"),
//   password: yup
//     .string("Enter your password")
//     .min(8, "Password should be of minimum 8 characters length")
//     .required("Password is required"),
// });

// const FormKi = () => {
//   const formik = useFormik({
//     initialValues: {
//       email: "foobar@example.com",
//       password: "foobar",
//     },
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });

//   return (
//     <div>
//       <form onSubmit={formik.handleSubmit}>
//         <TextField
//           fullWidth
//           id="email"
//           name="email"
//           label="Email"
//           value={formik.values.email}
//           onChange={formik.handleChange}
//           error={formik.touched.email && Boolean(formik.errors.email)}
//           helperText={formik.touched.email && formik.errors.email}
//         />
//         <TextField
//           fullWidth
//           id="password"
//           name="password"
//           label="Password"
//           type="password"
//           value={formik.values.password}
//           onChange={formik.handleChange}
//           error={formik.touched.password && Boolean(formik.errors.password)}
//           helperText={formik.touched.password && formik.errors.password}
//         />
//         <Button color="primary" variant="contained" fullWidth type="submit">
//           Submit
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default FormKi;
