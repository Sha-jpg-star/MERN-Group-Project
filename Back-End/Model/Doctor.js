// Doctor.js

const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  DoctorName: String,
  Specialization: String,
  WeeklySchedule: String,
  AvailableHours: String,
  OnCallStatus: String,
  EmergencyContact: String,
});

module.exports = mongoose.model("Doctor", doctorSchema);

