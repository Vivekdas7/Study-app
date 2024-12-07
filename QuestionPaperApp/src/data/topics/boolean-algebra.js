export const booleanAlgebraData = {
  title: "Boolean Algebra",
  introduction: "Boolean Algebra is the mathematical foundation of digital logic, providing a systematic approach to analyzing and designing digital circuits using binary logic.",
  
  keyTopics: [
    {
      title: "Boolean Operations",
      content: "Comprehensive exploration of AND, OR, NOT, XOR, and other fundamental logical operations.",
      formulas: [
        {
          name: "Boolean Expression Complexity",
          formula: "Complexity = log2(Number of Logical Operations)",
          explanation: "Quantifies the sophistication of boolean expressions."
        }
      ]
    },
    {
      title: "Boolean Identities",
      content: "Fundamental laws and properties that govern logical transformations and simplifications.",
      formulas: [
        {
          name: "Simplification Efficiency",
          formula: "Efficiency = (Reduced Logical Steps) / (Original Logical Steps)",
          explanation: "Measures the effectiveness of boolean expression simplification."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "De Morgan's Theorem",
      statement: "Logical negation can be distributed across AND and OR operations",
      explanation: "Fundamental principle for logical expression manipulation."
    },
    {
      name: "Boolean Completeness Theorem",
      statement: "Any logical function can be constructed using NAND or NOR gates",
      explanation: "Critical for understanding universal logic gates."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Simplify a complex boolean expression using standard identities.",
      solution: {
        steps: [
          "Apply commutative laws",
          "Use distributive properties",
          "Implement De Morgan's transformations",
          "Minimize logical steps"
        ],
        answer: "Systematic boolean expression simplification"
      }
    },
    {
      year: 2021,
      question: "Explain the universal properties of NAND and NOR gates.",
      solution: {
        steps: [
          "Constructing logical functions",
          "Implementing complex logic using minimal gates",
          "Proof of logical completeness",
          "Circuit design implications"
        ],
        answer: "Comprehensive analysis of universal logic gates"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Overlooking boolean algebra's systematic approach",
      correction: "Methodically apply logical transformations and identities."
    },
    {
      mistake: "Treating boolean operations as trivial",
      correction: "Recognize the complexity of logical manipulations."
    }
  ]
};
