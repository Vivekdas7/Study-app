import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaLaptopCode, 
  FaDatabase, 
  FaProjectDiagram, 
  FaPuzzlePiece 
} from 'react-icons/fa';
import { SiLeetcode, SiHackerrank, SiCodechef } from 'react-icons/si';

const CodingPractice = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const codingPracticeCategories = [
    {
      name: 'Data Structures',
      icon: <FaDatabase />,
      description: 'Master fundamental data structures and their implementations',
      color: 'blue'
    },
    {
      name: 'Algorithms',
      icon: <FaProjectDiagram />,
      description: 'Learn and practice advanced algorithmic techniques',
      color: 'green'
    },
    {
      name: 'Problem Solving',
      icon: <FaPuzzlePiece />,
      description: 'Solve challenging coding problems and improve problem-solving skills',
      color: 'purple'
    }
  ];

  const codingPlatforms = [
    { 
      name: 'LeetCode', 
      icon: <SiLeetcode />, 
      url: 'https://leetcode.com',
      color: 'blue' 
    },
    { 
      name: 'HackerRank', 
      icon: <SiHackerrank />, 
      url: 'https://hackerrank.com',
      color: 'green' 
    },
    { 
      name: 'CodeChef', 
      icon: <SiCodechef />, 
      url: 'https://codechef.com',
      color: 'red' 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Coding Practice Arena</h1>
          <p className="text-xl text-gray-600">Sharpen your coding skills, learn new technologies, and prepare for technical interviews</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {codingPracticeCategories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedLanguage(category)}
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Coding Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {codingPlatforms.map((platform, index) => (
              <motion.a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-${platform.color}-50 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all`}
              >
                <div className={`text-5xl text-${platform.color}-600 mb-4`}>
                  {platform.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{platform.name}</h3>
                <p className="text-gray-600 mt-2">Practice Coding Problems</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CodingPractice;
