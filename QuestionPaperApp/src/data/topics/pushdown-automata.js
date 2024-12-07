export const pushdownAutomataData = {
  title: "Pushdown Automata",
  introduction: "Pushdown Automata (PDA) are computational models with an additional stack memory, enabling recognition of context-free languages and more complex computational processes.",
  
  keyTopics: [
    {
      title: "PDA Configuration",
      content: "Comprehensive exploration of state, input, and stack interactions in pushdown automata.",
      formulas: [
        {
          name: "Stack Complexity",
          formula: "Complexity = log2(Maximum Stack Depth)",
          explanation: "Quantifies the computational complexity of pushdown automata."
        }
      ]
    },
    {
      title: "Language Recognition",
      content: "Techniques for recognizing context-free languages using pushdown automata.",
      formulas: [
        {
          name: "Recognition Efficiency",
          formula: "Efficiency = (Successful Recognitions) / (Total Parsing Attempts)",
          explanation: "Measures the effectiveness of language recognition."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "PDA-CFG Equivalence Theorem",
      statement: "Pushdown Automata can recognize exactly the context-free languages",
      explanation: "Fundamental relationship between computational models."
    },
    {
      name: "Stack Manipulation Theorem",
      statement: "PDA can simulate complex computational processes through stack operations",
      explanation: "Critical for understanding computational power."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Design a pushdown automaton to recognize a specific context-free language.",
      solution: {
        steps: [
          "Define initial configuration",
          "Create state transition rules",
          "Implement stack manipulation",
          "Validate language recognition"
        ],
        answer: "Systematic PDA design approach"
      }
    },
    {
      year: 2021,
      question: "Explain stack operations and state transitions in pushdown automata.",
      solution: {
        steps: [
          "Push and pop operations",
          "State transition conditions",
          "Input symbol processing",
          "Acceptance criteria"
        ],
        answer: "Comprehensive PDA operational analysis"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Treating PDA like finite automata",
      correction: "Recognize the unique stack-based computational model."
    },
    {
      mistake: "Overlooking stack manipulation complexity",
      correction: "Carefully design state transitions and stack operations."
    }
  ]
};
