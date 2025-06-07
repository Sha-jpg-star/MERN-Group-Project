// Frontend/AdminSetting.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
} from "@mui/material";

const AdminSetting = () => {
  const adminId = "68442c6446cf33ef22522cd7"; // Use your actual Admin ID from MongoDB Compass
  const [admin, setAdmin] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
  });

  const fetchAdmin = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/admin/${adminId}`);
      setAdmin(res.data);
    } catch (err) {
      console.error("Fetch Error:", err);
    }
  };

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.put(`http://localhost:5000/api/admin/${adminId}`, admin);
      alert("Admin settings updated successfully!");
    } catch (err) {
      console.error("Update Error:", err);
      alert("Error updating settings");
    }
  };

  useEffect(() => {
    fetchAdmin();
  }, []);

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          Admin Settings
        </Typography>
        <Box component="form" onSubmit={(e) => e.preventDefault()}>
          <TextField
            fullWidth
            margin="normal"
            label="Name"
            name="name"
            value={admin.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            value={admin.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Contact"
            name="contact"
            value={admin.contact}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            name="password"
            value={admin.password}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ mt: 2 }}
          >
            Save Changes
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default AdminSetting;
