import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Menu item name is required'],
    trim: true,
    unique: true,
    minlength: [3, 'Menu item name must be at least 3 characters long'],
    maxlength: [100, 'Menu item name cannot exceed 100 characters']
  },
  category: {
    type: String,
    required: true,
    enum: ['beverages', 'snacks', 'desserts', 'main'],
    index: true
  },
  imageUrl: {
    type: String,
    validate: {
      validator: function (v) {
        return /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))$/i.test(v);
      },
      message: 'Invalid image URL format'
    }
  },
  available: {
    type: Boolean,
    default: true
  },
  ingredients: [{
    type: String,
    trim: true,
    required: true
  }],
  dietaryInfo: {
    vegan: { type: Boolean, default: false },
    vegetarian: { type: Boolean, default: false },
    glutenFree: { type: Boolean, default: false },
    halal: { type: Boolean, default: false },
    kosher: { type: Boolean, default: false }
  },
  ratings: [{
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    rating: { type: Number, min: 1, max: 5, default: 0 },
    review: { type: String, trim: true, maxlength: 500 }
  }],
  averageRating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  menuVariety: [{
    name: {
      type: String,
      required: [true, 'Variety name is required'],
      trim: true,
      minlength: [3, 'Variety name must be at least 3 characters long'],
      maxlength: [100, 'Variety name cannot exceed 100 characters']
    },
    // description: {
    //   type: String,
    //   required: [true, 'Description is required'],
    //   trim: true,
    //   minlength: [3, 'Description must be at least 10 characters long'],
    //   maxlength: [500, 'Description cannot exceed 500 characters']
    // },
    imageUrl: {
      type: String,
      validate: {
        validator: function (v) {
          return /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))$/i.test(v);
        },
        message: 'Invalid image URL format'
      }
    },
    sizes: [{
      size: { type: String, required: true, enum : ["S", "M", "L"] },
      currency: { type: String, required: true, default: "₹"},
      price: { type: Number, required: true },
    }],
    available: {
      type: Boolean,
      default: true
    }
  }],
}, { timestamps: true });

// Middleware to update the average rating before saving
menuItemSchema.pre('save', function (next) {
  if (this.ratings.length > 0) {
    this.averageRating = this.ratings.reduce((sum, r) => sum + r.rating, 0) / this.ratings.length;
  }
  next();
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);
export default MenuItem;