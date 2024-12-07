import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBook, FaVideo, FaCheckCircle } from 'react-icons/fa';
import ReactLogo from '../assets/images/react-logo.svg';

const ReactCoursePage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const courseModules = [
    {
      title: 'React Fundamentals',
      description: 'Learn core React concepts, components, and state management.',
      icon: <FaCode />,
      completed: true
    },
    {
      title: 'Advanced React',
      description: 'Master hooks, context API, and advanced state management techniques.',
      icon: <FaBook />,
      completed: false
    },
    {
      title: 'React Ecosystem',
      description: 'Explore routing, performance optimization, and modern React practices.',
      icon: <FaVideo />,
      completed: false
    }
  ];

  const renderSection = () => {
    switch(activeSection) {
      case 'overview':
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Course Overview</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Comprehensive React Masterclass covering modern web development techniques. 
              Learn to build scalable, performant web applications using React's latest features 
              and best practices.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {courseModules.map((module, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`
                    bg-gray-50 
                    p-6 
                    rounded-xl 
                    border-l-4 
                    ${module.completed ? 'border-green-500' : 'border-blue-500'}
                  `}
                >
                  <div className="text-4xl mb-4 text-blue-600">
                    {module.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {module.description}
                  </p>
                  {module.completed && (
                    <div className="flex items-center text-green-600">
                      <FaCheckCircle className="mr-2" />
                      <span>Completed</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      case 'curriculum':
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Detailed Curriculum</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Module 1: React Basics</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Component Architecture</li>
                  <li>JSX and Rendering</li>
                  <li>Props and State</li>
                  <li>Event Handling</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Module 2: Advanced React</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Hooks (useState, useEffect, etc.)</li>
                  <li>Context API</li>
                  <li>Performance Optimization</li>
                  <li>Custom Hooks</li>
                </ul>
              </div>
            </div>
          </motion.div>
        );
      case 'resources':
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Learning Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-yellow-800 mb-4">Recommended Books</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• React Design Patterns</li>
                  <li>• Pro React</li>
                  <li>• Fullstack React</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Online Resources</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• React Official Docs</li>
                  <li>• React Hooks Guide</li>
                  <li>• Frontend Masters</li>
                </ul>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row items-center mb-8 sm:mb-12 space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <img 
            src={ReactLogo} 
            alt="React Logo" 
            className="w-24 h-24 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-xl shadow-md object-contain"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-700">
              React Masterclass
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-2">
              Advanced React development with modern web technologies
            </p>
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center mb-6 space-x-2 sm:space-x-4">
          {['overview', 'curriculum', 'resources'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`
                px-3 py-2 sm:px-6 sm:py-3 
                rounded-full 
                capitalize 
                font-semibold 
                text-xs sm:text-base
                transition-all 
                ${activeSection === section 
                  ? 'bg-teal-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
              `}
            >
              {section}
            </button>
          ))}
        </div>

        <div className="w-full">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default ReactCoursePage;
