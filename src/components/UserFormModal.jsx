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
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const UserFormModal = ({ open, handleModalOpen, modalTitle }) => {
  const [age, setAge] = React.useState("");

  const handleChangeS = (event) => {
    setAge(event.target.value);
  };
  console.log(open);
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
          >
            <div>
              <TextField
                required
                id="outlined-required"
                label="First Name"
                placeholder="First Name"
              />
              <TextField
                required
                id="outlined-required"
                label="Last Name"
                placeholder="Last Name"
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
                  value={age}
                  label="Employee Type"
                  onChange={handleChangeS}
                >
                  <MenuItem value={10}>Admin</MenuItem>
                  <MenuItem value={20}>Employee</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl sx={{ m: 1, minWidth: "25ch" }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Employee Type
                </InputLabel>
                <Select
                  required
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={age}
                  label="Employee Type"
                  onChange={handleChangeS}
                >
                  <MenuItem value={10}>Admin</MenuItem>
                  <MenuItem value={20}>Employee</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: "25ch" }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Employee Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={age}
                  label="Employee Type"
                  onChange={handleChangeS}
                >
                  <MenuItem value={10}>Admin</MenuItem>
                  <MenuItem value={20}>Employee</MenuItem>
                </Select>
              </FormControl>
            </div>
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
