import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Paper,
  Avatar,
  Button,
  Divider,
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

const PatientMyProfile = () => {
  const navigate = useNavigate();

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

  // Example patient data (can be fetched from backend in future)
  const patientData = {
    name: "Nimal Bandara",
    email: "nimal@bandara.com",
    phone: "+94 77 123 4567",
    gender: "Male",
    dob: "1995-06-15",
    address: "123, Galle Road, Colombo, Sri Lanka",
  };

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
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={4}
          sx={{
            p: 5,
            maxWidth: 600,
            width: "100%",
            borderRadius: 2,
            backgroundColor: "#fff",
          }}
        >
          <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
            <Avatar
              sx={{
                width: 100,
                height: 100,
                mb: 2,
                backgroundColor: "#1976d2",
              }}
            >
              {patientData.name.charAt(0)}
            </Avatar>
            <Typography variant="h5">{patientData.name}</Typography>
            <Typography color="textSecondary">{patientData.email}</Typography>
          </Box>

          <Divider sx={{ mb: 3 }} />

          <Box>
            <Typography variant="body1" mb={1}>
              <strong>Phone:</strong> {patientData.phone}
            </Typography>
            <Typography variant="body1" mb={1}>
              <strong>Gender:</strong> {patientData.gender}
            </Typography>
            <Typography variant="body1" mb={1}>
              <strong>Date of Birth:</strong> {patientData.dob}
            </Typography>
            <Typography variant="body1" mb={3}>
              <strong>Address:</strong> {patientData.address}
            </Typography>
          </Box>

          <Box display="flex" justifyContent="center" gap={2}>
            <Button variant="contained" color="primary">
              Edit Profile
            </Button>
            <Button variant="outlined" color="error">
              Update Password
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default PatientMyProfile;
