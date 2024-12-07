import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  FaBook, 
  FaCode,
  FaChalkboardTeacher, 
  FaLightbulb, 
  FaCalculator, 
  FaExclamationCircle, 
  FaChevronRight,
  FaDesktop,    
  FaMobileAlt,  
  FaList,       
  FaInfoCircle, 
  FaSquareRootAlt        
} from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import framer motion

// Linear Algebra Imports
import { linearAlgebraData } from '../data/topics/linearAlgebra';
import { vectorSpacesData } from '../data/topics/vectorSpaces';
import { linearTransformationsData } from '../data/topics/linearTransformations';
import { eigenvaluesEigenvectorsData } from '../data/topics/eigenvaluesEigenvectors';

// Discrete Mathematics Imports
import { propositionalLogicData } from '../data/topics/propositionalLogic';
import { setsAndRelationsData } from '../data/topics/setsAndRelations';
import { graphTheoryData } from '../data/topics/graphTheory';
import { combinatoricsData } from '../data/topics/combinatorics';

// Algorithm Topic Imports
import { algorithmDesignData } from '../data/topics/algorithmDesign';
import { dataStructuresData } from '../data/topics/dataStructures';
import { sortingAlgorithmsData } from '../data/topics/sortingAlgorithms';
import { graphAlgorithmsData } from '../data/topics/graphAlgorithms';
import { asymptoticalAnalysisData } from '../data/topics/asymptotic-analysis';
import { recurrenceRelationsData } from '../data/topics/recurrence-relations';
import { divideAndConquerData } from '../data/topics/divide-and-conquer';
import { greedyTechniquesData } from '../data/topics/greedy-techniques';
import { dynamicProgrammingData } from '../data/topics/dynamic-programming';
import { searchingTechniquesData } from '../data/topics/searching-techniques';
import { hashingTechniquesData } from '../data/topics/hashing-techniques';

// Operating Systems Topic Imports
import { processManagementData } from '../data/topics/process-management';
import { memoryManagementData } from '../data/topics/memory-management';
import { processSynchronizationData } from '../data/topics/process-synchronization';
import { deadlockHandlingData } from '../data/topics/deadlock-handling';
import { cpuSchedulingData } from '../data/topics/cpu-scheduling';
import { fileSystemsData } from '../data/topics/file-systems';
import { ioManagementData } from '../data/topics/io-management';

// Additional Operating Systems Topic Imports
import { processesData } from '../data/topics/processes';
import { threadsData } from '../data/topics/threads';
import { interProcessCommunicationData } from '../data/topics/inter-process-communication';
import { concurrencySynchronizationData } from '../data/topics/concurrency-synchronization';
import { mainMemoryManagementData } from '../data/topics/main-memory-management';
import { virtualMemoryData } from '../data/topics/virtual-memory';
import { diskSchedulingData } from '../data/topics/disk-scheduling';

// Database Management Topic Imports
import { databaseConceptsData } from '../data/topics/database-concepts';
import { relationalDatabaseModelData } from '../data/topics/relational-database-model';
import { normalizationData } from '../data/topics/normalization';
import { sqlData } from '../data/topics/sql';
import { transactionManagementData } from '../data/topics/transaction-management';
import { indexingData } from '../data/topics/indexing';
import { queryProcessingData } from '../data/topics/query-processing';

// Computer Networks Topic Imports
import { networkFundamentalsData } from '../data/topics/network-fundamentals';
import { osiModelData } from '../data/topics/osi-model';
import { tcpIpProtocolSuiteData } from '../data/topics/tcp-ip-protocol-suite';
import { routingData } from '../data/topics/routing';
import { networkSecurityData } from '../data/topics/network-security';
import { transportLayerData } from '../data/topics/transport-layer';
import { networkPerformanceData } from '../data/topics/network-performance';

// Theory of Computation Topic Imports
import { finiteAutomataData } from '../data/topics/finite-automata';
import { regularExpressionsData } from '../data/topics/regular-expressions';
import { contextFreeGrammarsData } from '../data/topics/context-free-grammars';
import { pushdownAutomataData } from '../data/topics/pushdown-automata';
import { turingMachinesData } from '../data/topics/turing-machines';
import { computabilityTheoryData } from '../data/topics/computability-theory';
import { formalLanguagesData } from '../data/topics/formal-languages';

