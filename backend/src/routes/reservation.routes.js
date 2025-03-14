import express from "express";
const router = express.Router();
import Reservation from "../models/reservation.model.js";
import { protect, authorize } from "../middleware/auth.middleware.js";

// Get user reservations
router.get('/my-reservations', protect, async (req, res) => {
  try {
    const reservations = await Reservation.find({ user: req.user._id })
      .sort('-date');
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create reservation
router.post('/create-reservation', protect, async (req, res) => {
  try {
    const reservation = new Reservation({
      user: req.user._id,
      ...req.body
    });
    await reservation.save();
    res.status(201).json(reservation);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update reservation
router.put('/:update-id', protect, async (req, res) => {
  try {
    const reservation = await Reservation.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!reservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }

    Object.assign(reservation, req.body);
    await reservation.save();
    res.json(reservation);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Cancel reservation
router.delete('/:reservation-id', protect, async (req, res) => {
  try {
    const reservation = await Reservation.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      { status: 'cancelled' },
      { new: true }
    );

    if (!reservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }

    res.json({ message: 'Reservation cancelled' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all reservations (staff/admin only)
router.get('/all-reservation', protect, authorize('staff', 'admin'), async (req, res) => {
  try {
    const reservations = await Reservation.find()
      .populate('user', 'username email')
      .sort('-date');
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;