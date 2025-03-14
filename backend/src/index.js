import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import connectToMongoDB from "./db/ConnectToMongoDB.js";
import authRoutes from "./routes/auth.routes.js";
import menuRoutes from "./routes/menu.routes.js";
import orderRoutes from "./routes/order.routes.js";
import reservationRoutes from "./routes/reservation.routes.js";

const app = express();

const PORT = process.env.PORT || 5000;
dotenv.config();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/reservations', reservationRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});