export const combinationalCircuitsData = {
  title: "Combinational Circuits",
  introduction: "Combinational Circuits are digital circuits where output depends solely on current input, without memory or state preservation.",
  
  keyTopics: [
    {
      title: "Circuit Design Principles",
      content: "Techniques for designing and analyzing circuits with direct input-output relationships.",
      formulas: [
        {
          name: "Circuit Complexity",
          formula: "Complexity = log2(Number of Logic Gates)",
          explanation: "Quantifies the sophistication of combinational circuit design."
        }
      ]
    },
    {
      title: "Functional Units",
      content: "Comprehensive exploration of adders, multiplexers, decoders, and encoders.",
      formulas: [
        {
          name: "Functional Efficiency",
          formula: "Efficiency = (Successful Operations) / (Total Possible Inputs)",
          explanation: "Measures the effectiveness of combinational circuit performance."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Functional Completeness Theorem",
      statement: "Combinational circuits can implement any boolean function",
      explanation: "Fundamental principle of digital circuit design."
    },
    {
      name: "Propagation Delay Theorem",
      statement: "Circuit performance depends on signal propagation through logic gates",
      explanation: "Critical for understanding circuit timing characteristics."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Design a 4-bit binary adder using combinational logic.",
      solution: {
        steps: [
          "Full adder module design",
          "Cascading adder stages",
          "Carry propagation handling",
          "Verification of addition logic"
        ],
        answer: "Systematic combinational circuit design approach"
      }
    },
    {
      year: 2021,
      question: "Explain the functioning of a multiplexer and its applications.",
      solution: {
        steps: [
          "Data selection mechanism",
          "Address decoding",
          "Signal routing principles",
          "Practical implementation scenarios"
        ],
        answer: "Comprehensive multiplexer functionality analysis"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Overlooking signal propagation delays",
      correction: "Consider timing characteristics in circuit design."
    },
    {
      mistake: "Treating all combinational circuits as identical",
      correction: "Recognize unique design requirements for different functional units."
    }
  ]
};
