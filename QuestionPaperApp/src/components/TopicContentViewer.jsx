import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  FaBook, 
  FaChalkboardTeacher, 
  FaLightbulb,
  FaSearch,
  FaFilter,
  FaArrowLeft,
  FaTimes,
  FaExclamationCircle,
  FaClock
} from 'react-icons/fa';
import { engineeringMathematicsData } from '../data/engineeringMathematics';
import { discreteMathematicsData } from '../data/discreteMathematics';
import { linearAlgebraData } from '../data/topics/linearAlgebra';

// Import new CSS for full-width styling
import '../styles/topic-content-viewer.css';

const topicContents = {
  // Discrete Mathematics Topics
  'discrete-math': discreteMathematicsData,
  'engineering-math': engineeringMathematicsData,
  'linear-algebra': linearAlgebraData
};

const TopicContentViewer = () => {
  const { topicCategory, topicName } = useParams();
  const navigate = useNavigate();

  // Comprehensive debug logging
  console.log('Route Parameters:', {
    topicCategory,
    topicName
  });

  console.log('Available Categories:', Object.keys(topicContents));
  console.log('Available Topics:', 
    Object.entries(topicContents).reduce((acc, [category, topics]) => {
      acc[category] = Object.keys(topics);
      return acc;
    }, {})
  );

  // State management
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [error, setError] = useState(null);

  // Find topic content on component mount
  useEffect(() => {
    // Enhanced debugging logs
    console.log('Current Route Parameters:', {
      topicCategory,
      topicName,
      fullPath: window.location.pathname
    });

    console.log('Available Categories:', Object.keys(topicContents));
    console.log('Available Topics in Discrete Math:', 
      Object.keys(topicContents['discrete-math'] || {})
    );

    // Validate inputs with more robust checks
    if (!topicCategory || !topicName) {
      console.error('Invalid route: Missing category or topic name');
      setError('Invalid route: Please provide both category and topic');
      return;
    }

    // Normalize route parameters
    const normalizedCategory = topicCategory.toLowerCase().replace(/[^a-z-]/g, '');
    const normalizedTopicName = topicName.toLowerCase().replace(/[^a-z-]/g, '');

    console.log('Normalized Parameters:', {
      normalizedCategory,
      normalizedTopicName
    });

    // Check if category exists
    if (!topicContents[normalizedCategory]) {
      console.error(`Category not found: ${normalizedCategory}`);
      setError(`Category not found: ${normalizedCategory}`);
      return;
    }

    // Verify exact match or find close match
    const categoryTopics = topicContents[normalizedCategory];
    let content = categoryTopics[normalizedTopicName];
    
    if (!content) {
      // Try fuzzy matching
      const possibleTopics = Object.keys(categoryTopics);
      const closestMatch = possibleTopics.find(topic => 
        topic.replace(/-/g, '') === normalizedTopicName.replace(/-/g, '')
      );

      console.log('Possible Topics:', possibleTopics);
      console.log('Closest Match:', closestMatch);

      if (closestMatch) {
        content = categoryTopics[closestMatch];
        console.log('Found close match:', closestMatch);
      } else {
        console.error(`Topic not found: ${normalizedTopicName} in category ${normalizedCategory}`);
        setError(`Topic not found. Available topics: ${possibleTopics.join(', ')}`);
        return;
      }
    }

    // Set selected topic
    setSelectedTopic(content);
  }, [topicCategory, topicName]);

  // Memoize filtered content for search functionality
  const filteredContent = useMemo(() => {
    if (!selectedTopic || !searchQuery) return selectedTopic;

    return {
      ...selectedTopic,
      sections: selectedTopic.sections.filter(section => 
        section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        section.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
    };
  }, [selectedTopic, searchQuery]);

  // Handle search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Toggle search visibility
  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  // Handle back navigation
  const handleBackNavigation = () => {
    navigate('/study-materials');
  };

  // Render method for comprehensive topic sections
  const renderTopicSections = (sections) => {
    return sections.map((section, index) => (
      <div key={index} className="mb-6 p-4 bg-white shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold text-blue-700">{section.title}</h3>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded">
            {section.levelOfDifficulty}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4">{section.content}</p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Key Topics</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {section.keyTopics.map((topic, topicIndex) => (
                <li key={topicIndex} className="hover:text-blue-600 transition-colors">
                  {topic}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-50 p-3 rounded">
            <h4 className="font-medium text-gray-800 mb-2">Learning Focus</h4>
            <p className="text-sm text-gray-700">
              Develop advanced problem-solving skills and deep conceptual understanding
            </p>
          </div>
        </div>

        {section.detailedNotes && (
          <div className="mt-4 bg-gray-100 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-3">Detailed Conceptual Notes</h4>
            <pre className="whitespace-pre-wrap text-gray-700 text-sm leading-relaxed">
              {section.detailedNotes}
            </pre>
          </div>
        )}
      </div>
    ));
  };

  // Enhanced rendering for previous year questions
  const renderPreviousYearQuestions = (questions) => {
    return (
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-3xl font-bold text-blue-900 mb-6 border-b-2 border-blue-300 pb-3">
          GATE CSE Previous Year Questions
        </h3>
        
        {questions.map((q, index) => (
          <div key={index} className="mb-8 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-blue-100 p-4 flex justify-between items-center">
              <div>
                <span className="text-xl font-semibold text-blue-800">GATE {q.year}</span>
                <span className="ml-4 px-2 py-1 bg-red-100 text-red-700 rounded text-sm">
                  {q.topic}
                </span>
              </div>
              <span className="text-sm text-gray-600 font-medium">
                Difficulty: {q.difficulty} | Marks: {q.marks}
              </span>
            </div>
            
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Question</h4>
              <p className="text-gray-700 italic mb-4">{q.question}</p>
              
              <div className="bg-gray-50 p-4 rounded">
                <h4 className="text-lg font-semibold text-green-800 mb-3">Solution</h4>
                <pre className="whitespace-pre-wrap text-gray-800 text-sm leading-relaxed">
                  {q.solution}
                </pre>
              </div>
            </div>
          </div>
        ))}
        
        <div className="mt-6 bg-blue-50 p-4 rounded-lg text-center">
          <p className="text-blue-800 font-medium">
            Tip: Practice these questions to understand problem-solving techniques and exam patterns
          </p>
        </div>
      </div>
    );
  };

  // Render error state
  if (error) {
    // GATE CSE Previous Year Questions Collection
    const gateCSEPreviousYearQuestions = [
      {
        topic: 'Discrete Mathematics',
        questions: [
          {
            year: 2022,
            question: 'How many 3-digit numbers can be formed using digits 0-9 without repetition?',
            answer: 'Total ways = 9 * 9 * 8 = 648 (first digit can\'t be 0)',
            difficulty: 'Medium',
            marks: 2
          },
          {
            year: 2021,
            question: 'Prove that the sum of first n natural numbers is n(n+1)/2 using mathematical induction.',
            answer: 'Base case: For n=1, 1 = 1(1+1)/2\nInductive step: Assume true for k, prove for k+1\nSum(k+1) = Sum(k) + (k+1) = k(k+1)/2 + (k+1) = (k+1)(k+2)/2',
            difficulty: 'Hard',
            marks: 3
          }
        ]
      },
      {
        topic: 'Algorithms',
        questions: [
          {
            year: 2022,
            question: 'What is the time complexity of the following algorithm?\nfor(i=0; i<n; i++)\n  for(j=0; j<n; j++)\n    // constant time operation',
            answer: 'Time Complexity: O(n²)\nNested loops, each running n times',
            difficulty: 'Easy',
            marks: 2
          },
          {
            year: 2021,
            question: 'Explain the difference between Breadth-First Search (BFS) and Depth-First Search (DFS).',
            answer: 'BFS explores all vertices at the current depth before moving to next depth level.\nDFS explores as far as possible along each branch before backtracking.',
            difficulty: 'Medium',
            marks: 3
          }
        ]
      },
      {
        topic: 'Computer Networks',
        questions: [
          {
            year: 2022,
            question: 'What is the purpose of the TCP three-way handshake?',
            answer: 'Establishes a connection between client and server:\n1. SYN: Client sends synchronization request\n2. SYN-ACK: Server acknowledges\n3. ACK: Client confirms connection',
            difficulty: 'Medium',
            marks: 2
          },
          {
            year: 2021,
            question: 'Explain the concept of subnetting in IPv4 addressing.',
            answer: 'Subnetting divides a larger network into smaller sub-networks to improve network performance and address allocation efficiency.',
            difficulty: 'Hard',
            marks: 3
          }
        ]
      },
      {
        topic: 'Operating Systems',
        questions: [
          {
            year: 2022,
            question: 'Describe the difference between mutex and semaphore.',
            answer: 'Mutex: Mutual exclusion lock, allows only one thread to access a resource\nSemaphore: Allows multiple threads to access a fixed number of resources',
            difficulty: 'Medium',
            marks: 2
          },
          {
            year: 2021,
            question: 'Explain the concept of deadlock and list its four necessary conditions.',
            answer: 'Deadlock: Situation where processes are unable to proceed\n4 Conditions:\n1. Mutual Exclusion\n2. Hold and Wait\n3. No Preemption\n4. Circular Wait',
            difficulty: 'Hard',
            marks: 3
          }
        ]
      },
      {
        topic: 'Database Management Systems',
        questions: [
          {
            year: 2022,
            question: 'What is the difference between BCNF and 3NF in database normalization?',
            answer: 'BCNF is a stricter form of 3NF. In BCNF, for every functional dependency X → Y, X must be a superkey.',
            difficulty: 'Medium',
            marks: 2
          },
          {
            year: 2021,
            question: 'Explain the ACID properties of database transactions.',
            answer: 'A: Atomicity (all or nothing)\nC: Consistency (valid state)\nI: Isolation (concurrent transactions)\nD: Durability (permanent storage)',
            difficulty: 'Hard',
            marks: 3
          }
        ]
      }
    ];

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="text-center p-8 bg-white shadow-md rounded-lg max-w-2xl w-full">
          <div className="mb-6">
            <FaExclamationCircle className="mx-auto text-6xl text-red-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Topic Not Found</h2>
            <p className="text-gray-600">The requested topic could not be found.</p>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">GATE CSE Previous Year Questions</h3>
            {gateCSEPreviousYearQuestions.map((topicQuestions, index) => (
              <div key={index} className="mb-4">
                <h4 className="text-lg font-bold text-gray-700 mb-2">{topicQuestions.topic}</h4>
                {topicQuestions.questions.map((q, qIndex) => (
                  <div key={qIndex} className="bg-white p-3 rounded-md shadow-sm mb-2">
                    <p className="text-gray-800 font-medium mb-2">
                      <span className="font-bold">Year {q.year}: </span>
                      {q.question}
                    </p>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="text-gray-700">
                        <span className="font-bold">Answer: </span>
                        {q.answer}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Difficulty: {q.difficulty} | Marks: {q.marks}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          
          <div className="flex flex-col space-y-4">
            <button 
              onClick={handleBackNavigation}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Back to Study Materials
            </button>
            
            <button 
              onClick={() => {
                // Redirect to full study materials with more context
                navigate('/study-materials', { 
                  state: { 
                    highlightError: true, 
                    errorMessage: 'Unable to find the specific topic. Browse available materials.' 
                  } 
                });
              }}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
            >
              Browse All Materials
            </button>
          </div>
          
          <div className="mt-6 text-sm text-gray-500 text-left">
            <h3 className="font-semibold mb-2">Troubleshooting Tips:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Check the URL for any typos</li>
              <li>Ensure you're using kebab-case (e.g., propositional-and-first-order-logic)</li>
              <li>Verify the topic is in the correct category</li>
              <li>Use the search functionality to find your desired topic</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // Render loading state
  if (!selectedTopic) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin mb-4 mx-auto">
            <FaClock className="text-6xl text-blue-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Loading Topic Content</h2>
          <p className="text-gray-600">Please wait while we prepare your study materials...</p>
        </div>
      </div>
    );
  }

  // Main rendering logic remains the same as in previous implementation
  return (
    <div className="topic-content-container relative">
      {/* Floating Back Button */}
      <button 
        onClick={() => navigate(-1)} 
        className="floating-back-button"
        aria-label="Go Back"
      >
        <FaArrowLeft className="text-lg" />
      </button>

      <div className="topic-content-wrapper">
        {selectedTopic && (
          <div>
            {/* Existing title and description rendering */}
            
            {selectedTopic.comprehensiveOverview && (
              <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-blue-800 mb-4 border-b-2 border-blue-300 pb-2">
                  Comprehensive Overview
                </h2>
                <pre className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                  {selectedTopic.comprehensiveOverview}
                </pre>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-2xl font-semibold text-blue-800 mb-4">Topic Sections</h2>
                {renderTopicSections(selectedTopic.sections)}
              </div>
              
              <div>
                {renderPreviousYearQuestions(selectedTopic.previousYearQuestions)}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopicContentViewer;
