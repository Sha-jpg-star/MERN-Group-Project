//Patients.js

const mongoose = require("mongoose");

const PatientsSchema = new mongoose.Schema({
    fullName: String,
    age: Number,
    gender: String,  
    contact: String,
    diagnosis: String,
});

module.exports = mongoose.model("Patients" ,PatientsSchema);
