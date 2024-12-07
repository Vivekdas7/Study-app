export const finiteAutomataData = {
  title: "Finite Automata",
  introduction: "Finite Automata are mathematical models of computation used to recognize patterns and define formal languages, fundamental to understanding computational processes.",
  
  keyTopics: [
    {
      title: "Deterministic Finite Automata (DFA)",
      content: "Computational model with a finite set of states, defined transition function, and unique state for each input.",
      formulas: [
        {
          name: "State Transition Probability",
          formula: "P(transition) = 1 / (Total Possible Transitions)",
          explanation: "Measures the predictability of state transitions in a DFA."
        }
      ]
    },
    {
      title: "Non-Deterministic Finite Automata (NFA)",
      content: "Computational model allowing multiple possible transitions for a given input state.",
      formulas: [
        {
          name: "Transition Complexity",
          formula: "Complexity = log2(Number of Possible Transitions)",
          explanation: "Quantifies the computational complexity of state transitions."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "DFA-NFA Equivalence Theorem",
      statement: "Every NFA can be converted to an equivalent DFA",
      explanation: "Fundamental principle of computational equivalence."
    },
    {
      name: "State Minimization Theorem",
      statement: "Finite automata can be optimized by reducing redundant states",
      explanation: "Critical for computational efficiency."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Compare and analyze Deterministic and Non-Deterministic Finite Automata.",
      solution: {
        steps: [
          "DFA: Unique state transition",
          "NFA: Multiple possible transitions",
          "Conversion techniques between DFA and NFA",
          "Computational complexity implications"
        ],
        answer: "Different computational models with unique characteristics"
      }
    },
    {
      year: 2021,
      question: "Explain state minimization techniques for Finite Automata.",
      solution: {
        steps: [
          "Identify equivalent states",
          "Merge redundant states",
          "Preserve language recognition",
          "Optimize computational efficiency"
        ],
        answer: "Systematic approach to automata optimization"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Assuming all finite automata are identical",
      correction: "Recognize unique characteristics of DFA and NFA."
    },
    {
      mistake: "Overlooking state minimization importance",
      correction: "Always consider computational efficiency."
    }
  ]
};
