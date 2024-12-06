import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaBars, 
  FaClipboardList, 
  FaCheckCircle, 
  FaTimesCircle, 
  FaTrophy,
  FaChartBar,
  FaLightbulb,
  FaFlag, 
  FaCheck, 
  FaArrowLeft, 
  FaArrowRight, 
} from 'react-icons/fa';

import { mathQuestions } from '../data/gateQuestions';
import csFundamentalsQuestions from '../data/csFundamentalsQuestions';
import aptitudeQuestions from '../data/aptitudeQuestions';
import Timer from './Timer';

// Add result feedback generation function
const generateTestFeedback = (score, totalQuestions) => {
  const percentage = (score / totalQuestions) * 100;

  if (percentage >= 90) {
    return {
      title: 'Excellent Performance!',
      description: 'Outstanding work! You demonstrated exceptional knowledge and problem-solving skills.',
      color: 'text-green-600',
      icon: <FaTrophy className="text-5xl text-gold-500" />,
      recommendation: 'Consider attempting more advanced mock tests to further challenge yourself.'
    };
  } else if (percentage >= 75) {
    return {
      title: 'Great Job!',
      description: 'You performed very well and showed strong understanding of the subject.',
      color: 'text-blue-600',
      icon: <FaCheckCircle className="text-5xl text-blue-500" />,
      recommendation: 'Review the questions you missed to improve your knowledge.'
    };
  } else if (percentage >= 60) {
    return {
      title: 'Good Effort',
      description: 'You have a decent understanding, but there\'s room for improvement.',
      color: 'text-yellow-600',
      icon: <FaChartBar className="text-5xl text-yellow-500" />,
      recommendation: 'Focus on strengthening your weak areas and practice more.'
    };
  } else {
    return {
      title: 'Need More Practice',
      description: 'Your performance indicates that you need to focus more on the subject.',
      color: 'text-red-600',
      icon: <FaTimesCircle className="text-5xl text-red-500" />,
      recommendation: 'Revisit fundamental concepts and take more preparatory tests.'
    };
  }
};

