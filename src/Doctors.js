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
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import Sidebar from "./Sidebar";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TimePicker } from "@mui/x-date-pickers";

function Doctors() {
  const [doctorList, setDoctorList] = useState([]);
  const [DoctorName, setDoctorName] = useState("");
  const [Specialization, setSpecialization] = useState("");
  const [WeeklySchedule, setWeeklySchedule] = useState("");
  const [AvailableHours, setAvailableHours] = useState(null);
  const [OnCallStatus, setOnCallStatus] = useState("");
  const [EmergencyContact, setEmergencyContact] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/doctors")
      .then((res) => setDoctorList(res.data))
      .catch((err) => console.error("Error fetching doctors:", err));
  }, []);

  const handleAddDoctor = () => {
    if (
      DoctorName &&
      Specialization &&
      WeeklySchedule &&
      AvailableHours &&
      OnCallStatus &&
      EmergencyContact
    ) {
      const newDoctor = {
        DoctorName,
        Specialization,
        WeeklySchedule,
        AvailableHours: AvailableHours.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        OnCallStatus,
        EmergencyContact,
      };

      axios
        .post("http://localhost:5000/api/doctors", newDoctor)
        .then((res) => {
          setDoctorList([...doctorList, res.data]);
          resetFields();
        })
        .catch((err) => console.error("Error adding doctor:", err));
    }
  };

  const handleUpdateDoctor = () => {
    const updatedDoctor = {
      DoctorName,
      Specialization,
      WeeklySchedule,
      AvailableHours: AvailableHours.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      OnCallStatus,
      EmergencyContact,
    };

    axios
      .put(`http://localhost:5000/api/doctors/${editId}`, updatedDoctor)
      .then((res) => {
        const updatedList = doctorList.map((doc) =>
          doc._id === editId ? res.data : doc
        );
        setDoctorList(updatedList);
        resetFields();
        setEditId(null);
      })
      .catch((err) => console.error("Error updating doctor:", err));
  };

  const handleDeleteDoctor = (id) => {
    axios
      .delete(`http://localhost:5000/api/doctors/${id}`)
      .then(() => {
        setDoctorList(doctorList.filter((doc) => doc._id !== id));
      })
      .catch((err) => console.error("Error deleting doctor:", err));
  };

  const handleEdit = (doctor) => {
    setEditId(doctor._id);
    setDoctorName(doctor.DoctorName);
    setSpecialization(doctor.Specialization);
    setWeeklySchedule(doctor.WeeklySchedule);
    setAvailableHours(new Date(`1970-01-01T${doctor.AvailableHours}`));
    setOnCallStatus(doctor.OnCallStatus);
    setEmergencyContact(doctor.EmergencyContact);
  };

  const resetFields = () => {
    setDoctorName("");
    setSpecialization("");
    setWeeklySchedule("");
    setAvailableHours(null);
    setOnCallStatus("");
    setEmergencyContact("");
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Container
        sx={{ flex: 1, paddingTop: 4, backgroundColor: "rgb(218, 251, 253)" }}
      >
        <Typography variant="h4" gutterBottom>
          Doctors Management
        </Typography>

        <TextField
          label="Doctor Full Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={DoctorName}
          onChange={(e) => setDoctorName(e.target.value)}
        />
        <TextField
          label="Specialization"
          variant="outlined"
          fullWidth
          margin="normal"
          value={Specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Weekly Schedule</InputLabel>
          <Select
            value={WeeklySchedule}
            onChange={(e) => setWeeklySchedule(e.target.value)}
            label="Weekly Schedule"
          >
            <MenuItem value="Monday">Monday</MenuItem>
            <MenuItem value="Tuesday">Tuesday</MenuItem>
            <MenuItem value="Wednesday">Wednesday</MenuItem>
            <MenuItem value="Thursday">Thursday</MenuItem>
            <MenuItem value="Friday">Friday</MenuItem>
            <MenuItem value="Saturday">Saturday</MenuItem>
            <MenuItem value="Sunday">Sunday</MenuItem>
          </Select>
        </FormControl>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <TimePicker
            label="Available Hour"
            value={AvailableHours}
            onChange={(newValue) => setAvailableHours(newValue)}
            renderInput={(params) => (
              <TextField {...params} fullWidth margin="normal" />
            )}
          />
        </LocalizationProvider>

        <FormControl fullWidth margin="normal">
          <InputLabel>On Call Status</InputLabel>
          <Select
            value={OnCallStatus}
            onChange={(e) => setOnCallStatus(e.target.value)}
            label="On Call Status"
          >
            <MenuItem value="Available">Available</MenuItem>
            <MenuItem value="Unavailable">Unavailable</MenuItem>
            <MenuItem value="Busy">Busy</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Emergency Contact Info"
          variant="outlined"
          fullWidth
          margin="normal"
          value={EmergencyContact}
          onChange={(e) => setEmergencyContact(e.target.value)}
        />

        {editId ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={handleUpdateDoctor}
            sx={{ mt: 2 }}
          >
            Update Doctor
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddDoctor}
            sx={{ mt: 2 }}
          >
            Add Doctor
          </Button>
        )}

        <TableContainer component={Paper} sx={{ mt: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Doctor Name</TableCell>
                <TableCell>Specialization</TableCell>
                <TableCell>Weekly Schedule</TableCell>
                <TableCell>Available Hour</TableCell>
                <TableCell>On Call Status</TableCell>
                <TableCell>Emergency Contact</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {doctorList.map((doctor) => (
                <TableRow key={doctor._id}>
                  <TableCell>{doctor._id}</TableCell>
                  <TableCell>{doctor.DoctorName}</TableCell>
                  <TableCell>{doctor.Specialization}</TableCell>
                  <TableCell>{doctor.WeeklySchedule}</TableCell>
                  <TableCell>{doctor.AvailableHours}</TableCell>
                  <TableCell>{doctor.OnCallStatus}</TableCell>
                  <TableCell>{doctor.EmergencyContact}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleEdit(doctor)}
                      sx={{ mr: 1 }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleDeleteDoctor(doctor._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default Doctors;
