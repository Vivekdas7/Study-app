import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import aptitudeQuestions from '../data/aptitudeQuestions';
import CommonHeader from './CommonHeader';
import Timer from './Timer';
import { FaCheckCircle, FaTimesCircle, FaQuestionCircle } from 'react-icons/fa';

const AptitudeTest = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(5400); // 90 minutes = 5400 seconds
  const [testCompleted, setTestCompleted] = useState(false);

  const handleAnswer = (questionId, selectedIndex) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: selectedIndex
    }));
  };

  const calculateScore = () => {
    let score = 0;
    aptitudeQuestions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        score += 2; // Positive marking
      } else if (answers[question.id] !== undefined) {
        score -= 0.66; // Negative marking
      }
    });
    return score;
  };

  const handleSubmitTest = () => {
    const finalScore = calculateScore();
    navigate('/test-result', { 
      state: { 
        questions: aptitudeQuestions, 
        answers, 
        score: finalScore,
        totalQuestions: aptitudeQuestions.length
      } 
    });
  };

  const handleTimeUp = () => {
    setTestCompleted(true);
    handleSubmitTest();
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < aptitudeQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <CommonHeader title="Aptitude Test" />
      
      <div className="flex-grow container mx-auto px-4 py-8">
        {!testCompleted ? (
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <Timer 
                initialTime={timeRemaining} 
                onTimeUp={handleTimeUp}
              />
              <div className="text-lg font-semibold">
                Question {currentQuestionIndex + 1} of {aptitudeQuestions.length}
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4">
                {aptitudeQuestions[currentQuestionIndex].question}
              </h2>

              <div className="space-y-3 md:space-y-4">
                {aptitudeQuestions[currentQuestionIndex].options.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleAnswer(aptitudeQuestions[currentQuestionIndex].id, index)}
                    className={`flex items-center p-3 md:p-4 rounded-lg cursor-pointer transition-all
                      ${answers[aptitudeQuestions[currentQuestionIndex].id] === index 
                        ? 'bg-blue-50 border-2 border-blue-500' 
                        : 'bg-white border-2 border-gray-200 hover:border-blue-200 hover:bg-blue-50'}`}
                  >
                    <div 
                      className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center mr-3 md:mr-4
                        ${answers[aptitudeQuestions[currentQuestionIndex].id] === index 
                          ? 'bg-blue-500' 
                          : 'border-2 border-gray-300'}`}
                    >
                      {answers[aptitudeQuestions[currentQuestionIndex].id] === index && (
                        <FaCheckCircle className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <span className="text-base md:text-lg text-gray-800">{option}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button 
                onClick={goToPreviousQuestion}
                disabled={currentQuestionIndex === 0}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50"
              >
                Previous
              </button>
              <button 
                onClick={goToNextQuestion}
                disabled={currentQuestionIndex === aptitudeQuestions.length - 1}
                className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
              >
                Next
              </button>
            </div>

            {currentQuestionIndex === aptitudeQuestions.length - 1 && (
              <div className="mt-4 text-center">
                <button 
                  onClick={handleSubmitTest}
                  className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                >
                  Submit Test
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Test Completed</h2>
            <p>Thank you for taking the Aptitude Test!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AptitudeTest;
