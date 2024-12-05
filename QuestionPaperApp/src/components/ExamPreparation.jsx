import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaBook, 
  FaVideo, 
  FaFilePdf, 
  FaGraduationCap, 
  FaChartLine, 
  FaFilter, 
  FaRocket, 
  FaBrain, 
  FaLightbulb 
} from 'react-icons/fa';

const DIFFICULTY_ICONS = {
  'Beginner': { icon: <FaRocket className="text-green-500" />, color: 'green' },
  'Intermediate': { icon: <FaBrain className="text-blue-500" />, color: 'blue' },
  'Advanced': { icon: <FaLightbulb className="text-purple-500" />, color: 'purple' },
  'All Levels': { icon: <FaChartLine className="text-orange-500" />, color: 'orange' }
};

const TYPE_ICONS = {
  'PDF': <FaFilePdf className="text-red-500" />,
  'Video Course': <FaVideo className="text-blue-500" />,
  'Online Tests': <FaGraduationCap className="text-green-500" />,
  'E-book': <FaBook className="text-purple-500" />
};

const ExamPreparation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const preparationResources = [
    {
      id: 1,
      title: 'GATE Preparation Guide',
      description: 'Comprehensive study material for GATE exam',
      difficulty: 'Advanced',
      type: 'PDF',
      tags: ['engineering', 'gate', 'competitive'],
      link: 'https://example.com/gate-prep'
    },
    {
      id: 2,
      title: 'Interview Preparation Kit',
      description: 'Tips and tricks for technical interviews',
      difficulty: 'Intermediate',
      type: 'Video Course',
      tags: ['interview', 'skills', 'career'],
      link: 'https://example.com/interview-prep'
    },
    {
      id: 3,
      title: 'Mock Test Series',
      description: 'Full-length practice exams with solutions',
      difficulty: 'All Levels',
      type: 'Online Tests',
      tags: ['practice', 'exam', 'assessment'],
      link: 'https://example.com/mock-tests'
    },
    {
      id: 4,
      title: 'Aptitude and Reasoning Guide',
      description: 'Comprehensive guide for aptitude and reasoning',
      difficulty: 'Beginner',
      type: 'E-book',
      tags: ['aptitude', 'reasoning', 'skills'],
      link: 'https://example.com/aptitude-guide'
    }
  ];

  const filteredResources = preparationResources.filter(resource => 
    (searchQuery === '' || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) &&
    (selectedDifficulty === null || resource.difficulty === selectedDifficulty) &&
    (selectedType === null || resource.type === selectedType)
  );

  const difficulties = [...new Set(preparationResources.map(r => r.difficulty))];
  const types = [...new Set(preparationResources.map(r => r.type))];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Exam Preparation Hub</h1>
          <p className="text-xl text-gray-600">Curated resources to boost your exam readiness</p>
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
  placeholder="Search resources..." 
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  className="w-full p-3 pl-10 bg-white text-black placeholder-gray-500 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
            <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Difficulty Filter */}
          <div className="flex space-x-2">
            <select 
              value={selectedDifficulty || ''} 
              onChange={(e) => setSelectedDifficulty(e.target.value || null)}
              className="p-2 border border-black rounded-xl  bg-white text-black placeholder-gray-500"
            >
              <option value="">All Difficulties</option>
              {difficulties.map(diff => (
                <option key={diff} value={diff}>{diff}</option>
              ))}
            </select>

            {/* Type Filter */}
            <select 
              value={selectedType || ''} 
              onChange={(e) => setSelectedType(e.target.value || null)}
              className="p-2 border border-gray-300 rounded-xl  bg-white text-black placeholder-gray-500"
            >
              <option value="">All Types</option>
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Resources Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredResources.map((resource) => (
            <motion.div 
              key={resource.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-3xl">
                    {TYPE_ICONS[resource.type]}
                  </div>
                  <div className="flex items-center space-x-2">
                    {DIFFICULTY_ICONS[resource.difficulty].icon}
                    <span className={`text-${DIFFICULTY_ICONS[resource.difficulty].color}-600 text-sm font-semibold`}>
                      {resource.difficulty}
                    </span>
                  </div>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">{resource.title}</h2>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{resource.type}</span>
                  <a 
                    href={resource.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Start Preparation
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredResources.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 mt-12"
          >
            <p className="text-2xl mb-4">No resources found 📚</p>
            <p>Try adjusting your search or filters</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ExamPreparation;
