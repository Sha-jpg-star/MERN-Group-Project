// doctor.js

const express = require("express");
const router = express.Router();
const Doctor = require("../Model/Doctor"); 


// GET all doctors
router.get("/", async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
});

// POST new doctor
router.post("/", async (req, res) => {
  const doctor = new Doctor(req.body);
  const saved = await doctor.save();
  res.json(saved);
});

// PUT update doctor
router.put("/:id", async (req, res) => {
  const updated = await Doctor.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

// DELETE doctor
router.delete("/:id", async (req, res) => {
  await Doctor.findByIdAndDelete(req.params.id);
  res.json({ message: "Doctor deleted" });
});

module.exports = router;
