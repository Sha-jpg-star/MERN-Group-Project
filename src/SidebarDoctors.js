import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PeopleIcon from "@mui/icons-material/People";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const SidebarDoctors = () => {
  const menuItems = [
    { text: "Dashboard", path: "/DashboardDoctors", icon: <DashboardIcon /> },

    {
      text: "Appointments",
      path: "/MyAppointments",
      icon: <EventNoteIcon />,
    },
    { text: "My Patients", path: "/MyPatients", icon: <PeopleIcon /> },
    {
      text: "Notifications",
      path: "/Notifications",
      icon: <NotificationsIcon />,
    },
    { text: "My Profile", path: "/MyProfile", icon: <AccountCircleIcon /> },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        "& .MuiDrawer-paper": {
          width: 250,
          backgroundColor: "rgb(3, 0, 172)",
          color: "#ffff",
          alignItems: "center",
        },
      }}
    >
      {/* Logo and Title */}
      <img
        src="/landingPageIcon2.png"
        alt="Logo"
        style={{
          height: "40px",
          padding: "10px",
          width: "40px",
          marginTop: "5px",
          borderRadius: "50%",
        }}
      />
      <Typography
        variant="h6"
        sx={{
          flexGrow: 1,
          color: "yellow",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        MediCare
      </Typography>

      <Box sx={{ padding: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "#fff" }}>
          Doctor Panel
        </Typography>
      </Box>
      <List sx={{ marginBottom: 30 }}>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            component={Link}
            to={item.path}
            sx={{
              "&:hover": { backgroundColor: "rgb(2, 0, 114)" },
              textDecoration: "none",
              color: "#fff", // This sets the text color of the entire ListItem
            }}
          >
            <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} sx={{ color: "#fff" }} />
          </ListItem>
        ))}
      </List>

      <Button
        variant="contained"
        component={Link}
        to="/"
        sx={{ mr: 4, ml: 4, backgroundColor: "blue" }}
      >
        Back to Home
      </Button>
    </Drawer>
  );
};

export default SidebarDoctors;
