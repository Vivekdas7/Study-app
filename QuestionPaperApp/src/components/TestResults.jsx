import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaTimesCircle, FaQuestionCircle, FaClock, FaMedal } from 'react-icons/fa';

const TestResults = ({ answers, questions, timeTaken }) => {
  const navigate = useNavigate();

  // Calculate results
  const calculateResults = () => {
    let correct = 0;
    let incorrect = 0;
    let unattempted = 0;
    let totalScore = 0;

    questions.forEach((question, index) => {
      const userAnswer = answers[index];
      if (!userAnswer) {
        unattempted++;
      } else if (userAnswer === question.correctAnswer) {
        correct++;
        totalScore += 2; // +2 for correct answer
      } else {
        incorrect++;
        totalScore -= 2/3; // -2/3 for incorrect answer
      }
    });

    return {
      correct,
      incorrect,
      unattempted,
      totalScore: Math.round(totalScore * 100) / 100
    };
  };

  const results = calculateResults();

  // Format time taken
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours}h ${minutes}m ${remainingSeconds}s`;
  };

  // Calculate percentage
  const percentage = (results.totalScore / (questions.length * 2)) * 100;

  const handleReturnHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <FaMedal className="text-yellow-300" />
              Test Results
            </h2>
          </div>

          {/* Score Overview */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Score Card */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Score Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Score:</span>
                    <span className="text-2xl font-bold text-blue-600">{results.totalScore}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Percentage:</span>
                    <span className="text-lg font-semibold text-blue-600">
                      {percentage.toFixed(2)}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Time Taken:</span>
                    <span className="text-lg font-semibold text-blue-600 flex items-center gap-2">
                      <FaClock className="text-blue-400" />
                      {formatTime(timeTaken)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Question Analysis */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Question Analysis</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500" />
                      Correct
                    </span>
                    <span className="font-semibold text-green-600">{results.correct}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <FaTimesCircle className="text-red-500" />
                      Incorrect
                    </span>
                    <span className="font-semibold text-red-600">{results.incorrect}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <FaQuestionCircle className="text-gray-500" />
                      Unattempted
                    </span>
                    <span className="font-semibold text-gray-600">{results.unattempted}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Return Home Button */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleReturnHome}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 
                         transition-colors duration-200 flex items-center gap-2"
              >
                Return to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestResults;
