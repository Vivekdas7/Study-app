import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBook, 
  FaChalkboardTeacher, 
  FaQuestionCircle, 
  FaLightbulb,
  FaSearch,
  FaFilter,
  FaArrowLeft,
  FaTimes,
  FaBars,
  FaExclamationTriangle
} from 'react-icons/fa';
import { LinearAlgebraContent } from '../data/LinearAlgebraContent';
import { ProbabilityContent } from '../data/ProbabilityContent';
import { CalculusContent } from '../data/CalculusContent';

const TOPIC_CONTENT = {
  'linear-algebra': LinearAlgebraContent,
  'probability': ProbabilityContent,
  'calculus': CalculusContent
};

// Enhanced markdown-like text parser with more features
const parseMarkdownText = (text) => {
  if (!text) return null;

  const parseLine = (line, index) => {
    // Advanced parsing with more semantic handling
    const parsers = [
      { 
        pattern: /^# (.+)/, 
        render: (match) => (
          <h2 key={index} className="text-2xl font-bold text-black border-b-2 border-blue-200 pb-2 mb-4">
            {match[1]}
          </h2>
        )
      },
      { 
        pattern: /^## (.+)/, 
        render: (match) => (
          <h3 key={index} className="text-xl font-semibold text-black mt-3 mb-2 pl-2 border-l-4 border-blue-500">
            {match[1]}
          </h3>
        )
      },
      { 
        pattern: /^- (.+)/, 
        render: (match) => (
          <li key={index} className="ml-4 text-black before:content-['▶'] before:mr-2 before:text-blue-500 before:text-xs">
            {match[1]}
          </li>
        )
      },
      { 
        pattern: /^`(.+)`/, 
        render: (match) => (
          <code key={index} className="bg-gray-100 text-black px-2 py-1 rounded text-sm">
            {match[1]}
          </code>
        )
      }
    ];

    // Find first matching parser
    for (let parser of parsers) {
      const match = line.match(parser.pattern);
      if (match) return parser.render(match);
    }

    // Default paragraph rendering
    return line.trim() ? (
      <p key={index} className="text-black mb-3 leading-relaxed">
        {line}
      </p>
    ) : null;
  };

  return text.split('\n').map(parseLine).filter(Boolean);
};

