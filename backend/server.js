import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
// import xss from  'xss-clean';
import hpp from 'hpp';
import { apiLimiter } from './middleware/security.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


const app  = express();
//middleware
app.use(express.json());
app.use(helmet());
app.use(cors());
// app.use(xss());
app.use(hpp());

//rate limiting
app.use(apiLimiter);
app.use('/api/v1/auth', authRoutes);
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Server error'
  });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});