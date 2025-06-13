//Ward page
const mongoose = require('mongoose');

const wardSchema = new mongoose.Schema({
  wardName: String,
  type: String,
  totalBeds: Number,
  availability: Number
});

module.exports = mongoose.model('Ward', wardSchema);
