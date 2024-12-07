export const digitalDesignPrinciplesData = {
  title: "Digital Design Principles",
  introduction: "Digital Design Principles encompass the fundamental concepts, methodologies, and strategies for creating efficient and reliable digital systems.",
  
  keyTopics: [
    {
      title: "Design Abstraction Levels",
      content: "Comprehensive exploration of system, logic, and physical design levels.",
      formulas: [
        {
          name: "Design Complexity",
          formula: "Complexity = log2(Number of Design Abstraction Layers)",
          explanation: "Quantifies the sophistication of digital system design."
        }
      ]
    },
    {
      title: "Performance Optimization",
      content: "Techniques for improving digital circuit efficiency and reducing computational overhead.",
      formulas: [
        {
          name: "Performance Improvement Ratio",
          formula: "Improvement = (Optimized Performance) / (Original Performance)",
          explanation: "Measures the effectiveness of design optimization strategies."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Modular Design Theorem",
      statement: "Complex digital systems should be designed using hierarchical and modular approaches",
      explanation: "Fundamental principle for managing design complexity."
    },
    {
      name: "Performance-Complexity Trade-off Theorem",
      statement: "Increased design complexity does not always guarantee better performance",
      explanation: "Critical for balanced system design."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Discuss design methodologies for complex digital systems.",
      solution: {
        steps: [
          "Hierarchical design approach",
          "Modular system decomposition",
          "Performance optimization strategies",
          "Complexity management techniques"
        ],
        answer: "Comprehensive digital design methodology analysis"
      }
    },
    {
      year: 2021,
      question: "Explain the importance of abstraction in digital system design.",
      solution: {
        steps: [
          "System-level design considerations",
          "Logical representation techniques",
          "Physical implementation strategies",
          "Design complexity management"
        ],
        answer: "Systematic approach to digital design abstraction"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Overlooking design abstraction levels",
      correction: "Consider multiple design perspectives and implementation strategies."
    },
    {
      mistake: "Assuming more complexity leads to better performance",
      correction: "Balance design complexity with performance requirements."
    }
  ]
};
