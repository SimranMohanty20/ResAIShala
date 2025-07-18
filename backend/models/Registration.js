// backend/models/Registration.js

const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
  olympiad: { type: String, required: true },
  studentName: { type: String, required: true },
  class: { type: String, required: true },
  schoolName: { type: String, required: true },
  cityCountry: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  schoolContactNumber: { type: String, required: true },
  studentEmail: { type: String, required: true },
  schoolEmail: { type: String, required: true },
  geniusQuestions: { type: Boolean, required: true },
});

module.exports = mongoose.model('Registration', RegistrationSchema);
