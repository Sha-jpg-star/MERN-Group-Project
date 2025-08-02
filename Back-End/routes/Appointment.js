//appointmentRoutes.js

const express = require("express");
const router = express.Router();
const Appointment = require("../Model/Appointment");

// Create new appointment
router.post("/", async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    const saved = await newAppointment.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: "Error saving appointment" });
  }
});

// Update appointment by id
router.put("/:id", async (req, res) => {
  try {
    const updated = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Error updating appointment" });
  }
});

// Delete appointment by id
router.delete("/:id", async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.json({ message: "Appointment deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting appointment" });
  }
});

router.get("/doctor/:doctorName", async (req, res) => {
  try {
    const doctorName = req.params.doctorName;
    const appointments = await Appointment.find({ doctorName: doctorName });
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: "Error fetching appointments" });
  }
});

module.exports = router;

// GET Appointment count
router.get("/count", async (req, res) => {
  try {
    const count = await Appointment.countDocuments();
    res.json({ count });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching patient count", error: err });
  }
});
