export const instructionLevelParallelismData = {
  title: "Instruction-Level Parallelism",
  introduction: "Instruction-Level Parallelism explores advanced techniques for simultaneously executing multiple instructions, focusing on performance enhancement and architectural optimization strategies.",
  
  keyTopics: [
    {
      title: "Pipelining Techniques",
      content: "Comprehensive analysis of instruction pipeline stages, hazards, and performance optimization.",
      formulas: [
        {
          name: "Pipeline Throughput",
          formula: "Throughput = (Completed Instructions) / (Total Clock Cycles)",
          explanation: "Quantifies the efficiency of instruction pipeline design."
        }
      ]
    },
    {
      title: "Superscalar Architecture",
      content: "Detailed exploration of multiple instruction execution capabilities and scheduling mechanisms.",
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
      name: "Hazard Mitigation Theorem",
      statement: "Performance optimization requires effective management of data, structural, and control hazards",
      explanation: "Fundamental principle of instruction-level parallelism."
    },
    {
      name: "Amdahl's Law",
      statement: "Performance improvement is limited by the portion of the system that cannot be parallelized",
      explanation: "Critical for understanding parallel processing limitations."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Design an instruction pipeline and analyze potential performance bottlenecks.",
      solution: {
        steps: [
          "Pipeline stage design",
          "Hazard detection mechanisms",
          "Performance optimization strategies",
          "Bottleneck identification"
        ],
        answer: "Comprehensive instruction pipeline design approach"
      }
    },
    {
      year: 2021,
      question: "Explain superscalar architecture and its performance implications.",
      solution: {
        steps: [
          "Multiple instruction execution",
          "Scheduling techniques",
          "Resource allocation",
          "Performance trade-offs"
        ],
        answer: "Systematic exploration of instruction-level parallelism"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Overlooking pipeline complexity",
      correction: "Understand intricate interactions between pipeline stages and hazard management."
    },
    {
      mistake: "Assuming linear performance improvement",
      correction: "Recognize limitations in instruction-level parallelism implementation."
    }
  ]
};
