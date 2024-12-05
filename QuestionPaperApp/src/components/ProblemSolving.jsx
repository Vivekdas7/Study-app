import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalculator, FaPuzzlePiece, FaLightbulb } from 'react-icons/fa';

const ProblemSolving = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const problemCategories = [
    {
      name: 'Mathematical Problems',
      icon: <FaCalculator />,
      description: 'Solve challenging mathematical problems across various difficulty levels',
      color: 'blue'
    },
    {
      name: 'Logical Reasoning',
      icon: <FaPuzzlePiece />,
      description: 'Enhance your critical thinking and problem-solving skills',
      color: 'green'
    },
    {
      name: 'Brain Teasers',
      icon: <FaLightbulb />,
      description: 'Stimulate your mind with tricky and engaging puzzles',
      color: 'purple'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Problem Solving Hub</h1>
          <p className="text-xl text-gray-600">Challenge yourself, expand your skills, and grow your problem-solving abilities</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {problemCategories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`bg-white rounded-xl shadow-lg p-6 text-center cursor-pointer border-l-4 border-${category.color}-500 hover:shadow-xl transition-all`}
            >
              <div className={`text-5xl text-${category.color}-600 mb-4 flex justify-center`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.name}</h3>
              <p className="text-gray-600">{category.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {selectedCategory.name} Problems
            </h2>
            <p className="text-gray-600 mb-6">
              Coming soon! We're working on bringing you an extensive collection of {selectedCategory.name.toLowerCase()}.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProblemSolving;
