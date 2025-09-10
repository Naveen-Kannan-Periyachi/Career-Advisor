const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');

const router = express.Router();

// Register
router.post('/register',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    body('phone').matches(/^[6-9]\d{9}$/).withMessage('Please provide a valid 10-digit phone number'),
    body('age').isInt({ min: 13, max: 30 }).withMessage('Age must be between 13 and 30'),
    body('gender').isIn(['male', 'female', 'other', 'prefer_not_to_say']).withMessage('Please select a valid gender'),
    body('location').notEmpty().withMessage('Location is required'),
    body('class').isIn(['10', '11', '12', 'UG', 'PG']).withMessage('Please select a valid class'),
    body('role').isIn(['student', 'parent', 'counselor']).withMessage('Please select a valid role'),
    body('preferredStream').isIn(['science', 'commerce', 'arts', 'vocational', 'not_sure']).withMessage('Please select a preferred stream')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Invalid input', errors: errors.array() });
    }
    
    const { 
      name, email, password, phone, age, gender, location, 
      class: userClass, role, preferredStream, interests 
    } = req.body;
    
    try {
      let user = await User.findOne({ email });
      if (user) return res.status(400).json({ message: 'User already exists' });
      
      const hashed = await bcrypt.hash(password, 10);
      user = new User({ 
        name, 
        email, 
        password: hashed, 
        phone, 
        age: parseInt(age), 
        gender, 
        location, 
        class: userClass, 
        role, 
        preferredStream, 
        interests: Array.isArray(interests) ? interests : [interests].filter(Boolean)
      });
      
      await user.save();
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
      res.status(201).json({ token, user: { ...user.toObject(), password: undefined } });
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  }
);

// Login
router.post('/login',
  [
    body('email').isEmail(),
    body('password').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Invalid input', errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: 'Invalid credentials' });
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
      res.json({ token, user: { ...user.toObject(), password: undefined } });
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  }
);

// Auth check
router.get('/me', async (req, res) => {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) return res.status(401).json({ message: 'No token' });
  const token = auth.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    const user = await User.findById(decoded.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ user });
  } catch (err) {
    res.status(401).json({ message: 'Invalid token', error: err.message });
  }
});

module.exports = router;
