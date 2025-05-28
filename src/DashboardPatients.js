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
    { text: "Dashboard", path: "/DashboardPatients", icon: <DashboardIcon sx={{ color: "white" }} /> },
    { text: "Book Appointments", path: "/BookAppointments", icon: <EventIcon sx={{ color: "white" }} /> },
    { text: "Notifications", path: "/Notifications", icon: <NotificationsIcon sx={{ color: "white" }} /> },
    { text: "My Profile", path: "/MyProfile", icon: <PersonIcon sx={{ color: "white" }} /> },
    { text: "Logout", path: "/logout", icon: <LogoutIcon sx={{ color: "white" }} /> },
  ];

  return (
    <Box sx={{ display: "flex" }}>
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
            justifyContent: "flex-start",
            paddingTop: "10px",
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center" }}>
          <img
            src="/landingPageIcon2.png"
            alt="Logo"
            style={{
              height: "40px",
              width: "40px",
              marginTop: "5px",
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
              <ListItemIcon sx={{ color: "white", minWidth: "35px" }}>{icon}</ListItemIcon>
              <ListItemText primary={text} sx={{ color: "white" }} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Dashboard Content */}
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "#ccf4ff", p: 3 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Patient Dashboard
        </Typography>

        {/* Cards */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: "rgb(133, 224, 233)", color: "white" }}>
              <CardContent>
                <Typography variant="h6">Appointments</Typography>
                <Typography variant="h4">3</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: "#43a047", color: "white" }}>
              <CardContent>
                <Typography variant="h6">Prescriptions</Typography>
                <Typography variant="h4">5</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: "#e53935", color: "white" }}>
              <CardContent>
                <Typography variant="h6">Pending Bills</Typography>
                <Typography variant="h4">$250</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: "#fbc02d", color: "white" }}>
              <CardContent>
                <Typography variant="h6">Health Tips</Typography>
                <Typography variant="body1">Drink more water!</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DashboardPatients;
