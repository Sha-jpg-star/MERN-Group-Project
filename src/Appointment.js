import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container, Typography, TextField, Button, Paper,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  MenuItem, Box, IconButton
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import Sidebar from "./Sidebar";

function MyAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [form, setForm] = useState({
    patientName: "",
    doctorName: "",
    date: "",
    time: "",
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

  const resetForm = () => {
    setForm({ patientName: "", doctorName: "", date: "", time: "", reason: "" });
    setEditId(null);
  };

  const handleSubmit = () => {
    const url = editId
      ? `http://localhost:5000/api/appointments/${editId}`
      : "http://localhost:5000/api/appointments";

    const method = editId ? axios.put : axios.post;

    method(url, form)
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
    setForm(appointment);
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
        <Typography variant="h4" gutterBottom>Appointment Management</Typography>

        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" gutterBottom fontWeight="bold" color="primary">
            {editId ? "Update Appointment" : "Add New Appointment"}
          </Typography>
          <TextField fullWidth label="Patient Name" name="patientName" value={form.patientName} onChange={handleChange} margin="normal" />
          <TextField fullWidth label="Doctor Name" name="doctorName" value={form.doctorName} onChange={handleChange} margin="normal" />
          <TextField fullWidth type="date" name="date" value={form.date} onChange={handleChange} margin="normal" InputLabelProps={{ shrink: true }} />
          <TextField fullWidth type="time" name="time" value={form.time} onChange={handleChange} margin="normal" InputLabelProps={{ shrink: true }} />
          <TextField fullWidth label="Reason" name="reason" value={form.reason} onChange={handleChange} margin="normal" />

          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <Button variant="contained" color={editId ? "secondary" : "primary"} onClick={handleSubmit}>
              {editId ? "Update" : "Add"}
            </Button>
            {editId && <Button onClick={resetForm}>Cancel</Button>}
          </Box>
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
              {appointments.map((appointment, index) => (
                <TableRow key={appointment._id} sx={{ backgroundColor: index % 2 === 0 ? "#fafafa" : "white" }}>
                  <TableCell>{appointment.patientName}</TableCell>
                  <TableCell>{appointment.doctorName}</TableCell>
                  <TableCell>{appointment.date}</TableCell>
                  <TableCell>{appointment.time}</TableCell>
                  <TableCell>{appointment.reason}</TableCell>
                  <TableCell>
                    <IconButton color="primary" onClick={() => handleEdit(appointment)}>
                      <Edit />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleDelete(appointment._id)}>
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

export default MyAppointments;
