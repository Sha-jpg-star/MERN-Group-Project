// Back-End/Model/Admin.js
const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contact: { type: String },
  role: { type: String, default: "admin" },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Admin", AdminSchema);
