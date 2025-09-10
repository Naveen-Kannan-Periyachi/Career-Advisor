const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  careerPaths: [{ type: String }],
  colleges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'College' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Course', courseSchema);
