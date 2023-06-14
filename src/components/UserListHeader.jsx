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
import UserFormModal from "./UserFormModal";
import { useDispatch, useSelector } from "react-redux";
import { searchText } from "../features/filter/filterSlice";

const UserListHeader = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.filter.search);
  const handleModalOpen = () => {
    setOpen(!open);
  };

  // const [age, setAge] = React.useState("");

  // const handleChangeS = (event) => {
  //   setAge(event.target.value);
  // };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <TextField
          placeholder="Search By Any Property"
          size="small"
          sx={{ backgroundColor: "white", width: "30%" }}
          value={searchTerm}
          onChange={(e) => dispatch(searchText(e.target.value))}
        />
        <Button variant="contained" onClick={handleModalOpen}>
          Add User
        </Button>
      </Box>
      {/* <div>
        <Dialog open={open} onClose={handleModalOpen}>
          <DialogTitle sx={{ textAlign: "center" }}>Add User</DialogTitle>
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
      </div> */}
      <UserFormModal
        open={open}
        handleModalOpen={handleModalOpen}
        modalTitle={"Add User"}
      />
    </>
  );
};

export default UserListHeader;
