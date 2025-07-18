// backend/server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Registration = require('./models/Registration');

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Atlas connection string
const dbURI = 'mongodb+srv://vikrammali2345:4BtxawBy9XYx5Fmq@resaishala.um2yeyd.mongodb.net/olympiadRegistration?retryWrites=true&w=majority&appName=Resaishala';

// Connect to MongoDB Atlas
mongoose.connect(dbURI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });

// API endpoint
app.post('/api/register', async (req, res) => {
  try {
    const formData = req.body;
    const registration = new Registration(formData);
    await registration.save();
    res.send('Form data received and saved to database');
  } catch (error) {
    res.status(500).send('Error saving data to database');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
