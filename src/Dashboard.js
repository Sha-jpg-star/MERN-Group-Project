import React from "react";
import { Box, Typography, Grid, Card, CardContent, Avatar, List, ListItem, ListItemText } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PeopleIcon from "@mui/icons-material/People";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Sidebar from "./Sidebar"; 

const patientData = [
  { name: "Jan", recovered: 150, death: 20 },
  { name: "Feb", recovered: 200, death: 30 },
  { name: "Mar", recovered: 180, death: 25 },
  { name: "Apr", recovered: 220, death: 35 },
  { name: "May", recovered: 250, death: 40 },
  { name: "Jun", recovered: 270, death: 45 },
  { name: "Jul", recovered: 135, death: 15 },
  { name: "Aug", recovered: 290, death: 20 },
  { name: "Sep", recovered: 290, death: 23 },
  { name: "Oct", recovered: 290, death: 24 },
  { name: "Nov", recovered: 80, death: 5 },
  { name: "Dec", recovered: 600, death: 10 },
];

const appointments = [
  { name: "Daniel Smith", time: "10:00 AM", status: "Accepted" },
  { name: "Alice Harrow", time: "11:30 AM", status: "Pending" },
  { name: "Robert Diaz", time: "1:00 PM", status: "Rejected" },
];

const recentPatients = [
  { name: "Glenn Stanley", gender: "Male", weight: "75kg", status: "Outpatient" },
  { name: "Evelyn Thomas", gender: "Female", weight: "68kg", status: "Inpatient" },
];

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1, p: 3, backgroundColor: "rgb(218, 251, 253)" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
          Hospital Dashboard
        </Typography>

        <Grid container spacing={3}>
          {[
            { title: "New Patients", value: 45, icon: <CalendarTodayIcon />, color: "#007bff" },
            { title: "Doctors", value: 23, icon: <PeopleIcon />, color: "#28a745" },
            { title: "Operations", value: 14, icon: <LocalHospitalIcon />, color: "#dc3545" },
            { title: "Income", value: "$5728", icon: <MonetizationOnIcon />, color: "#ffc107" },
          ].map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ display: "flex", alignItems: "center", padding: "15px", backgroundColor: stat.color, color: "#fff" }}>
                <Avatar sx={{ backgroundColor: "#fff", color: stat.color, marginRight: "10px" }}>{stat.icon}</Avatar>
                <CardContent>
                  <Typography variant="h6">{stat.title}</Typography>
                  <Typography variant="h5">{stat.value}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ marginTop: "20px", padding: "20px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
          <Typography variant="h6">Patient Status</Typography>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={patientData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="recovered" stroke="#007bff" />
              <Line type="monotone" dataKey="death" stroke="#dc3545" />
            </LineChart>
          </ResponsiveContainer>
        </Box>

        <Grid container spacing={3} sx={{ marginTop: "20px" }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ padding: "15px" }}>
              <Typography variant="h6">Appointment Requests</Typography>
              <List>
                {appointments.map((appointment, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={appointment.name} secondary={`${appointment.time} - ${appointment.status}`} />
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ padding: "15px" }}>
              <Typography variant="h6">Recent Patients</Typography>
              <List>
                {recentPatients.map((patient, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={patient.name} secondary={`${patient.gender} - ${patient.weight} - ${patient.status}`} />
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

export default Dashboard;
