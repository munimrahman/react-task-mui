import { useState } from "react";
import "./App.css";
import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import VerticalTabs from "./components/Tab";
import LabTabs from "./components/NewTab";
import BasicTabs from "./components/NewTab";
import UserDetails from "./components/UserDetails";

function App() {
  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            Home Page
          </Typography>
        </Toolbar>
      </AppBar>

      <Container
        maxWidth="lg"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* <BasicTabs /> */}
        <UserDetails />
      </Container>
    </Box>
  );
}

export default App;
