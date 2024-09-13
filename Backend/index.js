import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import userRouter from './Routes/UserRoute.js';
import dataRouter from './Routes/DataRoute.js';
import User from './modal/UserModal.js';


dotenv.config(); // Load environment variables from .env file

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Enable CORS
app.use(express.json()); // To parse JSON bodies

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  secure: true, // true for 465, false for other ports
  port: 465, // port for secure SMTP
});

// Routes
app.use('/user', userRouter); // User-related routes
app.use('/admission', dataRouter); // Admission-related routes



// MongoDB Connection URI and Port
const PORT = process.env.PORT || 4001;
const URI = process.env.MongoDBURI;

// MongoDB Connection
mongoose.connect(URI, { connectTimeoutMS: 30000 })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1); // Exit the process if the DB connection fails
  });

// Forgot Password Route
app.post('/auth/forgot-password', async (req, res) => {
    const { email } = req.body;
  
    try {
      const resetToken = crypto.randomBytes(32).toString('hex');
      const resetTokenExpiry = Date.now() + 3600000; // 1 hour expiry
      
      // Find user and update resetToken and resetTokenExpiry
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'No user found with this email' });
      }
  
      user.resetToken = resetToken;
      user.resetTokenExpiry = resetTokenExpiry;
      await user.save();
  
      const resetURL = `http://localhost:4001/reset-password/${resetToken}`;
  
      await transporter.sendMail({
        to: email,
        subject: 'Password Reset',
        text: `You requested a password reset. Click the link to reset your password: ${resetURL}`,
      });
  
      res.status(200).json({ message: 'Password reset link sent to your email.' });
    } catch (error) {
      console.error('Error sending email: ', error);
      res.status(500).json({ message: 'Error sending email. Please try again later.' });
    }
  });

// Reset Password Route
app.post('/auth/reset-password', async (req, res) => {
    const { token, password } = req.body;
  
    try {
      const user = await User.findOne({
        resetToken: token,
        resetTokenExpiry: { $gt: Date.now() },
      });
  
      if (!user) {
        return res.status(400).json({ message: 'Invalid or expired token' });
      }
  
      user.password = await bcrypt.hash(password, 10); // Hash new password
      user.resetToken = undefined;
      user.resetTokenExpiry = undefined;
      await user.save();
  
      res.status(200).json({ message: 'Password has been reset' });
    } catch (error) {
      console.error('Error resetting password: ', error);
      res.status(500).json({ message: 'Error resetting password. Please try again later.' });
    }
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
