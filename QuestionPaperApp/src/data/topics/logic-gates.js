export const logicGatesData = {
  title: "Logic Gates",
  introduction: "Logic Gates are fundamental building blocks of digital circuits, implementing basic boolean operations and forming the basis of complex digital systems.",
  
  keyTopics: [
    {
      title: "Basic Logic Gates",
      content: "Comprehensive exploration of AND, OR, NOT, NAND, NOR, XOR, and XNOR gates.",
      formulas: [
        {
          name: "Gate Complexity",
          formula: "Complexity = log2(Number of Possible Input Combinations)",
          explanation: "Quantifies the computational complexity of logic gates."
        }
      ]
    },
    {
      title: "Gate Implementations",
      content: "Techniques for implementing logical functions using different gate configurations.",
      formulas: [
        {
          name: "Circuit Efficiency",
          formula: "Efficiency = (Minimal Gates) / (Total Gates Required)",
          explanation: "Measures the optimization of logical circuit design."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Universal Gate Theorem",
      statement: "NAND and NOR gates can individually implement all logical functions",
      explanation: "Fundamental principle of digital circuit design."
    },
    {
      name: "Gate Minimization Theorem",
      statement: "Logical circuits can be optimized by reducing the number of gates",
      explanation: "Critical for efficient circuit implementation."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Design a complex logical function using minimal logic gates.",
      solution: {
        steps: [
          "Identify logical requirements",
          "Select appropriate gate types",
          "Minimize gate count",
          "Verify functional correctness"
        ],
        answer: "Systematic logic gate design approach"
      }
    },
    {
      year: 2021,
      question: "Explain the implementation of arithmetic circuits using logic gates.",
      solution: {
        steps: [
          "Half adder design",
          "Full adder construction",
          "Logical gate combinations",
          "Circuit complexity analysis"
        ],
        answer: "Comprehensive digital circuit design exploration"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Treating all logic gates as interchangeable",
      correction: "Understand unique characteristics of different gate types."
    },
    {
      mistake: "Overlooking gate-level optimization",
      correction: "Always seek to minimize circuit complexity."
    }
  ]
};
