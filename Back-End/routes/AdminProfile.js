const express = require("express");
const router = express.Router();
const AdminProfile = require("../Model/AdminProfile");

// GET admin profile (first document)
router.get("/adminprofile", async (req, res) => {
  try {
    const profile = await AdminProfile.findOne();
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// UPDATE admin profile
router.put("/adminprofile", async (req, res) => {
  const { name, email, phone, password, role } = req.body;
  try {
    let profile = await AdminProfile.findOne();
    if (!profile) return res.status(404).json({ message: "Profile not found" });

    profile.name = name || profile.name;
    profile.email = email || profile.email;
    profile.phone = phone || profile.phone;
    profile.role = role || profile.role;
    if (password) profile.password = password;

    await profile.save();
    res.json({ message: "Profile updated", adminProfile: profile });
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err.message });
  }
});

module.exports = router;
