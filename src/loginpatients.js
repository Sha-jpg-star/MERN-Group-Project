import React from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPatients = () => {
  const navigate = useNavigate();

  const handlePatientLogin = () => {
    // You can add form validation here
    navigate("/DashboardPatients"); // Redirect to patient dashboard
  };

  return (
    <Container
      style={{
        textAlign: "center",
        marginTop: "50px",
        backgroundColor: "rgb(162, 241, 255)",
        padding: "30px",
        marginBottom: "50px",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          backgroundColor: "rgb(31, 1, 139)",
          padding: "20px",
          borderRadius: "5px",
          boxShadow: "0px 4px 10px rgba(24, 7, 250, 0.77)",
        }}
      >
        <img
          src="/landingPageIcon2.png"
          alt="HMS Logo"
          style={{ height: "50px", borderRadius: "50%" }}
        />
        <Typography variant="h4" color="white" sx={{ fontWeight: "bold" }}>
          MediCare HMS
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={{ fontSize: "18px", fontWeight: "italic", marginTop: "25px" }}
        >
          Your gateway to seamless healthcare management. Log in and take
          control of your workflow effortlessly.
        </Typography>
      </Box>

      {/* Login Form */}
      <Container sx={{ marginBottom: "50px" }}>
        <Container
          maxWidth="xs"
          style={{ textAlign: "center", marginTop: "50px" }}
        >
          <Box
            sx={{
              backgroundColor: "rgb(180, 194, 255)",
              padding: "30px",
              marginTop: "20px",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgb(0, 0, 0)",
            }}
          >
            <img
              src="/adminIcon2.png"
              alt="Patient Icon"
              style={{ height: "40px", marginBottom: "10px" }}
            />
            <Typography variant="h6" color="black" sx={{ fontWeight: "bold" }}>
              Patient
            </Typography>

            <TextField
              label="Username / Email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Remember Username"
            />

            <Button
              onClick={handlePatientLogin}
              fullWidth
              sx={{
                marginTop: "15px",
                padding: "10px",
                color: "white",
                backgroundColor: "rgb(199, 4, 37)",
                boxShadow: "0px 4px 10px rgb(0, 22, 92)",
              }}
            >
              LOGIN
            </Button>

            <Typography variant="body2" sx={{ marginTop: "10px" }}>
              <a
                href="./login"
                style={{ textDecoration: "none", color: "darkblue" }}
              >
                Forgotten your username or password?
              </a>
            </Typography>

            <Button
              variant="contained"
              fullWidth
              sx={{
                marginTop: "15px",
                padding: "10px",
                color: "white",
                backgroundColor: "rgb(126, 124, 124)",
              }}
            >
              LOG IN AS A GUEST
            </Button>
          </Box>
        </Container>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          marginTop: "20px",
          padding: "20px",
          backgroundColor: "rgb(24, 24, 133)",
          borderRadius: "5px",
          color: "white",
        }}
      >
        <img
          src="/landingPageIcon2.png"
          alt="HMS Logo"
          style={{ height: "30px" }}
        />
        <Typography variant="body2">
          MediCare - Hospital Management System
        </Typography>
        <Typography variant="body2">
          © 2024 - MediCare ALL RIGHTS RESERVED.
        </Typography>
      </Box>
    </Container>
  );
};

export default LoginPatients;

