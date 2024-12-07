export const processesData = {
  title: "Processes",
  introduction: "Processes are fundamental units of execution in operating systems, representing running programs with allocated resources and execution states.",
  
  keyTopics: [
    {
      title: "Process States",
      content: "Processes transition through different states during their lifecycle, including New, Ready, Running, Waiting, and Terminated.",
      formulas: [
        {
          name: "Process State Transition Probability",
          formula: "P(State Change) = (Number of State Transitions) / (Total Execution Time)",
          explanation: "Measures the frequency of process state changes."
        }
      ]
    },
    {
      title: "Process Control Block (PCB)",
      content: "A data structure containing critical information about a process, including process state, program counter, CPU registers, and memory management information.",
      formulas: [
        {
          name: "PCB Size Estimation",
          formula: "PCB Size = Σ(State Variables + Metadata)",
          explanation: "Calculates the memory overhead for process management."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Process Creation Theorem",
      statement: "Processes can be created through system initialization, user request, process spawning, or batch job initiation",
      explanation: "Multiple mechanisms exist for process generation in operating systems."
    },
    {
      name: "Process Termination Theorem",
      statement: "Processes terminate due to normal completion, error conditions, or external intervention",
      explanation: "Systematic approach to process lifecycle management."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Explain the different process creation methods in operating systems.",
      solution: {
        steps: [
          "System initialization processes",
          "User-requested process creation",
          "Process spawning by parent processes",
          "Batch job initiation"
        ],
        answer: "Multiple mechanisms for process generation"
      }
    },
    {
      year: 2021,
      question: "Compare and analyze the components of a Process Control Block (PCB).",
      solution: {
        steps: [
          "Process state information",
          "Program counter",
          "CPU register contents",
          "Memory management metadata",
          "I/O status information"
        ],
        answer: "Comprehensive process management structure"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Confusing process with program",
      correction: "A process is a dynamic execution instance of a program with allocated resources."
    },
    {
      mistake: "Overlooking process overhead",
      correction: "Each process requires memory, CPU time, and system resources for management."
    }
  ]
};
