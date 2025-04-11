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

import DashboardIcon from "@mui/icons-material/Dashboard";
import EventNoteIcon from "@mui/icons-material/EventNote";
import PeopleIcon from "@mui/icons-material/People";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const SidebarDoctors = () => {
  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon /> },
    { text: "My Appointments", icon: <EventNoteIcon /> },
    { text: "My Patients", icon: <PeopleIcon /> },
    { text: "Notifications", icon: <NotificationsIcon /> },
    { text: "My Profile", icon: <AccountCircleIcon /> },
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
          backgroundColor: "#0d47a1",
          color: "#fff",
        },
      }}
    >
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Doctor Panel
        </Typography>
      </Box>
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} sx={{ "&:hover": { backgroundColor: "#1565c0" } }}>
            <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SidebarDoctors;