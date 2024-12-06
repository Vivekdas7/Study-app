import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalculator, FaPlay, FaClock, FaTrophy } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const GateMathTest = () => {
  const [isStarting, setIsStarting] = useState(false);
  const navigate = useNavigate();

  const handleStartTest = () => {
    setIsStarting(true);
    // Navigate to Mock Tests page with GATE Mathematics filter
    setTimeout(() => {
      navigate('/mock-tests', { 
        state: { 
          autoSelectTest: 'GATE Mathematics Mock Test',
          startTest: true
        } 
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <FaCalculator className="text-6xl text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">GATE Mathematics Mock Test</h1>
          <p className="text-xl text-gray-600">Test your GATE Mathematics preparation with our comprehensive mock test</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4">
              <FaClock className="text-3xl text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800">Duration</h3>
              <p className="text-gray-600">180 Minutes</p>
            </div>
            <div className="text-center p-4">
              <FaCalculator className="text-3xl text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800">Questions</h3>
              <p className="text-gray-600">65 Questions</p>
            </div>
            <div className="text-center p-4">
              <FaTrophy className="text-3xl text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800">Total Marks</h3>
              <p className="text-gray-600">100 Marks</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Test Instructions:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
              <li>Total duration of the test is 180 minutes</li>
              <li>The test consists of 65 questions carrying 100 marks</li>
              <li>Questions are of multiple choice type with one or more correct options</li>
              <li>Negative marking for wrong answers (1/3 marks)</li>
              <li>Calculator is allowed</li>
              <li>Once started, the test timer cannot be paused</li>
            </ul>

            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStartTest}
                disabled={isStarting}
                className={`flex items-center space-x-3 bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors ${
                  isStarting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                <FaPlay />
                <span>{isStarting ? 'Starting Test...' : 'Start Mock Test'}</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GateMathTest;