// Add new component for rendering solved questions
const SolvedQuestionCard = ({ question }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showSolution, setShowSolution] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // Advanced readability formatting
  const formatOption = (option) => {
    // Comprehensive formatting rules
    const formatRules = [
      // Mathematical notation improvements
      { 
        pattern: /R\^(\d+)/g, 
        replace: (match, dim) => `ℝ${dim}` 
      },
      { 
        pattern: /P\(X=(\d+)\)/g, 
        replace: (match, num) => `Probability(X = ${num})` 
      },
      { 
        pattern: /dim\(Null\((\w+)\)\)/g, 
        replace: (match, matrix) => `Dimension of Null Space(${matrix})` 
      },
      // Superscript and exponent clarification
      { 
        pattern: /(\w+)\^(\d+)/g, 
        replace: (match, base, exp) => `${base} raised to power ${exp}` 
      },
      // Expand mathematical and technical abbreviations
      {
        pattern: /\bA\b/g,
        replace: () => 'A'
      },
      {
        pattern: /\bT\b/g,
        replace: () => 'Transformation'
      }
    ];

    // Text readability and semantic improvement
    const improveReadability = (text) => {
      // Phrase restructuring for better comprehension
      const phraseMappings = [
        { 
          pattern: /^(All|The) (.+) (with|of|that) (.+)/i,
          replace: (match, qualifier, subject, connector, detail) => 
            `${qualifier} ${subject} ${connector} ${detail}`.replace(/\s+/g, ' ')
        },
        { 
          pattern: /^(A|An) (.+) (from|over|in) (.+)/i,
          replace: (match, article, subject, preposition, context) => 
            `${article} ${subject} ${preposition} ${context}`.replace(/\s+/g, ' ')
        }
      ];

      let processedText = text;
      phraseMappings.forEach(mapping => {
        const match = processedText.match(mapping.pattern);
        if (match) {
          processedText = mapping.replace(match);
        }
      });

      return processedText
        .replace(/\s+/g, ' ')  // Remove extra whitespaces
        .trim();
    };

    // Apply all formatting rules
    let formattedOption = option;
    formatRules.forEach(rule => {
      formattedOption = formattedOption.replace(rule.pattern, rule.replace);
    });

    return improveReadability(formattedOption);
  };

  return (
    <div className="w-full max-w-full xs:max-w-md sm:max-w-xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 mb-2 xs:mb-3 sm:mb-4 border-l-4 border-blue-500">
        <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center mb-2 xs:mb-3 space-y-2 xs:space-y-0">
          <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-semibold text-black w-full xs:w-auto text-center xs:text-left">
            GATE CSE {question.year} - {question.topic}
          </h3>
          <span className="text-xs xs:text-sm text-black bg-gray-100 px-2 py-1 rounded w-full xs:w-auto text-center">
            Difficulty: {question.difficulty} | Marks: {question.marks}
          </span>
        </div>
      
        <p className="text-black mb-2 xs:mb-3 sm:mb-4 text-xs xs:text-sm sm:text-base md:text-base font-medium leading-relaxed text-center xs:text-left">
          {question.question}
        </p>
      
        <div className="grid grid-cols-1 gap-2 xs:gap-3 sm:gap-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(option)}
              className={`
                p-2 xs:p-3 rounded-lg border text-left 
                transition-all duration-200 ease-in-out
                flex items-center
                ${selectedOption === option 
                  ? (option === question.correctAnswer 
                      ? 'bg-green-100 border-green-500 text-black shadow-md' 
                      : 'bg-red-100 border-red-500 text-black shadow-md')
                  : 'bg-gray-50 border-gray-300 hover:bg-blue-50 hover:border-blue-300'}
                text-xs sm:text-sm leading-relaxed
                w-full
              `}
            >
              <span className="font-bold mr-2 xs:mr-3 text-black min-w-[20px] text-center">
                {String.fromCharCode(65 + index)}.
              </span>
              <span className="flex-grow text-black text-left">
                {formatOption(option)}
              </span>
            </button>
          ))}
        </div>
      
        {selectedOption && (
          <div className="mt-2 xs:mt-3 sm:mt-4">
            <button 
              onClick={() => setShowSolution(!showSolution)}
              className="w-full bg-blue-500 text-black px-2 py-2 xs:px-3 xs:py-2 sm:px-4 sm:py-2 rounded hover:bg-blue-600 transition-colors text-xs xs:text-sm"
            >
              {showSolution ? 'Hide Solution' : 'Show Solution'}
            </button>
          
            {showSolution && (
              <div className="mt-2 xs:mt-3 bg-gray-50 p-2 xs:p-3 rounded">
                <h4 className="font-bold text-black mb-2 text-xs xs:text-sm sm:text-base">Solution</h4>
                <div className="text-xs xs:text-sm">
                  {parseMarkdownText(question.solution)}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const TopicContentViewer = () => {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Enhanced content filtering
  const filteredSections = useMemo(() => {
    if (!selectedTopic || !searchQuery) return null;
    
    const chapters = selectedTopic.chapters;
    const results = [];

    chapters.forEach((chapter, chapterIndex) => {
      chapter.sections.forEach((section, sectionIndex) => {
        if (
          section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          section.content.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          results.push({ chapter, chapterIndex, section, sectionIndex });
        }
      });
    });

    return results;
  }, [selectedTopic, searchQuery]);

  useEffect(() => {
    const topicContent = TOPIC_CONTENT[topicId];
    
    if (topicContent) {
      setSelectedTopic(topicContent);
      setActiveChapterIndex(0);
      setActiveSectionIndex(0);
    }
  }, [topicId]);

  // Loading state
  if (!selectedTopic) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center">
          <div className="animate-pulse">
            <FaBook className="mx-auto text-6xl text-blue-500 mb-4" />
          </div>
          <p className="text-black text-xl">Loading study materials...</p>
        </div>
      </div>
    );
  }

  const currentChapter = selectedTopic.chapters[activeChapterIndex];
  const currentSection = currentChapter.sections[activeSectionIndex];

  // Add a back navigation method
  const handleBackToStudyMaterials = () => {
    navigate('/study-materials');
  };

  // Responsive rendering for study materials
  const renderContent = (content) => {
    const responsiveTypography = {
      h1: "text-base xs:text-lg sm:text-xl md:text-2xl",
      h2: "text-sm xs:text-base sm:text-lg md:text-xl",
      h3: "text-xs xs:text-sm sm:text-base md:text-lg",
      p: "text-xs xs:text-sm sm:text-base",
      code: "text-xs xs:text-sm"
    };

    return (
      <div className="p-6">
        {parseMarkdownText(content)}
      </div>
    );
  };

  // Modify content rendering with error handling
  const renderContentWithSolvedQuestions = () => {
    // Check if currentSection is defined
    if (!currentSection) {
      return (
        <div className="flex items-center justify-center h-full p-6">
          <div className="text-center">
            <FaExclamationTriangle className="mx-auto text-6xl text-yellow-500 mb-4" />
            <p className="text-black text-xl">No section content available</p>
            <p className="text-gray-600 mt-2">Please select a section</p>
          </div>
        </div>
      );
    }

    // Check if solved questions exist
    if (currentSection.solvedQuestions && currentSection.solvedQuestions.length > 0) {
      return (
        <div className="p-6">
          <h2 className="text-2xl font-bold text-black border-b-2 border-blue-200 pb-2 mb-4">
            Solved GATE Questions
          </h2>
          
          {currentSection.solvedQuestions.map((question, index) => (
            <SolvedQuestionCard 
              key={index} 
              question={question} 
            />
          ))}
        </div>
      );
    }

    // Render markdown content if no solved questions
    return (
      <div className="p-6">
        {currentSection.content ? (
          parseMarkdownText(currentSection.content)
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <FaBook className="mx-auto text-6xl text-blue-500 mb-4" />
              <p className="text-black text-xl">No content available</p>
              <p className="text-gray-600 mt-2">This section is empty</p>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Mobile-friendly chapter and section rendering
  const renderChapters = () => {
    return (
      <div className="w-full bg-white shadow-lg border-r">
        <div className="p-2 xs:p-3 sm:p-4 border-b">
          <h2 className="text-sm xs:text-base sm:text-xl font-bold text-black text-center xs:text-left">
            {selectedTopic.title}
          </h2>
        </div>
        <div className="overflow-y-auto max-h-[50vh] xs:max-h-[60vh] sm:max-h-[calc(100vh-4rem)] px-1 sm:px-0">
          {selectedTopic.chapters.map((chapter, chapterIndex) => (
            <div
              key={chapterIndex}
              className={`
                cursor-pointer p-2 xs:p-3 hover:bg-blue-50 transition-colors
                text-xs sm:text-sm
                ${activeChapterIndex === chapterIndex 
                  ? 'bg-blue-100 text-black border-l-4 border-blue-500' 
                  : 'text-black'}
              `}
              onClick={() => {
                setActiveChapterIndex(chapterIndex);
              }}
            >
              {chapter.title}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Mobile-friendly section navigation
  const renderSectionSidebar = () => {
    return (
      <div className="w-full bg-gray-100 border-r">
        <div className="p-2 xs:p-3 sm:p-4 border-b bg-white">
          <h3 className="text-sm xs:text-base font-semibold text-black text-center">
            {currentChapter.title} Sections
          </h3>
        </div>
        
        <div className="overflow-y-auto max-h-[50vh] xs:max-h-[60vh] sm:max-h-[calc(100vh-4rem)]">
          {currentChapter.sections.map((section, sectionIndex) => (
            <div 
              key={sectionIndex}
              className={`
                cursor-pointer p-2 xs:p-3 hover:bg-blue-50 transition-colors
                text-xs xs:text-sm
                ${activeSectionIndex === sectionIndex 
                  ? 'bg-blue-100 text-black border-l-4 border-blue-500' 
                  : 'text-black'}
                flex items-center
              `}
              onClick={() => setActiveSectionIndex(sectionIndex)}
            >
              <div>
                <p className="font-semibold text-xs xs:text-sm">
                  {section.title}
                </p>
                <p className="text-[10px] xs:text-xs text-gray-500">
                  Chapter: {currentChapter.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50 relative">
      {/* Mobile Navigation Toggle */}
      <button 
        onClick={toggleMenu}
        className="absolute top-4 left-4 z-50 bg-blue-500 text-black p-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors md:hidden"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Overlay Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white overflow-y-auto md:hidden">
          <div className="p-4">
            <button 
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-2xl"
            >
              <FaTimes />
            </button>

            {/* Chapters Section */}
            <div className="mt-12">
              <h2 className="text-xl font-bold text-black mb-4 text-center">
                {selectedTopic.title} Chapters
              </h2>
              {selectedTopic.chapters.map((chapter, chapterIndex) => (
                <div
                  key={chapterIndex}
                  className={`
                    cursor-pointer p-3 mb-2 rounded-lg transition-colors
                    text-sm
                    ${activeChapterIndex === chapterIndex 
                      ? 'bg-blue-100 text-black' 
                      : 'bg-gray-100 text-black'}
                  `}
                  onClick={() => {
                    setActiveChapterIndex(chapterIndex);
                    setIsMenuOpen(false);
                  }}
                >
                  {chapter.title}
                </div>
              ))}
            </div>

            {/* Sections Section */}
            <div className="mt-6">
              <h2 className="text-xl font-bold text-black mb-4 text-center">
                {currentChapter.title} Sections
              </h2>
              {currentChapter.sections.map((section, sectionIndex) => (
                <div
                  key={sectionIndex}
                  className={`
                    cursor-pointer p-3 mb-2 rounded-lg transition-colors
                    text-sm
                    ${activeSectionIndex === sectionIndex 
                      ? 'bg-blue-100 text-black' 
                      : 'bg-gray-100 text-black'}
                  `}
                  onClick={() => {
                    setActiveSectionIndex(sectionIndex);
                    setIsMenuOpen(false);
                  }}
                >
                  {section.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebars - Hidden on Mobile */}
      <div className="hidden md:block">
        {renderChapters()}
        {renderSectionSidebar()}
      </div>

      {/* Content Area */}
      <div className="w-full md:w-3/5 overflow-y-auto">
        <button 
          onClick={handleBackToStudyMaterials}
          className="hidden md:block absolute top-4 left-4 z-50 bg-blue-500 text-black p-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        >
          <FaArrowLeft />
        </button>

        {renderContentWithSolvedQuestions()}
      </div>
    </div>
  );
};

export default TopicContentViewer;
