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

const LoginDoctors = () => {
  const navigate = useNavigate();

  const handleDoctorLogin = () => {
    navigate("/DashboardDoctors");
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      style={{
        minHeight: "100vh",
<<<<<<< HEAD
<<<<<<< HEAD
        background: "linear-gradient(135deg",
=======
        background: "linear-gradient(135deg,blue 0%,rgb(239, 244, 253) 100%)",
>>>>>>> 4364c48d393e9f03f11a5e892ae0cdfa7c535b17
=======
        background: "linear-gradient(135deg,blue 0%,rgb(239, 244, 253) 100%)",
>>>>>>> 4364c48d393e9f03f11a5e892ae0cdfa7c535b17
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.25)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: "40px",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <img
          src="/adminIcon2.png"
          alt="Doctor Icon"
          style={{ width: "60px", marginBottom: "20px" }}
        />
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
          You log as a Doctor
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          Login to manage your appointments
        </Typography>

        <TextField
          label="Email or Username"
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
          label="Remember Me"
          sx={{ mt: 1, mr: "250px" }}
        />

        <Button
          fullWidth
          sx={{
            mt: 2,
            py: 1.5,
            backgroundColor: "rgb(1, 20, 95)",
            color: "#fff",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "rgb(0, 41, 206)",
            },
            boxShadow: "none",
          }}
          onClick={handleDoctorLogin}
        >
          LOGIN
        </Button>

        <Typography variant="body2" sx={{ mt: 2 }}>
          <a
            href="./login"
            style={{ color: "#0d47a1", textDecoration: "none" }}
          >
            Forgot your username or password?
          </a>
        </Typography>

        <Button
          fullWidth
          variant="outlined"
          sx={{
            mt: 2,
            py: 1.5,
            borderColor: "navy",
            color: "navy",
            fontWeight: "bold",
            "&:hover": {
              borderColor: "rgb(67, 113, 205)",
              backgroundColor: "#e8f0fe",
            },
          }}
        >
          Continue with Google
        </Button>
      </Box>
    </Container>
  );
};

export default LoginDoctors;

