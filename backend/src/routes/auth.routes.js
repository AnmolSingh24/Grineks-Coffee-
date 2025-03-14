import express from 'express';
const router = express.Router();
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import User from '../models/user.model.js';
import { protect } from '../middleware/auth.middleware.js';

// Register user
router.post('/register',
  [
    body('fullname').trim().notEmpty(),
    body('username').trim().notEmpty(),
    body('email').isEmail(),
    body('password').isLength({ min: 8 }),
    body('confirmpassword').isLength({ min: 8 })
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { fullname, username, email, password, confirmpassword, role } = req.body;

      // Check if user exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Create user - only allow 'user' role during registration
      // Admin roles must be set manually in the database for security
      user = new User({
        fullname,
        username,
        email,
        password,
        confirmpassword,
        role: 'user' // Force regular user role on registration
      });

      await user.save();

      // Create token
      const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
      );

      res.status(201).json({ 
        token,
        user: {
          id: user._id,
          fullname : user.fullname,
          username: user.username,
          email: user.email,
          password : user.password,
          confirmpassword : user.confirmpassword,
          role: user.role
        }
      });
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
      console.log(err.message);
    }
  }
);

// Login user
router.post('/login',
  [
    body('email').isEmail(),
    body('password').exists()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password } = req.body;

      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Check password
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Create token
      const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
      );

      res.json({ 
        token,
        user: {
          id: user._id,
          email: user.email,
          password : user.password,
          role: user.role
        }
      });
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  }
);

// Get current user profile
router.get('/me', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Check if user is admin
router.get('/check-admin', protect, async (req, res) => {
  try {
    res.json({ 
      isAdmin: req.user.role === 'admin',
      role: req.user.role 
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;