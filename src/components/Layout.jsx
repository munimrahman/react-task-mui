/* eslint-disable no-unused-vars */
import React from "react";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box sx={{ backgroundColor: "#F1F5F9", minHeight: "100vh" }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography
            variant="h4"
            color="inherit"
            component="div"
            style={{ textAlign: "center", width: "100%" }}
            sx={{ marginY: 1 }}
          >
            User Management
          </Typography>
        </Toolbar>
      </AppBar>

      <Container
        maxWidth="md"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Outlet />
      </Container>
    </Box>
  );
};

export default Layout;
