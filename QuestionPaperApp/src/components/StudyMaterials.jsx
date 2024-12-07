import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBook,
  FaCalculator,
  FaChartLine,
  FaCode,
  FaDatabase,
  FaNetworkWired,
  FaCogs,
  FaLaptopCode,
  FaChevronDown,
  FaChevronRight,
  FaStar,
  FaSort,
  FaProjectDiagram,
  FaSearch,
  FaKey,
  FaMemory,
  FaSync,
  FaExclamationTriangle,
  FaMicrochip,
  FaFolder,
  FaDesktop,
  FaHdd,
  FaLayerGroup,
  FaServer,
  FaRoad,
  FaShieldAlt,
  FaExchangeAlt,
  FaTachometerAlt,
  FaCodeBranch,
  FaRegKeyboard,
  FaLanguage,
  FaStackOverflow,
  FaFile,
  FaTree,
  FaCheckCircle,
  FaCompress,
  FaClock,
  FaTable,
  FaLink,
  FaCube
} from 'react-icons/fa';

const StudyMaterials = () => {
  const [expandedSubjects, setExpandedSubjects] = useState({});

  const toggleSubject = (subject) => {
    setExpandedSubjects(prev => ({
      ...prev,
      [subject]: !prev[subject]
    }));
  };

  const subjects = [
    {
      id: 'engineering-math',
      name: 'Engineering Mathematics',
      icon: <FaCalculator className="text-blue-500" />,
      topics: [
        {
          name: 'Linear Algebra',
          route: 'linear-algebra',
          description: 'Fundamental concepts of vector spaces, linear transformations, and matrix theory'
        },
        {
          name: 'Vector Spaces',
          route: 'vector-spaces',
          description: 'Structure, properties, and applications of vector spaces and subspaces'
        },
        {
          name: 'Linear Transformations',
          route: 'linear-transformations',
          description: 'Mappings between vector spaces, matrix representations, and fundamental properties'
        },
        {
          name: 'Eigenvalues and Eigenvectors',
          route: 'eigenvalues-eigenvectors',
          description: 'Special vectors and scalars, computational techniques, and applications'
        },
        {
          name: 'Probability',
          route: 'probability',
          description: 'Probability distributions, random variables, and statistical inference'
        },
        {
          name: 'Calculus',
          route: 'calculus',
          description: 'Limits, continuity, differentiation, integration, and multivariate calculus'
        }
      ]
    },
    {
      id: 'discrete-math',
      name: 'Discrete Mathematics',
      icon: <FaChartLine className="text-green-500" />,
      topics: [
        {
          name: 'Propositional Logic',
          route: 'propositional-logic',
          description: 'Logical reasoning, propositions, truth values, and logical connectives'
        },
        {
          name: 'Sets and Relations',
          route: 'sets-and-relations',
          description: 'Set theory fundamentals, operations, and relational structures'
        },
        {
          name: 'Graph Theory',
          route: 'graph-theory',
          description: 'Graph structures, algorithms, and network modeling techniques'
        },
        {
          name: 'Combinatorics',
          route: 'combinatorics',
          description: 'Counting techniques, permutations, combinations, and advanced counting strategies'
        }
      ]
    },
    {
      id: 'algorithms',
      name: 'Algorithms',
      icon: <FaCode className="text-green-500" />,
      topics: [
        {
          name: 'Algorithm Design',
          route: 'algorithm-design',
          description: 'Learn fundamental principles of designing efficient algorithms',
          icon: <FaCode />
        },
        {
          name: 'Data Structures',
          route: 'data-structures',
          description: 'Explore various data structures and their implementation',
          icon: <FaDatabase />
        },
        {
          name: 'Sorting Algorithms',
          route: 'sorting-algorithms',
          description: 'Master different sorting techniques and their complexities',
          icon: <FaSort />
        },
        {
          name: 'Graph Algorithms',
          route: 'graph-algorithms',
          description: 'Understand advanced graph traversal and optimization techniques',
          icon: <FaProjectDiagram />
        },
        {
          name: 'Asymptotic Analysis',
          route: 'asymptotic-analysis',
          description: 'Time and space complexity analysis of algorithms',
          icon: <FaChartLine />
        },
        {
          name: 'Recurrence Relations',
          route: 'recurrence-relations',
          description: 'Solving recursive algorithm complexity',
          icon: <FaCalculator />
        },
        {
          name: 'Divide and Conquer',
          route: 'divide-and-conquer',
          description: 'Problem-solving strategy for complex algorithms',
          icon: <FaNetworkWired />
        },
        {
          name: 'Greedy Techniques',
          route: 'greedy-techniques',
          description: 'Optimization algorithms with local best choices',
          icon: <FaCogs />
        },
        {
          name: 'Dynamic Programming',
          route: 'dynamic-programming',
          description: 'Advanced problem-solving with memoization',
          icon: <FaLaptopCode />
        },
        {
          name: 'Searching Techniques',
          route: 'searching-techniques',
          description: 'Efficient methods for finding elements',
          icon: <FaSearch />
        },
        {
          name: 'Hashing Techniques',
          route: 'hashing-techniques',
          description: 'Data storage and retrieval optimization',
          icon: <FaKey />
        },
      ]
    },
    {
      id: 'operating-systems',
      name: 'Operating Systems',
      icon: <FaCogs className="text-purple-500" />,
      topics: [
        {
          name: 'Processes',
          route: 'processes',
          description: 'Process states, lifecycle, and management',
          icon: <FaCogs />
        },
        {
          name: 'Threads',
          route: 'threads',
          description: 'Thread types, synchronization, and concurrency',
          icon: <FaSync />
        },
        {
          name: 'Inter-process Communication',
          route: 'inter-process-communication',
          description: 'Communication mechanisms between processes',
          icon: <FaNetworkWired />
        },
        {
          name: 'Concurrency and Synchronization',
          route: 'concurrency-synchronization',
          description: 'Managing simultaneous process execution',
          icon: <FaProjectDiagram />
        },
        {
          name: 'Main Memory Management',
          route: 'main-memory-management',
          description: 'Memory allocation and optimization strategies',
          icon: <FaMemory />
        },
        {
          name: 'Virtual Memory',
          route: 'virtual-memory',
          description: 'Advanced memory management techniques',
          icon: <FaDatabase />
        },
        {
          name: 'Disk Scheduling',
          route: 'disk-scheduling',
          description: 'Optimizing disk access and I/O performance',
          icon: <FaHdd />
        }
      ]
    },
    {
      id: 'databases',
      name: 'Database Management',
      icon: <FaDatabase className="text-green-500" />,
      topics: [
        {
          name: 'Database Concepts',
          route: 'database-concepts',
          description: 'Fundamental data models and database architectures',
          icon: <FaBook />
        },
        {
          name: 'Relational Database Model',
          route: 'relational-database-model',
          description: 'Principles of relational data organization',
          icon: <FaProjectDiagram />
        },
        {
          name: 'Normalization',
          route: 'normalization',
          description: 'Techniques for reducing data redundancy',
          icon: <FaSort />
        },
        {
          name: 'SQL',
          route: 'sql',
          description: 'Database querying and manipulation language',
          icon: <FaCode />
        },
        {
          name: 'Transaction Management',
          route: 'transaction-management',
          description: 'Ensuring data integrity and consistency',
          icon: <FaKey />
        },
        {
          name: 'Indexing',
          route: 'indexing',
          description: 'Performance optimization techniques',
          icon: <FaChartLine />
        },
        {
          name: 'Query Processing',
          route: 'query-processing',
          description: 'Efficient query execution strategies',
          icon: <FaSearch />
        }
      ]
    },
    {
      id: 'theory-of-computation',
      name: 'Theory of Computation',
      icon: <FaMicrochip className="text-indigo-500" />,
      topics: [
        {
          title: 'Finite Automata',
          route: 'finite-automata',
          icon: FaCodeBranch,
          description: 'Computational models for pattern recognition and language processing'
        },
        {
          title: 'Regular Expressions',
          route: 'regular-expressions',
          icon: FaRegKeyboard,
          description: 'Pattern matching techniques and formal language representation'
        },
        {
          title: 'Context-Free Grammars',
          route: 'context-free-grammars',
          icon: FaLanguage,
          description: 'Formal systems for describing programming language syntax'
        },
        {
          title: 'Pushdown Automata',
          route: 'pushdown-automata',
          icon: FaStackOverflow,
          description: 'Computational models with stack memory for context-free languages'
        },
        {
          title: 'Turing Machines',
          route: 'turing-machines',
          icon: FaMicrochip,
          description: 'Theoretical computational models representing algorithmic limits'
        },
        {
          title: 'Computability Theory',
          route: 'computability-theory',
          icon: FaCalculator,
          description: 'Exploring fundamental limits of algorithmic computation'
        },
        {
          title: 'Formal Languages',
          route: 'formal-languages',
          icon: FaFile,
          description: 'Mathematical framework for computational language structures'
        }
      ]
    },
    {
      id: 'compiler-design',
      name: 'Compiler Design',
      icon: <FaCode className="text-green-500" />,
      topics: [
        {
          title: 'Lexical Analysis',
          route: 'lexical-analysis',
          icon: FaSearch,
          description: 'Token recognition and pattern matching in source code'
        },
        {
          title: 'Syntax Analysis',
          route: 'syntax-analysis',
          icon: FaTree,
          description: 'Parsing techniques and grammatical structure verification'
        },
        {
          title: 'Semantic Analysis',
          route: 'semantic-analysis',
          icon: FaCheckCircle,
          description: 'Type checking and context-sensitive semantic validation'
        },
        {
          title: 'Intermediate Code Generation',
          route: 'intermediate-code-generation',
          icon: FaCode,
          description: 'Transforming source code to machine-independent representation'
        },
        {
          title: 'Code Optimization',
          route: 'code-optimization',
          icon: FaTachometerAlt,
          description: 'Improving code efficiency and reducing computational overhead'
        },
        {
          title: 'Code Generation',
          route: 'code-generation',
          icon: FaMicrochip,
          description: 'Translating intermediate code to target machine instructions'
        },
        {
          title: 'Compiler Design Principles',
          route: 'compiler-design-principles',
          icon: FaBook,
          description: 'Fundamental concepts and strategies in compiler construction'
        }
      ]
    },
    {
      id: 'computer-organization-architecture',
      name: 'Computer Organization and Architecture',
      icon: <FaMicrochip className="text-indigo-500" />,
      topics: [
        {
          title: 'Basic Computer Organization',
          route: 'basic-computer-organization',
          icon: FaDesktop,
          description: 'Fundamental structure and components of computer systems'
        },
        {
          title: 'CPU Organization and Design',
          route: 'cpu-organization-design',
          icon: FaMicrochip,
          description: 'Internal architecture and design of Central Processing Units'
        },
        {
          title: 'Memory Hierarchy',
          route: 'memory-hierarchy',
          icon: FaMemory,
          description: 'Multi-level memory organization and optimization strategies'
        },
        {
          title: 'Instruction-Level Parallelism',
          route: 'instruction-level-parallelism',
          icon: FaCodeBranch,
          description: 'Advanced techniques for simultaneous instruction execution'
        },
        {
          title: 'Input/Output Organization',
          route: 'input-output-organization',
          icon: FaExchangeAlt,
          description: 'Mechanisms for data transfer between computer systems and devices'
        },
        {
          title: 'Computer Arithmetic',
          route: 'computer-arithmetic',
          icon: FaCalculator,
          description: 'Techniques for mathematical operations in digital systems'
        },
        {
          title: 'Advanced Computer Architecture',
          route: 'advanced-computer-architecture',
          icon: FaServer,
          description: 'Cutting-edge design principles and parallel processing techniques'
        }
      ]
    },
    {
      id: 'networks',
      name: 'Computer Networks',
      icon: <FaNetworkWired className="text-indigo-500" />,
      topics: [
        {
          title: 'Network Fundamentals',
          route: 'network-fundamentals',
          icon: FaNetworkWired,
          description: 'Basic principles of computer networks, topologies, and communication models'
        },
        {
          title: 'OSI Model',
          route: 'osi-model',
          icon: FaLayerGroup,
          description: 'Seven-layer network communication framework and layer interactions'
        },
        {
          title: 'TCP/IP Protocol Suite',
          route: 'tcp-ip-protocol-suite',
          icon: FaServer,
          description: 'Internet communication protocols and their implementation'
        },
        {
          title: 'Routing',
          route: 'routing',
          icon: FaRoad,
          description: 'Network path selection, routing algorithms, and protocols'
        },
        {
          title: 'Network Security',
          route: 'network-security',
          icon: FaShieldAlt,
          description: 'Cryptography, security mechanisms, and protection strategies'
        },
        {
          title: 'Transport Layer',
          route: 'transport-layer',
          icon: FaExchangeAlt,
          description: 'End-to-end communication, connection management, and protocols'
        },
        {
          title: 'Network Performance',
          route: 'network-performance',
          icon: FaTachometerAlt,
          description: 'Performance metrics, optimization techniques, and analysis'
        }
      ]
    },
    {
      id: 'digital-logic-design',
      name: 'Digital Logic & Design',
      icon: <FaMicrochip className="text-indigo-500" />,
      topics: [
        {
          title: 'Boolean Algebra',
          route: 'boolean-algebra',
          icon: FaCalculator,
          description: 'Fundamental mathematical framework for digital logic operations'
        },
        {
          title: 'Logic Gates',
          route: 'logic-gates',
          icon: FaCodeBranch,
          description: 'Basic building blocks of digital circuit design'
        },
        {
          title: 'Combinational Circuits',
          route: 'combinational-circuits',
          icon: FaProjectDiagram,
          description: 'Circuits with direct input-output relationships'
        },
        {
          title: 'Sequential Circuits',
          route: 'sequential-circuits',
          icon: FaMemory,
          description: 'Circuits with memory and state preservation capabilities'
        },
        {
          title: 'Minimization Techniques',
          route: 'minimization-techniques',
          icon: FaCompress,
          description: 'Methods for reducing logical circuit complexity'
        },
        {
          title: 'Synchronous and Asynchronous Circuits',
          route: 'synchronous-asynchronous-circuits',
          icon: FaClock,
          description: 'Different approaches to digital circuit synchronization'
        },
        {
          title: 'Digital Design Principles',
          route: 'digital-design-principles',
          icon: FaMicrochip,
          description: 'Fundamental strategies for efficient digital system design'
        }
      ]
    },
    {
      id: 'data-structures-c-programming',
      name: 'Data Structures & C Programming',
      icon: <FaCode className="text-green-500" />,
      topics: [
        {
          title: 'Arrays and Strings',
          route: 'arrays-and-strings',
          icon: FaTable,
          description: 'Fundamental data structures for sequential data storage'
        },
        {
          title: 'Pointers and Memory Management',
          route: 'pointers-and-memory-management',
          icon: FaMemory,
          description: 'Advanced memory manipulation and dynamic allocation techniques'
        },
        {
          title: 'Linked Lists',
          route: 'linked-lists',
          icon: FaLink,
          description: 'Dynamic data structures with flexible memory allocation'
        },
        {
          title: 'Stacks and Queues',
          route: 'stacks-and-queues',
          icon: FaLayerGroup,
          description: 'Linear data structures with distinct access patterns'
        },
        {
          title: 'Trees and Binary Trees',
          route: 'trees-and-binary-trees',
          icon: FaTree,
          description: 'Hierarchical data structures for complex relationships'
        },
        {
          title: 'Graphs',
          route: 'graphs',
          icon: FaProjectDiagram,
          description: 'Network-based data structures for complex connectivity'
        },
        {
          title: 'Advanced Data Structures',
          route: 'advanced-data-structures',
          icon: FaCube,
          description: 'Sophisticated techniques for efficient problem-solving'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
          <FaBook className="mr-4 text-blue-500" />
          Study Materials
        </h1>
        
        <div className="grid grid-cols-1 gap-6">
          {subjects.map((subject) => (
            <div key={subject.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleSubject(subject.id)}
                className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-all duration-200"
              >
                <div className="flex items-center">
                  {subject.icon}
                  <h2 className="text-xl font-semibold text-gray-800 ml-4">{subject.name}</h2>
                </div>
                {expandedSubjects[subject.id] ? (
                  <FaChevronDown className="text-gray-500" />
                ) : (
                  <FaChevronRight className="text-gray-500" />
                )}
              </button>
              
              {expandedSubjects[subject.id] && (
                <div className="p-6 bg-white">
                  <div className="space-y-4">
                    {subject.topics.map((topic, topicIndex) => (
                      <Link
                        key={topicIndex}
                        to={`/topic/${subject.id}/${topic.route}`}
                        className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800">{topic.name || topic.title}</h3>
                            <p className="text-gray-600 mt-1">{topic.description}</p>
                          </div>
                          <FaChevronRight className="text-gray-400" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyMaterials;
