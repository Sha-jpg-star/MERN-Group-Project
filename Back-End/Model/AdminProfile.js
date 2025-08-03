const mongoose = require("mongoose");

const adminProfileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: String,
    address: String,
    role: {
      type: String,
      default: "admin",
    },
  },
  { timestamps: true }
);

const AdminProfile = mongoose.model("AdminProfile", adminProfileSchema);

module.exports = AdminProfile;
