import express  from 'express';
const router = express.Router();
import Order  from "../models/order.model.js";
import { protect, authorize }  from '../middleware/auth.middleware.js';

// Get user orders
router.get('/my-orders', protect, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .populate('items.menuItem')
      .sort('-createdAt');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create order
router.post('/create-order', protect, async (req, res) => {
  try {
    const order = new Order({
      user: req.user._id,
      ...req.body
    });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update order status (staff/admin only)
router.patch('/:id/order-status', protect, authorize('staff', 'admin'), async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all orders (staff/admin only)
router.get('/all-orders', protect, authorize('staff', 'admin'), async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('user', 'username email')
      .populate('items.menuItem')
      .sort('-createdAt');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;