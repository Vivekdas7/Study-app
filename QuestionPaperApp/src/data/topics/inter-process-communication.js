export const interProcessCommunicationData = {
  title: "Inter-process Communication",
  introduction: "Inter-process Communication (IPC) enables processes to exchange data and coordinate activities, facilitating complex system interactions.",
  
  keyTopics: [
    {
      title: "IPC Mechanisms",
      content: "Various methods for processes to communicate, including shared memory, message passing, pipes, and sockets.",
      formulas: [
        {
          name: "Communication Efficiency",
          formula: "Efficiency = (Data Transferred) / (Communication Overhead)",
          explanation: "Measures the effectiveness of communication mechanisms."
        }
      ]
    },
    {
      title: "Synchronization Primitives",
      content: "Techniques to coordinate and control process interactions, preventing race conditions and ensuring data consistency.",
      formulas: [
        {
          name: "Synchronization Overhead",
          formula: "Overhead = (Synchronization Time) / (Total Communication Time)",
          explanation: "Calculates performance impact of synchronization mechanisms."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Communication Complexity Theorem",
      statement: "Different IPC mechanisms have varying complexity, performance, and scalability characteristics",
      explanation: "Choice of IPC mechanism depends on specific system requirements."
    },
    {
      name: "Synchronization and Communication Theorem",
      statement: "Effective inter-process communication requires robust synchronization mechanisms",
      explanation: "Prevents data races and ensures consistent state management."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Compare and analyze shared memory and message passing communication methods.",
      solution: {
        steps: [
          "Shared Memory: High-performance, direct memory access",
          "Message Passing: More secure, explicit communication",
          "Shared Memory: Lower overhead",
          "Message Passing: Better for distributed systems"
        ],
        answer: "Each method has unique advantages"
      }
    },
    {
      year: 2021,
      question: "Explain the implementation of pipes and sockets in inter-process communication.",
      solution: {
        steps: [
          "Pipes: Unidirectional data transfer",
          "Named and unnamed pipes",
          "Sockets: Network-based communication",
          "Support local and remote process interactions"
        ],
        answer: "Flexible communication mechanisms"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Choosing IPC mechanism without considering system requirements",
      correction: "Evaluate performance, security, and scalability needs."
    },
    {
      mistake: "Neglecting synchronization in inter-process communication",
      correction: "Implement proper synchronization to prevent data inconsistencies."
    }
  ]
};
