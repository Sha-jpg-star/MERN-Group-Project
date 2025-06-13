 import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";
import Sidebar from "./Sidebar";

function Ward() {
  const [wards, setWards] = useState([]);
  const [wardName, setWardName] = useState("");
  const [type, setType] = useState("");
  const [totalBeds, setTotalBeds] = useState("");
  const [availability, setAvailability] = useState("");

  // Fetch existing wards
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/ward")
      .then((res) => {
        setWards(res.data);
      })
      .catch((err) => {
        console.error("Error fetching wards:", err);
      });
  }, []);

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    const newWard = {
      wardName,
      type,
      totalBeds: Number(totalBeds),
      availability: Number(availability),
    };

    axios
      .post("http://localhost:5000/api/ward", newWard)
      .then((res) => {
        console.log("Success:", res.data);
        setWards([...wards, res.data]);
        setWardName("");
        setType("");
        setTotalBeds("");
        setAvailability("");
      })
      .catch((err) => {
        console.error("Error adding ward:", err.response?.data || err.message);
      });
  };

  return (
    <Box display="flex">
      <Sidebar />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Ward Management
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Ward Name"
            value={wardName}
            onChange={(e) => setWardName(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Total Beds"
            type="number"
            value={totalBeds}
            onChange={(e) => setTotalBeds(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Availability"
            type="number"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Add Ward
          </Button>
        </form>

        {/* Display Wards */}
        <TableContainer component={Paper} sx={{ mt: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Ward Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Total Beds</TableCell>
                <TableCell>Availability</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {wards.map((ward, index) => (
                <TableRow key={index}>
                  <TableCell>{ward.wardName}</TableCell>
                  <TableCell>{ward.type}</TableCell>
                  <TableCell>{ward.totalBeds}</TableCell>
                  <TableCell>{ward.availability}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}

export default Ward;
