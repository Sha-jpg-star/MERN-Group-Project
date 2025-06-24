import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Box,
} from "@mui/material";
import axios from "axios";
import Sidebar from "./Sidebar";

function MessagingDashboard() {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [messageForm, setMessageForm] = useState({
    name: "",
    contact: "",
    message: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("http://localhost:5000/api/patients").then((res) => setPatients(res.data));
    axios.get("http://localhost:5000/api/doctors").then((res) => setDoctors(res.data));
  };

  const handleRowClick = (name, contact) => {
    setMessageForm((prev) => ({
      ...prev,
      name,
      contact,
    }));
  };

  const handleInputChange = (e) => {
    setMessageForm({ ...messageForm, [e.target.name]: e.target.value });
  };

  const handleSend = () => {
    if (!messageForm.name || !messageForm.contact || !messageForm.message) {
      alert("Please fill all fields");
      return;
    }

    console.log("Message Sent:", messageForm);
    alert("Message sent successfully!");
    setMessageForm({ name: "", contact: "", message: "" });
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Container sx={{ flex: 1, mt: 4 }}>
        {/* 📨 Message Form */}
        <Box component={Paper} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Send Message
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="name"
            value={messageForm.name}
            onChange={handleInputChange}
            disabled
          />
          <TextField
            fullWidth
            margin="normal"
            label="Contact Number"
            name="contact"
            value={messageForm.contact}
            onChange={handleInputChange}
            disabled
          />
          <TextField
            fullWidth
            margin="normal"
            label="Message"
            name="message"
            value={messageForm.message}
            onChange={handleInputChange}
            multiline
            rows={3}
          />
          <Button variant="contained" color="primary" onClick={handleSend} sx={{ mt: 2 }}>
            Send
          </Button>
        </Box>

        {/* 👨‍⚕️ Doctors Table */}
        <Typography variant="h6" color="primary" fontWeight="bold" mb={1}>
          Doctors
        </Typography>
        <TableContainer component={Paper} sx={{ maxHeight: 200, overflow: "auto", mb: 4 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Contact</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {doctors.map((doc, index) => (
                <TableRow
                  key={doc._id}
                  onClick={() => handleRowClick(doc.DoctorName, doc.EmergencyContact)}
                  sx={{ cursor: "pointer", "&:hover": { backgroundColor: "#f9f9f9" } }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{doc.DoctorName}</TableCell>
                  <TableCell>{doc.EmergencyContact}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* 🧑‍🦽 Patients Table */}
        <Typography variant="h6" color="primary" fontWeight="bold" mb={1}>
          Patients
        </Typography>
        <TableContainer component={Paper} sx={{ maxHeight: 200, overflow: "auto" }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Contact</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {patients.map((pat, index) => (
                <TableRow
                  key={pat._id}
                  onClick={() => handleRowClick(pat.fullName, pat.contact)}
                  sx={{ cursor: "pointer", "&:hover": { backgroundColor: "#f9f9f9" } }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{pat.fullName}</TableCell>
                  <TableCell>{pat.contact}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default MessagingDashboard;

