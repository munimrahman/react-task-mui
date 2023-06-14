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
import React from "react";

const UserListHeader = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [age, setAge] = React.useState("");

  const handleChangeS = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <TextField
          placeholder="Search By Any Property"
          size="small"
          sx={{ backgroundColor: "white", width: "30%" }}
        />
        <Button variant="contained" onClick={handleClickOpen}>
          Add User
        </Button>
      </Box>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle sx={{ textAlign: "center" }}>Add User</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText> */}
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
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Add User</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default UserListHeader;
