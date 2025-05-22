import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookroute from './route/book.route.js';
import userroute from './route/user.route.js';
import cors from 'cors'


dotenv.config();
const app = express();
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://e-commerrce-6ocm.vercel.app'
  ],
  credentials: true
}));
//  converting body data to json 
app.use(express.json())
const PORT = process.env.PORT || 4000;

// Connect to MongoDB Atlas
const URI = process.env.MONGODB_URI; //  variable name

async function connectDb() {
  try {
    await mongoose.connect(URI);
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.log('MongoDB connection error:', error);
  }
}

connectDb();

// defining routes 
app.use('/book',bookroute);
app.use('/user',userroute)

app.get('/', (req, res) => {
  res.send('Hello Express');
});

// app.use('/contact', (req, res) => {
//   res.send('<h1>This is the contact page</h1>'); // Fixed the tag
// });

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
