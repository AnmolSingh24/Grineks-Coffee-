import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true,
    enum: ['beverages', 'snacks', 'desserts', 'main']
  },
  imageUrl: {
    type: String
  },
  available: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

const MenuItem = mongoose.model('MenuItem', menuItemSchema);
export default MenuItem;