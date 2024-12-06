import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import csFundamentalsQuestions from '../data/csFundamentalsQuestions';
import CommonHeader from './CommonHeader';
import Timer from './Timer';
import { FaCheckCircle, FaTimesCircle, FaQuestionCircle } from 'react-icons/fa';

const CsFundamentalsTest = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [flaggedQuestions, setFlaggedQuestions] = useState({});
  const [timeLeft, setTimeLeft] = useState(2 * 60 * 60); // 2 hours
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentQuestion = csFundamentalsQuestions[currentQuestionIndex];

  const handleAnswerSelect = (optionValue) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionValue
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < csFundamentalsQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleFlagQuestion = () => {
    setFlaggedQuestions(prev => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id]
    }));
  };

  const handleQuestionJump = (index) => {
    setCurrentQuestionIndex(index);
  };

  const handleSubmit = () => {
    const confirmSubmit = window.confirm('Are you sure you want to submit the test?');
    if (confirmSubmit) {
      setIsSubmitted(true);
      navigate('/test-results', {
        state: {
          answers: selectedAnswers,
          questions: csFundamentalsQuestions,
          timeTaken: 2 * 60 * 60 - timeLeft
        }
      });
    }
  };

  const handleTimeUp = () => {
    alert("Time's up! Your test will be submitted automatically.");
    handleSubmit();
  };

  const renderQuestionNavigation = () => {
    return (
      <div className="grid grid-cols-5 gap-2 p-2 bg-gray-100 rounded-lg">
        {csFundamentalsQuestions.map((q, index) => {
          const isAnswered = selectedAnswers[q.id] !== undefined;
          const isFlagged = flaggedQuestions[q.id];

          return (
            <button
              key={q.id}
              onClick={() => handleQuestionJump(index)}
              className={`p-2 rounded-md text-sm font-medium transition-colors 
                ${index === currentQuestionIndex ? 'bg-blue-600 text-white' : ''}
                ${isAnswered ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-600'}
                ${isFlagged ? 'border-2 border-yellow-500' : ''}`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <CommonHeader 
        title="Computer Science Fundamentals Test" 
        rightContent={
          <Timer 
            timeLeft={timeLeft} 
            setTimeLeft={setTimeLeft} 
            onTimeUp={handleTimeUp} 
          />
        }
      />

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Question Area */}
        <div className="md:col-span-2 bg-white shadow-lg rounded-lg p-6">
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">
              Question {currentQuestionIndex + 1}
            </h2>
            <div className="flex space-x-2">
              <button
                onClick={handleFlagQuestion}
                className={`px-3 py-1 rounded-md transition-colors 
                  ${flaggedQuestions[currentQuestion.id] 
                    ? 'bg-yellow-100 text-yellow-800' 
                    : 'bg-gray-100 text-gray-600'}`}
              >
                {flaggedQuestions[currentQuestion.id] ? 'Unflag' : 'Flag'}
              </button>
            </div>
          </div>

          <p className="text-gray-700 mb-4">{currentQuestion.question}</p>

          <div className="space-y-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswerSelect(option.value)}
                className={`w-full text-left p-3 rounded-lg border transition-colors 
                  ${selectedAnswers[currentQuestion.id] === option.value 
                    ? 'bg-blue-100 border-blue-500 text-blue-800' 
                    : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200'}`}
              >
                <span className="font-medium mr-2">{option.value}.</span>
                {option.text}
              </button>
            ))}
          </div>

          <div className="mt-6 flex justify-between">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md 
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={handleNextQuestion}
              disabled={currentQuestionIndex === csFundamentalsQuestions.length - 1}
              className="px-4 py-2 bg-blue-600 text-white rounded-md 
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>

        {/* Question Navigation and Summary */}
        <div className="space-y-4">
          {renderQuestionNavigation()}

          <div className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4">Test Summary</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <FaCheckCircle className="text-green-500" />
                  <span>Answered</span>
                </div>
                <span>{Object.keys(selectedAnswers).length}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <FaQuestionCircle className="text-gray-500" />
                  <span>Unattempted</span>
                </div>
                <span>{csFundamentalsQuestions.length - Object.keys(selectedAnswers).length}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <FaTimesCircle className="text-yellow-500" />
                  <span>Flagged</span>
                </div>
                <span>{Object.keys(flaggedQuestions).filter(key => flaggedQuestions[key]).length}</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-green-600 text-white py-3 rounded-lg 
                       hover:bg-green-700 transition duration-300"
          >
            Submit Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default CsFundamentalsTest;
