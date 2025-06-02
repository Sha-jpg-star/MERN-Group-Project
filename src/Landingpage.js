import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";

const LandingPage = () => {
  return (
    <>
      {/* Navbar Start */}
      <AppBar position="static" sx={{ background: "rgb(16, 20, 255)" }}>
        <Toolbar>
          <img
            src="/landingPageIcon2.png"
            alt="Logo"
            style={{ height: "40px", marginRight: "12px" }}
          />
          <Typography
            variant="h5"
            sx={{ flexGrow: 1, color: "white", fontWeight: "bold" }}
          >
            MediCare
          </Typography>
          <Button
            sx={{ color: "white", backgroundColor: "navy" }}
            LinkComponent={Link}
            to="/Login"
          >
            Log In
          </Button>
        </Toolbar>
      </AppBar>

      {/* Section1 Start*/}
      <Container sx={{ backgroundColor: "aliceblue", marginTop: "50px" }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <Box maxWidth="500px" sx={{ padding: "40px" }}>
            <Typography
              sx={{
                fontSize: "15px",
                fontStyle: "italic",
                color: "rgb(127, 0, 153)",
              }}
            >
              Making Health Care Better Together
            </Typography>
            <Typography variant="h2" fontWeight="bold">
              Your Health, Our Priority
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "30px" }}>
              At MediCare, we believe in providing exceptional healthcare
              solutions with compassion and expertise. Our dedicated team of
              professionals ensures that you receive the best medical care,
              tailored to your needs. Join us in creating a healthier tomorrow!
            </Typography>
            <Button
              variant="contained"
              component={Link}
              to="/loginpatients"
              sx={{ mr: 2, backgroundColor: "blue" }}
            >
              Make An Appointment
            </Button>
            <Button variant="outlined" component={Link} to="/loginDoctors">
              Check Appointment
            </Button>
          </Box>
          <img
            src="landDoctor.jpg"
            alt="Doctor"
            style={{
              maxWidth: "400px",
              borderRadius: "10px",
              marginTop: "20px",
            }}
          />
        </Box>
      </Container>
    </>
  );
};

export default LandingPage;
