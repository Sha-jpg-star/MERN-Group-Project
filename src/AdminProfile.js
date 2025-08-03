import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button, Snackbar, Box, Typography } from "@mui/material";
import Sidebar from "./Sidebar";

const AdminProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/adminProfile/adminprofile")
      .then((res) => setFormData({ ...res.data, password: "" })) // don't show password
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    axios
      .put("http://localhost:5000/api/adminProfile/adminprofile", formData)
      .then((res) => {
        setMessage("Profile updated successfully");
        setOpenSnackbar(true);
      })
      .catch((err) => {
        setMessage("Update failed");
        setOpenSnackbar(true);
      });
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Box
        sx={{
          maxWidth: 600,
          p: 3,
          backgroundColor: "#dafbfd",
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Admin Profile
        </Typography>

        <TextField
          fullWidth
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="phone"
          label="Phone"
          value={formData.phone}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="role"
          label="Role"
          value={formData.role}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="password"
          label="Password (Leave blank to keep current)"
          type="password"
          value={formData.password}
          onChange={handleChange}
          margin="normal"
        />

        <Button variant="contained" color="primary" onClick={handleUpdate}>
          Update Profile
        </Button>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={() => setOpenSnackbar(false)}
          message={message}
        />
      </Box>
    </div>
  );
};

export default AdminProfile;
