import React, { useState, useEffect } from "react";
import {
  Card,
  Typography,
  TextField,
  List,
  ListItem,
  ListItemText,
  Chip,
  Grid,
  Button,
  Box,
} from "@mui/material";
import SidebarDoctors from "./SidebarDoctors";
import axios from "axios";

const MyAppointments = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [appointments, setAppointments] = useState([]);

  // Replace with logged-in doctor's name if you have auth
  const doctorName = "Dr.Silva";

useEffect(() => {
  axios
    .get(`http://localhost:5000/api/appointments/doctor/${doctorName}`)
    .then((res) => setAppointments(res.data))
    .catch((err) => console.error("Failed to fetch appointments", err));
}, [doctorName]);

    

 

  const statusColors = {
    Pending: "warning",
    Confirmed: "success",
    Cancelled: "error",
  };

  const filteredAppointments = appointments
    .filter((appt) => (filter === "All" ? true : appt.status === filter))
    .filter((appt) =>
      appt.patientName.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <Box sx={{ display: "flex" }}>
      <SidebarDoctors />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "rgb(218, 251, 253)" }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "rgb(25, 0, 102)", mb: 3 }}
        >
          My Appointments
        </Typography>

        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Search by Patient Name"
              variant="outlined"
              fullWidth
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Box display="flex" justifyContent="flex-end" gap={1}>
              {["All", "Pending", "Confirmed", "Cancelled"].map((status) => (
                <Button
                  key={status}
                  variant={filter === status ? "contained" : "outlined"}
                  color={statusColors[status] || "primary"}
                  onClick={() => setFilter(status)}
                >
                  {status}
                </Button>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Card sx={{ p: 2, boxShadow: 3 }}>
          <List>
            {filteredAppointments.length > 0 ? (
              filteredAppointments.map((appt) => (
                <ListItem key={appt._id} sx={{ borderBottom: "1px solid #eee" }}>
                  <ListItemText
                    primary={appt.patientName}
                    secondary={`Date: ${appt.date} | Time: ${appt.time}`}
                  />
                  <Chip label={appt.status} color={statusColors[appt.status]} />
                </ListItem>
              ))
            ) : (
              <Typography>No appointments found.</Typography>
            )}
          </List>
        </Card>
      </Box>
    </Box>
  );
};

export default MyAppointments;
