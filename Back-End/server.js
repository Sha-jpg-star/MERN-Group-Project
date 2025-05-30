// server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
<<<<<<< HEAD

// Import routes
const doctorRoutes = require("./routes/Doctor");
const appointmentRoutes = require("./routes/Appointment");
=======
const doctorRoutes = require("./routes");
const patientsRoutes = require("./route");
>>>>>>> efcec65ef16c16049c1a18d6f36d41cdc0079b24

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/medicare", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/doctors", doctorRoutes);
<<<<<<< HEAD
app.use("/api/appointments", appointmentRoutes);
=======
app.use("/api/Patients", patientsRoutes);
>>>>>>> efcec65ef16c16049c1a18d6f36d41cdc0079b24

// Default Route
app.get("/", (req, res) => {
  res.send("Medicare API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
