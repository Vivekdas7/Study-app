export const codeGenerationData = {
  title: "Code Generation",
  introduction: "Code Generation is the final phase of compilation, transforming optimized intermediate representation into target machine code.",

  keyTopics: [
    {
      title: "Target Machine Instruction Selection",
      content: "Strategies for mapping intermediate code to specific machine instructions.",
      formulas: [
        {
          name: "Instruction Efficiency",
          formula: "Efficiency = (Optimal Instructions) / (Total Generated Instructions)",
          explanation: "Quantifies the quality of instruction selection."
        }
      ]
    },
    {
      title: "Register Allocation",
      content: "Techniques for efficiently mapping variables to machine registers.",
      formulas: [
        {
          name: "Register Utilization",
          formula: "Utilization = (Used Registers) / (Total Available Registers)",
          explanation: "Measures the effectiveness of register allocation strategies."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Instruction Selection Theorem",
      statement: "Code generation must select the most efficient machine instructions for each intermediate code segment",
      explanation: "Fundamental principle of efficient code translation."
    },
    {
      name: "Resource Allocation Theorem",
      statement: "Optimal use of machine resources is critical for generating high-performance code",
      explanation: "Critical for minimizing computational overhead."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Explain register allocation strategies.",
      solution: {
        steps: [
          "Graph coloring approach",
          "Linear scan algorithm",
          "Spilling techniques",
          "Minimizing register pressure"
        ],
        answer: "Comprehensive register allocation analysis"
      }
    },
    {
      year: 2021,
      question: "Discuss challenges in generating efficient machine code.",
      solution: {
        steps: [
          "Instruction selection complexity",
          "Architecture-specific optimizations",
          "Performance trade-offs",
          "Code size considerations"
        ],
        answer: "Systematic code generation exploration"
      }
    },
    {
      year: 2020,
      question: "What are the main objectives of code generation?",
      solution: {
        steps: [
          "Generate correct and efficient machine code",
          "Minimize the number of instructions",
          "Optimize for the target architecture",
          "Ensure compatibility with the execution environment"
        ],
        answer: "Correctness, efficiency, and compatibility are the primary objectives."
      }
    },
    {
      year: 2019,
      question: "How is the graph coloring approach used in register allocation?",
      solution: {
        steps: [
          "Represent the program's variables as a graph",
          "Nodes represent variables, edges indicate conflicts",
          "Assign colors (registers) to nodes to minimize conflicts",
          "Handle spilling for uncolored nodes"
        ],
        answer: "Graph coloring efficiently maps variables to registers while minimizing conflicts."
      }
    },
    {
      year: 2018,
      question: "What are the common trade-offs in instruction selection?",
      solution: {
        steps: [
          "Balance between code size and execution speed",
          "Optimize for frequently used instructions",
          "Consider the complexity of the instruction set",
          "Adapt to the target machine's architecture"
        ],
        answer: "Instruction selection requires careful optimization to balance performance and size."
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Treating all machine architectures identically",
      correction: "Consider specific target machine characteristics."
    },
    {
      mistake: "Overlooking instruction-level optimizations",
      correction: "Implement architecture-specific code generation strategies."
    }
  ]
};