// Compiler Design Topic Imports
import { lexicalAnalysisData } from '../data/topics/lexical-analysis';
import { syntaxAnalysisData } from '../data/topics/syntax-analysis';
import { semanticAnalysisData } from '../data/topics/semantic-analysis';
import { intermediateCodeGenerationData } from '../data/topics/intermediate-code-generation';
import { codeOptimizationData } from '../data/topics/code-optimization';
import { codeGenerationData } from '../data/topics/code-generation';
import { compilerDesignPrinciplesData } from '../data/topics/compiler-design-principles';

// Digital Logic & Design Topic Imports
import { booleanAlgebraData } from '../data/topics/boolean-algebra';
import { logicGatesData } from '../data/topics/logic-gates';
import { combinationalCircuitsData } from '../data/topics/combinational-circuits';
import { sequentialCircuitsData } from '../data/topics/sequential-circuits';
import { minimizationTechniquesData } from '../data/topics/minimization-techniques';
import { synchronousAsynchronousCircuitsData } from '../data/topics/synchronous-asynchronous-circuits';
import { digitalDesignPrinciplesData } from '../data/topics/digital-design-principles';

// Computer Organization and Architecture Topic Imports
import { basicComputerOrganizationData } from '../data/topics/basic-computer-organization';
import { cpuOrganizationDesignData } from '../data/topics/cpu-organization-design';
import { memoryHierarchyData } from '../data/topics/memory-hierarchy';
import { instructionLevelParallelismData } from '../data/topics/instruction-level-parallelism';
import { inputOutputOrganizationData } from '../data/topics/input-output-organization';
import { computerArithmeticData } from '../data/topics/computer-arithmetic';
import { advancedComputerArchitectureData } from '../data/topics/advanced-computer-architecture';

// Data Structures & C Programming Topic Imports
import { arraysAndStringsData } from '../data/topics/arrays-and-strings';
import { pointersAndMemoryManagementData } from '../data/topics/pointers-and-memory-management';
import { linkedListsData } from '../data/topics/linked-lists';
import { stacksAndQueuesData } from '../data/topics/stacks-and-queues';
import { treesAndBinaryTreesData } from '../data/topics/trees-and-binary-trees';
import { graphsData } from '../data/topics/graphs';
import { advancedDataStructuresData } from '../data/topics/advanced-data-structures';

