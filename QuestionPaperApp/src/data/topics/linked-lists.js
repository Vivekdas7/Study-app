export const linkedListsData = {
  title: "Linked Lists",
  introduction: "Linked Lists are dynamic data structures that provide flexible memory allocation and efficient insertion/deletion operations through node-based connections.",
  
  keyTopics: [
    {
      title: "Singly Linked List",
      content: "Comprehensive exploration of basic linked list structure, node creation, and traversal techniques.",
      formulas: [
        {
          name: "List Traversal Complexity",
          formula: "Complexity = O(n)",
          explanation: "Time complexity for accessing elements in a linked list."
        }
      ]
    },
    {
      title: "Advanced Linked List Operations",
      content: "Detailed analysis of insertion, deletion, and manipulation techniques for linked lists.",
      formulas: [
        {
          name: "Insertion Efficiency",
          formula: "Efficiency = O(1) for head/tail, O(n) for arbitrary position",
          explanation: "Measures the computational cost of list modifications."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Dynamic Memory Allocation Theorem",
      statement: "Linked lists enable dynamic memory allocation and flexible data storage",
      explanation: "Fundamental principle of flexible data structure design."
    },
    {
      name: "Pointer Manipulation Theorem",
      statement: "List operations rely on precise pointer manipulation",
      explanation: "Critical for understanding linked list implementation."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Implement a circular linked list with advanced insertion and deletion methods.",
      solution: {
        steps: [
          "Node structure design",
          "Circular connection mechanism",
          "Insertion algorithms",
          "Deletion strategies"
        ],
        answer: "Comprehensive circular linked list implementation"
      }
    },
    {
      year: 2021,
      question: "Design an algorithm to detect and remove cycles in a linked list.",
      solution: {
        steps: [
          "Cycle detection techniques",
          "Floyd's tortoise and hare algorithm",
          "Cycle removal mechanism",
          "Pointer manipulation"
        ],
        answer: "Systematic linked list cycle management"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Improper memory management in linked list operations",
      correction: "Always handle memory allocation and deallocation carefully."
    },
    {
      mistake: "Overlooking edge cases in list manipulation",
      correction: "Consider scenarios like empty lists and single-element lists."
    }
  ]
};
