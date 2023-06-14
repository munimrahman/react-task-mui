import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BasicTable from "./Table";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import FormDialog from "./Modal";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Users" {...a11yProps(0)} />
            <Tab label="Employees" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
            <TextField
              placeholder="Search By Any Property"
              size="small"
              sx={{ backgroundColor: "white", width: "25%" }}
            />
            <Button variant="contained" onClick={handleClickOpen}>
              Add Employee
            </Button>
          </Box>
          <BasicTable />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <BasicTable />
        </TabPanel>
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
}
