export const cpuSchedulingData = {
  title: "CPU Scheduling",
  introduction: "CPU Scheduling is a fundamental operating systems concept that determines the order and allocation of processor time to different processes, aiming to maximize system efficiency, responsiveness, and resource utilization.",
  
  keyTopics: [
    {
      title: "Scheduling Algorithms",
      content: "Various strategies for allocating CPU time to processes, each with unique characteristics and performance implications. These include preemptive and non-preemptive scheduling methods, each suitable for different types of workloads.",
      formulas: [
        {
          name: "CPU Utilization",
          formula: "CPU Utilization = (Busy Time / Total Time) * 100%",
          explanation: "Measures the percentage of time the CPU is actively processing tasks. Higher CPU utilization indicates better usage of system resources."
        },
        {
          name: "Turnaround Time",
          formula: "Turnaround Time = Completion Time - Arrival Time",
          explanation: "The total time taken for a process to complete from the moment it arrives in the ready queue."
        }
      ]
    },
    {
      title: "Performance Metrics",
      content: "Key indicators used to evaluate and compare different CPU scheduling approaches, including metrics like waiting time, turnaround time, and CPU utilization.",
      formulas: [
        {
          name: "Average Waiting Time",
          formula: "AWT = Σ(Waiting Time) / Number of Processes",
          explanation: "Calculates the average time processes spend waiting in the ready queue. Lower average waiting time is desirable for efficient scheduling."
        },
        {
          name: "Average Turnaround Time",
          formula: "ATAT = Σ(Turnaround Time) / Number of Processes",
          explanation: "The average time from the arrival of processes to their completion. Minimizing turnaround time improves system responsiveness."
        }
      ]
    },
    {
      title: "Process Scheduling Criteria",
      content: "Understanding the criteria used to evaluate the effectiveness of scheduling algorithms, such as fairness, system throughput, and response time.",
      formulas: [
        {
          name: "Fairness Index",
          formula: "Fairness = Σ(Waiting Time per Process) / Σ(Waiting Time for Ideal Schedule)",
          explanation: "Measures how fairly CPU time is distributed among processes. A fairness index closer to 1 indicates better fairness."
        },
        {
          name: "Throughput",
          formula: "Throughput = Number of Processes Completed / Total Time",
          explanation: "A higher throughput means that more processes are completed in a given time period, maximizing system efficiency."
        }
      ]
    }
  ],

  theorems: [
    {
      name: "Scheduling Algorithm Optimality Theorem",
      statement: "No single scheduling algorithm provides optimal performance for all scenarios.",
      explanation: "Different workloads and system requirements necessitate different scheduling strategies. The choice of algorithm depends on factors such as the process arrival time, burst time, and priority."
    },
    {
      name: "Response Time Minimization Theorem",
      statement: "Scheduling should minimize average response time while maintaining fair resource allocation.",
      explanation: "Balances system efficiency and process fairness. Algorithms like Shortest Job Next (SJN) minimize average response time, but may result in unfair allocation to longer processes."
    },
    {
      name: "Starvation Theorem",
      statement: "A process may suffer starvation if it is perpetually preempted by higher-priority processes.",
      explanation: "Certain algorithms, like Shortest Job First (SJF), can lead to starvation for long or low-priority processes. Strategies like Round Robin can mitigate starvation."
    }
  ],

  gateQuestions: [
    {
      year: 2022,
      question: "Compare and analyze Round Robin and Shortest Job First (SJF) scheduling algorithms.",
      solution: {
        steps: [
          "Round Robin: Time-slice based, preemptive, suitable for time-sharing systems.",
          "SJF: Minimizes average waiting time but is non-preemptive and may cause starvation for long processes.",
          "Round Robin prevents process starvation by ensuring that each process gets an equal share of CPU time.",
          "SJF may cause long processes to wait indefinitely if short processes keep arriving."
        ],
        answer: "Choice of algorithm depends on system priorities, with Round Robin favored for fair time-sharing and SJF for minimizing waiting time in batch systems."
      }
    },
    {
      year: 2021,
      question: "Explain the multilevel feedback queue scheduling approach and its implementation.",
      solution: {
        steps: [
          "Multiple priority queues with different time quantum, each designed for different process behaviors.",
          "Processes move between queues based on behavior (e.g., interactive processes move to higher priority queues).",
          "Balances I/O-bound processes with CPU-bound processes by adjusting their priority based on execution patterns.",
          "The algorithm adapts to changing process needs, ensuring efficient CPU allocation."
        ],
        answer: "Multilevel feedback queues dynamically adjust priorities, providing a flexible scheduling strategy that optimizes CPU time distribution."
      }
    },
    {
      year: 2020,
      question: "Discuss the impact of context switching on CPU scheduling performance.",
      solution: {
        steps: [
          "Define context switching: The process of saving and loading the state of processes when switching between them.",
          "Context switch overhead: Each context switch introduces delays due to saving and restoring process states.",
          "Overhead considerations: High context switch frequency can reduce system efficiency, especially in high-load scenarios.",
          "Optimizing context switches: Minimizing frequent switching or using efficient data structures can reduce overhead."
        ],
        answer: "Context switching impacts performance by introducing overhead, especially in systems with high process switching frequency."
      }
    }
  ],

  commonMistakes: [
    {
      mistake: "Assuming all processes have equal priority",
      correction: "Implement priority-based scheduling to handle varied process requirements. Consider real-time, interactive, and batch process priorities."
    },
    {
      mistake: "Overlooking context switch overhead",
      correction: "Consider the computational cost of frequent process switching. Reduce context switch frequency where possible to enhance performance."
    },
    {
      mistake: "Ignoring process starvation",
      correction: "Ensure that low-priority or long-running processes are not indefinitely delayed, using techniques like aging in priority-based scheduling algorithms."
    }
  ]
};
