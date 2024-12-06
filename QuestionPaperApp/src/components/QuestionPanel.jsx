import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaFlag, FaRegCircle } from 'react-icons/fa';

const QuestionPanel = ({ 
  questions, 
  currentQuestion, 
  answers, 
  flagged, 
  setCurrentQuestion,
  timeSpent,
  markForReview 
}) => {
  const getQuestionStatus = (questionId) => {
    if (answers[questionId] !== undefined && flagged.includes(questionId)) {
      return 'answered-flagged';
    } else if (answers[questionId] !== undefined) {
      return 'answered';
    } else if (flagged.includes(questionId)) {
      return 'flagged';
    }
    return 'not-visited';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'answered':
        return 'bg-green-100 text-green-800 border-green-500';
      case 'answered-flagged':
        return 'bg-purple-100 text-purple-800 border-purple-500';
      case 'flagged':
        return 'bg-yellow-100 text-yellow-800 border-yellow-500';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-300';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'answered':
        return <FaCheck className="w-3 h-3" />;
      case 'answered-flagged':
        return <FaFlag className="w-3 h-3" />;
      case 'flagged':
        return <FaFlag className="w-3 h-3" />;
      default:
        return <FaRegCircle className="w-3 h-3" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Question Overview</h3>
      
      {/* Question Statistics */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="text-sm text-gray-600">Attempted</div>
          <div className="text-2xl font-bold text-gray-900">
            {Object.keys(answers).length}/{questions.length}
          </div>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="text-sm text-gray-600">Marked for Review</div>
          <div className="text-2xl font-bold text-gray-900">
            {flagged.length}
          </div>
        </div>
      </div>

      {/* Question Grid */}
      <div className="grid grid-cols-5 gap-2 mb-6">
        {questions.map((q, index) => {
          const status = getQuestionStatus(q.id);
          return (
            <motion.button
              key={q.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentQuestion(index)}
              className={`relative w-10 h-10 rounded-lg flex items-center justify-center font-medium border-2 transition-colors ${
                currentQuestion === index
                  ? 'ring-2 ring-purple-500 ring-offset-2'
                  : ''
              } ${getStatusColor(status)}`}
            >
              <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                {index + 1}
              </span>
              <span className="absolute bottom-0 right-0 w-4 h-4 flex items-center justify-center">
                {getStatusIcon(status)}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="space-y-2 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-green-100 rounded border-2 border-green-500"></div>
          <span className="text-gray-600">Answered</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-purple-100 rounded border-2 border-purple-500"></div>
          <span className="text-gray-600">Answered & Marked for Review</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-yellow-100 rounded border-2 border-yellow-500"></div>
          <span className="text-gray-600">Marked for Review</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gray-100 rounded border-2 border-gray-300"></div>
          <span className="text-gray-600">Not Visited</span>
        </div>
      </div>
    </div>
  );
};

export default QuestionPanel;
