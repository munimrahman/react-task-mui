/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { Link, useParams } from "react-router-dom";
import UserFormModal from "../components/UserFormModal";
import { useGetSingleUserQuery } from "../features/users/userApi";

const UserDetails = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const { data, isLoading, isError } = useGetSingleUserQuery(id);
  const { readEmployeeData = [] } = data || {};

  const {
    empID,
    firstName,
    lastName,
    employeeType,
    disvision,
    district,
    divisionId,
    districeID,
  } = readEmployeeData[0] || {};

  let user;

  if (!isLoading && !isError) {
    user = {
      empID,
      firstName,
      lastName,
      employeeType,
      divisionId,
      districeID,
    };
  }

  const handleModalOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Container
        maxWidth="lg"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
            <Link to={"/"}>
              <Button variant="contained" color="secondary">
                Back
              </Button>
            </Link>
            <Typography variant="h5" sx={{}}>
              User Details
            </Typography>
            <Button variant="contained" onClick={handleModalOpen}>
              Edit User
            </Button>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>{firstName + " " + lastName}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Employee Type
                  </TableCell>
                  <TableCell>{employeeType}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Employee Id
                  </TableCell>
                  <TableCell>{empID}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Division
                  </TableCell>
                  <TableCell>{disvision}</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    District
                  </TableCell>
                  <TableCell>{district}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
      {!isLoading && !isError && (
        <UserFormModal
          open={open}
          handleModalOpen={handleModalOpen}
          modalTitle={"Edit User"}
          user={user}
        />
      )}
    </>
  );
};

export default UserDetails;
