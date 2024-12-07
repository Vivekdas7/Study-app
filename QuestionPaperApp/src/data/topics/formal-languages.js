export const formalLanguagesData = {
  title: "Formal Languages",
  introduction: "Formal Languages provide a rigorous mathematical framework for describing computational language structures, syntax, and semantic properties.",
  
  keyTopics: [
    {
      title: "Language Hierarchy",
      content: "Comprehensive exploration of Chomsky hierarchy and language classification.",
      formulas: [
        {
          name: "Language Complexity",
          formula: "Complexity = log2(Number of Production Rules)",
          explanation: "Quantifies the sophistication of language structures."
        }
      ]
    },
    {
      title: "Language Properties",
      content: "Theoretical analysis of language characteristics and computational properties.",
      formulas: [
        {
          name: "Expressiveness Index",
          formula: "Expressiveness = (Unique Patterns) / (Total Possible Patterns)",
          explanation: "Measures the descriptive power of formal language structures."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Chomsky Hierarchy Theorem",
      statement: "Languages are classified into four types based on their generative complexity",
      explanation: "Fundamental classification of computational language structures."
    },
    {
      name: "Closure Properties Theorem",
      statement: "Different language classes have unique closure properties under various operations",
      explanation: "Critical for understanding language transformations."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Classify a given language within the Chomsky Hierarchy.",
      solution: {
        steps: [
          "Analyze language generation rules",
          "Identify production complexity",
          "Determine hierarchy level",
          "Provide theoretical justification"
        ],
        answer: "Systematic language classification approach"
      }
    },
    {
      year: 2021,
      question: "Explain closure properties of different language classes.",
      solution: {
        steps: [
          "Regular language properties",
          "Context-free language characteristics",
          "Closure under union and intersection",
          "Computational implications"
        ],
        answer: "Comprehensive analysis of language transformations"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Treating all languages as computationally equivalent",
      correction: "Recognize unique properties of different language classes."
    },
    {
      mistake: "Overlooking language complexity",
      correction: "Carefully analyze generative rules and computational properties."
    }
  ]
};
