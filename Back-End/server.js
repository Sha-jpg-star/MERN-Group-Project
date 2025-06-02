const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import routes
const doctorRoutes = require("./routes/Doctor");
const appointmentRoutes = require("./routes/Appointment");
const patientsRoutes = require("./routes/Patients");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/medicare", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/Patients", patientsRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Medicare API is running...");
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
