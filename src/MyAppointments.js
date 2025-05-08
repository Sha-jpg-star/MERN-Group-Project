import React, { useState } from "react";
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

const MyAppointments = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const appointments = [
    {
      id: 1,
      patient: "Nimal Perera",
      time: "2025-04-11 10:30",
      status: "Pending",
    },
    {
      id: 2,
      patient: "Kasuni Silva",
      time: "2025-04-11 11:00",
      status: "Confirmed",
    },
    {
      id: 3,
      patient: "Sunil Fernando",
      time: "2025-04-12 09:00",
      status: "Cancelled",
    },
    {
      id: 4,
      patient: "Ruwan Jayasena",
      time: "2025-04-13 12:00",
      status: "Confirmed",
    },
  ];

  const statusColors = {
    Pending: "warning",
    Confirmed: "success",
    Cancelled: "error",
  };

  const filteredAppointments = appointments
    .filter((appt) => (filter === "All" ? true : appt.status === filter))
    .filter((appt) =>
      appt.patient.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar Section */}
      <SidebarDoctors />

      {/* Main Content */}
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "rgb(218, 251, 253)" }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "rgb(25, 0, 102)",
            marginBottom: 3,
          }}
        >
          My Appointments
        </Typography>

        <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
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

        <Card sx={{ padding: "20px", boxShadow: 3 }}>
          <List>
            {filteredAppointments.length > 0 ? (
              filteredAppointments.map((appt) => (
                <ListItem
                  key={appt.id}
                  sx={{
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <ListItemText
                    primary={`${appt.patient}`}
                    secondary={`Time: ${appt.time}`}
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
