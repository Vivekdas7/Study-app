export const concurrencySynchronizationData = {
  title: "Concurrency and Synchronization",
  introduction: "Concurrency and Synchronization are critical concepts in operating systems that manage simultaneous process execution and prevent data inconsistencies.",
  
  keyTopics: [
    {
      title: "Synchronization Primitives",
      content: "Mechanisms to coordinate process and thread interactions, including mutex locks, semaphores, and monitors.",
      formulas: [
        {
          name: "Critical Section Probability",
          formula: "P(Critical Section) = (Concurrent Accesses) / (Total Accesses)",
          explanation: "Measures the likelihood of simultaneous resource access."
        }
      ]
    },
    {
      title: "Race Conditions",
      content: "Situations where multiple processes or threads access shared resources simultaneously, potentially causing unpredictable outcomes.",
      formulas: [
        {
          name: "Race Condition Probability",
          formula: "P(Race Condition) = (Unsynchronized Accesses) / (Total Concurrent Accesses)",
          explanation: "Quantifies the risk of data inconsistency."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Mutual Exclusion Theorem",
      statement: "Only one process can execute in a critical section at a time",
      explanation: "Fundamental principle of process synchronization."
    },
    {
      name: "Synchronization Complexity Theorem",
      statement: "Synchronization mechanisms introduce computational overhead",
      explanation: "Balancing synchronization and performance is crucial."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Explain Peterson's algorithm for solving the critical section problem.",
      solution: {
        steps: [
          "Software-based synchronization",
          "Uses shared variables",
          "Implements turn and interest flags",
          "Ensures mutual exclusion"
        ],
        answer: "Elegant solution for two-process synchronization"
      }
    },
    {
      year: 2021,
      question: "Compare mutex locks, semaphores, and monitors as synchronization mechanisms.",
      solution: {
        steps: [
          "Mutex: Binary lock, exclusive access",
          "Semaphores: Can allow multiple accesses",
          "Monitors: Higher-level synchronization construct",
          "Each mechanism has unique characteristics"
        ],
        answer: "Different synchronization approaches"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Ignoring potential race conditions",
      correction: "Always implement proper synchronization mechanisms."
    },
    {
      mistake: "Overusing synchronization primitives",
      correction: "Balance between synchronization and performance overhead."
    }
  ]
};
