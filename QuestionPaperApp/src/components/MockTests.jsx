import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  FaClipboardList, 
  FaBook, 
  FaCode, 
  FaChartBar, 
  FaRocket, 
  FaFilter, 
  FaPlay,
  FaCalculator,
  FaBrain
} from 'react-icons/fa';

const SUBJECT_ICONS = {
  'Mathematics': <FaChartBar className="text-blue-500" />,
  'Computer Science': <FaCode className="text-green-500" />,
  'General Aptitude': <FaRocket className="text-purple-500" />,
  'Engineering Mechanics': <FaBook className="text-red-500" />,
  'Computer Science Fundamentals': <FaCode className="text-green-500" />,
  'Programming Concepts': <FaBrain className="text-purple-500" />,
};

const MockTests = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [selectedTest, setSelectedTest] = useState(null);
  const [showStartDialog, setShowStartDialog] = useState(false);

  const mockTests = [
    { 
      id: 1, 
      title: 'GATE Mathematics Mock Test', 
      subject: 'Mathematics', 
      difficulty: 'Advanced',
      duration: '3 hours',
      totalQuestions: 60,
      description: 'Comprehensive mathematics test for GATE CSE preparation',
      icon: <FaCalculator className="text-blue-500" />,
      route: '/test/gate-math',
      testType: 'gate-math'
    },
    { 
      id: 2, 
      title: 'Computer Science Fundamentals Test', 
      subject: 'Computer Science Fundamentals', 
      difficulty: 'Intermediate',
      duration: '2 hours',
      totalQuestions: 10,
      description: 'Comprehensive test covering core CS concepts',
      icon: <FaCode className="text-green-500" />,
      route: '/test/cs-fundamentals',
      testType: 'cs-fundamentals'
    },
    { 
      id: 3, 
      title: 'Appitude Test', 
      subject: 'Appitude Concepts', 
      difficulty: 'Beginner',
      duration: '1.5 hours',
      totalQuestions: 15,
      description: 'In-depth test of appitude principles and paradigms',
      icon: <FaBrain className="text-purple-500" />,
      route: '/test/aptitude-concepts',
      testType: 'aptitude'
    },
    { 
      id: 4, 
      title: 'Engineering Mechanics Test', 
      subject: 'Engineering Mechanics', 
      difficulty: 'All Levels',
      duration: '2.5 hours',
      totalQuestions: 20,
      description: 'Comprehensive test of mechanical engineering principles',
      icon: <FaBook className="text-red-500" />,
      route: '/test/engineering-mechanics',
      testType: 'engineering-mechanics'
    }
  ];

  // Handle automatic test selection from GateMathTest
  useEffect(() => {
    if (location.state?.autoSelectTest) {
      const test = mockTests.find(t => t.title === location.state.autoSelectTest);
      if (test) {
        setSelectedTest(test);
        if (location.state.startTest) {
          setShowStartDialog(true);
        }
      }
    }
  }, [location]);

  const handleStartTest = (test) => {
    setSelectedTest(test);
    setShowStartDialog(true);
  };

  const startTest = () => {
    navigate(`/test-interface`, { 
      state: { testType: selectedTest.testType } 
    });
  };

  const filteredTests = mockTests.filter(test => 
    (searchQuery === '' || 
      test.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      test.subject.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedSubject === null || test.subject === selectedSubject) &&
    (selectedDifficulty === null || test.difficulty === selectedDifficulty)
  );

  const subjects = [...new Set(mockTests.map(t => t.subject))];
  const difficulties = [...new Set(mockTests.map(t => t.difficulty))];

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">Mock Test Arena</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">Simulate exam experiences and assess your skills</p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 sm:mb-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          {/* Search */}
          <div className="relative w-full sm:w-1/2">
            <input 
              type="text" 
              placeholder="Search mock tests..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 sm:p-3 pl-8 sm:pl-10 text-sm sm:text-base bg-white text-black placeholder-gray-500 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaFilter className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm sm:text-base" />
          </div>

          {/* Filters */}
          <div className="flex space-x-2">
            <select 
              value={selectedSubject || ''} 
              onChange={(e) => setSelectedSubject(e.target.value || null)}
              className="p-1.5 sm:p-2 text-sm sm:text-base border border-gray-300 rounded-xl bg-white text-black"
            >
              <option value="">All Subjects</option>
              {subjects.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>

            <select 
              value={selectedDifficulty || ''} 
              onChange={(e) => setSelectedDifficulty(e.target.value || null)}
              className="p-1.5 sm:p-2 text-sm sm:text-base border border-gray-300 rounded-xl bg-white text-black"
            >
              <option value="">All Difficulties</option>
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Mock Tests Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {filteredTests.map((test) => (
            <motion.div 
              key={test.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-2 sm:mb-4">
                  <div className="text-2xl sm:text-3xl">
                    {test.icon}
                  </div>
                  <span className={`
                    text-xs sm:text-sm font-semibold 
                    ${test.difficulty === 'Beginner' ? 'text-green-600' : 
                      test.difficulty === 'Intermediate' ? 'text-blue-600' : 
                      test.difficulty === 'Advanced' ? 'text-red-600' : 'text-purple-600'}
                  `}>
                    {test.difficulty}
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2 truncate">{test.title}</h2>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-4 line-clamp-2">{test.description}</p>
                <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <FaClipboardList />
                    <span>{test.totalQuestions} Questions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaPlay />
                    <span>{test.duration}</span>
                  </div>
                </div>
                <button 
                  onClick={() => handleStartTest(test)}
                  className="w-full mt-3 sm:mt-4 p-2 sm:p-3 bg-purple-600 text-white text-sm sm:text-base font-semibold rounded-lg 
                  hover:bg-purple-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  Start Test
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredTests.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 mt-12"
          >
            <p className="text-2xl mb-4">No mock tests found 📝</p>
            <p>Try adjusting your search or filters</p>
          </motion.div>
        )}
      </div>

      {/* Start Test Dialog */}
      {showStartDialog && selectedTest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 max-w-md w-full mx-4"
          >
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4">Start {selectedTest.title}</h2>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
              <p><strong>Total Questions:</strong> {selectedTest.totalQuestions}</p>
              <p><strong>Duration:</strong> {selectedTest.duration}</p>
              <p><strong>Difficulty:</strong> {selectedTest.difficulty}</p>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <button 
                onClick={() => setShowStartDialog(false)}
                className="flex-1 p-2 sm:p-3 bg-gray-200 text-gray-800 text-sm sm:text-base font-semibold rounded-lg 
                hover:bg-gray-300 transition-colors duration-200"
              >
                Cancel
              </button>
              <button 
                onClick={startTest}
                className="flex-1 p-2 sm:p-3 bg-purple-600 text-white text-sm sm:text-base font-semibold rounded-lg 
                hover:bg-purple-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Confirm
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default MockTests;
