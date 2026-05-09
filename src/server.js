import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

console.log('=== INICIANDO SERVER ===');

process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION:', err);
});

process.on('unhandledRejection', (err) => {
  console.error('UNHANDLED REJECTION:', err);
});

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

console.log('PORT:', PORT);
console.log('MONGO_URI EXISTS:', !!MONGO_URI);

async function startServer() {

  try {

    console.log('Conectando a MongoDB...');

    await mongoose.connect(MONGO_URI);

    console.log('Connected to MongoDB Atlas');

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {

    console.error('MongoDB connection error:', error);

  }

}

startServer();