import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Paper,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import EventIcon from "@mui/icons-material/Event";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

const Patientlogout = () => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    localStorage.removeItem("adminToken");
    navigate("/loginpatients");
  };

  const handleCancel = () => {
    navigate("/DashboardPatients");
  };

  const menuItems = [
    {
      text: "Dashboard",
      path: "/DashboardPatients",
      icon: <DashboardIcon sx={{ color: "white" }} />,
    },
    {
      text: "Book Appointments",
      path: "/BookAppointments",
      icon: <EventIcon sx={{ color: "white" }} />,
    },
    {
      text: "Notifications",
      path: "/PatientNotifications",
      icon: <NotificationsIcon sx={{ color: "white" }} />,
    },
    {
      text: "My Profile",
      path: "/PatientMyProfile",
      icon: <PersonIcon sx={{ color: "white" }} />,
    },
    {
      text: "Logout",
      path: "/Patientlogout",
      icon: <LogoutIcon sx={{ color: "white" }} />,
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 250,
          "& .MuiDrawer-paper": {
            width: 250,
            backgroundColor: "blue",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingTop: "10px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
          }}
        >
          <img
            src="/landingPageIcon2.png"
            alt="Logo"
            style={{
              height: "50px",
              marginTop: "10px",
              borderRadius: "50%",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              color: "yellow",
              textAlign: "center",
              fontWeight: "bold",
              mb: 2,
            }}
          >
            MediCare
          </Typography>
        </Box>
        <List sx={{ width: "100%" }}>
          {menuItems.map(({ text, path, icon }) => (
            <ListItem button key={text} onClick={() => navigate(path)}>
              <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
              <ListItemText primary={text} sx={{ color: "white" }} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,

          backgroundColor: "rgb(218, 251, 253)",
          height: "96vh",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: "20px", marginTop: "20px" }}
        >
          LogOut
        </Typography>
        <Paper
          elevation={4}
          sx={{
            p: 5,
            textAlign: "center",
            maxWidth: 500,
            width: "100%",
            backgroundColor: "#fff",
            marginLeft: "100px",
            marginTop: "100px",
          }}
        >
          <Typography variant="h4" gutterBottom>
            Logging Out?
          </Typography>
          <Typography variant="body1" color="textSecondary" mb={4}>
            Are you sure you want to log out from MediCare?
          </Typography>
          <Box display="flex" justifyContent="center" gap={2}>
            <Button variant="contained" color="error" onClick={handleConfirm}>
              Yes, Logout
            </Button>
            <Button variant="outlined" onClick={handleCancel}>
              Cancel
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Patientlogout;
