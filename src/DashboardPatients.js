import React from "react";
import {
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Grid,
  Card,
  CardContent,
  Divider,
  Avatar,
} from "@mui/material";

import EventIcon from "@mui/icons-material/Event";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useNavigate } from "react-router-dom";

const DashboardPatients = () => {
  const navigate = useNavigate();

  const menuItems = [
    { text: "Dashboard", path: "/DashboardPatients", icon: <DashboardIcon /> },
    {
      text: "Book Appointments",
      path: "/BookAppointments",
      icon: <EventIcon />,
    },
    {
      text: "Notifications",
      path: "/PatientNotifications",
      icon: <NotificationsIcon />,
    },
    { text: "My Profile", path: "/PatientMyProfile", icon: <PersonIcon /> },
    { text: "Logout", path: "/Patientlogout", icon: <LogoutIcon /> },
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
            paddingTop: "10px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="/landingPageIcon2.png"
            alt="Logo"
            style={{ height: "50px", marginTop: "10px", borderRadius: "50%" }}
          />
          <Typography
            variant="h6"
            sx={{ color: "yellow", fontWeight: "bold", mb: 2 }}
          >
            MediCare
          </Typography>
        </Box>

        <List>
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
        sx={{ flexGrow: 1, p: 3, bgcolor: "#f4f7fb", minHeight: "100vh" }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Welcome, Nimal Bandara
        </Typography>

        {/* Stat Cards */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ bgcolor: "#2196f3", color: "#fff" }}>
              <CardContent>
                <Typography variant="h6">Appointments</Typography>
                <Typography variant="h4">3</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ bgcolor: "#4caf50", color: "#fff" }}>
              <CardContent>
                <Typography variant="h6">Prescriptions</Typography>
                <Typography variant="h4">5</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ bgcolor: "#ff9800", color: "#fff" }}>
              <CardContent>
                <Typography variant="h6">Medical Records</Typography>
                <Typography variant="h4">8</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ bgcolor: "#f44336", color: "#fff" }}>
              <CardContent>
                <Typography variant="h6">Pending Bills</Typography>
                <Typography variant="h4">$200</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Profile Summary */}
        <Box mt={4}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Profile Summary
          </Typography>
          <Card>
            <CardContent sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <Avatar sx={{ width: 80, height: 80 }}>JD</Avatar>
              <Box>
                <Typography variant="h6">Nimal Bandara</Typography>
                <Typography variant="body1">Age: 30</Typography>
                <Typography variant="body1">Gender: Male</Typography>
                <Typography variant="body1">
                  Email: nimal@bandara.com
                </Typography>
                <Typography variant="body1">Phone: +94 77 123 4567</Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Upcoming Appointments */}
        <Box mt={4}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Upcoming Appointments
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="subtitle1">
                    Doctor: Dr. Dissanayaka
                  </Typography>
                  <Typography variant="body2">
                    Specialty: Cardiologist
                  </Typography>
                  <Typography variant="body2">Date: 2025-06-05</Typography>
                  <Typography variant="body2">Time: 10:30 AM</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="subtitle1">Doctor: Dr. Silva</Typography>
                  <Typography variant="body2">
                    Specialty: Dermatologist
                  </Typography>
                  <Typography variant="body2">Date: 2025-06-10</Typography>
                  <Typography variant="body2">Time: 1:00 PM</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardPatients;
