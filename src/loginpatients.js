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
        background: "linear-gradient(135deg",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Box
        sx={{
<<<<<<< HEAD
<<<<<<< HEAD
          background: "rgba(255, 255, 255, 0.25)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: "40px",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
=======
=======
>>>>>>> 4364c48d393e9f03f11a5e892ae0cdfa7c535b17
          backgroundColor: "rgb(58, 11, 224)",
          padding: "20px",
          borderRadius: "5px",
          boxShadow: "0px 4px 10px rgba(24, 7, 250, 0.77)",
>>>>>>> 4364c48d393e9f03f11a5e892ae0cdfa7c535b17
        }}
      >
        <img
          src="/adminIcon2.png"
          alt="Doctor Icon"
          style={{ width: "60px", marginBottom: "20px" }}
        />
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
          You log as a Patient
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          Login in and take control of your workflow effortlessly
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
          label="Remember Username"
          sx={{ mt: 1 }}
        />

        <Button
          fullWidth
          sx={{
            mt: 2,
            py: 1.5,
            backgroundColor: "blue",
            color: "#fff",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "rgb(88, 115, 225)",
            },
            boxShadow: "none",
          }}
          onClick={handleDoctorLogin}
        >
<<<<<<< HEAD
          LOGIN
        </Button>

        <Typography variant="body2" sx={{ mt: 2 }}>
          <a
            href="./login"
            style={{ color: "#0d47a1", textDecoration: "none" }}
          >
            Forgot your username or password?
          </a>
=======
          <Box
            sx={{
              backgroundColor: "rgb(91, 244, 255)",
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
              You log as a Patient
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
              sx={{ mr: "120px" }}
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
                backgroundColor: "rgb(223, 39, 70)",
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
              Continue with Google
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
>>>>>>> 4364c48d393e9f03f11a5e892ae0cdfa7c535b17
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
          LOG IN AS A GUEST
        </Button>
      </Box>
    </Container>
  );
};

export default LoginDoctors;
