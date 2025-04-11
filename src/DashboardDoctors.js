import React, { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
  Box,
} from "@mui/material";
import SidebarDoctors from "./SidebarDoctors";

const DashboardDoctors = () => {
  const [schedule] = useState([
    { day: "Monday", time: "9:00 AM - 12:00 PM" },
    { day: "Wednesday", time: "2:00 PM - 5:00 PM" },
    { day: "Friday", time: "10:00 AM - 1:00 PM" },
  ]);

  const [appointmentsToday] = useState([
    { patient: "Sarah Connor", time: "10:30 AM" },
    { patient: "Mark Lee", time: "11:00 AM" },
  ]);

  const [myPatients] = useState([
    { name: "Tharindu Silva", lastVisit: "2025-04-10", status: "In Treatment" },
    { name: "Ruwani Fernando", lastVisit: "2025-03-30", status: "Recovered" },
  ]);

  const [notifications] = useState([
    "New lab report available for patient Ruwan.",
    "Mark Lee appointment confirmed at 11:00 AM.",
  ]);

  return (
    <Box sx={{ display: "flex" }}>
      <SidebarDoctors />

      <Box sx={{ flexGrow: 1, p: 3, backgroundColor: "#f1f9ff", minHeight: "100vh" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
          Doctor Dashboard
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card sx={{ padding: "15px" }}>
              <Typography variant="h6">My Weekly Schedule</Typography>
              <List>
                {schedule.map((slot, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={slot.day} secondary={slot.time} />
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ padding: "15px" }}>
              <Typography variant="h6">Today’s Appointments</Typography>
              <List>
                {appointmentsToday.map((appt, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={appt.patient} secondary={appt.time} />
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ padding: "15px" }}>
              <Typography variant="h6">My Patients</Typography>
              <List>
                {myPatients.map((patient, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={patient.name}
                      secondary={`Last Visit: ${patient.lastVisit} - ${patient.status}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ padding: "15px" }}>
              <Typography variant="h6">Notifications</Typography>
              <List>
                {notifications.map((note, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={note} />
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DashboardDoctors;
