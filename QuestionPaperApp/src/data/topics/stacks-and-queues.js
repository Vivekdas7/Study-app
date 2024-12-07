export const stacksAndQueuesData = {
  title: "Stacks and Queues",
  introduction: "Stacks and Queues are fundamental linear data structures that provide ordered data storage and retrieval mechanisms with distinct access patterns.",
  
  keyTopics: [
    {
      title: "Stack Operations",
      content: "Comprehensive exploration of push, pop, and peek operations in stack implementation.",
      formulas: [
        {
          name: "Stack Complexity",
          formula: "Time Complexity = O(1) for push and pop operations",
          explanation: "Measures the efficiency of basic stack operations."
        }
      ]
    },
    {
      title: "Queue Mechanisms",
      content: "Detailed analysis of enqueue, dequeue, and circular queue implementations.",
      formulas: [
        {
          name: "Queue Efficiency",
          formula: "Efficiency = O(1) for front and rear operations",
          explanation: "Quantifies the performance of queue data structure."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "LIFO Principle Theorem",
      statement: "Stacks follow Last-In-First-Out access pattern",
      explanation: "Fundamental principle of stack data structure."
    },
    {
      name: "FIFO Principle Theorem",
      statement: "Queues follow First-In-First-Out access pattern",
      explanation: "Critical for understanding queue behavior."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Implement a stack-based algorithm for expression evaluation.",
      solution: {
        steps: [
          "Infix to postfix conversion",
          "Stack-based parsing",
          "Operator precedence handling",
          "Expression evaluation mechanism"
        ],
        answer: "Comprehensive expression evaluation strategy"
      }
    },
    {
      year: 2021,
      question: "Design a circular queue with advanced error handling.",
      solution: {
        steps: [
          "Circular buffer implementation",
          "Overflow and underflow detection",
          "Efficient memory utilization",
          "Dynamic resizing strategies"
        ],
        answer: "Systematic circular queue design approach"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Ignoring boundary conditions in stack and queue operations",
      correction: "Implement robust error checking for empty and full states."
    },
    {
      mistake: "Inefficient memory management in implementation",
      correction: "Use dynamic allocation and careful pointer manipulation."
    }
  ]
};
