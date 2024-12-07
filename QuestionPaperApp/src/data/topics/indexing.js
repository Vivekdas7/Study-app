export const indexingData = {
  title: "Indexing",
  introduction: "Indexing is a critical database optimization technique that improves query performance by creating efficient data access structures.",
  
  keyTopics: [
    {
      title: "Index Structures",
      content: "Different indexing techniques including B-Tree, Hash, and Bitmap indexes, each with unique characteristics and use cases.",
      formulas: [
        {
          name: "Index Lookup Efficiency",
          formula: "Efficiency = O(log(n)) for B-Tree, O(1) for Hash indexes",
          explanation: "Theoretical time complexity of index lookup operations."
        }
      ]
    },
    {
      title: "Index Selection Strategies",
      content: "Techniques for choosing and designing effective indexes based on query patterns and data characteristics.",
      formulas: [
        {
          name: "Index Performance Ratio",
          formula: "Performance = (Query Speed with Index) / (Query Speed without Index)",
          explanation: "Quantifies the performance improvement from indexing."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Index Selection Optimization Theorem",
      statement: "Optimal index design balances query performance and maintenance overhead",
      explanation: "Indexes improve read performance but can slow write operations."
    },
    {
      name: "Indexing Complexity Theorem",
      statement: "Index effectiveness depends on data distribution and query patterns",
      explanation: "No single indexing strategy is optimal for all scenarios."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Compare and analyze B-Tree, Hash, and Bitmap indexing techniques.",
      solution: {
        steps: [
          "B-Tree: Balanced tree structure, range queries",
          "Hash: Exact match lookups, constant time",
          "Bitmap: Efficient for low-cardinality columns",
          "Each index type has unique strengths"
        ],
        answer: "Choose based on specific use case"
      }
    },
    {
      year: 2021,
      question: "Discuss the impact of indexing on database query performance.",
      solution: {
        steps: [
          "Reduces disk I/O",
          "Improves query response time",
          "Adds overhead to write operations",
          "Requires careful selection and maintenance"
        ],
        answer: "Critical optimization technique"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Over-indexing database tables",
      correction: "Create indexes strategically, focusing on frequently queried columns."
    },
    {
      mistake: "Neglecting index maintenance",
      correction: "Regularly update and rebuild indexes to maintain performance."
    }
  ]
};
