const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const doctorRoutes = require("./routes/Doctor");
const appointmentRoutes = require("./routes/Appointment");
const patientsRoutes = require("./routes/Patients");
const adminRoutes = require("./routes/admin.routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection (use one DB for all: ex: "medicare")
mongoose
  .connect("mongodb://localhost:27017/medicare", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/patients", patientsRoutes);
app.use("/api/admin", adminRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Medicare API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port"));
