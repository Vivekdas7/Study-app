export const processSynchronizationData = {
  title: "Process Synchronization",
  introduction: "Process Synchronization is a critical mechanism in operating systems that manages concurrent access to shared resources, preventing race conditions and ensuring data consistency in multi-process environments.",
  
  keyTopics: [
    {
      title: "Critical Section Problem",
      content: "A fundamental challenge in concurrent programming where multiple processes access shared resources simultaneously, requiring careful coordination.",
      formulas: [
        {
          name: "Mutual Exclusion Condition",
          formula: "Only one process can execute in critical section at a time",
          explanation: "Prevents simultaneous access to shared resources."
        }
      ]
    },
    {
      title: "Synchronization Mechanisms",
      content: "Various techniques and primitives used to coordinate process execution and manage shared resources.",
      formulas: [
        {
          name: "Semaphore Operations",
          formula: "wait(S): S = S - 1, signal(S): S = S + 1",
          explanation: "Basic operations for managing resource access in concurrent systems."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Deadlock Prevention Theorem",
      statement: "Prevent at least one of the four necessary conditions for deadlock",
      explanation: "Strategies include resource ordering, preemption, and circular wait prevention."
    },
    {
      name: "Mutual Exclusion Theorem",
      statement: "Ensure that shared resources are accessed by only one process at a time",
      explanation: "Fundamental principle of process synchronization."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Explain Peterson's solution for solving the critical section problem in two-process synchronization.",
      solution: {
        steps: [
          "Uses shared variables for coordination",
          "Implements turn and interest flags",
          "Ensures mutual exclusion",
          "Prevents process starvation"
        ],
        answer: "Software-based synchronization mechanism"
      }
    },
    {
      year: 2021,
      question: "Compare and analyze Mutex locks and Semaphores as synchronization primitives.",
      solution: {
        steps: [
          "Mutex: Binary lock, exclusive access",
          "Semaphore: Can allow multiple accesses",
          "Mutex simpler, Semaphore more flexible",
          "Different use cases based on synchronization requirements"
        ],
        answer: "Depends on specific synchronization needs"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Ignoring potential race conditions",
      correction: "Always implement proper synchronization mechanisms in concurrent systems."
    },
    {
      mistake: "Overusing synchronization primitives",
      correction: "Balance between synchronization and performance overhead."
    }
  ]
};
