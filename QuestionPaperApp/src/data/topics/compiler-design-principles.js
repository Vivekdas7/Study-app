export const compilerDesignPrinciplesData = {
  title: "Compiler Design Principles",
  introduction: "Compiler Design Principles encompass the fundamental concepts, strategies, and methodologies underlying the construction of modern compilers.",
  
  keyTopics: [
    {
      title: "Compilation Phases",
      content: "Comprehensive overview of the entire compilation process from source code to executable.",
      formulas: [
        {
          name: "Compilation Efficiency",
          formula: "Efficiency = (Successful Compilations) / (Total Compilation Attempts)",
          explanation: "Quantifies the overall effectiveness of the compilation process."
        }
      ]
    },
    {
      title: "Compiler Architecture",
      content: "Design principles and architectural considerations for building robust compilers.",
      formulas: [
        {
          name: "Architectural Complexity",
          formula: "Complexity = log2(Number of Compilation Phases)",
          explanation: "Measures the sophistication of compiler design."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Separation of Concerns Theorem",
      statement: "Compiler design should modularize different compilation phases",
      explanation: "Fundamental principle for maintainable and extensible compiler architecture."
    },
    {
      name: "Compilation Abstraction Theorem",
      statement: "Each compilation phase should provide a clear abstraction of the source code",
      explanation: "Critical for systematic code transformation and analysis."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Compare different compiler design approaches.",
      solution: {
        steps: [
          "One-pass vs. multi-pass compilation",
          "Front-end and back-end separation",
          "Interpretation vs. compilation",
          "Just-in-time compilation strategies"
        ],
        answer: "Comprehensive compiler design analysis"
      }
    },
    {
      year: 2021,
      question: "Explain the importance of modularity in compiler design.",
      solution: {
        steps: [
          "Phase independence",
          "Easier maintenance",
          "Flexibility in optimization",
          "Support for multiple target architectures"
        ],
        answer: "Systematic exploration of compiler design principles"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Treating compiler design as a monolithic process",
      correction: "Embrace modular and flexible compiler architectures."
    },
    {
      mistake: "Overlooking the complexity of different compilation phases",
      correction: "Understand the unique challenges of each compilation stage."
    }
  ]
};
