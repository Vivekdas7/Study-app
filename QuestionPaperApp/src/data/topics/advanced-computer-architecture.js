export const advancedComputerArchitectureData = {
  title: "Advanced Computer Architecture",
  introduction: "Advanced Computer Architecture explores cutting-edge design principles, parallel processing techniques, and sophisticated computational strategies that push the boundaries of modern computing systems.",
  
  keyTopics: [
    {
      title: "Parallel Processing Architectures",
      content: "Comprehensive analysis of multicore, distributed, and heterogeneous computing systems.",
      formulas: [
        {
          name: "Parallel Efficiency",
          formula: "Efficiency = (Speedup) / (Number of Processing Units)",
          explanation: "Quantifies the performance scaling of parallel systems."
        }
      ]
    },
    {
      title: "Advanced Processor Design",
      content: "Detailed exploration of speculative execution, out-of-order processing, and advanced microarchitectures.",
      formulas: [
        {
          name: "Instruction-Level Parallelism",
          formula: "ILP = (Concurrent Instructions) / (Sequential Instructions)",
          explanation: "Measures the potential for simultaneous instruction execution."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Scalability Theorem",
      statement: "System performance does not linearly increase with the number of processing units",
      explanation: "Fundamental limitation of parallel computing architectures."
    },
    {
      name: "Performance Bottleneck Theorem",
      statement: "Advanced architectures are constrained by memory access, communication, and synchronization overhead",
      explanation: "Critical for understanding complex system design challenges."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Design a multicore processor architecture and analyze its performance characteristics.",
      solution: {
        steps: [
          "Core interconnection strategy",
          "Cache coherence mechanisms",
          "Parallel processing optimization",
          "Performance trade-offs"
        ],
        answer: "Comprehensive multicore processor design approach"
      }
    },
    {
      year: 2021,
      question: "Explain speculative execution and its architectural implications.",
      solution: {
        steps: [
          "Instruction prediction",
          "Branch prediction techniques",
          "Performance optimization",
          "Potential risks and mitigations"
        ],
        answer: "Systematic exploration of advanced processor design"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Assuming linear performance scaling",
      correction: "Understand complex interactions in parallel computing systems."
    },
    {
      mistake: "Overlooking architectural complexity",
      correction: "Recognize nuanced performance trade-offs in advanced designs."
    }
  ]
};
