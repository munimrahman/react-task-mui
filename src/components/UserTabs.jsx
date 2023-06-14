/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import UserTable from "./UserTable";
import UserListHeader from "./UserListHeader";
import { useGetUsersQuery } from "../features/users/userApi";
import { useSelector } from "react-redux";

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

function searchUsers(users, query) {
  const lowercaseQuery = query.toLowerCase();
  return users?.filter(
    (user) =>
      user?.empID?.toString() === query ||
      user?.firstName?.toLowerCase().includes(lowercaseQuery) ||
      user?.lastName?.toLowerCase().includes(lowercaseQuery) ||
      user?.disvision?.toLowerCase().includes(lowercaseQuery) ||
      user?.district?.toLowerCase().includes(lowercaseQuery)
  );
}

export default function UserTabs() {
  const [value, setValue] = useState();
  const { data, isLoading } = useGetUsersQuery();
  const { readEmployeeData: users } = data || {};
  const searchText = useSelector((state) => state.filter.search);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const admins = users?.filter((user) => user.employeeType === "Admin");
  const employees = users?.filter((user) => user.employeeType === "Employee");

  const searchAdmins = searchUsers(admins, searchText);
  const searchEmployees = searchUsers(employees, searchText);

  const allAdmins = searchText ? searchAdmins : admins;
  const allEmployees = searchText ? searchEmployees : employees;

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
          <UserListHeader />
          <UserTable users={allAdmins} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <UserListHeader />
          <UserTable users={allEmployees} />
        </TabPanel>
      </Box>
    </>
  );
}
