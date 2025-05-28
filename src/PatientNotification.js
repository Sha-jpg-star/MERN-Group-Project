import React from "react";
import {
  Box,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Divider,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Event as EventIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const PatientNotification = () => {
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

  // Sample notifications
  const notifications = [
    {
      id: 1,
      message:
        "Your appointment with Dr. Silva is confirmed for May 30 at 3:00 PM.",
      time: "2 hours ago",
    },
    {
      id: 2,
      message: "Lab report for your blood test is now available.",
      time: "1 day ago",
    },
    {
      id: 3,
      message: "Your profile was updated successfully.",
      time: "3 days ago",
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
        sx={{
          flexGrow: 1,
          padding: 4,
          height: "90vh",
          backgroundColor: "rgb(218, 251, 253)",
        }}
      >
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Notifications
        </Typography>

        {notifications.map((note) => (
          <Paper
            key={note.id}
            elevation={3}
            sx={{
              padding: 2,
              marginBottom: 2,
              backgroundColor: "#f5f5f5",
            }}
          >
            <Typography variant="body1">{note.message}</Typography>
            <Typography variant="caption" color="text.secondary">
              {note.time}
            </Typography>
          </Paper>
        ))}

        {notifications.length === 0 && (
          <Typography variant="body1" color="text.secondary">
            No notifications at the moment.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default PatientNotification;
