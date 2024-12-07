export const synchronousAsynchronousCircuitsData = {
  title: "Synchronous and Asynchronous Circuits",
  introduction: "Synchronous and Asynchronous Circuits represent two fundamental approaches to digital circuit design, each with unique characteristics and application scenarios.",
  
  keyTopics: [
    {
      title: "Synchronous Circuit Characteristics",
      content: "Comprehensive exploration of clock-driven circuit behavior and state transitions.",
      formulas: [
        {
          name: "Clock Synchronization Efficiency",
          formula: "Efficiency = (Successful State Transitions) / (Total Clock Cycles)",
          explanation: "Quantifies the reliability of synchronous circuit operations."
        }
      ]
    },
    {
      title: "Asynchronous Circuit Design",
      content: "Analysis of event-driven circuits without explicit clock signals.",
      formulas: [
        {
          name: "Asynchronous Complexity",
          formula: "Complexity = log2(Number of Possible Event Sequences)",
          explanation: "Measures the sophistication of asynchronous circuit design."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Synchronization Stability Theorem",
      statement: "Synchronous circuits provide predictable and controlled state transitions",
      explanation: "Fundamental principle of clock-driven digital systems."
    },
    {
      name: "Asynchronous Flexibility Theorem",
      statement: "Asynchronous circuits can respond more dynamically to input changes",
      explanation: "Critical for understanding circuit responsiveness."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Compare synchronous and asynchronous circuit design approaches.",
      solution: {
        steps: [
          "Clock-based synchronization",
          "Event-driven mechanisms",
          "Performance characteristics",
          "Design complexity trade-offs"
        ],
        answer: "Comprehensive circuit design strategy analysis"
      }
    },
    {
      year: 2021,
      question: "Explain race conditions in asynchronous circuits.",
      solution: {
        steps: [
          "Signal propagation delays",
          "Hazard detection",
          "Mitigation strategies",
          "Circuit reliability considerations"
        ],
        answer: "Systematic approach to asynchronous circuit challenges"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Assuming synchronous and asynchronous circuits are interchangeable",
      correction: "Choose circuit type based on specific design requirements."
    },
    {
      mistake: "Overlooking timing and synchronization challenges",
      correction: "Carefully analyze circuit behavior under different conditions."
    }
  ]
};
