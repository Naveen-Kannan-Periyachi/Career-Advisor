const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  age: { type: Number, required: true, min: 13, max: 30 },
  gender: { 
    type: String, 
    required: true,
    enum: ['male', 'female', 'other', 'prefer_not_to_say']
  },
  location: { type: String, required: true },
  class: { 
    type: String, 
    required: true,
    enum: ['10', '11', '12', 'UG', 'PG']
  },
  role: { 
    type: String, 
    required: true,
    enum: ['student', 'parent', 'counselor']
  },
  preferredStream: { 
    type: String, 
    required: true,
    enum: ['science', 'commerce', 'arts', 'vocational', 'not_sure']
  },
  interests: [{ 
    type: String, 
    enum: ['Science', 'Mathematics', 'Commerce', 'Arts', 'Vocational', 'Sports', 'Technology', 'Languages', 'Other']
  }],
  assessmentResults: {
    type: mongoose.Schema.Types.Mixed,
    default: null
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
