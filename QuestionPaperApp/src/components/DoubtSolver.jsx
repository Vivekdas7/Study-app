import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaQuestionCircle, 
  FaBook, 
  FaChalkboardTeacher, 
  FaComments, 
  FaLightbulb 
} from 'react-icons/fa';

const DoubtSolver = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [doubtQuery, setDoubtQuery] = useState('');

  const subjectCategories = [
    {
      name: 'Mathematics',
      icon: <FaBook />,
      description: 'Get help with mathematical concepts and problem-solving',
      color: 'blue'
    },
    {
      name: 'Physics',
      icon: <FaLightbulb />,
      description: 'Clarify complex physics theories and numerical problems',
      color: 'green'
    },
    {
      name: 'Computer Science',
      icon: <FaChalkboardTeacher />,
      description: 'Resolve programming, coding, and technical doubts',
      color: 'purple'
    }
  ];

  const handleSubmitDoubt = (e) => {
    e.preventDefault();
    // TODO: Implement doubt submission logic
    console.log('Doubt submitted:', doubtQuery);
    alert('Doubt submitted! Our experts will help you soon.');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Doubt Solver</h1>
          <p className="text-xl text-gray-600">Get personalized help and clear your academic doubts with expert guidance</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {subjectCategories.map((subject, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedSubject(subject)}
              className={`bg-white rounded-xl shadow-lg p-6 text-center cursor-pointer border-l-4 border-${subject.color}-500 hover:shadow-xl transition-all`}
            >
              <div className={`text-5xl text-${subject.color}-600 mb-4 flex justify-center`}>
                {subject.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{subject.name}</h3>
              <p className="text-gray-600">{subject.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaComments className="mr-4 text-purple-600" />
            Ask Your Doubt
          </h2>
          
          <form onSubmit={handleSubmitDoubt} className="space-y-6">
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Select Subject
              </label>
              <select
                id="subject"
                required
                value={selectedSubject?.name || ''}
                onChange={(e) => {
                  const selected = subjectCategories.find(
                    subject => subject.name === e.target.value
                  );
                  setSelectedSubject(selected);
                }}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Choose a Subject</option>
                {subjectCategories.map((subject, index) => (
                  <option key={index} value={subject.name}>
                    {subject.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="doubt" className="block text-sm font-medium text-gray-700 mb-2">
                Your Doubt
              </label>
              <textarea
                id="doubt"
                rows={4}
                required
                value={doubtQuery}
                onChange={(e) => setDoubtQuery(e.target.value)}
                placeholder="Describe your doubt in detail..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div className="flex justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center"
              >
                <FaQuestionCircle className="mr-2" />
                Submit Doubt
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default DoubtSolver;
