import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaQuestionCircle, 
  FaBook, 
  FaChalkboardTeacher, 
  FaComments, 
  FaLightbulb,
  FaRobot,
  FaPaperPlane
} from 'react-icons/fa';
import axios from 'axios';

const DoubtSolver = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [doubtQuery, setDoubtQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const subjectCategories = [
    {
      name: 'Mathematics',
      icon: <FaBook />,
      description: 'Get help with mathematical concepts and problem-solving',
      color: 'blue'
    },
    {
      name: 'Apptitude',
      icon: <FaLightbulb />,
      description: 'Get help with aptitude questions and logical reasoning',
      color: 'green'
    },
    {
      name: 'Computer Science',
      icon: <FaChalkboardTeacher />,
      description: 'Resolve programming, coding, and technical doubts',
      color: 'purple'
    }
  ];

  const handleSubmitDoubt = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      const prompt = selectedSubject?.name === 'Computer Science'
        ? `As a coding expert, please provide code solution and explanation for this question: ${doubtQuery}`
        : `As an expert in ${selectedSubject?.name}, please explain in detail: ${doubtQuery}`;

      const response = await axios.post(
        'https://chatgpt-api.shn.hk/v1/',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: prompt
            }
          ],
          temperature: 0.7,
          max_tokens: 2048,
          stream: false
        },
        {
          headers: {
            'Content-Type': 'application/json'
          },
          timeout: 60000 // 60 second timeout
        }
      );
      
      let answer = response.data?.choices?.[0]?.message?.content || 'Sorry, I could not generate an answer. Please try rephrasing your question.';
      
      // Format code blocks in the response
      answer = answer.replace(/```(\w*)\n([\s\S]*?)```/g, (_, language, code) => {
        return `\nCode Solution:\n${code}\n`;
      });
      
      setAiResponse(answer);
    } catch (err) {
      console.error('AI Response Error:', err);
      if (err.code === 'ECONNABORTED') {
        setError('The request took too long. Please try again with a shorter question.');
      } else if (err.response?.status === 429) {
        setError('Too many requests. Please wait a moment before trying again.');
      } else if (err.response?.status === 503) {
        setError('The service is temporarily unavailable. Please try again in a few moments.');
      } else {
        setError('There was an error getting the response. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Doubt AI Solver</h1>
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
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900"
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
                placeholder="Type your question here..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className={`flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <FaPaperPlane />
                <span>{isLoading ? 'Getting Answer...' : 'Get AI Answer'}</span>
              </button>
            </div>
          </form>

          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
              {error}
            </div>
          )}

          {aiResponse && !error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200"
            >
              <div className="flex items-center space-x-3 mb-4">
                <FaRobot className="text-2xl text-purple-600" />
                <h3 className="text-xl font-semibold text-gray-800">AI Answer</h3>
              </div>
              <div className="prose max-w-none">
                {aiResponse.split('\n').map((paragraph, index) => (
                  <p key={index} className={`mb-4 ${
                    paragraph.startsWith('Code Solution:') 
                      ? 'font-mono bg-gray-100 p-4 rounded-lg whitespace-pre-wrap'
                      : 'text-gray-700'
                  }`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default DoubtSolver;
