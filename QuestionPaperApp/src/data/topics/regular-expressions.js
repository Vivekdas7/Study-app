export const regularExpressionsData = {
  title: "Regular Expressions",
  introduction: "Regular Expressions are powerful pattern matching tools used for text processing, defining formal languages, and computational pattern recognition.",
  
  keyTopics: [
    {
      title: "Regular Expression Syntax",
      content: "Comprehensive exploration of regex metacharacters, quantifiers, and pattern matching techniques.",
      formulas: [
        {
          name: "Pattern Complexity",
          formula: "Complexity = log2(Number of Regex Metacharacters)",
          explanation: "Quantifies the sophistication of regular expression patterns."
        }
      ]
    },
    {
      title: "Regular Language Properties",
      content: "Theoretical foundations of languages defined by regular expressions.",
      formulas: [
        {
          name: "Language Expressiveness",
          formula: "Expressiveness = (Unique Patterns) / (Total Possible Patterns)",
          explanation: "Measures the descriptive power of regular expressions."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Regex-Automata Equivalence Theorem",
      statement: "Regular expressions can be converted to equivalent finite automata",
      explanation: "Fundamental connection between regex and computational models."
    },
    {
      name: "Closure Properties Theorem",
      statement: "Regular languages are closed under union, intersection, and complementation",
      explanation: "Critical mathematical property of regular languages."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Design a regular expression to match specific pattern constraints.",
      solution: {
        steps: [
          "Identify pattern requirements",
          "Select appropriate metacharacters",
          "Construct compact regex",
          "Validate against test cases"
        ],
        answer: "Systematic regex design approach"
      }
    },
    {
      year: 2021,
      question: "Explain conversion between regular expressions and finite automata.",
      solution: {
        steps: [
          "Thompson's construction algorithm",
          "NFA creation from regex",
          "DFA minimization techniques",
          "Preservation of language recognition"
        ],
        answer: "Algorithmic transformation between regex and automata"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Overcomplicating regex patterns",
      correction: "Aim for simplicity and readability in pattern design."
    },
    {
      mistake: "Ignoring performance implications",
      correction: "Consider computational complexity of regex patterns."
    }
  ]
};
