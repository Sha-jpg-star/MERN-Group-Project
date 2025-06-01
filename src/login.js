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

const Login = () => {
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    navigate("/Dashboard");
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e6e6fa 0%, #f3e5f5 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.3)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.2)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: "40px",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        {/* Header */}
        <img
          src="/landingPageIcon2.png"
          alt="HMS Logo"
          style={{ height: "50px", borderRadius: "50%" }}
        />
        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 1 }}>
          MediCare HMS
        </Typography>

        <Typography variant="body2" sx={{ mt: 2, fontStyle: "italic" }}>
          Your gateway to seamless healthcare management. Log in and take
          control of your workflow effortlessly.
        </Typography>

        {/* Admin Login Form */}
        <Box sx={{ mt: 4 }}>
          <img
            src="/adminIcon2.png"
            alt="Admin Icon"
            style={{ height: "40px", marginBottom: "10px" }}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Admin
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
            sx={{ mt: 1 }}
          />

          <Button
            fullWidth
            sx={{
              mt: 2,
              py: 1.5,
              backgroundColor: "#6a1b9a",
              color: "#fff",
              fontWeight: "bold",
              '&:hover': {
                backgroundColor: "#4a148c",
              },
            }}
            onClick={handleAdminLogin}
          >
            LOGIN
          </Button>

          <Typography variant="body2" sx={{ mt: 2 }}>
            <a
              href="./login"
              style={{ color: "#4a148c", textDecoration: "none" }}
            >
              Forgotten your username or password?
            </a>
          </Typography>

          <Button
            fullWidth
            variant="outlined"
            sx={{
              mt: 2,
              py: 1.5,
              borderColor: "#888",
              color: "#444",
              fontWeight: "bold",
              '&:hover': {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            LOG IN AS A GUEST
          </Button>
        </Box>

        {/* Footer */}
        <Box sx={{ mt: 4 }}>
          <img src="/landingPageIcon2.png" alt="Logo" height="30" />
          <Typography variant="body2">
            MediCare - Hospital Management System
          </Typography>
          <Typography variant="body2">
            © 2024 - MediCare ALL RIGHTS RESERVED.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;