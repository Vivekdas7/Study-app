export const syntaxAnalysisData = {
  title: "Syntax Analysis",
  introduction: "Syntax Analysis (Parsing) is the second phase of compilation, responsible for verifying the grammatical structure of the source code and generating an intermediate representation.",
  
  keyTopics: [
    {
      title: "Parsing Techniques",
      content: "Comprehensive exploration of top-down and bottom-up parsing strategies.",
      formulas: [
        {
          name: "Parsing Complexity",
          formula: "Complexity = O(n³) for general parsing algorithms",
          explanation: "Quantifies the computational complexity of parsing."
        }
      ]
    },
    {
      title: "Context-Free Grammars",
      content: "Using context-free grammars to define language syntax and parsing rules.",
      formulas: [
        {
          name: "Grammar Expressiveness",
          formula: "Expressiveness = (Unique Syntax Patterns) / (Total Possible Patterns)",
          explanation: "Measures the descriptive power of grammar definitions."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Parsing Completeness Theorem",
      statement: "Syntax analysis must completely validate the grammatical structure of source code",
      explanation: "Fundamental requirement for correct code interpretation."
    },
    {
      name: "Ambiguity Resolution Theorem",
      statement: "Parsing techniques must resolve grammatical ambiguities systematically",
      explanation: "Critical for unambiguous code representation."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Compare LL and LR parsing techniques.",
      solution: {
        steps: [
          "LL(k) parsing: Top-down, lookahead",
          "LR(k) parsing: Bottom-up, powerful",
          "Computational complexity",
          "Grammar restrictions"
        ],
        answer: "Comprehensive parsing strategy analysis"
      }
    },
    {
      year: 2021,
      question: "Explain the construction of parse trees and their significance.",
      solution: {
        steps: [
          "Derivation of syntax structure",
          "Representing grammatical relationships",
          "Intermediate code generation",
          "Error detection mechanisms"
        ],
        answer: "Systematic approach to syntax representation"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Assuming all parsing techniques are equivalent",
      correction: "Choose parsing strategy based on specific grammar characteristics."
    },
    {
      mistake: "Overlooking parsing complexity",
      correction: "Consider computational resources and algorithm efficiency."
    }
  ]
};
