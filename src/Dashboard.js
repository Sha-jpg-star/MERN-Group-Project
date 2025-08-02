import { useState, useEffect } from "react";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PeopleIcon from "@mui/icons-material/People";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Sidebar from "./Sidebar";

const appointments = [
  { name: "Niluka Dasuni", time: "10:00 AM", status: "Accepted" },
  { name: "Shalini Himanjana", time: "11:30 AM", status: "Pending" },
  { name: "Tharukshi Hansamali", time: "1:00 PM", status: "Rejected" },
];

const recentPatients = [
  {
    name: "G.K.Fernando",
    gender: "Male",
    weight: "75kg",
    status: "Outpatient",
  },
  {
    name: "U.L.Chandralatha",
    gender: "Female",
    weight: "68kg",
    status: "Inpatient",
  },
];

const Dashboard = () => {
  const [patientCount, setPatientCount] = useState(0);

  const [patientData, setPatientData] = useState([]);

  const [DoctorCount, setDoctorCount] = useState(0);

  const [DoctorData, setDoctorData] = useState([]);

  const [AppointmentCount, setAppointmentCount] = useState(0);

  const [AppointmentData, setAppointmentData] = useState([]);

  /*useEffect(() => {
    fetch("http://localhost:5000/api/stats/monthly-stats")
      .then((res) => res.json())
      .then((data) => {
        // Map your API data to the shape recharts expects
        const formatted = data.map((item) => ({
          name: item.month,
          Registered: item.patients,
          Income: item.income,
        }));
        setPatientData(formatted);
      })
      .catch((err) => {
        console.error("Error fetching patient stats:", err);
        // fallback data or empty array
        setPatientData([]);
      });
  }, []);*/

  useEffect(() => {
    // Count
    axios
      .get("http://localhost:5000/api/patients/count")
      .then((res) => setPatientCount(res.data.count))
      .catch((err) => console.error("Failed to fetch patient count:", err));

    // Full Data (optional)
    axios
      .get("http://localhost:5000/api/patients")
      .then((res) => setPatientData(res.data))
      .catch((err) => console.error("Failed to fetch patient data:", err));
  }, []);

  useEffect(() => {
    // Count
    axios
      .get("http://localhost:5000/api/Doctors/count")
      .then((res) => setDoctorCount(res.data.count))
      .catch((err) => console.error("Failed to fetch patient count:", err));

    // Full Data (optional)
    axios
      .get("http://localhost:5000/api/Doctors")
      .then((res) => setDoctorData(res.data))
      .catch((err) => console.error("Failed to fetch patient data:", err));
  }, []);

  useEffect(() => {
    // Count
    axios
      .get("http://localhost:5000/api/Appointment/count")
      .then((res) => setAppointmentCount(res.data.count))
      .catch((err) => console.error("Failed to fetch patient count:", err));

    // Full Data (optional)
    axios
      .get("http://localhost:5000/api/Appointment")
      .then((res) => setAppointmentData(res.data))
      .catch((err) => console.error("Failed to fetch patient data:", err));
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1, p: 3, backgroundColor: "rgb(218, 251, 253)" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: "20px" }}
        >
          Welcome To Medicare....
        </Typography>

        <Grid container spacing={3}>
          {[
            {
              title: " Patients",
              value: patientCount,
              icon: <CalendarTodayIcon />,
              color: "#007bff",
            },
            {
              title: "Doctors",
              value: DoctorCount,
              icon: <PeopleIcon />,
              color: "#28a745",
            },
            {
              title: "Appointment",
              value: AppointmentCount,
              icon: <LocalHospitalIcon />,
              color: "#dc3545",
            },
            {
              title: "Income",
              value: "Rs.5728",
              icon: <AccountBalanceWalletIcon />,
              color: "#ffc107",
            },
          ].map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "15px",
                  backgroundColor: stat.color,
                  color: "#fff",
                }}
              >
                <Avatar
                  sx={{
                    backgroundColor: "#fff",
                    color: stat.color,
                    marginRight: "10px",
                  }}
                >
                  {stat.icon}
                </Avatar>
                <CardContent>
                  <Typography variant="h6">{stat.title}</Typography>
                  <Typography variant="h5">{stat.value}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            marginTop: "20px",
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h6">Patient Status</Typography>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart
              data={
                patientData.length
                  ? patientData
                  : [
                      { name: "Jan", Registered: 150, Income: 20 },
                      { name: "Feb", Registered: 200, Income: 30 },
                      { name: "March", Registered: 50, Income: 40 },
                      { name: "April", Registered: 100, Income: 50 },
                      { name: "May", Registered: 150, Income: 20 },
                      { name: "June", Registered: 200, Income: 20 },
                      { name: "July", Registered: 150, Income: 70 },
                      { name: "Aug", Registered: 50, Income: 20 },
                      { name: "Sep", Registered: 40, Income: 20 },
                      { name: "Oct", Registered: 30, Income: 20 },
                      { name: "Nov", Registered: 150, Income: 80 },
                      { name: "Dec", Registered: 120, Income: 20 },
                      // fallback hardcoded data in case API call fails or is empty
                    ]
              }
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="Registered" stroke="#007bff" />
              <Line type="monotone" dataKey="Income" stroke="#dc3545" />
            </LineChart>
          </ResponsiveContainer>
        </Box>

        <Grid container spacing={3} sx={{ marginTop: "20px" }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ padding: "15px" }}>
              <Typography variant="h6">Appointment Requests</Typography>
              <List>
                {appointments.map((appointment, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={appointment.name}
                      secondary={`${appointment.time} - ${appointment.status}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ padding: "15px" }}>
              <Typography variant="h6">Recent Patients</Typography>
              <List>
                {recentPatients.map((patient, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={patient.name}
                      secondary={`${patient.gender} - ${patient.weight} - ${patient.status}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
