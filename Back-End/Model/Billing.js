const mongoose = require("mongoose");

const billingSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  service: { type: String, required: true },
  amount: { type: Number, required: true },
  billingDate: { type: Date, required: true },
});

module.exports = mongoose.model("Billing", billingSchema);

