import React, { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import Sidebar from "./Sidebar";
import axios from "axios";

const BookAppointments = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
    symptoms: "",
  });

  const [doctorList, setDoctorList] = useState([]);
  const [appointmentId, setAppointmentId] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [success, setSuccess] = useState(false);
  const [openView, setOpenView] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/doctors")
      .then((res) => setDoctorList(res.data))
      .catch((err) => console.error("Failed to fetch doctors", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode && appointmentId) {
        await axios.put(
          `http://localhost:5000/api/appointments/${appointmentId}`,
          formData
        );
        alert("Appointment updated successfully!");
        setEditMode(false);
        setSuccess(true);
      } else {
        const res = await axios.post(
          "http://localhost:5000/api/appointments",
          formData
        );
        setAppointmentId(res.data._id);
        alert("Appointment booked successfully!");
        setSuccess(true);
      }
    } catch (err) {
      alert("Error submitting form");
    }
  };

  const handleViewOpen = () => setOpenView(true);

  const handleViewClose = () => {
    setOpenView(false);
    setFormData({
      patientName: "",
      email: "",
      phone: "",
      doctor: "",
      date: "",
      time: "",
      symptoms: "",
    });
    setEditMode(false);
    setAppointmentId(null);
    setSuccess(false);
  };

  const handleEdit = () => {
    setEditMode(true);
    setOpenView(false);
    setSuccess(false);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:5000/api/appointments/${appointmentId}`
      );
      alert("Appointment deleted successfully!");
      setFormData({
        patientName: "",
        email: "",
        phone: "",
        doctor: "",
        date: "",
        time: "",
        symptoms: "",
      });
      setSuccess(false);
      setAppointmentId(null);
      setOpenView(false);
    } catch (err) {
      alert("Delete failed");
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Container
        sx={{
          flex: 1,
          paddingTop: 4,
          backgroundColor: "#f1fff5",
          paddingBottom: 4,
        }}
      >
        <Typography variant="h4" gutterBottom>
          {editMode ? "Update Appointment" : "Book Appointment"}
        </Typography>

        <Paper elevation={3} sx={{ p: 4 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Patient Name"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>Preferred Doctor</InputLabel>
                  <Select
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    label="Preferred Doctor"
                  >
                    {doctorList.map((doc) => (
                      <MenuItem key={doc._id} value={doc.DoctorName}>
                        {doc.DoctorName} - {doc.Specialization}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Symptoms / Notes"
                  name="symptoms"
                  value={formData.symptoms}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                {!success ? (
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                  >
                    {editMode ? "Save Changes" : "Book Now"}
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    onClick={handleViewOpen}
                  >
                    View
                  </Button>
                )}
              </Grid>
            </Grid>
          </form>
        </Paper>

        <Dialog open={openView} onClose={handleViewClose} fullWidth>
          <DialogTitle>Appointment Details</DialogTitle>
          <DialogContent>
            <Typography>
              <strong>Name:</strong> {formData.patientName}
            </Typography>
            <Typography>
              <strong>Email:</strong> {formData.email}
            </Typography>
            <Typography>
              <strong>Phone:</strong> {formData.phone}
            </Typography>
            <Typography>
              <strong>Doctor:</strong> {formData.doctor}
            </Typography>
            <Typography>
              <strong>Date:</strong> {formData.date}
            </Typography>
            <Typography>
              <strong>Time:</strong> {formData.time}
            </Typography>
            <Typography>
              <strong>Symptoms:</strong> {formData.symptoms}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleEdit} color="primary">
              Edit
            </Button>
            <Button onClick={handleDelete} color="error">
              Delete
            </Button>
            <Button onClick={handleViewClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
};

export default BookAppointments;
