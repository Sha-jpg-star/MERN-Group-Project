// backend/server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const doctorRoutes = require("./routes");
const patientsRoutes = require("./route");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connect
mongoose.connect("mongodb://localhost:27017/medicare", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("MongoDB connected ✅"));

// ✅ API routes
app.use("/api/doctors", doctorRoutes);
app.use("/api/Patients", patientsRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));

