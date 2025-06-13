const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Route files
const doctorRoutes = require("./routes/Doctor");
const appointmentRoutes = require("./routes/Appointment");
const patientsRoutes = require("./routes/Patients");
const billingRoutes = require("./routes/Billing");
const wardsRoutes = require("./routes/Wards");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/ward", wardsRoutes);

// MongoDB connection
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
app.use("/api/billing", billingRoutes); // 🔁 fixed `/Billing` to `/billing` (lowercase route)
app.use("/api/ward", wardsRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Medicare API is running...");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
