// src/Popup.js

import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Popup = ({ message, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300"
      >
        <div className="flex items-center mb-4">
          <FaCheckCircle className="text-green-500 text-2xl mr-2" />
          <h2 className="text-2xl font-bold">Success</h2>
        </div>
        <p className="mb-4 text-gray-700">{message}</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-300"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Popup;
