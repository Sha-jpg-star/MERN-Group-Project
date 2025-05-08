import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material"; // import the components used to create this ui
import { styled } from "@mui/system"; // import material ui for add style to the pages
import { Link } from "react-router-dom"; // connect to the app.js for

const HeroSection = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "50px 50px",
});

const MedCareUI = () => {
  return (
    <>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "aliceblue" }}>
        <Toolbar>
          <img
            src="/landingPageIcon2.png"
            alt="Logo"
            style={{ height: "40px", marginRight: "10px" }}
          />
          <Typography variant="h6" sx={{ flexGrow: 1, color: "black" }}>
            MediCare
          </Typography>
          <Button
            sx={{ color: "white", backgroundColor: "navy" }}
            component={Link}
            to="/Login"
          >
            Log In
          </Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container sx={{ backgroundColor: "aliceblue", marginTop: "20px" }}>
        <HeroSection>
          <Box maxWidth="500px">
            <Typography sx={{ fontSize: "15px", fontWeight: "italic" }}>
              Making Health Care Better Together
            </Typography>
            <Typography variant="h2" fontWeight="bolder">
              Your Health, Our Priority
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "50px" }}>
              At MediCare, we believe in providing exceptional healthcare
              solutions with compassion and expertise. Our dedicated team of
              professionals ensures that you receive the best medical care,
              tailored to your needs. Join us in creating a healthier tomorrow!
            </Typography>
            <Button
              variant="contained"
              component={Link}
              to="/Login"
              sx={{ mr: 2, backgroundColor: "blue" }}
            >
              Make An Appointment
            </Button>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              to="/DashboardDoctors"
            >
              Check Appointment
            </Button>
          </Box>
          <img
            src="landDoctor.jpg"
            alt="Doctor"
            style={{ maxWidth: "400px", borderRadius: "10px" }}
          />
        </HeroSection>
      </Container>
    </>
  );
};

export default MedCareUI;
