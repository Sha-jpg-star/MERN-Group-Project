const express = require('express');
const router = express.Router();
const Ward = require('../Model/Ward');

// POST - add new ward
router.post("/", async (req, res) => {
  try {
    const newWard = new Ward(req.body);
    await newWard.save();
    res.status(201).json(newWard);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET - get all wards
router.get("/", async (req, res) => {
  try {
    const wards = await Ward.find();
    res.json(wards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
