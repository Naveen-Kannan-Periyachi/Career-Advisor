
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./middleware/connectDB');
const User = require('./models/User');
const Assessment = require('./models/Assessment');
const College = require('./models/College');
const Course = require('./models/Course');
const Recommendation = require('./models/Recommendation');

const authRoutes = require('./routes/auth');

const app = express();
app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());

connectDB();


// Auth routes
app.use('/api/auth', authRoutes);

// Example: Create a user (for admin/testing only)
app.post('/api/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Example: Get all users
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Example: Create an assessment
app.post('/api/assessments', async (req, res) => {
  try {
    const assessment = new Assessment(req.body);
    await assessment.save();
    res.status(201).json(assessment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Example: Get all assessments
app.get('/api/assessments', async (req, res) => {
  const assessments = await Assessment.find();
  res.json(assessments);
});

// Example: Create a college
app.post('/api/colleges', async (req, res) => {
  try {
    const college = new College(req.body);
    await college.save();
    res.status(201).json(college);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Example: Get all colleges
app.get('/api/colleges', async (req, res) => {
  const colleges = await College.find();
  res.json(colleges);
});

// Example: Create a course
app.post('/api/courses', async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Example: Get all courses
app.get('/api/courses', async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

// Example: Create a recommendation
app.post('/api/recommendations', async (req, res) => {
  try {
    const recommendation = new Recommendation(req.body);
    await recommendation.save();
    res.status(201).json(recommendation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Example: Get all recommendations
app.get('/api/recommendations', async (req, res) => {
  const recommendations = await Recommendation.find();
  res.json(recommendations);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
