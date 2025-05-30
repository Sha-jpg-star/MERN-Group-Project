 import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import Sidebar from "./Sidebar";

function Patients() {
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({
    fullName: "",
    age: "",
    gender: "",
    contact: "",
    diagnosis: "",
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/patients")
      .then((res) => setPatients(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm({
      fullName: "",
      age: "",
      gender: "",
      contact: "",
      diagnosis: "",
    });
    setEditId(null);
  };

  const handleSubmit = () => {
    const url = editId
      ? `http://localhost:5000/api/patients/${editId}`
      : "http://localhost:5000/api/patients";

    const method = editId ? axios.put : axios.post;

    method(url, form)
      .then((res) => {
        const updated = editId
          ? patients.map((p) => (p._id === editId ? res.data : p))
          : [...patients, res.data];
        setPatients(updated);
        resetForm();
      })
      .catch((err) => console.error(err));
  };

  const handleEdit = (patient) => {
    setEditId(patient._id);
    setForm(patient);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/patients/${id}`)
      .then(() => setPatients(patients.filter((p) => p._id !== id)))
      .catch((err) => console.error(err));
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Container sx={{ flex: 1, mt: 4 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
          Patient Management
        </Typography>

        {/* Form */}
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Typography
            variant="h6"
            gutterBottom
            fontWeight="bold"
            color="primary"
          >
            {editId ? "Update Patient" : "Add New Patient"}
          </Typography>

          <TextField
            fullWidth
            label="Full Name"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Age"
            name="age"
            value={form.age}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Gender"
            name="gender"
            value={form.gender}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Contact"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Diagnosis"
            name="diagnosis"
            value={form.diagnosis}
            onChange={handleChange}
            margin="normal"
          />

          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <Button
              variant="contained"
              color={editId ? "secondary" : "primary"}
              onClick={handleSubmit}
            >
              {editId ? "Update Patient" : "Add Patient"}
            </Button>
            {editId && (
              <Button variant="outlined" onClick={resetForm}>
                Cancel
              </Button>
            )}
          </Box>
        </Paper>

        {/* Table */}
        <TableContainer component={Paper} sx={{ mt: 4 }}>
          <Table>
            <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
              <TableRow>
                <TableCell><b>Full Name</b></TableCell>
                <TableCell><b>Age</b></TableCell>
                <TableCell><b>Gender</b></TableCell>
                <TableCell><b>Contact</b></TableCell>
                <TableCell><b>Diagnosis</b></TableCell>
                <TableCell><b>Actions</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {patients.map((patient, index) => (
                <TableRow
                  key={patient._id}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#fafafa" : "white",
                    transition: "background-color 0.3s",
                    "&:hover": { backgroundColor: "#f0f0f0" },
                  }}
                >
                  <TableCell>{patient.fullName}</TableCell>
                  <TableCell>{patient.age}</TableCell>
                  <TableCell>{patient.gender}</TableCell>
                  <TableCell>{patient.contact}</TableCell>
                  <TableCell>{patient.diagnosis}</TableCell>
                  <TableCell>
                    <IconButton
                      color="primary"
                      onClick={() => handleEdit(patient)}
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(patient._id)}
                    >
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

export default Patients;


