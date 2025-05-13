import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container, Typography, TextField, Button, Paper,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Box, IconButton, Grid
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import Sidebar from "./Sidebar";

function Appointment() {
  const [appointments, setAppointments] = useState([]);
  const [form, setForm] = useState({
    patientName: "",
    doctorName: "",
    date: dayjs(),
    time: dayjs(),
    reason: ""
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/appointments")
      .then(res => setAppointments(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDateChange = (newDate) => {
    setForm({ ...form, date: newDate });
  };

  const handleTimeChange = (newTime) => {
    setForm({ ...form, time: newTime });
  };

  const resetForm = () => {
    setForm({
      patientName: "",
      doctorName: "",
      date: dayjs(),
      time: dayjs(),
      reason: ""
    });
    setEditId(null);
  };

  const handleSubmit = () => {
    const payload = {
      ...form,
      date: form.date.format("YYYY-MM-DD"),
      time: form.time.format("HH:mm"),
    };

    const url = editId
      ? `http://localhost:5000/api/appointments/${editId}`
      : "http://localhost:5000/api/appointments";

    const method = editId ? axios.put : axios.post;

    method(url, payload)
      .then(res => {
        const updated = editId
          ? appointments.map(a => (a._id === editId ? res.data : a))
          : [...appointments, res.data];
        setAppointments(updated);
        resetForm();
      })
      .catch(err => console.error(err));
  };

  const handleEdit = (appointment) => {
    setEditId(appointment._id);
    setForm({
      ...appointment,
      date: dayjs(appointment.date),
      time: dayjs(`1970-01-01T${appointment.time}`),
    });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/appointments/${id}`)
      .then(() => setAppointments(appointments.filter(a => a._id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Container sx={{ flex: 1, mt: 4 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
          Appointment Scheduler
        </Typography>

        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            {editId ? "Edit Appointment" : "New Appointment"}
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Patient Name" name="patientName" value={form.patientName} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Doctor Name" name="doctorName" value={form.doctorName} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date"
                  value={form.date}
                  onChange={handleDateChange}
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  label="Time"
                  value={form.time}
                  onChange={handleTimeChange}
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Reason" name="reason" value={form.reason} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant="contained" color={editId ? "secondary" : "primary"} onClick={handleSubmit}>
                  {editId ? "Update" : "Add"}
                </Button>
                {editId && <Button variant="outlined" onClick={resetForm}>Cancel</Button>}
              </Box>
            </Grid>
          </Grid>
        </Paper>

        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
              <TableRow>
                <TableCell><b>Patient</b></TableCell>
                <TableCell><b>Doctor</b></TableCell>
                <TableCell><b>Date</b></TableCell>
                <TableCell><b>Time</b></TableCell>
                <TableCell><b>Reason</b></TableCell>
                <TableCell><b>Actions</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointments.map((a, i) => (
                <TableRow
                  key={a._id}
                  sx={{
                    backgroundColor: i % 2 === 0 ? "#fafafa" : "white",
                    "&:hover": { backgroundColor: "#f0f0f0" },
                  }}
                >
                  <TableCell>{a.patientName}</TableCell>
                  <TableCell>{a.doctorName}</TableCell>
                  <TableCell>{a.date}</TableCell>
                  <TableCell>{a.time}</TableCell>
                  <TableCell>{a.reason}</TableCell>
                  <TableCell>
                    <IconButton color="primary" onClick={() => handleEdit(a)}>
                      <Edit />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleDelete(a._id)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default Appointment;
