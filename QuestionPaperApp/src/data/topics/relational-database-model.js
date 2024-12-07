export const relationalDatabaseModelData = {
  title: "Relational Database Model",
  introduction: "The Relational Database Model provides a systematic approach to organizing data into tables, establishing relationships, and enabling efficient data manipulation through SQL.",
  
  keyTopics: [
    {
      title: "Relational Algebra",
      content: "Mathematical foundation for database operations, including selection, projection, join, and set operations.",
      formulas: [
        {
          name: "Relational Algebra Complexity",
          formula: "Complexity = O(n * log(n)) for most operations",
          explanation: "Theoretical computational complexity of relational operations."
        }
      ]
    },
    {
      title: "Keys and Constraints",
      content: "Mechanisms for ensuring data integrity, including primary keys, foreign keys, and referential constraints.",
      formulas: [
        {
          name: "Constraint Violation Probability",
          formula: "P(Violation) = (Constraint Breaches) / (Total Transactions)",
          explanation: "Measures the effectiveness of database constraints."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Codd's Relational Model Theorem",
      statement: "Relational model separates logical and physical data representation",
      explanation: "Fundamental principle of relational database design."
    },
    {
      name: "Referential Integrity Theorem",
      statement: "Foreign key constraints maintain consistent relationships between tables",
      explanation: "Ensures data consistency across related tables."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Explain the fundamental operations of relational algebra.",
      solution: {
        steps: [
          "Selection: Filtering rows",
          "Projection: Selecting specific columns",
          "Join: Combining tables based on relationships",
          "Set operations: Union, Intersection, Difference"
        ],
        answer: "Core operations for data manipulation"
      }
    },
    {
      year: 2021,
      question: "Discuss the role and implementation of primary and foreign keys.",
      solution: {
        steps: [
          "Primary key: Unique identifier for table rows",
          "Foreign key: Establishes relationships between tables",
          "Ensures data integrity",
          "Prevents orphaned records"
        ],
        answer: "Critical for maintaining relational database structure"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Overlooking normalization in relational design",
      correction: "Apply normalization techniques to minimize data redundancy."
    },
    {
      mistake: "Ignoring performance implications of complex joins",
      correction: "Optimize query design and consider indexing strategies."
    }
  ]
};
