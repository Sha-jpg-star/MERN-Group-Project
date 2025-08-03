import { useState, useEffect } from "react";
import {Box,Typography,Grid,Card,CardContent,Avatar,Table,TableHead,TableRow,TableCell,TableBody,TableContainer,Paper} from "@mui/material";
import {LineChart,Line,XAxis,YAxis,Tooltip,ResponsiveContainer} from "recharts";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PeopleIcon from "@mui/icons-material/People";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Sidebar from "./Sidebar";
import axios from "axios";

function MessagingDashboard() {
    const [patients,setPatients] = useState([]);
    const [billing,setBilling] = useState([]);
    const [patientData,setPatientData] = useState([]);
    const [doctorCount,setDoctorCount] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    Promise.all([
      axios.get("http://localhost:5000/api/patients"),
      axios.get("http://localhost:5000/api/billing"),
      axios.get("http://localhost:5000/api/doctors"),
      
    ])
      .then(([patientsRes, billingRes,res]) => {
        setPatients(patientsRes.data);
        setBilling(billingRes.data);
        setDoctorCount(res.data.length);
        
        const groupedData = groupByMonth(patientsRes.data, billingRes.data);
        setPatientData(groupedData);
      })
      .catch((err) => console.error(err));
  };

  const groupByMonth = (patients, billing) => {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];

    // Initialize array for 12 months with zero values
    const monthlyData = Array(12).fill(null).map((_, i) => ({
      name: months[i],
      Registered: 0,
      Income: 0,
    }));

    // Count registrations per month
    patients.forEach((patient) => {
      if (!patient.createdAt) return;
      const monthIndex = new Date(patient.createdAt).getMonth();
      monthlyData[monthIndex].Registered += 1;
    });

    // Sum billing income per month
    billing.forEach((bill) => {
      if (!bill.billingDate || !bill.amount) return;
      const monthIndex = new Date(bill.billingDate).getMonth();
      monthlyData[monthIndex].Income += Number(bill.amount);
    });
    

    return monthlyData;
  };


  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3, backgroundColor: "rgb(218, 251, 253)" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
          Welcome To Medicare....
        </Typography>

        <Grid container spacing={3}>
          {[
            { title: " Patients", value: patients.length, icon: <CalendarTodayIcon />, color: "#007bff" },
            { title: "Doctors", value: doctorCount, icon: <PeopleIcon />, color: "#28a745" },
            { title: "Appointment", value: 9, icon: <LocalHospitalIcon />, color: "#dc3545" },
            { title: "Income", value: `Rs.${billing.reduce((sum, b) => sum + Number(b.amount), 0)}`, icon: <AccountBalanceWalletIcon />, color: "#ffc107" },
          ].map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ display: "flex", alignItems: "center", padding: "15px", backgroundColor: stat.color, color: "#fff" }}>
                <Avatar sx={{ backgroundColor: "#fff", color: stat.color, marginRight: "10px" }}>{stat.icon}</Avatar>
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
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
          }}
        >
          <Typography variant="h6">Monthly Patients & Income Status</Typography>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={patientData}>
              <XAxis dataKey="name" />
              <YAxis domain={[0, 'dataMax + 5']} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="Registered"
                stroke="#007bff"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="Income"
                stroke="#dc3545"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>

        <Typography variant="h6" color="primary" fontWeight="bold" mb={1} mt={4}>
          Monthly Income Details
        </Typography>
        <TableContainer component={Paper} sx={{ maxHeight: 200, overflow: "auto", mb: 4 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow >
 
                <TableCell>ID</TableCell>
                <TableCell>Patient Name</TableCell>
                <TableCell>Service</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Billing Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {billing.map((bill, index) => (
                <TableRow key={bill._id || index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{bill.patientName || "N/A"}</TableCell>
                  <TableCell>{bill.service || "N/A"}</TableCell>
                  <TableCell>{bill.amount}</TableCell>
                  <TableCell>{new Date(bill.billingDate).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h6" color="primary" fontWeight="bold" mb={1}>
          Patients
        </Typography>
        <TableContainer component={Paper} sx={{ maxHeight: 200, overflow: "auto" }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Contact</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {patients.map((pat, index) => (
                <TableRow key={pat._id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{pat.fullName}</TableCell>
                  <TableCell>{pat.contact}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default MessagingDashboard;

