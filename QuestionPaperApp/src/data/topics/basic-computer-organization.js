export const basicComputerOrganizationData = {
  title: "Basic Computer Organization",
  introduction: "Basic Computer Organization explores the fundamental structure and components of computer systems, providing insights into how digital systems process and manage information.",
  
  keyTopics: [
    {
      title: "Computer System Architecture",
      content: "Comprehensive exploration of computer system components and their interactions.",
      formulas: [
        {
          name: "Performance Calculation",
          formula: "Performance = 1 / (Execution Time)",
          explanation: "Quantifies the computational efficiency of a computer system."
        }
      ]
    },
    {
      title: "Functional Units",
      content: "Detailed analysis of CPU, memory, and I/O subsystems.",
      formulas: [
        {
          name: "System Throughput",
          formula: "Throughput = (Number of Instructions) / (Total Execution Time)",
          explanation: "Measures the computational capacity of a system."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Von Neumann Architecture Theorem",
      statement: "Computers consist of processing unit, control unit, memory, and input/output mechanisms",
      explanation: "Fundamental principle of modern computer design."
    },
    {
      name: "Bottleneck Theorem",
      statement: "System performance is limited by the slowest component in the computational pipeline",
      explanation: "Critical for understanding system-level performance constraints."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Explain the functional components of a computer system.",
      solution: {
        steps: [
          "CPU architecture",
          "Memory hierarchy",
          "I/O mechanisms",
          "Control unit functionality"
        ],
        answer: "Comprehensive computer system organization analysis"
      }
    },
    {
      year: 2021,
      question: "Discuss the principles of Von Neumann architecture.",
      solution: {
        steps: [
          "Stored program concept",
          "Instruction fetch-decode-execute cycle",
          "Memory and processing unit interaction",
          "Control flow mechanisms"
        ],
        answer: "Systematic exploration of computer architecture principles"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Overlooking the importance of system interconnections",
      correction: "Understand how different computer components communicate and interact."
    },
    {
      mistake: "Treating all computer architectures as identical",
      correction: "Recognize variations in system design and architectural approaches."
    }
  ]
};
