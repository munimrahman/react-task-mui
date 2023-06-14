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
import { Link } from "react-router-dom";
import UserFormModal from "../components/UserFormModal";

const UserDetails = () => {
  const [open, setOpen] = useState(false);

  let user = {
    empID: 5,
    firstName: "Arman",
    lastName: "Saleh",
    employeeType: "Employee",
    divisionId: 1,
    districeID: 3,
    disvision: "Barisal       ",
    district: "Bhola                         ",
  };
  const { empID, firstName, lastName, employeeType, disvision, district } =
    user;
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
      <UserFormModal
        open={open}
        handleModalOpen={handleModalOpen}
        modalTitle={"Edit User"}
        user={user}
      />
    </>
  );
};

export default UserDetails;
