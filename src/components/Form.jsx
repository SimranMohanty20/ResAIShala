// src/Form.js

import React, { useState } from 'react';
import axios from 'axios';
import Popup from './Popup';
import { motion } from 'framer-motion';
import { FaBrain, FaUsers, FaAward, FaMedal } from 'react-icons/fa';

const Form = () => {
  const [formData, setFormData] = useState({
    olympiad: '',
    studentName: '',
    class: '',
    schoolName: '',
    cityCountry: '',
    mobileNumber: '',
    schoolContactNumber: '',
    studentEmail: '',
    schoolEmail: '',
    geniusQuestions: false,
  });

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Convert formData to URLSearchParams
    const formBody = new URLSearchParams(formData).toString();
  
    try {
      const response = await axios.post('https://resaishala.com/api/register.php', formBody, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      setPopupMessage('Your registration was successful!');
      setShowPopup(true);
      setFormData({
        olympiad: '',
        studentName: '',
        class: '',
        schoolName: '',
        cityCountry: '',
        mobileNumber: '',
        schoolContactNumber: '',
        studentEmail: '',
        schoolEmail: '',
        geniusQuestions: false,
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setPopupMessage('Failed to submit the form. Please try again.');
      setShowPopup(true);
    }
  };
  

  const hoverEffect = {
    whileHover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }
  };

  return (
    <div className="flex flex-col md:flex-row items-start justify-center min-h-screen p-6 bg-gradient-to-r from-teal-100 via-blue-200 to-blue-300">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-8 md:w-1/2 md:mr-8 bg-white p-6 rounded-lg shadow-lg"
        {...hoverEffect}
      >
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <div className="p-6">
            <h1 className="text-4xl font-bold text-blue-900 mb-6">International Olympiad Registration 2024</h1>
            <p className="text-lg mb-4">
              Welcome to the SCO International Olympiad 2024! Join us in what promises to be the most prestigious online competition of the year, involving students from 26 countries and 23,000 schools.
            </p>
            <p className="text-lg mb-4">
              <strong>Why Participate?</strong><br />
              - Gain global recognition and enhance your academic profile.<br />
              - Access to exclusive study materials and resources.<br />
              - Compete with bright minds from around the world and win exciting prizes.
            </p>
            <p className="text-lg mb-4">
              <strong>Highlights:</strong><br />
              - Comprehensive study resources.<br />
              - Global exposure.<br />
              - Exciting prizes and awards.<br />
              - Focus on cutting-edge subjects like AI.
            </p>
            <p className="text-lg">
              Don't miss this opportunity to challenge yourself and make a mark in the global academic arena. Register now and embark on an exciting intellectual journey!
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 relative overflow-hidden" {...hoverEffect}>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <FaMedal className="text-6xl text-blue-600 mb-4 md:mb-0" />
            <div>
              <h2 className="text-3xl font-semibold text-blue-800 mb-6">International AI Olympiad</h2>
              <p className="text-lg mb-4">
                The International AI Olympiad is a premier event focused on Artificial Intelligence. Test your skills and knowledge in this rapidly evolving field, and showcase your innovative ideas.
              </p>
              <p className="text-lg mb-4">
                <strong>Benefits of Participation:</strong><br />
                - In-depth understanding of AI concepts.<br />
                - Opportunities to connect with industry experts.<br />
                - Enhance your resume with a prestigious accolade.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 mt-6">
            <div className="flex-1 flex flex-col items-center">
              <FaBrain className="text-6xl text-blue-600 mb-4 animate-bounce" />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Cutting-Edge AI Topics</h3>
              <p className="text-lg text-gray-600">
                Explore advanced AI topics including Machine Learning, Deep Learning, Neural Networks, and Natural Language Processing. Engage with real-world AI challenges and solutions.
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <FaUsers className="text-6xl text-blue-600 mb-4 animate-bounce" />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Global Networking</h3>
              <p className="text-lg text-gray-600">
                Connect with peers, experts, and industry leaders from around the world. Enhance your learning experience through discussions, webinars, and collaborative projects.
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <FaAward className="text-6xl text-blue-600 mb-4 animate-bounce" />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Exclusive Prizes and Awards</h3>
              <p className="text-lg text-gray-600">
                Win exciting prizes and recognition. Our Olympiad offers scholarships, internships, and opportunities to showcase your skills on a global stage.
              </p>
            </div>
          </div>
          <p className="mt-4 text-lg text-gray-700">
            Join us in the International AI Olympiad and be at the forefront of technological innovation. Challenge yourself, collaborate globally, and pave the way for the future of AI.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 mt-6" {...hoverEffect}>
          <h2 className="text-3xl font-semibold text-blue-900 mb-4">Exam Date</h2>
          <p className="text-lg text-gray-700">The exam date will be announced soon. Stay tuned for updates!</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="sticky top-0 bg-white p-6 rounded-lg shadow-lg md:w-1/2 mb-8 md:mb-0"
        {...hoverEffect}
      >
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">Olympiad Registration 2024 Form</h2>
          <select
            name="olympiad"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.olympiad}
            onChange={handleChange}
          >
            <option>Select an Olympiad</option>
            <option>AI Olympiad</option>
            {/* Add more options as needed */}
          </select>
          <input
            type="text"
            name="studentName"
            placeholder="Student Name"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.studentName}
            onChange={handleChange}
          />
          <select
            name="class"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.class}
            onChange={handleChange}
          >
            <option>Select Class</option>
            <option>Class 1</option>
            <option>Class 2</option>
            <option>Class 3</option>
            <option>Class 4</option>
            <option>Class 5</option>
            <option>Class 6</option>
            <option>Class 7</option>
            <option>Class 8</option>
            <option>Class 9</option>
            <option>Class 10</option>
            <option>Class 11</option>
            <option>Class 12</option>
          </select>
          <input
            type="text"
            name="schoolName"
            placeholder="School Name"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.schoolName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="cityCountry"
            placeholder="City and Country"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.cityCountry}
            onChange={handleChange}
          />
          <div className="flex gap-4">
            <input
              type="text"
              name="mobileNumber"
              placeholder="Mobile No."
              className="w-1/2 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
            <input
              type="text"
              name="schoolContactNumber"
              placeholder="School Contact No."
              className="w-1/2 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.schoolContactNumber}
              onChange={handleChange}
            />
          </div>
          <input
            type="email"
            name="studentEmail"
            placeholder="Student Email ID"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.studentEmail}
            onChange={handleChange}
          />
          <input
            type="email"
            name="schoolEmail"
            placeholder="School Email ID"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.schoolEmail}
            onChange={handleChange}
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              name="geniusQuestions"
              id="geniusQuestions"
              className="mr-2"
              checked={formData.geniusQuestions}
              onChange={handleChange}
            />
            <label htmlFor="geniusQuestions" className="text-lg">Add Olympiad Genius Questions</label>
          </div>
          <motion.button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-blue-500 opacity-50 rounded-lg z-0"></span>
            <span className="relative z-10">Sign Up and Register</span>
          </motion.button>
        </form>
      </motion.div>
      {showPopup && <Popup message={popupMessage} onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default Form;
