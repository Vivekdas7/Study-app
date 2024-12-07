export const normalizationData = {
  title: "Normalization",
  introduction: "Normalization is a systematic approach to decomposing relations to eliminate data redundancy and dependency anomalies, ensuring database integrity and efficiency.",
  
  keyTopics: [
    {
      title: "Normal Forms",
      content: "Progressively stricter rules for organizing relational database schemas, from First Normal Form (1NF) to Boyce-Codd Normal Form (BCNF).",
      formulas: [
        {
          name: "Normalization Reduction Ratio",
          formula: "Reduction = (Original Redundancy) / (Normalized Redundancy)",
          explanation: "Measures the effectiveness of normalization in reducing data redundancy."
        }
      ]
    },
    {
      title: "Dependency Analysis",
      content: "Identifying and analyzing functional dependencies to determine appropriate normalization levels.",
      formulas: [
        {
          name: "Functional Dependency Complexity",
          formula: "Complexity = (Number of Attributes) * (Number of Dependencies)",
          explanation: "Quantifies the complexity of functional dependencies in a relation."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Normalization Preservation Theorem",
      statement: "Decomposition should preserve original functional dependencies",
      explanation: "Ensures no information is lost during normalization process."
    },
    {
      name: "Dependency Minimization Theorem",
      statement: "Systematic decomposition minimizes transitive and partial dependencies",
      explanation: "Fundamental principle of efficient database design."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Explain the progression of normal forms from 1NF to BCNF.",
      solution: {
        steps: [
          "1NF: Eliminate repeating groups",
          "2NF: Remove partial dependencies",
          "3NF: Remove transitive dependencies",
          "BCNF: Eliminate all functional dependencies"
        ],
        answer: "Systematic approach to reducing data redundancy"
      }
    },
    {
      year: 2021,
      question: "Discuss functional dependencies and their role in database normalization.",
      solution: {
        steps: [
          "Identify attribute relationships",
          "Determine dependency types",
          "Decompose relations systematically",
          "Minimize data redundancy"
        ],
        answer: "Critical for maintaining database integrity"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Over-normalizing database schemas",
      correction: "Balance between normalization and query performance."
    },
    {
      mistake: "Ignoring denormalization strategies",
      correction: "Consider selective denormalization for performance optimization."
    }
  ]
};
