import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaBook, 
  FaFilePdf, 
  FaCode, 
  FaIndustry, 
  FaCalculator, 
  FaFilter, 
  FaDownload 
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SUBJECT_ICONS = {
  'Mathematics': <FaCalculator className="text-blue-500" />,
  'Computer Science': <FaCode className="text-green-500" />,
  'Mechanical Engineering': <FaIndustry className="text-red-500" />,
  'Electrical Engineering': <FaBook className="text-purple-500" />
};

const StudyMaterials = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const materials = [
    { 
      id: 1, 
      title: 'Engineering Mathematics Notes for GATE CSE', 
      subject: 'Mathematics', 
      type: 'PDF',
      description: 'Comprehensive engineering mathematics notes for GATE CSE',
      topics: [
        {
          name: 'Linear Algebra',
          description: 'Vectors, matrices, eigenvalues, eigenvectors, and linear transformations',
          downloadLink: '/topic/linear-algebra'
        },
        {
          name: 'Probability',
          description: 'Probability distributions, random variables, expectation, and statistical inference',
          downloadLink: '/topic/probability'
        },
        {
          name: 'Calculus',
          description: 'Limits, continuity, differentiation, integration, and multivariate calculus',
          downloadLink: '/topic/calculus'
        }
      ],
      expandedView: true
    },
    { 
      id: 2, 
      title: 'Discrete Mathematics Notes for GATE CSE', 
      subject: 'Mathematics', 
      type: 'PDF',
      description: 'Comprehensive discrete mathematics notes for GATE CSE preparation',
      topics: [
        {
          name: 'Propositional and First-Order Logic',
          description: 'Logical connectives, truth tables, quantifiers, and predicate logic',
          downloadLink: '/topic/logic'
        },
        {
          name: 'Sets, Relations, and Functions',
          description: 'Set theory, relations, function types, partial orders, and lattices',
          downloadLink: '/topic/sets-relations'
        },
        {
          name: 'Algebraic Structures',
          description: 'Monoids, groups, algebraic properties, and abstract algebra concepts',
          downloadLink: '/topic/algebraic-structures'
        },
        {
          name: 'Combinatorics',
          description: 'Counting techniques, recurrence relations, and generating functions',
          downloadLink: '/topic/combinatorics'
        },
        {
          name: 'Graph Theory',
          description: 'Graph connectivity, matching algorithms, graph coloring, and advanced graph concepts',
          downloadLink: '/topic/graph-theory'
        }
      ],
      expandedView: true
    },
    { 
      id: 3, 
      title: 'Computer Networks Textbook', 
      subject: 'Computer Science', 
      type: 'PDF',
      description: 'In-depth guide to modern computer networking technologies',
      downloadLink: 'https://example.com/networks-textbook.pdf'
    },
    { 
      id: 4, 
      title: 'Mechanical Engineering Handbook', 
      subject: 'Mechanical Engineering', 
      type: 'PDF',
      description: 'Comprehensive reference for mechanical engineering principles',
      downloadLink: 'https://example.com/mech-handbook.pdf'
    },
    { 
      id: 5, 
      title: 'Digital Electronics Guide', 
      subject: 'Electrical Engineering', 
      type: 'PDF',
      description: 'Detailed exploration of digital circuit design and analysis',
      downloadLink: 'https://example.com/digital-electronics.pdf'
    }
  ];

  const filteredMaterials = materials.filter(material => 
    (searchQuery === '' || 
      material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.subject.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedSubject === null || material.subject === selectedSubject) &&
    (selectedType === null || material.type === selectedType)
  );

  const subjects = [...new Set(materials.map(m => m.subject))];
  const types = [...new Set(materials.map(m => m.type))];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Study Materials Library</h1>
          <p className="text-xl text-gray-600">Curated resources to support your academic journey</p>
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
              placeholder="Search materials..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 pl-10 bg-white text-black placeholder-gray-500 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Subject Filter */}
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

            {/* Type Filter */}
            <select 
              value={selectedType || ''} 
              onChange={(e) => setSelectedType(e.target.value || null)}
              className="p-2 border border-gray-300 rounded-xl bg-white text-black"
            >
              <option value="">All Types</option>
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Materials Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredMaterials.map((material) => (
            <motion.div 
              key={material.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-3xl">
                    {SUBJECT_ICONS[material.subject]}
                  </div>
                  <span className="text-sm text-gray-500">{material.type}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">{material.title}</h2>
                <p className="text-gray-600 mb-4 text-sm">{material.description}</p>
                
                {material.topics && (
                  <div className="mb-4 bg-gray-50 rounded-lg p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Available Topics:</h3>
                    <div className="space-y-3">
                      {material.topics.map(topic => (
                        <div key={topic.name} className="border-b border-gray-200 pb-3 last:border-b-0">
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-semibold text-gray-700">{topic.name}</h4>
                              <p className="text-xs text-gray-500 mt-1">{topic.description}</p>
                            </div>
                            <button 
                              onClick={() => navigate(topic.downloadLink, { state: { topicName: topic.name } })} 
                              className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs hover:bg-blue-200 transition-colors"
                            >
                              View
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{material.subject}</span>
                  {!material.topics && (
                    <button 
                      onClick={() => navigate(material.downloadLink)} 
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center"
                    >
                      <FaDownload className="mr-2" /> Download
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredMaterials.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 mt-12"
          >
            <p className="text-2xl mb-4">No materials found 📚</p>
            <p>Try adjusting your search or filters</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default StudyMaterials;
