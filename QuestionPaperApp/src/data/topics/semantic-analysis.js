export const semanticAnalysisData = {
  title: "Semantic Analysis",
  introduction: "Semantic Analysis is a crucial compilation phase that checks the context-sensitive properties of the source code, ensuring type correctness and logical consistency.",
  
  keyTopics: [
    {
      title: "Type Checking",
      content: "Comprehensive strategies for verifying type compatibility and consistency.",
      formulas: [
        {
          name: "Type Compatibility Index",
          formula: "Compatibility = (Correct Type Matches) / (Total Type Interactions)",
          explanation: "Quantifies the accuracy of type checking mechanisms."
        }
      ]
    },
    {
      title: "Symbol Table Management",
      content: "Techniques for tracking and managing identifier information during compilation.",
      formulas: [
        {
          name: "Symbol Resolution Efficiency",
          formula: "Efficiency = log2(Symbol Table Size)",
          explanation: "Measures the computational complexity of symbol lookups."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Type Inference Theorem",
      statement: "Semantic analysis must accurately determine and propagate type information",
      explanation: "Fundamental principle of type-safe compilation."
    },
    {
      name: "Semantic Consistency Theorem",
      statement: "Code must satisfy context-sensitive semantic rules beyond syntactic structure",
      explanation: "Critical for ensuring logical code correctness."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Explain type checking mechanisms and their implementation.",
      solution: {
        steps: [
          "Static vs. dynamic type checking",
          "Type inference algorithms",
          "Handling polymorphic types",
          "Error detection and reporting"
        ],
        answer: "Comprehensive type checking strategy"
      }
    },
    {
      year: 2021,
      question: "Discuss the role of symbol tables in semantic analysis.",
      solution: {
        steps: [
          "Identifier information storage",
          "Scope and visibility management",
          "Type information tracking",
          "Semantic consistency verification"
        ],
        answer: "Systematic approach to semantic information management"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Treating type checking as a trivial process",
      correction: "Recognize the complexity of type inference and compatibility."
    },
    {
      mistake: "Overlooking scope and visibility rules",
      correction: "Implement comprehensive symbol table management."
    }
  ]
};
