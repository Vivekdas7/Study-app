export const cpuSchedulingData = {
  title: "CPU Scheduling",
  introduction: "CPU Scheduling is a fundamental operating systems concept that determines the order and allocation of processor time to different processes, aiming to maximize system efficiency, responsiveness, and resource utilization.",
  
  keyTopics: [
    {
      title: "Scheduling Algorithms",
      content: "Various strategies for allocating CPU time to processes, each with unique characteristics and performance implications.",
      formulas: [
        {
          name: "CPU Utilization",
          formula: "CPU Utilization = (Busy Time / Total Time) * 100%",
          explanation: "Measures the percentage of time the CPU is actively processing tasks."
        }
      ]
    },
    {
      title: "Performance Metrics",
      content: "Key indicators used to evaluate and compare different CPU scheduling approaches.",
      formulas: [
        {
          name: "Average Waiting Time",
          formula: "AWT = Σ(Waiting Time) / Number of Processes",
          explanation: "Calculates the average time processes spend waiting in the ready queue."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Scheduling Algorithm Optimality Theorem",
      statement: "No single scheduling algorithm provides optimal performance for all scenarios",
      explanation: "Different workloads and system requirements necessitate different scheduling strategies."
    },
    {
      name: "Response Time Minimization Theorem",
      statement: "Scheduling should minimize average response time while maintaining fair resource allocation",
      explanation: "Balances system efficiency and process fairness."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Compare and analyze Round Robin and Shortest Job First (SJF) scheduling algorithms.",
      solution: {
        steps: [
          "Round Robin: Time-slice based, preemptive",
          "SJF: Minimizes average waiting time",
          "Round Robin prevents process starvation",
          "SJF may cause long processes to wait"
        ],
        answer: "Choice depends on specific system requirements"
      }
    },
    {
      year: 2021,
      question: "Explain the multilevel feedback queue scheduling approach and its implementation.",
      solution: {
        steps: [
          "Multiple priority queues with different time quantum",
          "Processes move between queues based on behavior",
          "Balances I/O-bound and CPU-bound processes",
          "Adaptive scheduling mechanism"
        ],
        answer: "Dynamic and flexible scheduling strategy"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Assuming all processes have equal priority",
      correction: "Implement priority-based scheduling to handle varied process requirements."
    },
    {
      mistake: "Overlooking context switch overhead",
      correction: "Consider the computational cost of frequent process switching."
    }
  ]
};