const TestInterface = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Dynamic question set and test configuration
  const [questions, setQuestions] = useState([]);
  const [testConfig, setTestConfig] = useState({
    duration: 1 * 60 * 60, // Default 3 hours
    totalQuestions: 25
  });

  // Dynamic question selection logic
  const selectRandomQuestions = (allQuestions, totalQuestions) => {
    // Shuffle the questions array
    const shuffledQuestions = [...allQuestions].sort(() => 0.5 - Math.random());
    
    // Return the first 'totalQuestions' number of questions
    return shuffledQuestions.slice(0, totalQuestions);
  };

  useEffect(() => {
    // Determine test type and load appropriate questions
    const { testType } = location.state || {};
    
    switch(testType) {
      case 'gate-math':
        const mathQuestionsSubset = selectRandomQuestions(mathQuestions, 25);
        setQuestions(mathQuestionsSubset);
        setTestConfig({
          duration: 3 * 60 * 60, // 3 hours
          totalQuestions: 25
        });
        break;
      case 'cs-fundamentals':
        const csQuestionsSubset = selectRandomQuestions(csFundamentalsQuestions, 25);
        setQuestions(csQuestionsSubset);
        setTestConfig({
          duration: 2 * 60 * 60, // 2 hours
          totalQuestions: 25
        });
        break;
      case 'aptitude':
        const aptitudeQuestionsSubset = selectRandomQuestions(aptitudeQuestions, 25);
        setQuestions(aptitudeQuestionsSubset);
        setTestConfig({
          duration: 1 * 60 * 60, // 1 hour
          totalQuestions: 25
        });
        break;
      default:
        // Fallback to GATE Math questions
        const defaultQuestionsSubset = selectRandomQuestions(mathQuestions, 25);
        setQuestions(defaultQuestionsSubset);
        setTestConfig({
          duration: 3 * 60 * 60,
          totalQuestions: 25
        });
    }
  }, [location.state]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [flaggedQuestions, setFlaggedQuestions] = useState(new Set());
  const [timeLeft, setTimeLeft] = useState(testConfig.duration);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [testResult, setTestResult] = useState(null);

  useEffect(() => {
    setShowSidebar(false);
  }, [currentQuestion]);

  const handleAnswer = (questionId, selectedOption) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: selectedOption
    }));
  };

  const toggleFlag = (questionId) => {
    setFlaggedQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(questionId)) {
        newSet.delete(questionId);
      } else {
        newSet.add(questionId);
      }
      return newSet;
    });
  };

  const calculateScore = useCallback(() => {
    let correctAnswers = 0;
    questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    return correctAnswers;
  }, [questions, answers]);

  const handleSubmit = () => {
    const score = calculateScore();
    const totalQuestions = questions.length;
    const feedback = generateTestFeedback(score, totalQuestions);

    const result = {
      score,
      totalQuestions,
      percentage: ((score / totalQuestions) * 100).toFixed(2),
      feedback
    };

    setTestResult(result);
    setShowResultModal(true);
  };

  const handleTimeUp = () => {
    // Show alert before auto-submitting
    alert("Time's up! Your test will be submitted automatically.");
    handleSubmit();
  };

  const restartTest = () => {
    // Reset test state
    setAnswers({});
    setShowResultModal(false);
    navigate('/mock-tests');
  };

  // Function to get dynamic exam title
  const getExamTitle = () => {
    switch(location.state?.testType) {
      case 'gate-math':
        return 'GATE CSE Mathematics Mock Test';
      case 'cs-fundamentals':
        return 'Computer Science Fundamentals Test';
      case 'aptitude':
        return 'Aptitude Concepts Test';
      case 'gate-cse':
        return 'GATE Computer Science Engineering Test';
      default:
        return 'Mock Test';
    }
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-xl md:text-2xl font-semibold text-gray-600">Loading Test...</div>
      </div>
    );
  }

  const isAnswered = answers[questions[currentQuestion].id] !== undefined;
  const isFlagged = flaggedQuestions.has(questions[currentQuestion].id);

  const QuestionNavigator = () => (
    <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Question Navigator</h3>
      <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-5 gap-2">
        {questions.map((q, index) => (
          <button
            key={q.id}
            onClick={() => setCurrentQuestion(index)}
            className={`
              w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center font-medium text-sm md:text-base
              transition-all duration-200
              ${currentQuestion === index ? 'ring-2 ring-blue-500' : ''}
              ${answers[q.id] !== undefined
                ? 'bg-green-500 text-white hover:bg-green-600'
                : flaggedQuestions.has(q.id)
                ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
            `}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="mt-4 md:mt-6 space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-green-500 rounded"></div>
          <span className="text-sm text-gray-600">Answered</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-yellow-500 rounded"></div>
          <span className="text-sm text-gray-600">Flagged for Review</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gray-200 rounded"></div>
          <span className="text-sm text-gray-600">Not Attempted</span>
        </div>
      </div>
    </div>
  );

  const renderQuestionCounter = () => {
    return (
      <div className="text-lg font-semibold text-gray-700">
        Question: {currentQuestion + 1} / {testConfig.totalQuestions}
      </div>
    );
  };

  return (
    <>
      {/* Existing test interface code */}
      <div className="min-h-screen bg-gray-100 sm:px-4 sm:py-2 xs:px-2 xs:py-1 mobile-compact-layout">
        {/* Fixed Header */}
        <div className="fixed top-0 left-0 right-0 bg-white shadow-lg z-20">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-2 sm:py-3 md:py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 sm:space-x-4">
              {/* Test Info and Mobile Sidebar Toggle */}
              <div className="flex w-full sm:w-auto items-center justify-between">
                <button 
                  onClick={() => setShowSidebar(!showSidebar)}
                  className="md:hidden text-gray-600 hover:bg-gray-100 rounded-lg p-2"
                >
                  <FaBars className="w-5 h-5" />
                </button>
                <h1 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 flex-grow text-center sm:text-left truncate max-w-full">
                  {getExamTitle()}
                </h1>
              </div>
              
              {/* Question Progress and Answered Count */}
              <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto justify-center sm:justify-end">
                {renderQuestionCounter()}
                <span className="px-2 py-1 sm:px-3 sm:py-2 bg-green-100 text-green-800 rounded-md text-xs sm:text-sm font-medium">
                  Answered: {Object.keys(answers).length}/{questions.length}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between md:justify-end space-x-4 md:space-x-6">
              <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} onTimeUp={handleTimeUp} />
              <button
                onClick={handleSubmit}
                className="px-4 py-1.5 md:px-6 md:py-2.5 bg-purple-600 text-white text-sm md:text-base font-semibold rounded-lg 
                         hover:bg-purple-700 transition-colors duration-200 focus:outline-none focus:ring-2 
                         focus:ring-purple-500 focus:ring-offset-2"
              >
                Submit Test
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        {showSidebar && (
          <div className="fixed inset-0 z-10 md:hidden">
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setShowSidebar(false)} />
            <div className="absolute right-0 top-0 h-full w-80 bg-white p-4 pt-20">
              <QuestionNavigator />
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="pt-28 md:pt-24 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Question Area */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Question Header */}
                <div className="bg-gray-50 px-4 md:px-6 py-3 md:py-4 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-base md:text-lg font-medium text-gray-900">
                      Question {currentQuestion + 1}
                    </span>
                    <button
                      onClick={() => toggleFlag(questions[currentQuestion].id)}
                      className={`flex items-center space-x-2 px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-sm md:text-base
                      transition-colors ${
                        isFlagged 
                          ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      <FaFlag className={isFlagged ? 'text-yellow-800' : 'text-gray-600'} />
                      <span className="hidden sm:inline">{isFlagged ? 'Flagged' : 'Flag for Review'}</span>
                    </button>
                  </div>
                </div>

                {/* Question Content */}
                <div className="p-4 md:p-6">
                  <div className="mb-6 md:mb-8">
                    <p className="text-base md:text-lg text-gray-900 leading-relaxed question-text">
                      {questions[currentQuestion].question}
                    </p>
                  </div>

                  {/* Options */}
                  <div className="space-y-3 md:space-y-4">
                    {questions[currentQuestion].options.map((option, index) => (
                      <div
                        key={index}
                        onClick={() => handleAnswer(questions[currentQuestion].id, index)}
                        className={`flex items-center p-3 md:p-4 rounded-lg cursor-pointer transition-all option-button
                          ${answers[questions[currentQuestion].id] === index 
                            ? 'bg-blue-50 border-2 border-blue-500' 
                            : 'bg-white border-2 border-gray-200 hover:border-blue-200 hover:bg-blue-50'}`}
                      >
                        <div 
                          className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center mr-3 md:mr-4
                            ${answers[questions[currentQuestion].id] === index 
                              ? 'bg-blue-500' 
                              : 'border-2 border-gray-300'}`}
                        >
                          {answers[questions[currentQuestion].id] === index && (
                            <FaCheck className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <span className="text-base md:text-lg text-gray-800">{option}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Footer */}
                <div className="bg-gray-50 px-4 md:px-6 py-3 md:py-4 border-t border-gray-200">
                  <div className="flex justify-between navigation-buttons">
                    <button
                      onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                      disabled={currentQuestion === 0}
                      className="flex items-center space-x-1 md:space-x-2 px-4 py-2 md:px-6 md:py-2.5 rounded-lg text-sm md:text-base
                               disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 text-gray-700 
                               hover:bg-gray-300 transition-colors duration-200"
                    >
                      <FaArrowLeft className="w-3 h-3 md:w-4 md:h-4" />
                      <span>Previous</span>
                    </button>
                    <button
                      onClick={() => setCurrentQuestion(prev => Math.min(testConfig.totalQuestions - 1, prev + 1))}
                      disabled={currentQuestion === testConfig.totalQuestions - 1}
                      className="flex items-center space-x-1 md:space-x-2 px-4 py-2 md:px-6 md:py-2.5 rounded-lg text-sm md:text-base
                               disabled:opacity-50 disabled:cursor-not-allowed bg-blue-600 text-white 
                               hover:bg-blue-700 transition-colors duration-200"
                    >
                      <span>Next</span>
                      <FaArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Question Navigator Panel - Desktop */}
            <div className="hidden lg:block">
              <QuestionNavigator />
            </div>
          </div>
        </div>
      </div>

      {/* Result Modal */}
      {showResultModal && testResult && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-500/70 to-blue-500/70 p-4"
        >
          <motion.div
            initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20,
              duration: 0.5
            }}
            className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full mx-auto overflow-hidden relative"
          >
            {/* Confetti-like Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full opacity-20">
                {[...Array(50)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute bg-purple-200 rounded-full"
                    style={{
                      width: `${Math.random() * 10 + 5}px`,
                      height: `${Math.random() * 10 + 5}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animation: `float ${Math.random() * 5 + 3}s infinite`,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row">
              {/* Performance Visualization */}
              <div className="md:w-1/2 bg-gradient-to-br from-purple-600 to-blue-500 text-white p-8 md:p-12 flex flex-col justify-center items-center text-center">
                <div className="relative mb-4">
                  <div className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center relative">
                    {testResult.feedback.icon}
                    <div className="absolute bottom-0 right-0 bg-white text-purple-600 rounded-full p-2 shadow-lg">
                      <span className="text-2xl font-bold">{testResult.percentage}%</span>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  {testResult.feedback.title}
                </h2>
                <p className="text-sm md:text-base opacity-80 mb-4">
                  {testResult.feedback.description}
                </p>

                {/* Motivational Emojis */}
                <div className="flex space-x-2 text-4xl">
                  {testResult.percentage >= 90 ? '🏆🌟' : 
                   testResult.percentage >= 75 ? '👏🎉' : 
                   testResult.percentage >= 60 ? '👍💪' : '🌱📚'}
                </div>
              </div>

              {/* Detailed Results */}
              <div className="md:w-1/2 p-6 md:p-12 bg-gray-50 space-y-6">
                {/* Performance Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-xl shadow-md text-center transform transition hover:scale-105">
                    <FaClipboardList className="mx-auto text-3xl text-purple-500 mb-2" />
                    <span className="block text-xs text-gray-600 uppercase tracking-wider">Total</span>
                    <span className="font-bold text-2xl text-purple-600">{testResult.totalQuestions}</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md text-center transform transition hover:scale-105">
                    <FaCheckCircle className="mx-auto text-3xl text-green-500 mb-2" />
                    <span className="block text-xs text-gray-600 uppercase tracking-wider">Correct</span>
                    <span className="font-bold text-2xl text-green-600">{testResult.score}</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md text-center transform transition hover:scale-105">
                    <FaTimesCircle className="mx-auto text-3xl text-red-500 mb-2" />
                    <span className="block text-xs text-gray-600 uppercase tracking-wider">Incorrect</span>
                    <span className="font-bold text-2xl text-red-600">
                      {testResult.totalQuestions - testResult.score}
                    </span>
                  </div>
                </div>

                {/* Performance Level */}
                <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <FaChartBar className="text-3xl text-blue-500" />
                      <div>
                        <span className="block text-sm text-gray-600 uppercase tracking-wider">Performance</span>
                        <span className="font-bold text-xl text-blue-600">
                          {testResult.percentage >= 90 ? 'Excellent' : 
                           testResult.percentage >= 75 ? 'Very Good' : 
                           testResult.percentage >= 60 ? 'Good' : 'Needs Improvement'}
                        </span>
                      </div>
                    </div>
                    <div className="text-4xl">
                      {testResult.percentage >= 90 ? '🌟' : 
                       testResult.percentage >= 75 ? '✨' : 
                       testResult.percentage >= 60 ? '👍' : '🌱'}
                    </div>
                  </div>
                </div>

                {/* Recommendation */}
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-xl mb-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <FaLightbulb className="text-3xl text-yellow-500" />
                    <h3 className="font-bold text-xl text-yellow-700">Next Steps</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {testResult.feedback.recommendation}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button
                    onClick={restartTest}
                    className="flex-1 bg-purple-600 text-white py-4 rounded-xl hover:bg-purple-700 
                    transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2
                    focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  >
                    <FaArrowLeft className="mr-2" /> Back to Mock Tests
                  </button>
                  <button
                    onClick={() => {/* Future feature: detailed analysis */}}
                    className="flex-1 bg-blue-500 text-white py-4 rounded-xl hover:bg-blue-600 
                    transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Detailed Analysis <FaChartBar className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default TestInterface;
