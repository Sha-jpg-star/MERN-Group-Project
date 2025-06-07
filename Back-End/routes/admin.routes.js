// routes/admin.routes.js
const express = require("express");
const router = express.Router();
const Admin = require("../Model/Admin");

// Get admin by ID
router.get("/:id", async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) return res.status(404).json({ message: "Admin not found" });
    res.json(admin);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update admin by ID
router.put("/:id", async (req, res) => {
  const { name, email, contact, password } = req.body;
  try {
    const updatedAdmin = await Admin.findByIdAndUpdate(
      req.params.id,
      { name, email, contact, password },
      { new: true }
    );
    res.json({ message: "Settings updated successfully", admin: updatedAdmin });
  } catch (err) {
    res.status(500).json({ error: "Update failed" });
  }
});

module.exports = router;
