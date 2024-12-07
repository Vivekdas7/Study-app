export const dataStructuresContent = {
  title: "Data Structures",
  description: "Comprehensive exploration of fundamental and advanced data structures for efficient algorithm design and problem-solving",
  
  fundamentalDataStructures: [
    {
      name: "Arrays",
      characteristics: {
        storageType: "Contiguous memory locations",
        accessComplexity: "O(1)",
        insertionComplexity: "O(n)",
        deletionComplexity: "O(n)"
      },
      useCases: [
        "Storing homogeneous elements",
        "Quick element access by index",
        "Implementing other data structures"
      ],
      implementationDetails: {
        staticSize: true,
        randomAccess: true,
        memoryEfficiency: "High"
      }
    },
    {
      name: "Linked Lists",
      types: [
        "Singly Linked List",
        "Doubly Linked List",
        "Circular Linked List"
      ],
      characteristics: {
        storageType: "Non-contiguous memory locations",
        accessComplexity: "O(n)",
        insertionComplexity: "O(1)",
        deletionComplexity: "O(1)"
      },
      advantages: [
        "Dynamic size",
        "Efficient memory utilization",
        "Easy insertion and deletion"
      ],
      disadvantages: [
        "No random access",
        "Extra memory for pointers",
        "Slower traversal"
      ]
    }
  ],

  advancedDataStructures: [
    {
      name: "Hash Tables",
      operationComplexities: {
        insertion: "O(1) average case",
        deletion: "O(1) average case",
        search: "O(1) average case"
      },
      collisionResolutionTechniques: [
        "Chaining",
        "Open Addressing",
        "Linear Probing",
        "Quadratic Probing"
      ],
      applications: [
        "Implementing dictionaries",
        "Caching",
        "Symbol tables in compilers"
      ]
    },
    {
      name: "Trees",
      types: [
        {
          name: "Binary Search Tree (BST)",
          properties: [
            "Left subtree contains smaller values",
            "Right subtree contains larger values",
            "Supports efficient searching"
          ],
          timeComplexities: {
            search: "O(log n) balanced, O(n) worst case",
            insertion: "O(log n) balanced, O(n) worst case",
            deletion: "O(log n) balanced, O(n) worst case"
          }
        },
        {
          name: "AVL Tree",
          properties: [
            "Self-balancing BST",
            "Maintains height balance",
            "Guarantees O(log n) operations"
          ]
        }
      ]
    }
  ],

  problemSolvingStrategies: [
    {
      technique: "Choosing Right Data Structure",
      steps: [
        "Analyze input size",
        "Evaluate required operations",
        "Consider time and space complexity",
        "Assess memory constraints"
      ]
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      topic: "Data Structure Selection",
      question: "Compare the efficiency of arrays and linked lists for different scenarios.",
      solution: {
        approach: "Analyze time and space complexity for various operations",
        recommendation: "Choose based on specific use case requirements"
      }
    },
    {
      year: 2023,
      topic: "Hash Table Implementation",
      question: "Design a hash table with efficient collision resolution.",
      solution: {
        steps: [
          "Select appropriate hash function",
          "Implement collision resolution technique",
          "Maintain load factor"
        ]
      }
    }
  ],

  practiceProblems: [
    {
      title: "Implement a Stack using Linked List",
      difficulty: "Medium",
      expectedSolutions: [
        "Basic stack operations",
        "Dynamic memory management",
        "Edge case handling"
      ]
    },
    {
      title: "Design LRU Cache",
      difficulty: "Hard",
      requiredDataStructures: [
        "Hash Map",
        "Doubly Linked List"
      ]
    }
  ]
};

export const dataStructuresData = dataStructuresContent;
