//Patients.js

const express = require("express");
const router = express.Router();
const Patients = require("../Model/Patients");

//GET all patients
router.get("/", async (req, res) => {
  const patients = await Patients.find();
  res.json(patients);
});

//POST new patient
router.post("/", async (req, res) => {
  const patients = new Patients(req.body);
  const saved = await patients.save();
  res.json(saved);
});

//PUT update patient
router.put("/:id", async (req, res) => {
  const updated = await Patients.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

//DELETE patient;
router.delete("/:id", async (req, res) => {
  await Patients.findByIdAndDelete(req.params.id);
  res.json({ message: "Patients deleted" });
});

module.exports = router;

// GET patient count
router.get("/count", async (req, res) => {
  try {
    const count = await Patients.countDocuments();
    res.json({ count });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching patient count", error: err });
  }
});
