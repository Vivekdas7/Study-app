export const lexicalAnalysisData = {
  title: "Lexical Analysis",
  introduction: "Lexical Analysis is the first phase of compilation, responsible for breaking down source code into meaningful tokens and preparing them for further processing.",
  
  keyTopics: [
    {
      title: "Token Recognition",
      content: "Techniques for identifying and classifying lexical elements in programming languages.",
      formulas: [
        {
          name: "Token Complexity",
          formula: "Complexity = log2(Number of Token Types)",
          explanation: "Quantifies the sophistication of token recognition."
        }
      ]
    },
    {
      title: "Regular Expressions",
      content: "Using regular expressions for defining and matching lexical patterns.",
      formulas: [
        {
          name: "Pattern Matching Efficiency",
          formula: "Efficiency = (Successful Matches) / (Total Parsing Attempts)",
          explanation: "Measures the effectiveness of lexical pattern recognition."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Token Minimization Theorem",
      statement: "Lexical analysis aims to reduce source code to its minimal meaningful components",
      explanation: "Fundamental principle of efficient lexical parsing."
    },
    {
      name: "Pattern Recognition Theorem",
      statement: "Effective token recognition requires comprehensive and precise pattern definitions",
      explanation: "Critical for accurate source code interpretation."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Design a lexical analyzer for a specific programming language construct.",
      solution: {
        steps: [
          "Define token types",
          "Create regular expressions",
          "Implement token recognition logic",
          "Handle edge cases and error conditions"
        ],
        answer: "Systematic lexical analysis design approach"
      }
    },
    {
      year: 2021,
      question: "Explain the role of finite automata in lexical analysis.",
      solution: {
        steps: [
          "Token pattern matching",
          "State transition mechanisms",
          "Efficient pattern recognition",
          "Handling complex lexical structures"
        ],
        answer: "Comprehensive lexical parsing strategy"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Oversimplifying token recognition",
      correction: "Consider comprehensive and nuanced token definitions."
    },
    {
      mistake: "Ignoring error handling in lexical analysis",
      correction: "Implement robust error detection and recovery mechanisms."
    }
  ]
};
