import express from 'express';
const router = express.Router();
import MenuItem  from '../models/menu.model.js';
import { protect, authorize }  from '../middleware/auth.middleware.js';

// Get all menu items
router.get('/all-menu', async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add menu item (admin only)
router.post('/admin-menu', protect, authorize('admin'), async (req, res) => {
  try {
    const menuItem = new MenuItem(req.body);
    await menuItem.save();
    res.status(201).json(menuItem);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get a single menu item by ID
router.get('/menu-by-id/:id', async (req, res) => {
  try {
    const menuItem = await MenuItem.findById(req.params.id);
    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.json(menuItem);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update menu item (admin only)
router.put('/:id', protect, authorize('admin'), async (req, res) => {
  try {
    const menuItem = await MenuItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.json(menuItem);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete menu item (admin only)
router.delete('/:id', protect, authorize('admin'), async (req, res) => {
  try {
    const menuItem = await MenuItem.findByIdAndDelete(req.params.id);
    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.json({ message: 'Menu item removed' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;