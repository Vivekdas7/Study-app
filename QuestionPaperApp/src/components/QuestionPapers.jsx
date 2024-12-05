import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFilter, FaSearch, FaFilePdf } from 'react-icons/fa';

// Mock data - replace with actual backend data
const questionPaperData = [
  {
    id: 1,
    branch: 'Computer Science',
    semester: '3rd Semester',
    subject: 'Data Structures',
    year: '2023',
    difficulty: 'Medium',
    downloadLink: '/sample-paper-1.pdf'
  },
  {
    id: 2,
    branch: 'Computer Science',
    semester: '4th Semester',
    subject: 'Operating Systems',
    year: '2022',
    difficulty: 'Hard',
    downloadLink: '/sample-paper-2.pdf'
  },
  {
    id: 3,
    branch: 'Electrical Engineering',
    semester: '3rd Semester',
    subject: 'Circuit Theory',
    year: '2023',
    difficulty: 'Easy',
    downloadLink: '/sample-paper-3.pdf'
  },
  {
    id: 4,
    branch: 'Mechanical Engineering',
    semester: '4th Semester',
    subject: 'Thermodynamics',
    year: '2022',
    difficulty: 'Medium',
    downloadLink: '/sample-paper-4.pdf'
  },
  {
    id: 5,
    branch: 'Computer Science',
    semester: '5th Semester',
    subject: 'Computer Networks',
    year: '2023',
    difficulty: 'Hard',
    downloadLink: '/sample-paper-5.pdf'
  }
];

const QuestionPapers = () => {
  const [filters, setFilters] = useState({
    branch: '',
    semester: '',
    subject: '',
    year: '',
    difficulty: ''
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Unique filter options
  const filterOptions = useMemo(() => ({
    branches: [...new Set(questionPaperData.map(paper => paper.branch))],
    semesters: [...new Set(questionPaperData.map(paper => paper.semester))],
    subjects: [...new Set(questionPaperData.map(paper => paper.subject))],
    years: [...new Set(questionPaperData.map(paper => paper.year))],
    difficulties: [...new Set(questionPaperData.map(paper => paper.difficulty))]
  }), []);

  // Filtered and searched papers
  const filteredPapers = useMemo(() => {
    return questionPaperData.filter(paper => {
      const matchesSearch = searchQuery.length === 0 || 
        Object.values(paper).some(value => 
          value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesBranch = !filters.branch || paper.branch === filters.branch;
      const matchesSemester = !filters.semester || paper.semester === filters.semester;
      const matchesSubject = !filters.subject || paper.subject === filters.subject;
      const matchesYear = !filters.year || paper.year === filters.year;
      const matchesDifficulty = !filters.difficulty || paper.difficulty === filters.difficulty;

      return matchesSearch && 
             matchesBranch && 
             matchesSemester && 
             matchesSubject && 
             matchesYear && 
             matchesDifficulty;
    });
  }, [filters, searchQuery]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value === prev[filterType] ? '' : value
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      branch: '',
      semester: '',
      subject: '',
      year: '',
      difficulty: ''
    });
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Question Papers</h1>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full"
          >
            <FaFilter />
            <span>Filters</span>
          </motion.button>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search papers by branch, subject, year..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 pl-12 bg-white border-2 border-blue-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400" />
          </div>

          <AnimatePresence>
            {isFilterOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="grid grid-cols-2 md:grid-cols-5 gap-4 bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              >
                {Object.entries(filterOptions).map(([filterType, options]) => (
                  <div key={filterType} className="space-y-2">
                    <h3 className="font-semibold capitalize text-black">
                      {filterType.replace('_', ' ')}
                    </h3>
                    {options.map(option => (
                      <motion.button
                        key={option}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleFilterChange(filterType.slice(0, -1), option)}
                        className={`w-full text-left px-3 py-1 rounded-md text-sm transition-colors ${
                          filters[filterType.slice(0, -1)] === option 
                            ? 'bg-blue-600 text-white' 
                            : 'hover:bg-blue-100 text-black'
                        }`}
                      >
                        {option}
                      </motion.button>
                    ))}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Active Filters */}
          {Object.entries(filters).some(([_, value]) => value) && (
            <div className="flex flex-wrap gap-2 items-center bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
              <span className="text-black mr-2">Active Filters:</span>
              {Object.entries(filters)
                .filter(([_, value]) => value)
                .map(([key, value]) => (
                  <motion.button
                    key={key}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={() => handleFilterChange(key, value)}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center space-x-2"
                  >
                    <span>{value}</span>
                    <span>✕</span>
                  </motion.button>
                ))}
              <button 
                onClick={clearAllFilters}
                className="text-red-600 hover:underline text-sm"
              >
                Clear All
              </button>
            </div>
          )}
        </div>

        {/* Question Papers Grid */}
        {filteredPapers.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredPapers.map(paper => (
                <motion.div
                  key={paper.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className={`
                      px-3 py-1 rounded-full text-xs font-semibold
                      ${paper.difficulty === 'Easy' ? 'bg-green-100 text-green-800' : 
                        paper.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'}
                    `}>
                      {paper.difficulty}
                    </span>
                    <span className="text-gray-500 text-sm">{paper.year}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-black">{paper.subject}</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-600 text-sm text-black">
                      <strong>Branch:</strong> {paper.branch}
                    </p>
                    <p className="text-gray-600 text-sm text-black">
                      <strong>Semester:</strong> {paper.semester}
                    </p>
                  </div>
                  <a 
                    href={paper.downloadLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <FaFilePdf className="mr-2" />
                    Download Paper
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl shadow-lg border border-gray-100">
            <p className="text-black text-xl">
              No question papers found matching your filters.
            </p>
            <button 
              onClick={clearAllFilters}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionPapers;
