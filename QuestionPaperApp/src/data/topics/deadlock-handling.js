export const deadlockHandlingData = {
  title: "Deadlock Handling",
  introduction: "Deadlock Handling is a critical aspect of operating systems that involves detecting, preventing, and recovering from situations where multiple processes are unable to proceed due to circular resource dependencies.",
  
  keyTopics: [
    {
      title: "Deadlock Conditions",
      content: "Four necessary conditions for deadlock to occur: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait.",
      formulas: [
        {
          name: "Deadlock Probability",
          formula: "P(Deadlock) = Π(Probability of each deadlock condition)",
          explanation: "Theoretical measure of deadlock likelihood in a system."
        }
      ]
    },
    {
      title: "Resource Allocation Graphs",
      content: "Graphical representation of resource allocation and process states, used to detect potential deadlock scenarios.",
      formulas: [
        {
          name: "Graph Cycle Detection",
          formula: "Detect circular dependencies in resource allocation",
          explanation: "Fundamental method for identifying potential deadlocks."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Banker's Algorithm Theorem",
      statement: "A resource allocation and deadlock avoidance algorithm",
      explanation: "Determines if a system can safely allocate resources to prevent potential deadlocks."
    },
    {
      name: "Resource Allocation Theorem",
      statement: "Resource allocation must satisfy safety and progress conditions",
      explanation: "Ensures system remains in a consistent and progressing state."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Explain the Banker's algorithm for deadlock avoidance. Describe its key steps and implementation.",
      solution: {
        steps: [
          "Check resource request against available resources",
          "Simulate resource allocation",
          "Verify system can complete all processes",
          "Reject request if safety cannot be guaranteed"
        ],
        answer: "Proactive deadlock prevention mechanism"
      }
    },
    {
      year: 2021,
      question: "Compare and analyze different strategies for handling deadlocks: Prevention, Avoidance, and Detection.",
      solution: {
        steps: [
          "Prevention: Eliminate deadlock conditions",
          "Avoidance: Careful resource allocation",
          "Detection: Identify and recover from deadlocks",
          "Each strategy has unique advantages and limitations"
        ],
        answer: "Choice depends on system requirements"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Assuming deadlocks are rare or insignificant",
      correction: "Implement comprehensive deadlock handling strategies in concurrent systems."
    },
    {
      mistake: "Overcomplicating deadlock resolution mechanisms",
      correction: "Balance between complexity and practical implementation."
    }
  ]
};
