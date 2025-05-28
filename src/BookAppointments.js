import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Event as EventIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BookAppointment = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    patientName: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
    symptoms: "",
  });

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/appointments", formData);
      alert("Appointment booked successfully!");
      setFormData({
        patientName: "",
        email: "",
        phone: "",
        doctor: "",
        date: "",
        time: "",
        symptoms: "",
      });
    } catch (error) {
      alert("Error booking appointment");
    }
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
      <Container
        maxWidth="sm"
        sx={{
          marginTop: 4,
          marginBottom: 4,
          backgroundColor: "rgb(218, 251, 253)",
          padding: "75px",
        }}
      >
        <Paper elevation={4} sx={{ padding: 4, borderRadius: 3 }}>
          <Typography
            variant="h5"
            gutterBottom
            fontWeight="bold"
            color="primary"
          >
            Book an Appointment
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Patient Name"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Preferred Doctor"
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Time"
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Symptoms / Notes"
                  name="symptoms"
                  value={formData.symptoms}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Book Now
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default BookAppointment;
