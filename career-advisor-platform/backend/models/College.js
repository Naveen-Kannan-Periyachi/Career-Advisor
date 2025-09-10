const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  courses: [{ type: String }],
  facilities: [{ type: String }],
  admissionInfo: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('College', collegeSchema);
