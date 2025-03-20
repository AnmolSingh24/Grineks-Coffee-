import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  date: {
    type: Date,
    required: true,
    validate: {
      validator: function (v) {
        return v >= new Date(); // Ensures reservation date is in the future
      },
      message: 'Reservation date must be in the future'
    }
  },
  time: {
    type: String,
    required: true,
    match: [/^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$/, 'Time must be in HH:MM format']
  },
  guests: {
    type: Number,
    required: true,
    min: [1, 'At least one guest is required'],
    max: [20, 'Maximum 20 guests allowed per reservation']
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending',
    index: true
  },
  specialRequests: {
    type: String,
    trim: true,
    maxlength: [500, 'Special requests cannot exceed 500 characters']
  },
  contactInfo: {
    phone: {
      type: String,
      required: true,
      match: [/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format']
    },
    email: {
      type: String,
      required: true,
      match: [/^\S+@\S+\.\S+$/, 'Invalid email format']
    }
  }
}, { timestamps: true });

const Reservation = mongoose.model('Reservation', reservationSchema);
export default Reservation;