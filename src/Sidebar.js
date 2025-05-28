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
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import MessageIcon from "@mui/icons-material/Message";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { text: "Dashboard", path: "/Dashboard", icon: <DashboardIcon /> },
    { text: "Doctors Management", path: "/Doctors", icon: <PeopleIcon /> },
    { text: "Patients Management", path: "/Patients", icon: <PersonIcon /> },
    { text: "View All Appointment", path: "/Appointment", icon: <EventAvailableIcon /> },
    { text: "Messages", path: "/AdminMessages", icon: <MessageIcon /> },
    { text: "Settings", path: "/AdminSetting", icon: <SettingsIcon /> },
    { text: "Logout", path: "/AdminLogout", icon: <ExitToAppIcon /> },
  ];

  return (
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
          alignItems: "center",
          paddingTop: 2,
        },
      }}
    >
      {/* Logo & Title */}
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <img
          src="/landingPageIcon2.png"
          alt="Logo"
          style={{
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            marginBottom: "5px",
          }}
        />
        <Typography
          variant="h6"
          sx={{ color: "yellow", fontWeight: "bold" }}
        >
          MediCare
        </Typography>
      </Box>

      {/* Menu Items */}
      <List sx={{ width: "100%" }}>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            component={Link}
            to={item.path}
            sx={{
              backgroundColor: "blue",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#003366",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;

