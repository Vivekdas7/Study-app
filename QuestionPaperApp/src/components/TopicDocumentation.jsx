import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  FaBook, 
  FaChalkboardTeacher, 
  FaLightbulb, 
  FaExclamationCircle,
  FaChevronRight,
  FaCode,
  FaCalculator,
  FaMobileAlt,  // Add mobile-specific icon
  FaDesktop,     // Add desktop-specific icon
  FaList         // Add list icon for mobile navigation
} from 'react-icons/fa';

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
  const [activeTab, setActiveTab] = useState('overview');
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [mobileContentView, setMobileContentView] = useState('navigation');
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

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Add responsive meta tag
  useEffect(() => {
    // Add viewport meta tag for responsiveness
    const metaViewport = document.createElement('meta');
    metaViewport.name = 'viewport';
    metaViewport.content = 'width=device-width, initial-scale=1, maximum-scale=1';
    document.head.appendChild(metaViewport);

    // Cleanup meta tag on component unmount
    return () => {
      document.head.removeChild(metaViewport);
    };
  }, []);

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

  const SectionHeader = ({ children, icon: Icon }) => (
    <div className="flex items-center space-x-3 mb-4 border-b-2 border-gray-200 pb-2">
      <Icon className="text-2xl text-blue-600" />
      <h2 className="text-2xl font-bold text-gray-800">{children}</h2>
    </div>
  );

  const Formula = ({ formula }) => (
    <div 
      className="
        bg-white border border-gray-200 rounded-lg p-4 mb-4 
        shadow-sm hover:shadow-md transition-shadow duration-300
      "
    >
      <h4 className="font-semibold text-lg text-gray-800 mb-2">{formula.name}</h4>
      <div 
        className="
          bg-gray-50 p-3 rounded border border-gray-200 
          font-mono text-blue-800 mb-2 overflow-x-auto
        "
      >
        {formula.formula}
      </div>
      <p className="text-gray-600 italic">{formula.explanation}</p>
    </div>
  );

  const GateQuestion = ({ question }) => (
    <div 
      className="
        bg-white rounded-lg shadow-md border border-gray-200 
        p-6 mb-6 hover:shadow-lg transition-shadow duration-300
      "
    >
      <div className="flex justify-between items-start mb-4">
        <h4 className="font-semibold text-lg text-gray-800">GATE {question.year}</h4>
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
          Problem
        </span>
      </div>
      <p className="mb-4 text-gray-700">{question.question}</p>
      <div 
        className="
          bg-gray-50 p-4 rounded-lg border border-gray-200
        "
      >
        <h5 className="font-semibold mb-2 text-gray-800">Solution:</h5>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          {question.solution.steps.map((step, index) => (
            <li key={index} className="hover:text-blue-700 transition-colors">
              {step}
            </li>
          ))}
        </ol>
        <div 
          className="
            mt-4 pt-3 border-t border-gray-200 
            font-bold text-green-700
          "
        >
          Answer: {question.solution.answer}
        </div>
      </div>
    </div>
  );

  const renderTopicNavigation = () => {
    return (
      <div className="space-y-2">
        <TabButton id="overview" label="Overview" icon={FaBook} />
        <TabButton id="theorems" label="Theorems" icon={FaChalkboardTeacher} />
        <TabButton id="questions" label="GATE Questions" icon={FaLightbulb} />
        <TabButton id="mistakes" label="Common Mistakes" icon={FaExclamationCircle} />
      </div>
    );
  };

  const renderTopicContent = () => {
    return (
      <div>
        {/* Render different tabs */}
        {activeTab === 'overview' && (
          <div>
            <SectionHeader icon={FaBook}>Key Topics</SectionHeader>
            {data.keyTopics.map((topic, index) => (
              <div 
                key={index} 
                className="
                  bg-white rounded-lg p-6 mb-6 
                  shadow-md border border-gray-200 
                  hover:shadow-lg transition-shadow
                "
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {topic.title}
                </h3>
                <p className="text-gray-700 mb-4 whitespace-pre-line">
                  {topic.content}
                </p>
                {topic.formulas && topic.formulas.map((formula, idx) => (
                  <Formula key={idx} formula={formula} />
                ))}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'theorems' && (
          <div>
            <SectionHeader icon={FaChalkboardTeacher}>Important Theorems</SectionHeader>
            {data.theorems.map((theorem, index) => (
              <div 
                key={index} 
                className="
                  bg-white rounded-lg p-6 mb-6 
                  shadow-md border border-gray-200 
                  hover:shadow-lg transition-shadow
                "
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {theorem.name}
                </h3>
                <p className="text-gray-700 mb-4">
                  {theorem.statement}
                </p>
                <p className="text-gray-700">
                  {theorem.explanation}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'questions' && (
          <div>
            <SectionHeader icon={FaLightbulb}>GATE Previous Year Questions</SectionHeader>
            {data.gateQuestions.map((question, index) => (
              <GateQuestion key={index} question={question} />
            ))}
          </div>
        )}

        {activeTab === 'mistakes' && (
          <div>
            <SectionHeader icon={FaExclamationCircle}>Common Mistakes to Avoid</SectionHeader>
            {data.commonMistakes.map((item, index) => (
              <div 
                key={index} 
                className="
                  bg-red-50 rounded-lg p-6 mb-6 
                  shadow-md border border-gray-200 
                  hover:shadow-lg transition-shadow
                "
              >
                <h3 className="text-lg font-semibold text-red-600 mb-4">
                  {item.mistake}
                </h3>
                <p className="text-gray-700">
                  {item.correction}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Mobile-friendly bottom navigation
  const MobileBottomNavigation = () => {
    const navItems = [
      { 
        id: 'navigation', 
        icon: FaList, 
        label: 'Topics',
        color: 'text-blue-600'
      },
      { 
        id: 'overview', 
        icon: FaBook, 
        label: 'Overview',
        color: 'text-green-600'
      },
      { 
        id: 'content', 
        icon: FaChalkboardTeacher, 
        label: 'Content',
        color: 'text-purple-600'
      },
      { 
        id: 'questions', 
        icon: FaLightbulb, 
        label: 'Questions',
        color: 'text-orange-600'
      }
    ];

    return (
      <div className={`
        ${!isMobileView ? 'hidden' : ''}
        fixed 
        bottom-0 
        left-0 
        right-0 
        bg-white 
        shadow-2xl 
        border-t 
        z-50
      `}>
        <div className="flex justify-around py-3 px-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setMobileContentView(item.id);
                setActiveTab(item.id === 'content' ? 'overview' : item.id);
              }}
              className={`
                flex 
                flex-col 
                items-center 
                justify-center 
                w-full 
                py-2 
                rounded-lg 
                transition-all 
                duration-300 
                ${mobileContentView === item.id 
                  ? `${item.color} bg-blue-50` 
                  : 'text-gray-500 hover:bg-gray-100'}
              `}
            >
              <item.icon 
                className={`
                  text-xl 
                  mb-1 
                  ${mobileContentView === item.id ? 'scale-110' : ''}
                `} 
              />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
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

  return (
    <div className={`
      flex 
      ${isMobileView ? 'flex-col' : 'flex-row'}
      min-h-screen 
      bg-gray-50 
      transition-all 
      duration-300 
      ease-in-out
      pb-16  // Add padding at bottom for mobile navigation
    `}>
      {/* Sidebar for Desktop / Mobile Navigation Area */}
      <div className={`
        ${isMobileView 
          ? (mobileContentView === 'navigation' ? 'block' : 'hidden')
          : 'w-1/4 min-w-[250px] border-r'}
        bg-white 
        shadow-md 
        p-4 
        overflow-y-auto
      `}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            {topicCategory ? topicCategory.replace(/-/g, ' ').toUpperCase() : 'Topics'}
          </h2>
        </div>
        
        {/* Topic Navigation */}
        <div className="space-y-2 max-h-[70vh] overflow-y-auto">
          {renderTopicNavigation()}
        </div>
      </div>

      {/* Content Area */}
      <div className={`
        ${isMobileView 
          ? (mobileContentView !== 'navigation' ? 'block' : 'hidden')
          : 'w-3/4'}
        bg-gray-50 
        overflow-y-auto 
        max-h-screen 
        p-4 
        md:p-8
      `}>
        {/* Render content based on active tab */}
        {renderTopicContent()}
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNavigation />
    </div>
  );
};

export default TopicDocumentation;
