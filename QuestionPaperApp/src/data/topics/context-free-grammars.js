export const contextFreeGrammarsData = {
  title: "Context-Free Grammars",
  introduction: "Context-Free Grammars (CFGs) are formal systems for describing programming language syntax, parsing techniques, and computational language structures.",
  
  keyTopics: [
    {
      title: "Grammar Formalism",
      content: "Comprehensive exploration of production rules, derivation, and language generation.",
      formulas: [
        {
          name: "Grammar Complexity",
          formula: "Complexity = (Number of Production Rules)^2",
          explanation: "Quantifies the sophistication of context-free grammar structures."
        }
      ]
    },
    {
      title: "Parsing Techniques",
      content: "Top-down and bottom-up parsing strategies for context-free languages.",
      formulas: [
        {
          name: "Parse Tree Efficiency",
          formula: "Efficiency = (Successful Parses) / (Total Parsing Attempts)",
          explanation: "Measures the effectiveness of parsing algorithms."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Chomsky Normal Form Theorem",
      statement: "Every context-free grammar can be converted to Chomsky Normal Form",
      explanation: "Fundamental transformation for parsing and analysis."
    },
    {
      name: "Pumping Lemma for Context-Free Languages",
      statement: "Provides necessary conditions for language membership",
      explanation: "Critical tool for proving language properties."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Design a context-free grammar for a specific programming language construct.",
      solution: {
        steps: [
          "Identify language syntax",
          "Define non-terminal symbols",
          "Create production rules",
          "Validate grammar completeness"
        ],
        answer: "Systematic grammar design approach"
      }
    },
    {
      year: 2021,
      question: "Explain top-down and bottom-up parsing techniques.",
      solution: {
        steps: [
          "LL(k) parsing strategy",
          "LR(k) parsing approach",
          "Recursive descent parsing",
          "Shift-reduce parsing mechanisms"
        ],
        answer: "Comprehensive parsing algorithm analysis"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Creating overly complex grammar rules",
      correction: "Aim for simplicity and clarity in grammar design."
    },
    {
      mistake: "Overlooking ambiguity in grammar",
      correction: "Carefully design unambiguous production rules."
    }
  ]
};
