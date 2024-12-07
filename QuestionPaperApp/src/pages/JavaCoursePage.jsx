import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaBook, FaVideo, FaCheckCircle } from 'react-icons/fa';
import JavaLogo from '../assets/images/java-logo.svg';

const JavaCoursePage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const courseModules = [
    {
      title: 'Java Fundamentals',
      description: 'Learn core Java syntax, OOP principles, and basic programming concepts.',
      icon: <FaCode />,
      completed: true
    },
    {
      title: 'Advanced Java',
      description: 'Master collections, generics, multithreading, and enterprise development.',
      icon: <FaBook />,
      completed: false
    },
    {
      title: 'Java Frameworks',
      description: 'Explore Spring, Hibernate, and modern Java ecosystem tools.',
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
              Comprehensive Java programming course covering core concepts, object-oriented programming, 
              and enterprise development. From beginner to advanced level, learn to build robust 
              and scalable applications.
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
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Module 1: Java Basics</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Java Syntax and Structure</li>
                  <li>Object-Oriented Programming</li>
                  <li>Exception Handling</li>
                  <li>File I/O Operations</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Module 2: Advanced Concepts</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Collections Framework</li>
                  <li>Generics</li>
                  <li>Multithreading</li>
                  <li>Java 8+ Features</li>
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
                  <li>• Head First Java</li>
                  <li>• Effective Java</li>
                  <li>• Java: The Complete Reference</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">Online Resources</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Oracle Java Tutorials</li>
                  <li>• Baeldung Java Guides</li>
                  <li>• JavaPoint Tutorials</li>
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
            src={JavaLogo} 
            alt="Java Logo" 
            className="w-24 h-24 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-xl shadow-md object-contain"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-700">
              Learn Java
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-2">
              Comprehensive Java programming from basics to advanced concepts
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
                  ? 'bg-blue-500 text-white' 
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

export default JavaCoursePage;
