import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBook, FaVideo, FaCheckCircle, FaCheck } from 'react-icons/fa';
import JavascriptLogo from '../assets/images/javascript-logo.svg';

const JavaScriptCoursePage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const courseModules = [
    {
      title: 'JavaScript Fundamentals',
      description: 'Learn core JavaScript syntax, variables, data types, and basic operations.',
      icon: <FaCode />,
      completed: true
    },
    {
      title: 'DOM Manipulation',
      description: 'Master interacting with HTML and creating dynamic web pages.',
      icon: <FaBook />,
      completed: false
    },
    {
      title: 'Async Programming',
      description: 'Understand Promises, async/await, and handling asynchronous operations.',
      icon: <FaVideo />,
      completed: false
    }
  ];

  const renderOverview = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid md:grid-cols-2 gap-8"
    >
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-700 mb-4">
          Course Overview
        </h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          Master modern JavaScript from beginner to advanced level. Learn core concepts, 
          advanced techniques, and build real-world applications with cutting-edge web technologies.
        </p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl sm:text-2xl font-semibold text-yellow-600 mb-4">
          What You'll Learn
        </h3>
        <ul className="space-y-2 text-base sm:text-base text-gray-700">
          {[
            'ES6+ Advanced Features',
            'Asynchronous Programming',
            'DOM Manipulation',
            'Functional Programming',
            'Modern JavaScript Frameworks'
          ].map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <FaCheck className="text-yellow-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );

  const renderCurriculum = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white p-8 rounded-xl shadow-lg"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Detailed Curriculum</h2>
      <div className="space-y-6">
        <div className="bg-blue-50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Module 1: JavaScript Basics</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Variables and Data Types</li>
            <li>Operators and Expressions</li>
            <li>Control Structures</li>
            <li>Functions and Scope</li>
          </ul>
        </div>
        <div className="bg-green-50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-green-800 mb-4">Module 2: Advanced Concepts</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Object-Oriented Programming</li>
            <li>Prototypes and Inheritance</li>
            <li>ES6+ Features</li>
            <li>Functional Programming</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );

  const renderResources = () => (
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
            <li>• Eloquent JavaScript</li>
            <li>• You Don't Know JS</li>
            <li>• JavaScript: The Good Parts</li>
          </ul>
        </div>
        <div className="bg-purple-50 p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-purple-800 mb-4">Online Resources</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• MDN Web Docs</li>
            <li>• JavaScript.info</li>
            <li>• FreeCodeCamp</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );

  const renderSection = () => {
    switch(activeSection) {
      case 'overview':
        return renderOverview();
      case 'curriculum':
        return renderCurriculum();
      case 'resources':
        return renderResources();
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
            src={JavascriptLogo} 
            alt="JavaScript Logo" 
            className="w-24 h-24 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-xl shadow-md object-contain"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-700">
              Learn JavaScript
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-2">
              Master modern web development with comprehensive JavaScript training
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
                  ? 'bg-yellow-500 text-white' 
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

export default JavaScriptCoursePage;
