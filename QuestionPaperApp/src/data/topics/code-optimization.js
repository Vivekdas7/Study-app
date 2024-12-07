export const codeOptimizationData = {
  title: "Code Optimization",
  introduction: "Code Optimization is a critical compilation phase that improves the intermediate code's efficiency, reducing computational resources and execution time.",
  
  keyTopics: [
    {
      title: "Local Optimization Techniques",
      content: "Strategies for improving code efficiency within basic blocks and small code segments.",
      formulas: [
        {
          name: "Optimization Gain",
          formula: "Gain = (Original Execution Time - Optimized Execution Time) / Original Execution Time",
          explanation: "Quantifies the performance improvement from optimization."
        }
      ]
    },
    {
      title: "Global Optimization Strategies",
      content: "Comprehensive approaches to improving code efficiency across entire function or program scope.",
      formulas: [
        {
          name: "Optimization Complexity",
          formula: "Complexity = O(n²) for global optimization algorithms",
          explanation: "Measures the computational complexity of optimization techniques."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Optimization Preservation Theorem",
      statement: "Code optimizations must maintain the original program's semantic behavior",
      explanation: "Fundamental requirement for correct code transformation."
    },
    {
      name: "Performance-Complexity Trade-off Theorem",
      statement: "Optimization techniques involve a trade-off between computational resources and execution efficiency",
      explanation: "Critical for balancing optimization efforts."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Explain common code optimization techniques.",
      solution: {
        steps: [
          "Constant folding",
          "Dead code elimination",
          "Common subexpression elimination",
          "Loop optimization strategies"
        ],
        answer: "Comprehensive code optimization approach"
      }
    },
    {
      year: 2021,
      question: "Discuss the challenges and strategies of global optimization.",
      solution: {
        steps: [
          "Data flow analysis",
          "Reaching definitions",
          "Live variable analysis",
          "Optimization limitations"
        ],
        answer: "Systematic global optimization exploration"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Assuming all optimizations always improve performance",
      correction: "Carefully evaluate optimization impact and complexity."
    },
    {
      mistake: "Overlooking semantic preservation",
      correction: "Ensure optimizations do not alter program behavior."
    }
  ]
};
