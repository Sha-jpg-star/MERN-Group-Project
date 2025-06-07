//book appointment
const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientName: String,
  email: String,
  phone: String,
  doctor: String,
  date: String,
  time: String,
  symptoms: String,
  status: {
    type: String,
    default: "Pending",
  },
});

module.exports = mongoose.model("Appointment", appointmentSchema);
