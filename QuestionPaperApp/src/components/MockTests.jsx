import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaClipboardList, 
  FaBook, 
  FaCode, 
  FaChartBar, 
  FaRocket, 
  FaFilter, 
  FaPlay 
} from 'react-icons/fa';

const SUBJECT_ICONS = {
  'Mathematics': <FaChartBar className="text-blue-500" />,
  'Computer Science': <FaCode className="text-green-500" />,
  'General Aptitude': <FaRocket className="text-purple-500" />,
  'Engineering Mechanics': <FaBook className="text-red-500" />
};

const MockTests = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  const mockTests = [
    { 
      id: 1, 
      title: 'GATE Mathematics Mock Test', 
      subject: 'Mathematics', 
      difficulty: 'Advanced',
      duration: '3 hours',
      totalQuestions: 65,
      description: 'Comprehensive mock test covering advanced mathematical concepts for GATE preparation'
    },
    { 
      id: 2, 
      title: 'Computer Science Fundamentals Test', 
      subject: 'Computer Science', 
      difficulty: 'Intermediate',
      duration: '2.5 hours',
      totalQuestions: 50,
      description: 'Detailed assessment of core computer science principles and programming concepts'
    },
    { 
      id: 3, 
      title: 'Engineering Mechanics Practice Exam', 
      subject: 'Engineering Mechanics', 
      difficulty: 'Beginner',
      duration: '2 hours',
      totalQuestions: 40,
      description: 'Introductory mock test for understanding basic engineering mechanics principles'
    },
    { 
      id: 4, 
      title: 'General Aptitude Comprehensive Test', 
      subject: 'General Aptitude', 
      difficulty: 'All Levels',
      duration: '1.5 hours',
      totalQuestions: 30,
      description: 'Holistic aptitude test covering logical reasoning, quantitative, and verbal skills'
    }
  ];

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
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Mock Test Arena</h1>
          <p className="text-xl text-gray-600">Simulate exam experiences and assess your skills</p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
        >
          {/* Search */}
          <div className="relative w-full sm:w-1/2">
            <input 
              type="text" 
              placeholder="Search mock tests..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 pl-10 bg-white text-black placeholder-gray-500 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Filters */}
          <div className="flex space-x-2">
            <select 
              value={selectedSubject || ''} 
              onChange={(e) => setSelectedSubject(e.target.value || null)}
              className="p-2 border border-gray-300 rounded-xl bg-white text-black"
            >
              <option value="">All Subjects</option>
              {subjects.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>

            <select 
              value={selectedDifficulty || ''} 
              onChange={(e) => setSelectedDifficulty(e.target.value || null)}
              className="p-2 border border-gray-300 rounded-xl bg-white text-black"
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredTests.map((test) => (
            <motion.div 
              key={test.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-3xl">
                    {SUBJECT_ICONS[test.subject]}
                  </div>
                  <span className={`
                    text-sm font-semibold 
                    ${test.difficulty === 'Beginner' ? 'text-green-600' : 
                      test.difficulty === 'Intermediate' ? 'text-blue-600' : 
                      test.difficulty === 'Advanced' ? 'text-red-600' : 'text-purple-600'}
                  `}>
                    {test.difficulty}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">{test.title}</h2>
                <p className="text-gray-600 mb-4 text-sm">{test.description}</p>
                <div className="mb-4 flex justify-between text-sm text-gray-600">
                  <span>📝 {test.totalQuestions} Questions</span>
                  <span>⏱️ {test.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{test.subject}</span>
                  <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center"
                  >
                    <FaPlay className="mr-2" /> Start Test
                  </button>
                </div>
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
    </div>
  );
};

export default MockTests;
