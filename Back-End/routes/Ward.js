const express = require("express");
const router = express.Router();
const Ward = require("../Model/Ward");

// GET all wards
router.get("/", async (req, res) => {
  try {
    const wards = await Ward.find();
    res.json(wards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new ward
router.post("/", async (req, res) => {
  try {
    const ward = new Ward(req.body);
    const savedWard = await ward.save();
    res.status(201).json(savedWard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update ward
router.put("/:id", async (req, res) => {
  try {
    const updatedWard = await Ward.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedWard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE ward
router.delete("/:id", async (req, res) => {
  try {
    await Ward.findByIdAndDelete(req.params.id);
    res.json({ message: "Ward deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;