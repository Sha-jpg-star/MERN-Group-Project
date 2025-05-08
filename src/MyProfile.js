import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import SidebarDoctors from "./SidebarDoctors"; // Assuming the sidebar is imported

const MyProfile = () => {
  const [doctor, setDoctor] = useState({
    name: "Dr. Nimal Perera",
    email: "Nimal@hospital.com",
    phone: "077-1234567",
    specialization: "Cardiologist",
    experience: "10 Years",
    gender: "Feale",
    profilePic: "https://via.placeholder.com/150",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor((prevDoctor) => ({
      ...prevDoctor,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Here you can send updated data to the backend
    console.log("Updated Doctor Info:", doctor);
    setIsEditing(false);
  };

  return (
    <Box
      sx={{
        padding: 3,
        backgroundColor: "rgb(218, 251, 253)",
        display: "flex",
      }}
    >
      <SidebarDoctors />
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
          My Profile
        </Typography>

        <Card sx={{ maxWidth: 600, mx: "auto", boxShadow: 4 }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Avatar
                alt={doctor.name}
                src={doctor.profilePic}
                sx={{ width: 100, height: 100, mr: 3 }}
              />
              <Box>
                <Typography variant="h6">{doctor.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {doctor.specialization}
                </Typography>
              </Box>
            </Box>

            <TextField
              label="Name"
              name="name"
              fullWidth
              margin="normal"
              value={doctor.name}
              onChange={handleChange}
              InputProps={{ readOnly: !isEditing }}
            />
            <TextField
              label="Email"
              name="email"
              fullWidth
              margin="normal"
              value={doctor.email}
              onChange={handleChange}
              InputProps={{ readOnly: !isEditing }}
            />
            <TextField
              label="Phone"
              name="phone"
              fullWidth
              margin="normal"
              value={doctor.phone}
              onChange={handleChange}
              InputProps={{ readOnly: !isEditing }}
            />
            <TextField
              label="Specialization"
              name="specialization"
              fullWidth
              margin="normal"
              value={doctor.specialization}
              onChange={handleChange}
              InputProps={{ readOnly: !isEditing }}
            />
            <TextField
              label="Experience"
              name="experience"
              fullWidth
              margin="normal"
              value={doctor.experience}
              onChange={handleChange}
              InputProps={{ readOnly: !isEditing }}
            />
            <TextField
              label="Gender"
              name="gender"
              fullWidth
              margin="normal"
              value={doctor.gender}
              onChange={handleChange}
              InputProps={{ readOnly: !isEditing }}
            />

            <Box textAlign="right" mt={2}>
              {isEditing ? (
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleSaveClick}
                >
                  Save
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleEditClick}
                >
                  Edit Profile
                </Button>
              )}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default MyProfile;
