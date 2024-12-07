export const databaseConceptsData = {
  title: "Database Concepts",
  introduction: "Database Concepts form the foundational understanding of data storage, management, and retrieval systems, crucial for designing efficient and robust database solutions.",
  
  keyTopics: [
    {
      title: "Data Models",
      content: "Fundamental approaches to organizing and representing data, including hierarchical, network, and relational models.",
      formulas: [
        {
          name: "Data Model Complexity",
          formula: "Complexity = (Number of Relationships) / (Number of Entities)",
          explanation: "Measures the structural complexity of a data model."
        }
      ]
    },
    {
      title: "Database Architecture",
      content: "Structural design of database systems, including client-server, distributed, and cloud-based architectures.",
      formulas: [
        {
          name: "Database Performance Index",
          formula: "Performance = (Throughput) / (Latency)",
          explanation: "Quantifies overall database system efficiency."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Data Independence Theorem",
      statement: "Logical and physical data independence enable flexible database design and modification",
      explanation: "Separates data storage implementation from logical data representation."
    },
    {
      name: "Database Normalization Theorem",
      statement: "Systematic decomposition of relations minimizes data redundancy and dependency anomalies",
      explanation: "Fundamental principle for efficient database design."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Compare and analyze different data models: Hierarchical, Network, and Relational.",
      solution: {
        steps: [
          "Hierarchical: Tree-like structure",
          "Network: Graph-based relationships",
          "Relational: Table-based organization",
          "Each model has unique strengths and limitations"
        ],
        answer: "Choice depends on specific data representation requirements"
      }
    },
    {
      year: 2021,
      question: "Explain the concept of data independence in database systems.",
      solution: {
        steps: [
          "Logical data independence",
          "Physical data independence",
          "Enables schema modifications",
          "Reduces impact of structural changes"
        ],
        answer: "Critical for flexible database design"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Overlooking data model selection implications",
      correction: "Carefully evaluate data model based on specific use case and requirements."
    },
    {
      mistake: "Assuming all database architectures perform equally",
      correction: "Consider performance, scalability, and complexity when choosing database architecture."
    }
  ]
};