const TopicDocumentation = () => {
  const [activeTab, setActiveTab] = useState('keyTopics');
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [mobileContentView, setMobileContentView] = useState('navigation');
  const [expandedSections, setExpandedSections] = useState({});
  const { topicCategory, topicName } = useParams();
  
  // Animate tab changes
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [activeTab]);

  // Responsive view detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Initialize state with default mobile content view
  useEffect(() => {
    // Set default mobile content view to key topics
    setMobileContentView('keyTopics');
    setActiveTab('keyTopics');
  }, []);

  // Debug useEffect for mobile view and content view
  useEffect(() => {
    console.log('Mobile View State:', {
      isMobileView,
      mobileContentView,
      activeTab
    });
  }, [isMobileView, mobileContentView, activeTab]);

  // Toggle section expansion for mobile
  const toggleSection = (sectionName) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

  // Render mobile-friendly content
  const renderMobileContent = () => {
    return (
      <div className="
        mobile-content-container
        space-y-4
        p-4
        bg-white
        rounded-lg
        shadow-md
      ">
        {renderMobileSectionContent()}
        <MobileBottomNavigation />
      </div>
    );
  };

  // Mobile-friendly bottom navigation
  const MobileBottomNavigation = () => {
    const mobileBottomNavItems = [
      { 
        id: 'keyTopics', 
        icon: FaChalkboardTeacher, 
        label: 'Key Topics',
        color: 'text-green-600'
      },
      { 
        id: 'theorems', 
        icon: FaLightbulb, 
        label: 'Theorems',
        color: 'text-purple-600'
      },
      { 
        id: 'gateQuestions', 
        icon: FaCalculator, 
        label: 'GATE Questions',
        color: 'text-orange-600'
      },
      { 
        id: 'commonMistakes', 
        icon: FaExclamationCircle, 
        label: 'Common Mistakes',
        color: 'text-red-600'
      }
    ];

    return (
      <div className="
        fixed bottom-0 left-0 right-0 
        bg-white shadow-2xl z-50
        border-t border-gray-200
      ">
        <div className="flex justify-around py-3 px-2">
          {mobileBottomNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                console.log(`Clicked: ${item.id}`); // Debug log
                setMobileContentView(item.id);
                setActiveTab(item.id);
              }}
              className={`
                flex flex-col items-center 
                ${mobileContentView === item.id 
                  ? `${item.color} font-bold` 
                  : 'text-gray-500 hover:text-gray-700'}
                transition-colors duration-200
                p-2 rounded-lg
                focus:outline-none
                w-full // Ensure full width for easier tapping
              `}
            >
              <item.icon 
                className={`
                  text-xl mb-1
                  ${mobileContentView === item.id 
                    ? 'scale-110' 
                    : 'scale-100'}
                  transition-transform duration-200
                `} 
              />
              <span className="text-xs">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  };

  // Render mobile section content
  const renderMobileSectionContent = () => {
    const data = getTopicData();
    const sectionName = mobileContentView;

    console.log('Current Mobile Content View:', sectionName); // Debug log

    if (!data[sectionName] || data[sectionName].length === 0) {
      return (
        <div className="
          text-center text-gray-500 
          p-4 bg-gray-50 rounded-lg
          m-4 shadow-sm
        ">
          <FaInfoCircle className="mx-auto text-3xl mb-2 text-gray-400" />
          No content available for this section.
        </div>
      );
    }

    switch(sectionName) {
      case 'keyTopics':
        return (
          <div className="p-4 space-y-4">
            {data[sectionName].map((topic, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="
                  bg-white 
                  rounded-lg 
                  shadow-md 
                  p-4 
                  mb-4 
                  last:mb-0
                  hover:shadow-lg 
                  transition-all 
                  duration-300
                "
              >
                <div className="
                  bg-blue-50 border-b border-blue-100
                  p-3 flex items-center
                ">
                  <FaChalkboardTeacher className="text-blue-600 mr-3 text-xl" />
                  <h4 className="
                    text-base font-bold 
                    text-blue-800
                  ">
                    {topic.title}
                  </h4>
                </div>
                <div className="p-4">
                  <p className="
                    text-sm text-gray-700 
                    leading-relaxed
                  ">
                    {topic.content}
                  </p>
                  {topic.formulas && (
                    <div className="
                      mt-3 p-3 
                      bg-blue-50 rounded-lg
                      border border-blue-100
                    ">
                      {topic.formulas.map((formula, formulaIndex) => (
                        <div 
                          key={formulaIndex} 
                          className="
                            text-xs text-blue-900
                            mb-2 last:mb-0
                            flex items-center
                          "
                        >
                          <FaSquareRootAlt className="mr-2 text-blue-700" />
                          <strong className="mr-2 text-blue-800">
                            {formula.name}:
                          </strong>
                          {formula.formula}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'theorems':
        return (
          <div className="p-4 space-y-4">
            {data[sectionName].map((theorem, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="
                  bg-white 
                  rounded-lg 
                  shadow-md 
                  p-4 
                  mb-4 
                  last:mb-0
                  hover:shadow-lg 
                  transition-all 
                  duration-300
                "
              >
                <div className="
                  bg-green-50 border-b border-green-100
                  p-3 flex items-center
                ">
                  <FaLightbulb className="text-green-600 mr-3 text-xl" />
                  <h4 className="
                    text-base font-bold 
                    text-green-800
                  ">
                    {theorem.name}
                  </h4>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <h5 className="
                      text-sm font-semibold 
                      text-green-700 mb-1
                    ">
                      Statement
                    </h5>
                    <p className="
                      text-sm text-gray-700 
                      italic
                    ">
                      {theorem.statement}
                    </p>
                  </div>
                  <div>
                    <h5 className="
                      text-sm font-semibold 
                      text-green-700 mb-1
                    ">
                      Explanation
                    </h5>
                    <p className="
                      text-sm text-gray-700
                    ">
                      {theorem.explanation}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'gateQuestions':
        return (
          <div className="p-4 space-y-4">
            {data[sectionName].map((question, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="
                  bg-white 
                  rounded-lg 
                  shadow-md 
                  p-4 
                  mb-4 
                  last:mb-0
                  hover:shadow-lg 
                  transition-all 
                  duration-300
                "
              >
                <div className="
                  bg-orange-50 border-b border-orange-100
                  p-3 flex justify-between items-center
                ">
                  <div className="flex items-center">
                    <FaCalculator className="text-orange-600 mr-3 text-xl" />
                    <h4 className="
                      text-base font-bold 
                      text-orange-800
                    ">
                      GATE {question.year} Question
                    </h4>
                  </div>
                  <span className="
                    bg-orange-100 text-orange-800 
                    px-2 py-1 rounded-full text-xs
                  ">
                    Problem
                  </span>
                </div>
                <div className="p-4 space-y-3">
                  <p className="
                    text-sm text-gray-700 
                    leading-relaxed
                  ">
                    {question.question}
                  </p>
                  
                  <div className="
                    bg-gray-50 rounded-lg 
                    p-3 border border-gray-200
                  ">
                    <h5 className="
                      text-sm font-semibold 
                      text-gray-800 mb-2
                      border-b border-gray-300 pb-1
                    ">
                      Solution
                    </h5>
                    <ol className="
                      list-decimal list-inside 
                      space-y-1 text-sm text-gray-700
                    ">
                      {question.solution.steps.map((step, stepIndex) => (
                        <li 
                          key={stepIndex} 
                          className="
                            hover:text-orange-700 
                            transition-colors
                          "
                        >
                          {step}
                        </li>
                      ))}
                    </ol>
                    <div className="
                      mt-3 pt-2 border-t border-gray-200 
                      font-bold text-green-700
                      text-center text-sm
                    ">
                      Answer: {question.solution.answer}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'commonMistakes':
        return (
          <div className="p-4 space-y-4">
            {data[sectionName].map((mistake, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="
                  bg-white 
                  rounded-lg 
                  shadow-md 
                  p-4 
                  mb-4 
                  last:mb-0
                  hover:shadow-lg 
                  transition-all 
                  duration-300
                "
              >
                <div className="
                  bg-red-50 border-b border-red-100
                  p-3 flex items-center
                ">
                  <FaExclamationCircle className="text-red-600 mr-3 text-xl" />
                  <h4 className="
                    text-base font-bold 
                    text-red-800
                  ">
                    Common Mistake
                  </h4>
                </div>
                <div className="p-4 space-y-3">
                  <p className="
                    text-sm text-red-700 
                    italic
                  ">
                    {mistake.mistake}
                  </p>
                  <div className="
                    bg-white rounded-lg 
                    border border-red-100 
                    p-3
                  ">
                    <h5 className="
                      text-sm font-semibold 
                      text-green-800 mb-1
                    ">
                      Correction
                    </h5>
                    <p className="
                      text-sm text-gray-700
                    ">
                      {mistake.correction}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  // Get the appropriate data based on topic name
  const getTopicData = () => {
    switch(topicName) {
      // Linear Algebra Topics
      case 'linear-algebra': return linearAlgebraData;
      case 'vector-spaces': return vectorSpacesData;
      case 'linear-transformations': return linearTransformationsData;
      case 'eigenvalues-eigenvectors': return eigenvaluesEigenvectorsData;
      
      // Discrete Mathematics Topics
      case 'propositional-logic': return propositionalLogicData;
      case 'sets-and-relations': return setsAndRelationsData;
      case 'graph-theory': return graphTheoryData;
      case 'combinatorics': return combinatoricsData;
      
      // Algorithm Topics
      case 'algorithm-design': return algorithmDesignData;
      case 'data-structures': return dataStructuresData;
      case 'sorting-algorithms': return sortingAlgorithmsData;
      case 'graph-algorithms': return graphAlgorithmsData;
      case 'asymptotic-analysis': return asymptoticalAnalysisData;
      case 'recurrence-relations': return recurrenceRelationsData;
      case 'divide-and-conquer': return divideAndConquerData;
      case 'greedy-techniques': return greedyTechniquesData;
      case 'dynamic-programming': return dynamicProgrammingData;
      case 'searching-techniques': return searchingTechniquesData;
      case 'hashing-techniques': return hashingTechniquesData;
      
      // Operating Systems Topics
      case 'process-management': return processManagementData;
      case 'memory-management': return memoryManagementData;
      case 'process-synchronization': return processSynchronizationData;
      case 'deadlock-handling': return deadlockHandlingData;
      case 'cpu-scheduling': return cpuSchedulingData;
      case 'file-systems': return fileSystemsData;
      case 'io-management': return ioManagementData;
      case 'processes': return processesData;
      case 'threads': return threadsData;
      case 'inter-process-communication': return interProcessCommunicationData;
      case 'concurrency-synchronization': return concurrencySynchronizationData;
      case 'main-memory-management': return mainMemoryManagementData;
      case 'virtual-memory': return virtualMemoryData;
      case 'disk-scheduling': return diskSchedulingData;
      
      // Database Management Topics
      case 'database-concepts': return databaseConceptsData;
      case 'relational-database-model': return relationalDatabaseModelData;
      case 'normalization': return normalizationData;
      case 'sql': return sqlData;
      case 'transaction-management': return transactionManagementData;
      case 'indexing': return indexingData;
      case 'query-processing': return queryProcessingData;
      
      // Computer Networks Topics
      case 'network-fundamentals': return networkFundamentalsData;
      case 'osi-model': return osiModelData;
      case 'tcp-ip-protocol-suite': return tcpIpProtocolSuiteData;
      case 'routing': return routingData;
      case 'network-security': return networkSecurityData;
      case 'transport-layer': return transportLayerData;
      case 'network-performance': return networkPerformanceData;
      
      // Theory of Computation Topics
      case 'finite-automata': return finiteAutomataData;
      case 'regular-expressions': return regularExpressionsData;
      case 'context-free-grammars': return contextFreeGrammarsData;
      case 'pushdown-automata': return pushdownAutomataData;
      case 'turing-machines': return turingMachinesData;
      case 'computability-theory': return computabilityTheoryData;
      case 'formal-languages': return formalLanguagesData;
      
      // Compiler Design Topics
      case 'lexical-analysis': return lexicalAnalysisData;
      case 'syntax-analysis': return syntaxAnalysisData;
      case 'semantic-analysis': return semanticAnalysisData;
      case 'intermediate-code-generation': return intermediateCodeGenerationData;
      case 'code-optimization': return codeOptimizationData;
      case 'code-generation': return codeGenerationData;
      case 'compiler-design-principles': return compilerDesignPrinciplesData;
      
      // Digital Logic & Design Topics
      case 'boolean-algebra': return booleanAlgebraData;
      case 'logic-gates': return logicGatesData;
      case 'combinational-circuits': return combinationalCircuitsData;
      case 'sequential-circuits': return sequentialCircuitsData;
      case 'minimization-techniques': return minimizationTechniquesData;
      case 'synchronous-asynchronous-circuits': return synchronousAsynchronousCircuitsData;
      case 'digital-design-principles': return digitalDesignPrinciplesData;
      
      // Computer Organization and Architecture Topics
      case 'basic-computer-organization': return basicComputerOrganizationData;
      case 'cpu-organization-design': return cpuOrganizationDesignData;
      case 'memory-hierarchy': return memoryHierarchyData;
      case 'instruction-level-parallelism': return instructionLevelParallelismData;
      case 'input-output-organization': return inputOutputOrganizationData;
      case 'computer-arithmetic': return computerArithmeticData;
      case 'advanced-computer-architecture': return advancedComputerArchitectureData;
      
      // Data Structures & C Programming Topics
      case 'arrays-and-strings': return arraysAndStringsData;
      case 'pointers-and-memory-management': return pointersAndMemoryManagementData;
      case 'linked-lists': return linkedListsData;
      case 'stacks-and-queues': return stacksAndQueuesData;
      case 'trees-and-binary-trees': return treesAndBinaryTreesData;
      case 'graphs': return graphsData;
      case 'advanced-data-structures': return advancedDataStructuresData;
      
      default: return null;
    }
  };

  const data = getTopicData();

  if (!data) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Topic Not Found</h1>
        <p className="text-xl text-gray-600">
          The requested topic documentation is currently unavailable. 
          Please check the topic name or contact support.
        </p>
      </div>
    );
  }

  // Render desktop section content based on type
  const renderDesktopSectionContent = (sectionName, sectionData) => {
    switch(sectionName) {
      case 'keyTopics':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectionData.map((topic, index) => (
              <div 
                key={index} 
                className="
                  bg-white 
                  rounded-lg 
                  shadow-md 
                  p-4 
                  mb-4 
                  last:mb-0
                  hover:shadow-lg 
                  transition-all 
                  duration-300
                "
              >
                <h4 className="
                  text-xl font-bold mb-3 
                  text-blue-800 group-hover:text-blue-600
                  transition-colors
                ">
                  {topic.title}
                </h4>
                <p className="
                  text-gray-600 mb-4 
                  leading-relaxed
                ">
                  {topic.content}
                </p>
                {topic.formulas && (
                  <div className="
                    bg-blue-50 rounded-lg p-4 
                    border border-blue-100
                  ">
                    {topic.formulas.map((formula, formulaIndex) => (
                      <div 
                        key={formulaIndex} 
                        className="
                          mb-2 last:mb-0
                          text-sm text-blue-900
                        "
                      >
                        <strong className="mr-2 text-blue-700">
                          {formula.name}:
                        </strong>
                        {formula.formula}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      
      case 'theorems':
        return (
          <div className="space-y-6">
            {sectionData.map((theorem, index) => (
              <div 
                key={index} 
                className="
                  bg-white 
                  rounded-lg 
                  shadow-md 
                  p-4 
                  mb-4 
                  last:mb-0
                  hover:shadow-lg 
                  transition-all 
                  duration-300
                "
              >
                <h4 className="
                  text-2xl font-bold mb-3 
                  text-green-800
                  border-b border-green-100 pb-2
                ">
                  {theorem.name}
                </h4>
                <div className="
                  grid grid-cols-1 md:grid-cols-2 gap-4
                  text-gray-700
                ">
                  <div>
                    <h5 className="font-semibold text-green-700 mb-2">
                      Statement
                    </h5>
                    <p className="italic">{theorem.statement}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-700 mb-2">
                      Explanation
                    </h5>
                    <p>{theorem.explanation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'gateQuestions':
        return (
          <div className="space-y-6">
            {sectionData.map((question, index) => (
              <div 
                key={index} 
                className="
                  bg-white 
                  rounded-lg 
                  shadow-md 
                  p-4 
                  mb-4 
                  last:mb-0
                  hover:shadow-lg 
                  transition-all 
                  duration-300
                "
              >
                <div className="
                  flex justify-between items-center 
                  mb-4 pb-2 border-b border-gray-200
                ">
                  <h4 className="
                    text-xl font-bold 
                    text-orange-800
                  ">
                    GATE {question.year} Question
                  </h4>
                  <span className="
                    bg-orange-100 text-orange-800 
                    px-3 py-1 rounded-full text-sm
                  ">
                    Problem
                  </span>
                </div>
                
                <p className="
                  text-gray-700 mb-4 
                  text-base leading-relaxed
                ">
                  {question.question}
                </p>
                
                <div className="
                  bg-gray-50 rounded-lg p-4 
                  border border-gray-200
                ">
                  <h5 className="
                    font-semibold mb-3 
                    text-gray-800 text-lg
                    border-b border-gray-300 pb-2
                  ">
                    Solution
                  </h5>
                  <ol className="
                    list-decimal list-inside 
                    space-y-2 text-gray-700
                  ">
                    {question.solution.steps.map((step, stepIndex) => (
                      <li 
                        key={stepIndex} 
                        className="
                          hover:text-orange-700 
                          transition-colors
                        "
                      >
                        {step}
                      </li>
                    ))}
                  </ol>
                  <div className="
                    mt-4 pt-3 border-t border-gray-200 
                    font-bold text-green-700
                    text-center
                  ">
                    Answer: {question.solution.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'commonMistakes':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectionData.map((mistake, index) => (
              <div 
                key={index} 
                className="
                  bg-red-50 
                  rounded-lg 
                  shadow-md 
                  p-4 
                  mb-4 
                  last:mb-0
                  hover:shadow-lg 
                  transition-all 
                  duration-300
                "
              >
                <h4 className="
                  text-xl font-bold 
                  text-red-800 mb-3
                  border-b border-red-200 pb-2
                ">
                  Common Mistake
                </h4>
                <p className="
                  text-red-700 mb-4 
                  italic
                ">
                  {mistake.mistake}
                </p>
                <div className="
                  bg-white rounded-lg 
                  border border-red-100 
                  p-4
                ">
                  <h5 className="
                    font-semibold text-green-800 
                    mb-2
                  ">
                    Correction
                  </h5>
                  <p className="text-gray-700">
                    {mistake.correction}
                  </p>
                </div>
              </div>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  // Render topic content for desktop
  const renderTopicContent = () => {
    const data = getTopicData();
    
    // Define the sections to render
    const sections = [
      { 
        name: 'keyTopics', 
        title: 'Key Topics', 
        icon: <FaChalkboardTeacher /> 
      },
      { 
        name: 'theorems', 
        title: 'Theorems', 
        icon: <FaLightbulb /> 
      },
      { 
        name: 'gateQuestions', 
        title: 'GATE Questions', 
        icon: <FaCalculator /> 
      },
      { 
        name: 'commonMistakes', 
        title: 'Common Mistakes', 
        icon: <FaExclamationCircle /> 
      }
    ];

    return (
      <div className="topic-content-container">
        {sections.map((section) => {
          const sectionData = data[section.name];
          
          // Only render if section has data
          if (!sectionData || sectionData.length === 0) return null;

          return (
            <div 
              key={section.name} 
              className={`topic-section ${activeTab === section.name ? 'active' : ''}`}
            >
              <div className="section-header">
                {section.icon}
                <h2>{section.title}</h2>
              </div>
              
              <div className="section-content">
                {renderDesktopSectionContent(section.name, sectionData)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // Tab Button component
  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`
        flex items-center justify-center space-x-2 px-4 py-2 rounded-lg 
        transition-all duration-300 ease-in-out transform
        ${activeTab === id 
          ? 'bg-blue-600 text-white scale-105 shadow-lg' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'}
      `}
    >
      <Icon className="mr-2" />
      {label}
    </button>
  );

  // Render topic navigation
  const renderTopicNavigation = () => {
    return (
      <div className="space-y-2">
        <TabButton id="keyTopics" label="Key Topics" icon={FaChalkboardTeacher} />
        <TabButton id="theorems" label="Theorems" icon={FaLightbulb} />
        <TabButton id="gateQuestions" label="GATE Questions" icon={FaCalculator} />
        <TabButton id="commonMistakes" label="Common Mistakes" icon={FaExclamationCircle} />
      </div>
    );
  };

  // Responsive Device Indicator
  const DeviceIndicator = () => {
    return (
      <div className="fixed bottom-4 right-4 z-50 bg-blue-500 text-white p-2 rounded-full shadow-lg">
        {isMobileView ? <FaMobileAlt /> : <FaDesktop />}
        <span className="ml-2 text-xs">
          {isMobileView ? 'Mobile View' : 'Desktop View'}
        </span>
      </div>
    );
  };

  // Main render method
  return (
    <div className="topic-documentation-container 
      p-4 md:p-6 lg:p-8 
      max-w-4xl 
      mx-auto 
      space-y-6
    ">
      {isMobileView ? (
        renderMobileContent()
      ) : (
        <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
          <div className="w-1/4 p-4 border-r bg-gray-50">
            {renderTopicNavigation()}
          </div>
          <div className="w-3/4 p-6 overflow-y-auto">
            {renderTopicContent()}
          </div>
        </div>
      )}
    </div>
  );
};

export default TopicDocumentation;
