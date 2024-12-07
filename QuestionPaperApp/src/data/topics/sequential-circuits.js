export const sequentialCircuitsData = {
  title: "Sequential Circuits",
  introduction: "Sequential Circuits are digital circuits with memory, where output depends on both current input and previous state, enabling complex computational processes.",
  
  keyTopics: [
    {
      title: "State Machines",
      content: "Comprehensive exploration of finite state machine design and implementation.",
      formulas: [
        {
          name: "State Complexity",
          formula: "Complexity = log2(Number of Possible States)",
          explanation: "Quantifies the sophistication of sequential circuit design."
        }
      ]
    },
    {
      title: "Memory Elements",
      content: "Analysis of flip-flops, latches, and registers as fundamental memory components.",
      formulas: [
        {
          name: "State Preservation Efficiency",
          formula: "Efficiency = (Correctly Maintained States) / (Total State Transitions)",
          explanation: "Measures the reliability of memory element performance."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "State Transition Theorem",
      statement: "Sequential circuits can model complex computational processes through state transitions",
      explanation: "Fundamental principle of digital memory systems."
    },
    {
      name: "Synchronization Theorem",
      statement: "Clock signals coordinate state changes in sequential circuits",
      explanation: "Critical for maintaining circuit synchronization."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Design a finite state machine for a specific computational task.",
      solution: {
        steps: [
          "Define state diagram",
          "Implement state transition logic",
          "Create state encoding",
          "Verify machine behavior"
        ],
        answer: "Systematic sequential circuit design approach"
      }
    },
    {
      year: 2021,
      question: "Explain the functioning of different types of flip-flops.",
      solution: {
        steps: [
          "D Flip-Flop characteristics",
          "JK Flip-Flop operation",
          "T Flip-Flop functionality",
          "State preservation mechanisms"
        ],
        answer: "Comprehensive memory element analysis"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Overlooking state transition complexity",
      correction: "Carefully design and verify state machine logic."
    },
    {
      mistake: "Treating all memory elements identically",
      correction: "Recognize unique characteristics of different flip-flop types."
    }
  ]
};
