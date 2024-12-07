export const dataStructuresData = {
  title: "Data Structures",
  introduction: "Data Structures are fundamental building blocks in computer science that enable efficient data organization, storage, and retrieval. Understanding various data structures is crucial for designing optimal algorithms and solving complex computational problems.",
  
  keyTopics: [
    {
      title: "Linear Data Structures",
      content: "Linear data structures organize data in a sequential manner, allowing elements to be accessed in a linear order. These include arrays, linked lists, stacks, and queues.",
      formulas: [
        {
          name: "Array Access Time",
          formula: "O(1)",
          explanation: "Constant time complexity for accessing elements by index in an array."
        }
      ]
    },
    {
      title: "Non-Linear Data Structures",
      content: "Non-linear data structures allow more complex relationships between elements. Trees, graphs, and hash tables are prime examples of non-linear structures.",
      formulas: [
        {
          name: "Binary Search Tree Operations",
          formula: "O(log n)",
          explanation: "Average time complexity for search, insertion, and deletion in a balanced binary search tree."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Space-Time Complexity Theorem",
      statement: "Different data structures have varying space and time complexities for different operations.",
      explanation: "Choosing the right data structure depends on the specific requirements of the problem and the expected operations."
    },
    {
      name: "Amortized Analysis Theorem",
      statement: "Some data structures have operations with variable time complexity that can be averaged out over multiple operations.",
      explanation: "Provides a more realistic assessment of performance for data structures with occasional expensive operations."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Compare the time complexity of insertion and deletion operations in an array versus a linked list.",
      solution: {
        steps: [
          "Array: Insertion/Deletion at end - O(1), at middle - O(n)",
          "Linked List: Insertion/Deletion with reference - O(1), without reference - O(n)"
        ],
        answer: "Depends on the specific operation and position"
      }
    },
    {
      year: 2021,
      question: "Explain how a hash table works and analyze its average-case time complexity for search, insert, and delete operations.",
      solution: {
        steps: [
          "Hash function maps keys to array indices",
          "Average-case time complexity for all operations is O(1)",
          "Worst-case can be O(n) with poor hash function or many collisions"
        ],
        answer: "Average-case O(1)"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Using inappropriate data structure for a given problem",
      correction: "Carefully analyze problem requirements and choose a data structure that provides optimal time and space complexity."
    },
    {
      mistake: "Neglecting the impact of data structure selection on algorithm performance",
      correction: "The choice of data structure can significantly affect the overall efficiency of an algorithm."
    }
  ]
};
