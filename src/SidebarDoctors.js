import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
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
    { text: "My Appointments", path: "/MyAppointments", icon: <EventNoteIcon /> },
    { text: "My Patients", path: "/MyPatients", icon: <PeopleIcon /> },
    { text: "Notifications", path: "/Notifications", icon: <NotificationsIcon /> },
    { text: "My Profile", path: "/MyProfile", icon: <AccountCircleIcon /> },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 220,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 220,
          boxSizing: "border-box",
          backgroundColor: "rgb(155, 8, 155)",
          color: "#fff",
        },
      }}
    >
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
          Doctor Panel
        </Typography>
      </Box>
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            component={Link}
            to={item.path}
            sx={{
              "&:hover": { backgroundColor: "rgb(99, 3, 99)" },
              textDecoration: "none",
              color: "#fff", // This sets the text color of the entire ListItem
            }}
          >
            <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} sx={{ color: "#fff" }} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SidebarDoctors;



