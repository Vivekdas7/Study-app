export const diskSchedulingData = {
  title: "Disk Scheduling",
  introduction: "Disk Scheduling involves optimizing disk access patterns to minimize seek time, reduce latency, and improve overall I/O performance in computer systems.",
  
  keyTopics: [
    {
      title: "Scheduling Algorithms",
      content: "Various strategies for ordering and executing disk access requests to minimize disk head movement and improve efficiency.",
      formulas: [
        {
          name: "Seek Time",
          formula: "Seek Time = |Current Position - Request Position|",
          explanation: "Measures the time required to move disk head to a specific location."
        }
      ]
    },
    {
      title: "Performance Metrics",
      content: "Key indicators used to evaluate disk scheduling algorithm effectiveness, including average seek time and throughput.",
      formulas: [
        {
          name: "Disk Throughput",
          formula: "Throughput = (Number of Requests Serviced) / (Total Execution Time)",
          explanation: "Measures the rate of disk request processing."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Disk Scheduling Optimization Theorem",
      statement: "Effective disk scheduling minimizes total disk head movement and maximizes request processing efficiency",
      explanation: "Different algorithms perform better in specific workload scenarios."
    },
    {
      name: "Request Ordering Theorem",
      statement: "Intelligent request ordering can significantly reduce disk access latency",
      explanation: "Strategic request sequencing improves overall system performance."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Compare and analyze FCFS, SSTF, SCAN, and C-SCAN disk scheduling algorithms.",
      solution: {
        steps: [
          "FCFS: Simple, may result in high seek times",
          "SSTF: Minimizes immediate seek time",
          "SCAN: Elevator algorithm, systematic coverage",
          "C-SCAN: Circular scan, more uniform service"
        ],
        answer: "Each algorithm has unique performance characteristics"
      }
    },
    {
      year: 2021,
      question: "Explain the LOOK and C-LOOK disk scheduling strategies.",
      solution: {
        steps: [
          "LOOK: Scans only to last request in current direction",
          "C-LOOK: Circular version of LOOK",
          "Reduces unnecessary disk head movement",
          "More efficient than basic SCAN algorithms"
        ],
        answer: "Advanced disk scheduling techniques"
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Assuming all disk scheduling algorithms perform equally",
      correction: "Choose algorithm based on specific workload and system characteristics."
    },
    {
      mistake: "Overlooking disk scheduling's impact on system performance",
      correction: "Carefully evaluate and select appropriate scheduling strategy."
    }
  ]
};
