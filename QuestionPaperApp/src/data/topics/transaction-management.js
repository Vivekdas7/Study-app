export const transactionManagementData = {
  title: "Transaction Management",
  introduction: "Transaction Management ensures data integrity and consistency in database systems by providing mechanisms for atomic, consistent, isolated, and durable (ACID) operations.",
  
  keyTopics: [
    {
      title: "ACID Properties",
      content: "Fundamental characteristics ensuring reliable transaction processing: Atomicity, Consistency, Isolation, Durability.",
      formulas: [
        {
          name: "Transaction Reliability Index",
          formula: "Reliability = (Successful Transactions) / (Total Transactions)",
          explanation: "Measures the effectiveness of transaction management."
        }
      ]
    },
    {
      title: "Concurrency Control",
      content: "Mechanisms for managing simultaneous database transactions to prevent conflicts and maintain data integrity.",
      formulas: [
        {
          name: "Concurrency Overhead",
          formula: "Overhead = (Synchronization Time) / (Total Transaction Time)",
          explanation: "Quantifies the performance impact of concurrency control mechanisms."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Transaction Serializability Theorem",
      statement: "Concurrent transactions must produce equivalent results to sequential execution",
      explanation: "Fundamental principle of maintaining database consistency."
    },
    {
      name: "Isolation Level Theorem",
      statement: "Different isolation levels provide varying degrees of transaction protection",
      explanation: "Balances between consistency and performance."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Explain the ACID properties and their significance in database transactions.",
      solution: {
        steps: [
          "Atomicity: All-or-nothing execution",
          "Consistency: Maintaining database integrity",
          "Isolation: Preventing interference between transactions",
          "Durability: Permanent storage of committed transactions"
        ],
        answer: "Fundamental guarantees for reliable database operations"
      }
    },
    {
      year: 2021,
      question: "Discuss concurrency control techniques and their implementation.",
      solution: {
        steps: [
          "Locking mechanisms",
          "Timestamp-based protocols",
          "Optimistic concurrency control",
          "Multiversion concurrency control"
        ],
        answer: "Strategies for managing concurrent database access"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Overlooking transaction isolation levels",
      correction: "Carefully select appropriate isolation level based on specific requirements."
    },
    {
      mistake: "Ignoring potential concurrency conflicts",
      correction: "Implement robust concurrency control mechanisms."
    }
  ]
};
