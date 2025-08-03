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

} from "@mui/material";

import Sidebar from "./Sidebar";

function Patients() {
  const [patients, setPatients] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [diagnosis, setDiagnosis] = useState("");

  // Fetch existing patients
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/patients")
      .then((res) => {
        setPatients(res.data);
      })
      .catch((err) => {
        console.error("Error fetching patients:", err);
      });
  }, []);

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const newPatient = {
      name,
      age: Number(age),
      gender,
      contact,
      diagnosis,
    };

    axios
      .post("http://localhost:5000/api/patients", newPatient)
      .then((res) => {
        console.log("Patient added:", res.data);
        setPatients([...patients, res.data]);
        setName("");
        setAge("");
        setGender("");
        setContact("");
        setDiagnosis("");
      })
      .catch((err) => {
        console.error("Error adding patient:", err.response?.data || err.message);
      });
  };

  return (
    <Box display="flex">
      <Sidebar />
      <Container sx={{ pb: 4, backgroundColor: "#fff3e0", pt: 2 }}>
        <Typography variant="h4" gutterBottom>
          Patient Management
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Patient Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth

            margin="normal"
            required
          />
          <TextField

            label="Age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField

            label="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Contact Number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            fullWidth

            margin="normal"
            required
          />
          <TextField

            label="Diagnosis"
            value={diagnosis}
            onChange={(e) => setDiagnosis(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Add Patient
          </Button>
        </form>

        {/* Display Patients */}
        <TableContainer component={Paper} sx={{ mt: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Contact</TableCell>
                <TableCell>Diagnosis</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {patients.map((patient, index) => (
                <TableRow key={index}>
                  <TableCell>{patient.name}</TableCell>
                  <TableCell>{patient.age}</TableCell>
                  <TableCell>{patient.gender}</TableCell>
                  <TableCell>{patient.contact}</TableCell>
                  <TableCell>{patient.diagnosis}</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}

export default Patients;
