export const sqlData = {
  title: "SQL",
  introduction: "Structured Query Language (SQL) is a standardized language for managing and manipulating relational databases, enabling complex data retrieval and manipulation.",
  
  keyTopics: [
    {
      title: "Data Definition Language (DDL)",
      content: "SQL commands for defining and modifying database schema, including CREATE, ALTER, and DROP statements.",
      formulas: [
        {
          name: "Schema Modification Complexity",
          formula: "Complexity = O(log(n)) for most DDL operations",
          explanation: "Theoretical computational complexity of schema modifications."
        }
      ]
    },
    {
      title: "Data Manipulation Language (DML)",
      content: "SQL commands for managing data within database tables, including SELECT, INSERT, UPDATE, and DELETE operations.",
      formulas: [
        {
          name: "Query Execution Efficiency",
          formula: "Efficiency = (Result Set Size) / (Execution Time)",
          explanation: "Measures the performance of data manipulation queries."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Query Optimization Theorem",
      statement: "Efficient query design minimizes computational complexity and resource utilization",
      explanation: "Fundamental principle for high-performance database operations."
    },
    {
      name: "Relational Completeness Theorem",
      statement: "SQL provides a complete set of operations for relational data manipulation",
      explanation: "Enables comprehensive database interaction."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Explain complex SQL JOIN operations and their implementation.",
      solution: {
        steps: [
          "INNER JOIN: Matching records",
          "LEFT/RIGHT JOIN: Partial matching",
          "FULL OUTER JOIN: Complete record set",
          "Performance considerations for large datasets"
        ],
        answer: "Comprehensive data combination techniques"
      }
    },
    {
      year: 2021,
      question: "Discuss advanced SQL aggregation and window functions.",
      solution: {
        steps: [
          "GROUP BY clause",
          "Aggregate functions: SUM, AVG, COUNT",
          "Window functions for analytical queries",
          "Performance optimization strategies"
        ],
        answer: "Advanced data analysis capabilities"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Writing inefficient, unoptimized queries",
      correction: "Use indexing, avoid unnecessary joins, and optimize query structure."
    },
    {
      mistake: "Neglecting query execution plans",
      correction: "Analyze and understand query performance characteristics."
    }
  ]
};
