export const threadsData = {
  title: "Threads",
  introduction: "Threads are lightweight units of execution within a process, enabling concurrent and parallel processing with shared resources.",
  
  keyTopics: [
    {
      title: "Thread Types",
      content: "Operating systems support user-level and kernel-level threads with different management and scheduling characteristics.",
      formulas: [
        {
          name: "Thread Concurrency",
          formula: "Concurrency = (Number of Concurrent Threads) / (Total Execution Time)",
          explanation: "Measures the degree of parallel execution."
        }
      ]
    },
    {
      title: "Thread Synchronization",
      content: "Mechanisms to coordinate thread execution and prevent race conditions in multi-threaded environments.",
      formulas: [
        {
          name: "Synchronization Overhead",
          formula: "Overhead = (Synchronization Time) / (Total Execution Time)",
          explanation: "Calculates the performance impact of thread synchronization."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Thread Multiplexing Theorem",
      statement: "Multiple threads can share process resources while maintaining independent execution contexts",
      explanation: "Enables efficient resource utilization and concurrent processing."
    },
    {
      name: "Thread Context Switch Theorem",
      statement: "Thread context switches are lighter and faster compared to process context switches",
      explanation: "Reduces overhead in multi-threaded environments."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Compare user-level and kernel-level threads. Discuss their advantages and limitations.",
      solution: {
        steps: [
          "User-level: Managed by thread library",
          "Kernel-level: Managed by operating system",
          "User-level: Faster context switching",
          "Kernel-level: Better system-wide scheduling"
        ],
        answer: "Each thread type has unique characteristics"
      }
    },
    {
      year: 2021,
      question: "Explain thread synchronization mechanisms and their implementation.",
      solution: {
        steps: [
          "Mutex locks",
          "Semaphores",
          "Condition variables",
          "Atomic operations"
        ],
        answer: "Multiple techniques for coordinating thread execution"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Assuming all threads have equal performance",
      correction: "Thread performance depends on implementation, synchronization, and system architecture."
    },
    {
      mistake: "Overlooking thread synchronization complexity",
      correction: "Proper synchronization is crucial to prevent race conditions and data inconsistencies."
    }
  ]
};
