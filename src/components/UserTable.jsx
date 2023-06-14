/* eslint-disable no-unused-vars */
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function createData(id, firstName, lastName, type, division, district) {
  return { id, firstName, lastName, type, division, district };
}

const rows = [
  createData(1, "Munim", "Rahman", "Employee", "Barishal", "Barishal"),
  createData(1, "Munim", "Rahman", "Employee", "Barishal", "Barishal"),
];

export default function UserTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">Employee Type</TableCell>
            <TableCell align="center">Division</TableCell>
            <TableCell align="center">District</TableCell>
            <TableCell align="center">Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {row.id}
              </TableCell>

              <TableCell align="center">{row.firstName}</TableCell>
              <TableCell align="center">{row.lastName}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.division}</TableCell>
              <TableCell align="center">{row.district}</TableCell>
              <TableCell align="center">
                <Link to={"/user/1"}>
                  <Button variant="outlined" size="small">
                    Details
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
